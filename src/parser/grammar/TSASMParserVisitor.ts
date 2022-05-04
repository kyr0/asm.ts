// Generated from ./grammar/TSASMParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TSASMParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TSASMParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `ParenthesizedPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedPrimType?: (ctx: ParenthesizedPrimTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `PredefinedPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredefinedPrimType?: (ctx: PredefinedPrimTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReferencePrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferencePrimType?: (ctx: ReferencePrimTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `ObjectPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectPrimType?: (ctx: ObjectPrimTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayPrimType?: (ctx: ArrayPrimTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `TuplePrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuplePrimType?: (ctx: TuplePrimTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `QueryPrimType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimType?: (ctx: QueryPrimTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `RedefinitionOfType`
	 * labeled alternative in `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRedefinitionOfType?: (ctx: RedefinitionOfTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `WhileStatement`
	 * labeled alternative in `TSASMParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ForStatement`
	 * labeled alternative in `TSASMParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrowFunctionExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrowFunctionExpression?: (ctx: ArrowFunctionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MemberIndexExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberIndexExpression?: (ctx: MemberIndexExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MemberDotExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDotExpression?: (ctx: MemberDotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArgumentsExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentsExpression?: (ctx: ArgumentsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `DeleteExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteExpression?: (ctx: DeleteExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `VoidExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVoidExpression?: (ctx: VoidExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeofExpression?: (ctx: TypeofExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitNotExpression?: (ctx: BitNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitShiftExpression?: (ctx: BitShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitAndExpression?: (ctx: BitAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitXOrExpression?: (ctx: BitXOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOrExpression?: (ctx: BitOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayLiteralExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteralExpression?: (ctx: ArrayLiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ObjectLiteralExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLiteralExpression?: (ctx: ObjectLiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `GenericTypes`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericTypes?: (ctx: GenericTypesContext) => Result;

	/**
	 * Visit a parse tree produced by the `CastAsExpression`
	 * labeled alternative in `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastAsExpression?: (ctx: CastAsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PropertyExpressionAssignment`
	 * labeled alternative in `TSASMParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyExpressionAssignment?: (ctx: PropertyExpressionAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `ComputedPropertyExpressionAssignment`
	 * labeled alternative in `TSASMParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComputedPropertyExpressionAssignment?: (ctx: ComputedPropertyExpressionAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `PropertyShorthand`
	 * labeled alternative in `TSASMParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyShorthand?: (ctx: PropertyShorthandContext) => Result;

	/**
	 * Visit a parse tree produced by the `Union`
	 * labeled alternative in `TSASMParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion?: (ctx: UnionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Intersection`
	 * labeled alternative in `TSASMParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntersection?: (ctx: IntersectionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Primary`
	 * labeled alternative in `TSASMParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer?: (ctx: InitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.bindingPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBindingPattern?: (ctx: BindingPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterList?: (ctx: TypeParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraint?: (ctx: ConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeArgumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentList?: (ctx: TypeArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgument?: (ctx: TypeArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.type_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_?: (ctx: Type_Context) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.unionOrIntersectionOrPrimaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionOrIntersectionOrPrimaryType?: (ctx: UnionOrIntersectionOrPrimaryTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.primaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryType?: (ctx: PrimaryTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.predefinedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredefinedType?: (ctx: PredefinedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeReference?: (ctx: TypeReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.nestedTypeGeneric`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNestedTypeGeneric?: (ctx: NestedTypeGenericContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeGeneric`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeGeneric?: (ctx: TypeGenericContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeIncludeGeneric`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeIncludeGeneric?: (ctx: TypeIncludeGenericContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.objectType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectType?: (ctx: ObjectTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBody?: (ctx: TypeBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeMemberList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeMemberList?: (ctx: TypeMemberListContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeMember?: (ctx: TypeMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.tupleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleType?: (ctx: TupleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.tupleElementTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleElementTypes?: (ctx: TupleElementTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.functionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionType?: (ctx: FunctionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeQuery?: (ctx: TypeQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeQueryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeQueryExpression?: (ctx: TypeQueryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.propertySignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertySignature?: (ctx: PropertySignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAnnotation?: (ctx: TypeAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.callSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallSignature?: (ctx: CallSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.requiredParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequiredParameterList?: (ctx: RequiredParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.optionalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalParameter?: (ctx: OptionalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.requiredParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequiredParameter?: (ctx: RequiredParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.identifierOrPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierOrPattern?: (ctx: IdentifierOrPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.indexSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexSignature?: (ctx: IndexSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.typeAliasDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAliasDeclaration?: (ctx: TypeAliasDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.interfaceExtendsClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceExtendsClause?: (ctx: InterfaceExtendsClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.classOrInterfaceTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceTypeList?: (ctx: ClassOrInterfaceTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.enumBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBody?: (ctx: EnumBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.enumMemberList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumMemberList?: (ctx: EnumMemberListContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.enumMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumMember?: (ctx: EnumMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.namespaceName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceName?: (ctx: NamespaceNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.importAliasDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportAliasDeclaration?: (ctx: ImportAliasDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.sourceElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceElement?: (ctx: SourceElementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.statementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementList?: (ctx: StatementListContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.fromBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromBlock?: (ctx: FromBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.multipleImportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultipleImportStatement?: (ctx: MultipleImportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.exportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportStatement?: (ctx: ExportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.variableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableStatement?: (ctx: VariableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.emptyStatement_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement_?: (ctx: EmptyStatement_Context) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.iterationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterationStatement?: (ctx: IterationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.varModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarModifier?: (ctx: VarModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.caseBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseBlock?: (ctx: CaseBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.caseClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseClauses?: (ctx: CaseClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.caseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseClause?: (ctx: CaseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.defaultClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultClause?: (ctx: DefaultClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.throwStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStatement?: (ctx: ThrowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.tryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.catchProduction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchProduction?: (ctx: CatchProductionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.finallyProduction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyProduction?: (ctx: FinallyProductionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.debuggerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDebuggerStatement?: (ctx: DebuggerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.indexMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexMemberDeclaration?: (ctx: IndexMemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.formalParameterArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterArg?: (ctx: FormalParameterArgContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.sourceElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceElements?: (ctx: SourceElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.arrayLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteral?: (ctx: ArrayLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.elementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementList?: (ctx: ElementListContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.arrayElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayElement?: (ctx: ArrayElementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.objectLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLiteral?: (ctx: ObjectLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyAssignment?: (ctx: PropertyAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.propertyName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyName?: (ctx: PropertyNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.expressionSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionSequence?: (ctx: ExpressionSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleExpression?: (ctx: SingleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.asExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsExpression?: (ctx: AsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.arrowFunctionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrowFunctionDeclaration?: (ctx: ArrowFunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.arrowFunctionParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrowFunctionParameters?: (ctx: ArrowFunctionParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.arrowFunctionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrowFunctionBody?: (ctx: ArrowFunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.numericLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.identifierName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierName?: (ctx: IdentifierNameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.identifierOrKeyWord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierOrKeyWord?: (ctx: IdentifierOrKeyWordContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.reservedWord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReservedWord?: (ctx: ReservedWordContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.keyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyword?: (ctx: KeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `TSASMParser.eos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEos?: (ctx: EosContext) => Result;
}

