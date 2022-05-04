import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { TSASMLexer } from './src/lexer/grammar/TSASMLexer';
import { ExpressionStatementContext, TSASMParser, VariableDeclarationContext } from './src/parser/grammar/TSASMParser';
import { TSASMParserVisitor } from './src/parser/grammar/TSASMParserVisitor'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { TSASMParserListener } from './src/parser/grammar/TSASMParserListener';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

// TODO: read https://tomassetti.me/antlr-mega-tutorial/
// TODO: may buy https://tomassetti.me/antlr-course-2-edition/ 
class CountFunctionsVisitor extends AbstractParseTreeVisitor<number> implements TSASMParserVisitor<number> {

  defaultResult() {
    return 0
  }

  aggregateResult(aggregate: number, nextResult: number) {
    return aggregate + nextResult
  }

  visitVariableDeclaration(ctx: VariableDeclarationContext) {
    console.log('visitVariableDeclaration', ctx.text)
    return 1;
  }
}

// TODO: use a global asm instance and create a code call stack
class ParserListener implements TSASMParserListener {

  enterVariableDeclaration(ctx: VariableDeclarationContext) {
    console.log(`Var decl start line number ${ctx._start.line}`)
    // ...
  }

  enterExpressionStatement(ctx: ExpressionStatementContext) {
    console.log('wow!', ctx.expressionSequence().singleExpression()[0])
  }

  // other enterX functions...
}


// https://www.ecma-international.org/wp-content/uploads/ECMA-262_5th_edition_december_2009.pdf
export const compile = (source: string) => {

    // https://github.com/tunnelvisionlabs/antlr4ts
    let inputStream = CharStreams.fromString(source);
    let lexer = new TSASMLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new TSASMParser(tokenStream);
    let tree = parser.program();

    // https://github.com/antlr/antlr4/blob/master/doc/listeners.md
    const countFunctionsVisitor = new CountFunctionsVisitor()
    const varDeclCount = countFunctionsVisitor.visit(tree)

    console.log('Parse tree decls:', varDeclCount);

    const listener = new ParserListener();
    ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, tree)
}

compile('1 + 1 * 2');