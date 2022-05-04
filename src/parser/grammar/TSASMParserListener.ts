// Generated from ./grammar/TSASMParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ParenthesizedPrimTypeContext } from "./TSASMParser";
import { PredefinedPrimTypeContext } from "./TSASMParser";
import { ReferencePrimTypeContext } from "./TSASMParser";
import { ObjectPrimTypeContext } from "./TSASMParser";
import { ArrayPrimTypeContext } from "./TSASMParser";
import { TuplePrimTypeContext } from "./TSASMParser";
import { QueryPrimTypeContext } from "./TSASMParser";
import { RedefinitionOfTypeContext } from "./TSASMParser";
import { WhileStatementContext } from "./TSASMParser";
import { ForStatementContext } from "./TSASMParser";
import { ArrowFunctionExpressionContext } from "./TSASMParser";
import { MemberIndexExpressionContext } from "./TSASMParser";
import { MemberDotExpressionContext } from "./TSASMParser";
import { ArgumentsExpressionContext } from "./TSASMParser";
import { PostIncrementExpressionContext } from "./TSASMParser";
import { PostDecreaseExpressionContext } from "./TSASMParser";
import { DeleteExpressionContext } from "./TSASMParser";
import { VoidExpressionContext } from "./TSASMParser";
import { TypeofExpressionContext } from "./TSASMParser";
import { PreIncrementExpressionContext } from "./TSASMParser";
import { PreDecreaseExpressionContext } from "./TSASMParser";
import { UnaryPlusExpressionContext } from "./TSASMParser";
import { UnaryMinusExpressionContext } from "./TSASMParser";
import { BitNotExpressionContext } from "./TSASMParser";
import { NotExpressionContext } from "./TSASMParser";
import { MultiplicativeExpressionContext } from "./TSASMParser";
import { AdditiveExpressionContext } from "./TSASMParser";
import { BitShiftExpressionContext } from "./TSASMParser";
import { RelationalExpressionContext } from "./TSASMParser";
import { EqualityExpressionContext } from "./TSASMParser";
import { BitAndExpressionContext } from "./TSASMParser";
import { BitXOrExpressionContext } from "./TSASMParser";
import { BitOrExpressionContext } from "./TSASMParser";
import { LogicalAndExpressionContext } from "./TSASMParser";
import { LogicalOrExpressionContext } from "./TSASMParser";
import { TernaryExpressionContext } from "./TSASMParser";
import { AssignmentExpressionContext } from "./TSASMParser";
import { AssignmentOperatorExpressionContext } from "./TSASMParser";
import { IdentifierExpressionContext } from "./TSASMParser";
import { LiteralExpressionContext } from "./TSASMParser";
import { ArrayLiteralExpressionContext } from "./TSASMParser";
import { ObjectLiteralExpressionContext } from "./TSASMParser";
import { ParenthesizedExpressionContext } from "./TSASMParser";
import { GenericTypesContext } from "./TSASMParser";
import { CastAsExpressionContext } from "./TSASMParser";
import { PropertyExpressionAssignmentContext } from "./TSASMParser";
import { ComputedPropertyExpressionAssignmentContext } from "./TSASMParser";
import { PropertyShorthandContext } from "./TSASMParser";
import { UnionContext } from "./TSASMParser";
import { IntersectionContext } from "./TSASMParser";
import { PrimaryContext } from "./TSASMParser";
import { InitializerContext } from "./TSASMParser";
import { BindingPatternContext } from "./TSASMParser";
import { TypeParametersContext } from "./TSASMParser";
import { TypeParameterListContext } from "./TSASMParser";
import { TypeParameterContext } from "./TSASMParser";
import { ConstraintContext } from "./TSASMParser";
import { TypeArgumentsContext } from "./TSASMParser";
import { TypeArgumentListContext } from "./TSASMParser";
import { TypeArgumentContext } from "./TSASMParser";
import { Type_Context } from "./TSASMParser";
import { UnionOrIntersectionOrPrimaryTypeContext } from "./TSASMParser";
import { PrimaryTypeContext } from "./TSASMParser";
import { PredefinedTypeContext } from "./TSASMParser";
import { TypeReferenceContext } from "./TSASMParser";
import { NestedTypeGenericContext } from "./TSASMParser";
import { TypeGenericContext } from "./TSASMParser";
import { TypeIncludeGenericContext } from "./TSASMParser";
import { TypeNameContext } from "./TSASMParser";
import { ObjectTypeContext } from "./TSASMParser";
import { TypeBodyContext } from "./TSASMParser";
import { TypeMemberListContext } from "./TSASMParser";
import { TypeMemberContext } from "./TSASMParser";
import { ArrayTypeContext } from "./TSASMParser";
import { TupleTypeContext } from "./TSASMParser";
import { TupleElementTypesContext } from "./TSASMParser";
import { FunctionTypeContext } from "./TSASMParser";
import { TypeQueryContext } from "./TSASMParser";
import { TypeQueryExpressionContext } from "./TSASMParser";
import { PropertySignatureContext } from "./TSASMParser";
import { TypeAnnotationContext } from "./TSASMParser";
import { CallSignatureContext } from "./TSASMParser";
import { ParameterListContext } from "./TSASMParser";
import { RequiredParameterListContext } from "./TSASMParser";
import { ParameterContext } from "./TSASMParser";
import { OptionalParameterContext } from "./TSASMParser";
import { RequiredParameterContext } from "./TSASMParser";
import { IdentifierOrPatternContext } from "./TSASMParser";
import { IndexSignatureContext } from "./TSASMParser";
import { TypeAliasDeclarationContext } from "./TSASMParser";
import { InterfaceDeclarationContext } from "./TSASMParser";
import { InterfaceExtendsClauseContext } from "./TSASMParser";
import { ClassOrInterfaceTypeListContext } from "./TSASMParser";
import { EnumDeclarationContext } from "./TSASMParser";
import { EnumBodyContext } from "./TSASMParser";
import { EnumMemberListContext } from "./TSASMParser";
import { EnumMemberContext } from "./TSASMParser";
import { NamespaceNameContext } from "./TSASMParser";
import { ImportAliasDeclarationContext } from "./TSASMParser";
import { ProgramContext } from "./TSASMParser";
import { SourceElementContext } from "./TSASMParser";
import { StatementContext } from "./TSASMParser";
import { BlockContext } from "./TSASMParser";
import { StatementListContext } from "./TSASMParser";
import { ImportStatementContext } from "./TSASMParser";
import { FromBlockContext } from "./TSASMParser";
import { MultipleImportStatementContext } from "./TSASMParser";
import { ExportStatementContext } from "./TSASMParser";
import { VariableStatementContext } from "./TSASMParser";
import { VariableDeclarationListContext } from "./TSASMParser";
import { VariableDeclarationContext } from "./TSASMParser";
import { EmptyStatement_Context } from "./TSASMParser";
import { ExpressionStatementContext } from "./TSASMParser";
import { IfStatementContext } from "./TSASMParser";
import { IterationStatementContext } from "./TSASMParser";
import { VarModifierContext } from "./TSASMParser";
import { ContinueStatementContext } from "./TSASMParser";
import { BreakStatementContext } from "./TSASMParser";
import { ReturnStatementContext } from "./TSASMParser";
import { SwitchStatementContext } from "./TSASMParser";
import { CaseBlockContext } from "./TSASMParser";
import { CaseClausesContext } from "./TSASMParser";
import { CaseClauseContext } from "./TSASMParser";
import { DefaultClauseContext } from "./TSASMParser";
import { ThrowStatementContext } from "./TSASMParser";
import { TryStatementContext } from "./TSASMParser";
import { CatchProductionContext } from "./TSASMParser";
import { FinallyProductionContext } from "./TSASMParser";
import { DebuggerStatementContext } from "./TSASMParser";
import { IndexMemberDeclarationContext } from "./TSASMParser";
import { FormalParameterListContext } from "./TSASMParser";
import { FormalParameterArgContext } from "./TSASMParser";
import { FunctionBodyContext } from "./TSASMParser";
import { SourceElementsContext } from "./TSASMParser";
import { ArrayLiteralContext } from "./TSASMParser";
import { ElementListContext } from "./TSASMParser";
import { ArrayElementContext } from "./TSASMParser";
import { ObjectLiteralContext } from "./TSASMParser";
import { PropertyAssignmentContext } from "./TSASMParser";
import { PropertyNameContext } from "./TSASMParser";
import { ArgumentsContext } from "./TSASMParser";
import { ArgumentListContext } from "./TSASMParser";
import { ArgumentContext } from "./TSASMParser";
import { ExpressionSequenceContext } from "./TSASMParser";
import { SingleExpressionContext } from "./TSASMParser";
import { AsExpressionContext } from "./TSASMParser";
import { ArrowFunctionDeclarationContext } from "./TSASMParser";
import { ArrowFunctionParametersContext } from "./TSASMParser";
import { ArrowFunctionBodyContext } from "./TSASMParser";
import { AssignmentOperatorContext } from "./TSASMParser";
import { LiteralContext } from "./TSASMParser";
import { NumericLiteralContext } from "./TSASMParser";
import { IdentifierNameContext } from "./TSASMParser";
import { IdentifierOrKeyWordContext } from "./TSASMParser";
import { ReservedWordContext } from "./TSASMParser";
import { KeywordContext } from "./TSASMParser";
import { EosContext } from "./TSASMParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TSASMParser`.
 */
export interface TSASMParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `ParenthesizedPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedPrimType?: (ctx: ParenthesizedPrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesizedPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedPrimType?: (ctx: ParenthesizedPrimTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `PredefinedPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterPredefinedPrimType?: (ctx: PredefinedPrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `PredefinedPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitPredefinedPrimType?: (ctx: PredefinedPrimTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `ReferencePrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterReferencePrimType?: (ctx: ReferencePrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `ReferencePrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitReferencePrimType?: (ctx: ReferencePrimTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `ObjectPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterObjectPrimType?: (ctx: ObjectPrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `ObjectPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitObjectPrimType?: (ctx: ObjectPrimTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterArrayPrimType?: (ctx: ArrayPrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitArrayPrimType?: (ctx: ArrayPrimTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `TuplePrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterTuplePrimType?: (ctx: TuplePrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `TuplePrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitTuplePrimType?: (ctx: TuplePrimTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `QueryPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterQueryPrimType?: (ctx: QueryPrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `QueryPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitQueryPrimType?: (ctx: QueryPrimTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `RedefinitionOfType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterRedefinitionOfType?: (ctx: RedefinitionOfTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `RedefinitionOfType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitRedefinitionOfType?: (ctx: RedefinitionOfTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `WhileStatement`
	 * labeled alternative in `TSASMParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `WhileStatement`
	 * labeled alternative in `TSASMParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ForStatement`
	 * labeled alternative in `TSASMParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ForStatement`
	 * labeled alternative in `TSASMParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrowFunctionExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArrowFunctionExpression?: (ctx: ArrowFunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrowFunctionExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArrowFunctionExpression?: (ctx: ArrowFunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MemberIndexExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberIndexExpression?: (ctx: MemberIndexExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberIndexExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberIndexExpression?: (ctx: MemberIndexExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMemberDotExpression?: (ctx: MemberDotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMemberDotExpression?: (ctx: MemberDotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArgumentsExpression?: (ctx: ArgumentsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArgumentsExpression?: (ctx: ArgumentsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `DeleteExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterDeleteExpression?: (ctx: DeleteExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `DeleteExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitDeleteExpression?: (ctx: DeleteExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `VoidExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterVoidExpression?: (ctx: VoidExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `VoidExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitVoidExpression?: (ctx: VoidExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeofExpression?: (ctx: TypeofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeofExpression?: (ctx: TypeofExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitNotExpression?: (ctx: BitNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitNotExpression?: (ctx: BitNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NotExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NotExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitAndExpression?: (ctx: BitAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitAndExpression?: (ctx: BitAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitXOrExpression?: (ctx: BitXOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitXOrExpression?: (ctx: BitXOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitOrExpression?: (ctx: BitOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitOrExpression?: (ctx: BitOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayLiteralExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayLiteralExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ObjectLiteralExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ObjectLiteralExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `GenericTypes`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterGenericTypes?: (ctx: GenericTypesContext) => void;
	/**
	 * Exit a parse tree produced by the `GenericTypes`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitGenericTypes?: (ctx: GenericTypesContext) => void;

	/**
	 * Enter a parse tree produced by the `CastAsExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterCastAsExpression?: (ctx: CastAsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CastAsExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitCastAsExpression?: (ctx: CastAsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PropertyExpressionAssignment`
	 * labeled alternative in `TSASMParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyExpressionAssignment?: (ctx: PropertyExpressionAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertyExpressionAssignment`
	 * labeled alternative in `TSASMParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyExpressionAssignment?: (ctx: PropertyExpressionAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `ComputedPropertyExpressionAssignment`
	 * labeled alternative in `TSASMParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterComputedPropertyExpressionAssignment?: (ctx: ComputedPropertyExpressionAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `ComputedPropertyExpressionAssignment`
	 * labeled alternative in `TSASMParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitComputedPropertyExpressionAssignment?: (ctx: ComputedPropertyExpressionAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by the `PropertyShorthand`
	 * labeled alternative in `TSASMParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyShorthand?: (ctx: PropertyShorthandContext) => void;
	/**
	 * Exit a parse tree produced by the `PropertyShorthand`
	 * labeled alternative in `TSASMParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyShorthand?: (ctx: PropertyShorthandContext) => void;

	/**
	 * Enter a parse tree produced by the `Union`
	 * labeled alternative in `TSASMParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 */
	enterUnion?: (ctx: UnionContext) => void;
	/**
	 * Exit a parse tree produced by the `Union`
	 * labeled alternative in `TSASMParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 */
	exitUnion?: (ctx: UnionContext) => void;

	/**
	 * Enter a parse tree produced by the `Intersection`
	 * labeled alternative in `TSASMParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 */
	enterIntersection?: (ctx: IntersectionContext) => void;
	/**
	 * Exit a parse tree produced by the `Intersection`
	 * labeled alternative in `TSASMParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 */
	exitIntersection?: (ctx: IntersectionContext) => void;

	/**
	 * Enter a parse tree produced by the `Primary`
	 * labeled alternative in `TSASMParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by the `Primary`
	 * labeled alternative in `TSASMParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.initializer`.
	 * @param ctx the parse tree
	 */
	enterInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.initializer`.
	 * @param ctx the parse tree
	 */
	exitInitializer?: (ctx: InitializerContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.bindingPattern`.
	 * @param ctx the parse tree
	 */
	enterBindingPattern?: (ctx: BindingPatternContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.bindingPattern`.
	 * @param ctx the parse tree
	 */
	exitBindingPattern?: (ctx: BindingPatternContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeParameterList`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterList?: (ctx: TypeParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeParameterList`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterList?: (ctx: TypeParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.constraint`.
	 * @param ctx the parse tree
	 */
	enterConstraint?: (ctx: ConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.constraint`.
	 * @param ctx the parse tree
	 */
	exitConstraint?: (ctx: ConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeArgumentList`.
	 * @param ctx the parse tree
	 */
	enterTypeArgumentList?: (ctx: TypeArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeArgumentList`.
	 * @param ctx the parse tree
	 */
	exitTypeArgumentList?: (ctx: TypeArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	enterTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	exitTypeArgument?: (ctx: TypeArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.type_`.
	 * @param ctx the parse tree
	 */
	enterType_?: (ctx: Type_Context) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.type_`.
	 * @param ctx the parse tree
	 */
	exitType_?: (ctx: Type_Context) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 */
	enterUnionOrIntersectionOrPrimaryType?: (ctx: UnionOrIntersectionOrPrimaryTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 */
	exitUnionOrIntersectionOrPrimaryType?: (ctx: UnionOrIntersectionOrPrimaryTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterPrimaryType?: (ctx: PrimaryTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitPrimaryType?: (ctx: PrimaryTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.predefinedType`.
	 * @param ctx the parse tree
	 */
	enterPredefinedType?: (ctx: PredefinedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.predefinedType`.
	 * @param ctx the parse tree
	 */
	exitPredefinedType?: (ctx: PredefinedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeReference`.
	 * @param ctx the parse tree
	 */
	enterTypeReference?: (ctx: TypeReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeReference`.
	 * @param ctx the parse tree
	 */
	exitTypeReference?: (ctx: TypeReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.nestedTypeGeneric`.
	 * @param ctx the parse tree
	 */
	enterNestedTypeGeneric?: (ctx: NestedTypeGenericContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.nestedTypeGeneric`.
	 * @param ctx the parse tree
	 */
	exitNestedTypeGeneric?: (ctx: NestedTypeGenericContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeGeneric`.
	 * @param ctx the parse tree
	 */
	enterTypeGeneric?: (ctx: TypeGenericContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeGeneric`.
	 * @param ctx the parse tree
	 */
	exitTypeGeneric?: (ctx: TypeGenericContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeIncludeGeneric`.
	 * @param ctx the parse tree
	 */
	enterTypeIncludeGeneric?: (ctx: TypeIncludeGenericContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeIncludeGeneric`.
	 * @param ctx the parse tree
	 */
	exitTypeIncludeGeneric?: (ctx: TypeIncludeGenericContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.objectType`.
	 * @param ctx the parse tree
	 */
	enterObjectType?: (ctx: ObjectTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.objectType`.
	 * @param ctx the parse tree
	 */
	exitObjectType?: (ctx: ObjectTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeBody`.
	 * @param ctx the parse tree
	 */
	enterTypeBody?: (ctx: TypeBodyContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeBody`.
	 * @param ctx the parse tree
	 */
	exitTypeBody?: (ctx: TypeBodyContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeMemberList`.
	 * @param ctx the parse tree
	 */
	enterTypeMemberList?: (ctx: TypeMemberListContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeMemberList`.
	 * @param ctx the parse tree
	 */
	exitTypeMemberList?: (ctx: TypeMemberListContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeMember`.
	 * @param ctx the parse tree
	 */
	enterTypeMember?: (ctx: TypeMemberContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeMember`.
	 * @param ctx the parse tree
	 */
	exitTypeMember?: (ctx: TypeMemberContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.tupleType`.
	 * @param ctx the parse tree
	 */
	enterTupleType?: (ctx: TupleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.tupleType`.
	 * @param ctx the parse tree
	 */
	exitTupleType?: (ctx: TupleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.tupleElementTypes`.
	 * @param ctx the parse tree
	 */
	enterTupleElementTypes?: (ctx: TupleElementTypesContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.tupleElementTypes`.
	 * @param ctx the parse tree
	 */
	exitTupleElementTypes?: (ctx: TupleElementTypesContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.functionType`.
	 * @param ctx the parse tree
	 */
	enterFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.functionType`.
	 * @param ctx the parse tree
	 */
	exitFunctionType?: (ctx: FunctionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeQuery`.
	 * @param ctx the parse tree
	 */
	enterTypeQuery?: (ctx: TypeQueryContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeQuery`.
	 * @param ctx the parse tree
	 */
	exitTypeQuery?: (ctx: TypeQueryContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeQueryExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeQueryExpression?: (ctx: TypeQueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeQueryExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeQueryExpression?: (ctx: TypeQueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.propertySignature`.
	 * @param ctx the parse tree
	 */
	enterPropertySignature?: (ctx: PropertySignatureContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.propertySignature`.
	 * @param ctx the parse tree
	 */
	exitPropertySignature?: (ctx: PropertySignatureContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeAnnotation`.
	 * @param ctx the parse tree
	 */
	enterTypeAnnotation?: (ctx: TypeAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeAnnotation`.
	 * @param ctx the parse tree
	 */
	exitTypeAnnotation?: (ctx: TypeAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.callSignature`.
	 * @param ctx the parse tree
	 */
	enterCallSignature?: (ctx: CallSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.callSignature`.
	 * @param ctx the parse tree
	 */
	exitCallSignature?: (ctx: CallSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.requiredParameterList`.
	 * @param ctx the parse tree
	 */
	enterRequiredParameterList?: (ctx: RequiredParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.requiredParameterList`.
	 * @param ctx the parse tree
	 */
	exitRequiredParameterList?: (ctx: RequiredParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.optionalParameter`.
	 * @param ctx the parse tree
	 */
	enterOptionalParameter?: (ctx: OptionalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.optionalParameter`.
	 * @param ctx the parse tree
	 */
	exitOptionalParameter?: (ctx: OptionalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.requiredParameter`.
	 * @param ctx the parse tree
	 */
	enterRequiredParameter?: (ctx: RequiredParameterContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.requiredParameter`.
	 * @param ctx the parse tree
	 */
	exitRequiredParameter?: (ctx: RequiredParameterContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.identifierOrPattern`.
	 * @param ctx the parse tree
	 */
	enterIdentifierOrPattern?: (ctx: IdentifierOrPatternContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.identifierOrPattern`.
	 * @param ctx the parse tree
	 */
	exitIdentifierOrPattern?: (ctx: IdentifierOrPatternContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.indexSignature`.
	 * @param ctx the parse tree
	 */
	enterIndexSignature?: (ctx: IndexSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.indexSignature`.
	 * @param ctx the parse tree
	 */
	exitIndexSignature?: (ctx: IndexSignatureContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.typeAliasDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeAliasDeclaration?: (ctx: TypeAliasDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.typeAliasDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeAliasDeclaration?: (ctx: TypeAliasDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.interfaceExtendsClause`.
	 * @param ctx the parse tree
	 */
	enterInterfaceExtendsClause?: (ctx: InterfaceExtendsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.interfaceExtendsClause`.
	 * @param ctx the parse tree
	 */
	exitInterfaceExtendsClause?: (ctx: InterfaceExtendsClauseContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.classOrInterfaceTypeList`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceTypeList?: (ctx: ClassOrInterfaceTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.classOrInterfaceTypeList`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceTypeList?: (ctx: ClassOrInterfaceTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.enumBody`.
	 * @param ctx the parse tree
	 */
	enterEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.enumBody`.
	 * @param ctx the parse tree
	 */
	exitEnumBody?: (ctx: EnumBodyContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.enumMemberList`.
	 * @param ctx the parse tree
	 */
	enterEnumMemberList?: (ctx: EnumMemberListContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.enumMemberList`.
	 * @param ctx the parse tree
	 */
	exitEnumMemberList?: (ctx: EnumMemberListContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.enumMember`.
	 * @param ctx the parse tree
	 */
	enterEnumMember?: (ctx: EnumMemberContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.enumMember`.
	 * @param ctx the parse tree
	 */
	exitEnumMember?: (ctx: EnumMemberContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.namespaceName`.
	 * @param ctx the parse tree
	 */
	enterNamespaceName?: (ctx: NamespaceNameContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.namespaceName`.
	 * @param ctx the parse tree
	 */
	exitNamespaceName?: (ctx: NamespaceNameContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.importAliasDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportAliasDeclaration?: (ctx: ImportAliasDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.importAliasDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportAliasDeclaration?: (ctx: ImportAliasDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.sourceElement`.
	 * @param ctx the parse tree
	 */
	enterSourceElement?: (ctx: SourceElementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.sourceElement`.
	 * @param ctx the parse tree
	 */
	exitSourceElement?: (ctx: SourceElementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.fromBlock`.
	 * @param ctx the parse tree
	 */
	enterFromBlock?: (ctx: FromBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.fromBlock`.
	 * @param ctx the parse tree
	 */
	exitFromBlock?: (ctx: FromBlockContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.multipleImportStatement`.
	 * @param ctx the parse tree
	 */
	enterMultipleImportStatement?: (ctx: MultipleImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.multipleImportStatement`.
	 * @param ctx the parse tree
	 */
	exitMultipleImportStatement?: (ctx: MultipleImportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.exportStatement`.
	 * @param ctx the parse tree
	 */
	enterExportStatement?: (ctx: ExportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.exportStatement`.
	 * @param ctx the parse tree
	 */
	exitExportStatement?: (ctx: ExportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.variableStatement`.
	 * @param ctx the parse tree
	 */
	enterVariableStatement?: (ctx: VariableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.variableStatement`.
	 * @param ctx the parse tree
	 */
	exitVariableStatement?: (ctx: VariableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.emptyStatement_`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement_?: (ctx: EmptyStatement_Context) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.emptyStatement_`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement_?: (ctx: EmptyStatement_Context) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterIterationStatement?: (ctx: IterationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitIterationStatement?: (ctx: IterationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.varModifier`.
	 * @param ctx the parse tree
	 */
	enterVarModifier?: (ctx: VarModifierContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.varModifier`.
	 * @param ctx the parse tree
	 */
	exitVarModifier?: (ctx: VarModifierContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.caseBlock`.
	 * @param ctx the parse tree
	 */
	enterCaseBlock?: (ctx: CaseBlockContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.caseBlock`.
	 * @param ctx the parse tree
	 */
	exitCaseBlock?: (ctx: CaseBlockContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.caseClauses`.
	 * @param ctx the parse tree
	 */
	enterCaseClauses?: (ctx: CaseClausesContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.caseClauses`.
	 * @param ctx the parse tree
	 */
	exitCaseClauses?: (ctx: CaseClausesContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.caseClause`.
	 * @param ctx the parse tree
	 */
	enterCaseClause?: (ctx: CaseClauseContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.caseClause`.
	 * @param ctx the parse tree
	 */
	exitCaseClause?: (ctx: CaseClauseContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.defaultClause`.
	 * @param ctx the parse tree
	 */
	enterDefaultClause?: (ctx: DefaultClauseContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.defaultClause`.
	 * @param ctx the parse tree
	 */
	exitDefaultClause?: (ctx: DefaultClauseContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	enterThrowStatement?: (ctx: ThrowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.throwStatement`.
	 * @param ctx the parse tree
	 */
	exitThrowStatement?: (ctx: ThrowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	enterTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	exitTryStatement?: (ctx: TryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.catchProduction`.
	 * @param ctx the parse tree
	 */
	enterCatchProduction?: (ctx: CatchProductionContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.catchProduction`.
	 * @param ctx the parse tree
	 */
	exitCatchProduction?: (ctx: CatchProductionContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.finallyProduction`.
	 * @param ctx the parse tree
	 */
	enterFinallyProduction?: (ctx: FinallyProductionContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.finallyProduction`.
	 * @param ctx the parse tree
	 */
	exitFinallyProduction?: (ctx: FinallyProductionContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.debuggerStatement`.
	 * @param ctx the parse tree
	 */
	enterDebuggerStatement?: (ctx: DebuggerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.debuggerStatement`.
	 * @param ctx the parse tree
	 */
	exitDebuggerStatement?: (ctx: DebuggerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.indexMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterIndexMemberDeclaration?: (ctx: IndexMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.indexMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitIndexMemberDeclaration?: (ctx: IndexMemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.formalParameterArg`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterArg?: (ctx: FormalParameterArgContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.formalParameterArg`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterArg?: (ctx: FormalParameterArgContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.sourceElements`.
	 * @param ctx the parse tree
	 */
	enterSourceElements?: (ctx: SourceElementsContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.sourceElements`.
	 * @param ctx the parse tree
	 */
	exitSourceElements?: (ctx: SourceElementsContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteral?: (ctx: ArrayLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.elementList`.
	 * @param ctx the parse tree
	 */
	enterElementList?: (ctx: ElementListContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.elementList`.
	 * @param ctx the parse tree
	 */
	exitElementList?: (ctx: ElementListContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.arrayElement`.
	 * @param ctx the parse tree
	 */
	enterArrayElement?: (ctx: ArrayElementContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.arrayElement`.
	 * @param ctx the parse tree
	 */
	exitArrayElement?: (ctx: ArrayElementContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.objectLiteral`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteral?: (ctx: ObjectLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.objectLiteral`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteral?: (ctx: ObjectLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyAssignment?: (ctx: PropertyAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyAssignment?: (ctx: PropertyAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.propertyName`.
	 * @param ctx the parse tree
	 */
	enterPropertyName?: (ctx: PropertyNameContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.propertyName`.
	 * @param ctx the parse tree
	 */
	exitPropertyName?: (ctx: PropertyNameContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	enterExpressionSequence?: (ctx: ExpressionSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	exitExpressionSequence?: (ctx: ExpressionSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterSingleExpression?: (ctx: SingleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitSingleExpression?: (ctx: SingleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.asExpression`.
	 * @param ctx the parse tree
	 */
	enterAsExpression?: (ctx: AsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.asExpression`.
	 * @param ctx the parse tree
	 */
	exitAsExpression?: (ctx: AsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.arrowFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterArrowFunctionDeclaration?: (ctx: ArrowFunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.arrowFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitArrowFunctionDeclaration?: (ctx: ArrowFunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.arrowFunctionParameters`.
	 * @param ctx the parse tree
	 */
	enterArrowFunctionParameters?: (ctx: ArrowFunctionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.arrowFunctionParameters`.
	 * @param ctx the parse tree
	 */
	exitArrowFunctionParameters?: (ctx: ArrowFunctionParametersContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.arrowFunctionBody`.
	 * @param ctx the parse tree
	 */
	enterArrowFunctionBody?: (ctx: ArrowFunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.arrowFunctionBody`.
	 * @param ctx the parse tree
	 */
	exitArrowFunctionBody?: (ctx: ArrowFunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.identifierName`.
	 * @param ctx the parse tree
	 */
	enterIdentifierName?: (ctx: IdentifierNameContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.identifierName`.
	 * @param ctx the parse tree
	 */
	exitIdentifierName?: (ctx: IdentifierNameContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.identifierOrKeyWord`.
	 * @param ctx the parse tree
	 */
	enterIdentifierOrKeyWord?: (ctx: IdentifierOrKeyWordContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.identifierOrKeyWord`.
	 * @param ctx the parse tree
	 */
	exitIdentifierOrKeyWord?: (ctx: IdentifierOrKeyWordContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	enterReservedWord?: (ctx: ReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.reservedWord`.
	 * @param ctx the parse tree
	 */
	exitReservedWord?: (ctx: ReservedWordContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;

	/**
	 * Enter a parse tree produced by `TSASMParser.eos`.
	 * @param ctx the parse tree
	 */
	enterEos?: (ctx: EosContext) => void;
	/**
	 * Exit a parse tree produced by `TSASMParser.eos`.
	 * @param ctx the parse tree
	 */
	exitEos?: (ctx: EosContext) => void;
}

