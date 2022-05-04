// Generated from ./grammar/TSASMParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TSASMParserListener } from "./TSASMParserListener";
import { TSASMParserVisitor } from "./TSASMParserVisitor";
import { TSASMParserBase } from "../../TSASMParserBase";

export class TSASMParser extends TSASMParserBase {
	public static readonly MultiLineComment = 1;
	public static readonly SingleLineComment = 2;
	public static readonly RegularExpressionLiteral = 3;
	public static readonly OpenBracket = 4;
	public static readonly CloseBracket = 5;
	public static readonly OpenParen = 6;
	public static readonly CloseParen = 7;
	public static readonly OpenBrace = 8;
	public static readonly TemplateCloseBrace = 9;
	public static readonly CloseBrace = 10;
	public static readonly SemiColon = 11;
	public static readonly Comma = 12;
	public static readonly Assign = 13;
	public static readonly QuestionMark = 14;
	public static readonly Colon = 15;
	public static readonly Dot = 16;
	public static readonly PlusPlus = 17;
	public static readonly MinusMinus = 18;
	public static readonly Plus = 19;
	public static readonly Minus = 20;
	public static readonly BitNot = 21;
	public static readonly Not = 22;
	public static readonly Multiply = 23;
	public static readonly Divide = 24;
	public static readonly Modulus = 25;
	public static readonly RightShiftArithmetic = 26;
	public static readonly LeftShiftArithmetic = 27;
	public static readonly RightShiftLogical = 28;
	public static readonly LessThan = 29;
	public static readonly MoreThan = 30;
	public static readonly LessThanEquals = 31;
	public static readonly GreaterThanEquals = 32;
	public static readonly Equals_ = 33;
	public static readonly NotEquals = 34;
	public static readonly IdentityEquals = 35;
	public static readonly IdentityNotEquals = 36;
	public static readonly BitAnd = 37;
	public static readonly BitXOr = 38;
	public static readonly BitOr = 39;
	public static readonly And = 40;
	public static readonly Or = 41;
	public static readonly MultiplyAssign = 42;
	public static readonly DivideAssign = 43;
	public static readonly ModulusAssign = 44;
	public static readonly PlusAssign = 45;
	public static readonly MinusAssign = 46;
	public static readonly LeftShiftArithmeticAssign = 47;
	public static readonly RightShiftArithmeticAssign = 48;
	public static readonly RightShiftLogicalAssign = 49;
	public static readonly BitAndAssign = 50;
	public static readonly BitXorAssign = 51;
	public static readonly BitOrAssign = 52;
	public static readonly ARROW = 53;
	public static readonly NullLiteral = 54;
	public static readonly BooleanLiteral = 55;
	public static readonly DecimalLiteral = 56;
	public static readonly HexIntegerLiteral = 57;
	public static readonly OctalIntegerLiteral = 58;
	public static readonly OctalIntegerLiteral2 = 59;
	public static readonly BinaryIntegerLiteral = 60;
	public static readonly Break = 61;
	public static readonly Instanceof = 62;
	public static readonly Typeof = 63;
	public static readonly Case = 64;
	public static readonly Else = 65;
	public static readonly Catch = 66;
	public static readonly Finally = 67;
	public static readonly Return = 68;
	public static readonly Void = 69;
	public static readonly Continue = 70;
	public static readonly For = 71;
	public static readonly Switch = 72;
	public static readonly While = 73;
	public static readonly Debugger = 74;
	public static readonly Default = 75;
	public static readonly If = 76;
	public static readonly Throw = 77;
	public static readonly Delete = 78;
	public static readonly In = 79;
	public static readonly Try = 80;
	public static readonly As = 81;
	public static readonly From = 82;
	public static readonly Enum = 83;
	public static readonly Extends = 84;
	public static readonly Const = 85;
	public static readonly Export = 86;
	public static readonly Import = 87;
	public static readonly Implements = 88;
	public static readonly Let = 89;
	public static readonly Interface = 90;
	public static readonly Any = 91;
	public static readonly Number = 92;
	public static readonly Boolean = 93;
	public static readonly String = 94;
	public static readonly TypeAlias = 95;
	public static readonly Require = 96;
	public static readonly Module = 97;
	public static readonly Declare = 98;
	public static readonly Is = 99;
	public static readonly At = 100;
	public static readonly Identifier = 101;
	public static readonly StringLiteral = 102;
	public static readonly WhiteSpaces = 103;
	public static readonly LineTerminator = 104;
	public static readonly HtmlComment = 105;
	public static readonly CDataComment = 106;
	public static readonly UnexpectedCharacter = 107;
	public static readonly RULE_initializer = 0;
	public static readonly RULE_bindingPattern = 1;
	public static readonly RULE_typeParameters = 2;
	public static readonly RULE_typeParameterList = 3;
	public static readonly RULE_typeParameter = 4;
	public static readonly RULE_constraint = 5;
	public static readonly RULE_typeArguments = 6;
	public static readonly RULE_typeArgumentList = 7;
	public static readonly RULE_typeArgument = 8;
	public static readonly RULE_type_ = 9;
	public static readonly RULE_unionOrIntersectionOrPrimaryType = 10;
	public static readonly RULE_primaryType = 11;
	public static readonly RULE_predefinedType = 12;
	public static readonly RULE_typeReference = 13;
	public static readonly RULE_nestedTypeGeneric = 14;
	public static readonly RULE_typeGeneric = 15;
	public static readonly RULE_typeIncludeGeneric = 16;
	public static readonly RULE_typeName = 17;
	public static readonly RULE_objectType = 18;
	public static readonly RULE_typeBody = 19;
	public static readonly RULE_typeMemberList = 20;
	public static readonly RULE_typeMember = 21;
	public static readonly RULE_arrayType = 22;
	public static readonly RULE_tupleType = 23;
	public static readonly RULE_tupleElementTypes = 24;
	public static readonly RULE_functionType = 25;
	public static readonly RULE_typeQuery = 26;
	public static readonly RULE_typeQueryExpression = 27;
	public static readonly RULE_propertySignature = 28;
	public static readonly RULE_typeAnnotation = 29;
	public static readonly RULE_callSignature = 30;
	public static readonly RULE_parameterList = 31;
	public static readonly RULE_requiredParameterList = 32;
	public static readonly RULE_parameter = 33;
	public static readonly RULE_optionalParameter = 34;
	public static readonly RULE_requiredParameter = 35;
	public static readonly RULE_identifierOrPattern = 36;
	public static readonly RULE_indexSignature = 37;
	public static readonly RULE_typeAliasDeclaration = 38;
	public static readonly RULE_interfaceDeclaration = 39;
	public static readonly RULE_interfaceExtendsClause = 40;
	public static readonly RULE_classOrInterfaceTypeList = 41;
	public static readonly RULE_enumDeclaration = 42;
	public static readonly RULE_enumBody = 43;
	public static readonly RULE_enumMemberList = 44;
	public static readonly RULE_enumMember = 45;
	public static readonly RULE_namespaceName = 46;
	public static readonly RULE_importAliasDeclaration = 47;
	public static readonly RULE_program = 48;
	public static readonly RULE_sourceElement = 49;
	public static readonly RULE_statement = 50;
	public static readonly RULE_block = 51;
	public static readonly RULE_statementList = 52;
	public static readonly RULE_importStatement = 53;
	public static readonly RULE_fromBlock = 54;
	public static readonly RULE_multipleImportStatement = 55;
	public static readonly RULE_exportStatement = 56;
	public static readonly RULE_variableStatement = 57;
	public static readonly RULE_variableDeclarationList = 58;
	public static readonly RULE_variableDeclaration = 59;
	public static readonly RULE_emptyStatement_ = 60;
	public static readonly RULE_expressionStatement = 61;
	public static readonly RULE_ifStatement = 62;
	public static readonly RULE_iterationStatement = 63;
	public static readonly RULE_varModifier = 64;
	public static readonly RULE_continueStatement = 65;
	public static readonly RULE_breakStatement = 66;
	public static readonly RULE_returnStatement = 67;
	public static readonly RULE_switchStatement = 68;
	public static readonly RULE_caseBlock = 69;
	public static readonly RULE_caseClauses = 70;
	public static readonly RULE_caseClause = 71;
	public static readonly RULE_defaultClause = 72;
	public static readonly RULE_throwStatement = 73;
	public static readonly RULE_tryStatement = 74;
	public static readonly RULE_catchProduction = 75;
	public static readonly RULE_finallyProduction = 76;
	public static readonly RULE_debuggerStatement = 77;
	public static readonly RULE_indexMemberDeclaration = 78;
	public static readonly RULE_formalParameterList = 79;
	public static readonly RULE_formalParameterArg = 80;
	public static readonly RULE_functionBody = 81;
	public static readonly RULE_sourceElements = 82;
	public static readonly RULE_arrayLiteral = 83;
	public static readonly RULE_elementList = 84;
	public static readonly RULE_arrayElement = 85;
	public static readonly RULE_objectLiteral = 86;
	public static readonly RULE_propertyAssignment = 87;
	public static readonly RULE_propertyName = 88;
	public static readonly RULE_arguments = 89;
	public static readonly RULE_argumentList = 90;
	public static readonly RULE_argument = 91;
	public static readonly RULE_expressionSequence = 92;
	public static readonly RULE_singleExpression = 93;
	public static readonly RULE_asExpression = 94;
	public static readonly RULE_arrowFunctionDeclaration = 95;
	public static readonly RULE_arrowFunctionParameters = 96;
	public static readonly RULE_arrowFunctionBody = 97;
	public static readonly RULE_assignmentOperator = 98;
	public static readonly RULE_literal = 99;
	public static readonly RULE_numericLiteral = 100;
	public static readonly RULE_identifierName = 101;
	public static readonly RULE_identifierOrKeyWord = 102;
	public static readonly RULE_reservedWord = 103;
	public static readonly RULE_keyword = 104;
	public static readonly RULE_eos = 105;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"initializer", "bindingPattern", "typeParameters", "typeParameterList", 
		"typeParameter", "constraint", "typeArguments", "typeArgumentList", "typeArgument", 
		"type_", "unionOrIntersectionOrPrimaryType", "primaryType", "predefinedType", 
		"typeReference", "nestedTypeGeneric", "typeGeneric", "typeIncludeGeneric", 
		"typeName", "objectType", "typeBody", "typeMemberList", "typeMember", 
		"arrayType", "tupleType", "tupleElementTypes", "functionType", "typeQuery", 
		"typeQueryExpression", "propertySignature", "typeAnnotation", "callSignature", 
		"parameterList", "requiredParameterList", "parameter", "optionalParameter", 
		"requiredParameter", "identifierOrPattern", "indexSignature", "typeAliasDeclaration", 
		"interfaceDeclaration", "interfaceExtendsClause", "classOrInterfaceTypeList", 
		"enumDeclaration", "enumBody", "enumMemberList", "enumMember", "namespaceName", 
		"importAliasDeclaration", "program", "sourceElement", "statement", "block", 
		"statementList", "importStatement", "fromBlock", "multipleImportStatement", 
		"exportStatement", "variableStatement", "variableDeclarationList", "variableDeclaration", 
		"emptyStatement_", "expressionStatement", "ifStatement", "iterationStatement", 
		"varModifier", "continueStatement", "breakStatement", "returnStatement", 
		"switchStatement", "caseBlock", "caseClauses", "caseClause", "defaultClause", 
		"throwStatement", "tryStatement", "catchProduction", "finallyProduction", 
		"debuggerStatement", "indexMemberDeclaration", "formalParameterList", 
		"formalParameterArg", "functionBody", "sourceElements", "arrayLiteral", 
		"elementList", "arrayElement", "objectLiteral", "propertyAssignment", 
		"propertyName", "arguments", "argumentList", "argument", "expressionSequence", 
		"singleExpression", "asExpression", "arrowFunctionDeclaration", "arrowFunctionParameters", 
		"arrowFunctionBody", "assignmentOperator", "literal", "numericLiteral", 
		"identifierName", "identifierOrKeyWord", "reservedWord", "keyword", "eos",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'['", "']'", "'('", "')'", 
		"'{'", undefined, "'}'", "';'", "','", "'='", "'?'", "':'", "'.'", "'++'", 
		"'--'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", "'%'", "'>>'", "'<<'", 
		"'>>>'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'==='", "'!=='", 
		"'&'", "'^'", "'|'", "'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", 
		"'<<='", "'>>='", "'>>>='", "'&='", "'^='", "'|='", "'=>'", "'null'", 
		undefined, undefined, undefined, undefined, undefined, undefined, "'break'", 
		"'instanceof'", "'typeof'", "'case'", "'else'", "'catch'", "'finally'", 
		"'return'", "'void'", "'continue'", "'for'", "'switch'", "'while'", "'debugger'", 
		"'default'", "'if'", "'throw'", "'delete'", "'in'", "'try'", "'as'", "'from'", 
		"'enum'", "'extends'", "'const'", "'export'", "'import'", "'implements'", 
		"'let'", "'interface'", "'any'", "'number'", "'boolean'", "'string'", 
		"'type'", "'require'", "'module'", "'declare'", "'is'", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MultiLineComment", "SingleLineComment", "RegularExpressionLiteral", 
		"OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
		"TemplateCloseBrace", "CloseBrace", "SemiColon", "Comma", "Assign", "QuestionMark", 
		"Colon", "Dot", "PlusPlus", "MinusMinus", "Plus", "Minus", "BitNot", "Not", 
		"Multiply", "Divide", "Modulus", "RightShiftArithmetic", "LeftShiftArithmetic", 
		"RightShiftLogical", "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", 
		"Equals_", "NotEquals", "IdentityEquals", "IdentityNotEquals", "BitAnd", 
		"BitXOr", "BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
		"PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
		"RightShiftLogicalAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
		"ARROW", "NullLiteral", "BooleanLiteral", "DecimalLiteral", "HexIntegerLiteral", 
		"OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
		"Break", "Instanceof", "Typeof", "Case", "Else", "Catch", "Finally", "Return", 
		"Void", "Continue", "For", "Switch", "While", "Debugger", "Default", "If", 
		"Throw", "Delete", "In", "Try", "As", "From", "Enum", "Extends", "Const", 
		"Export", "Import", "Implements", "Let", "Interface", "Any", "Number", 
		"Boolean", "String", "TypeAlias", "Require", "Module", "Declare", "Is", 
		"At", "Identifier", "StringLiteral", "WhiteSpaces", "LineTerminator", 
		"HtmlComment", "CDataComment", "UnexpectedCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TSASMParser._LITERAL_NAMES, TSASMParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TSASMParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TSASMParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return TSASMParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TSASMParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TSASMParser._ATN, this);
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TSASMParser.RULE_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(TSASMParser.Assign);
			this.state = 213;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bindingPattern(): BindingPatternContext {
		let _localctx: BindingPatternContext = new BindingPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TSASMParser.RULE_bindingPattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.OpenBracket:
				{
				this.state = 215;
				this.arrayLiteral();
				}
				break;
			case TSASMParser.OpenBrace:
				{
				this.state = 216;
				this.objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TSASMParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(TSASMParser.LessThan);
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.LessThan || _la === TSASMParser.Identifier) {
				{
				this.state = 220;
				this.typeParameterList();
				}
			}

			this.state = 223;
			this.match(TSASMParser.MoreThan);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameterList(): TypeParameterListContext {
		let _localctx: TypeParameterListContext = new TypeParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TSASMParser.RULE_typeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.typeParameter();
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TSASMParser.Comma) {
				{
				{
				this.state = 226;
				this.match(TSASMParser.Comma);
				this.state = 227;
				this.typeParameter();
				}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TSASMParser.RULE_typeParameter);
		let _la: number;
		try {
			this.state = 238;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 233;
				this.match(TSASMParser.Identifier);
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TSASMParser.Extends) {
					{
					this.state = 234;
					this.constraint();
					}
				}

				}
				break;
			case TSASMParser.LessThan:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 237;
				this.typeParameters();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraint(): ConstraintContext {
		let _localctx: ConstraintContext = new ConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TSASMParser.RULE_constraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(TSASMParser.Extends);
			this.state = 241;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TSASMParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.match(TSASMParser.LessThan);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TSASMParser.OpenBracket) | (1 << TSASMParser.OpenParen) | (1 << TSASMParser.OpenBrace) | (1 << TSASMParser.LessThan))) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (TSASMParser.Typeof - 63)) | (1 << (TSASMParser.Void - 63)) | (1 << (TSASMParser.Any - 63)) | (1 << (TSASMParser.Number - 63)) | (1 << (TSASMParser.Boolean - 63)) | (1 << (TSASMParser.String - 63)))) !== 0) || _la === TSASMParser.Identifier || _la === TSASMParser.StringLiteral) {
				{
				this.state = 244;
				this.typeArgumentList();
				}
			}

			this.state = 247;
			this.match(TSASMParser.MoreThan);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentList(): TypeArgumentListContext {
		let _localctx: TypeArgumentListContext = new TypeArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TSASMParser.RULE_typeArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.typeArgument();
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TSASMParser.Comma) {
				{
				{
				this.state = 250;
				this.match(TSASMParser.Comma);
				this.state = 251;
				this.typeArgument();
				}
				}
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TSASMParser.RULE_typeArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 18, TSASMParser.RULE_type_);
		try {
			this.state = 263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 259;
				this.unionOrIntersectionOrPrimaryType(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 260;
				this.functionType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 261;
				this.typeGeneric();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 262;
				this.match(TSASMParser.StringLiteral);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public unionOrIntersectionOrPrimaryType(): UnionOrIntersectionOrPrimaryTypeContext;
	public unionOrIntersectionOrPrimaryType(_p: number): UnionOrIntersectionOrPrimaryTypeContext;
	// @RuleVersion(0)
	public unionOrIntersectionOrPrimaryType(_p?: number): UnionOrIntersectionOrPrimaryTypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: UnionOrIntersectionOrPrimaryTypeContext = new UnionOrIntersectionOrPrimaryTypeContext(this._ctx, _parentState);
		let _prevctx: UnionOrIntersectionOrPrimaryTypeContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, TSASMParser.RULE_unionOrIntersectionOrPrimaryType, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PrimaryContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 266;
			this.primaryType(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 276;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 274;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
					case 1:
						{
						_localctx = new UnionContext(new UnionOrIntersectionOrPrimaryTypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_unionOrIntersectionOrPrimaryType);
						this.state = 268;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 269;
						this.match(TSASMParser.BitOr);
						this.state = 270;
						this.unionOrIntersectionOrPrimaryType(4);
						}
						break;

					case 2:
						{
						_localctx = new IntersectionContext(new UnionOrIntersectionOrPrimaryTypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_unionOrIntersectionOrPrimaryType);
						this.state = 271;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 272;
						this.match(TSASMParser.BitAnd);
						this.state = 273;
						this.unionOrIntersectionOrPrimaryType(3);
						}
						break;
					}
					}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public primaryType(): PrimaryTypeContext;
	public primaryType(_p: number): PrimaryTypeContext;
	// @RuleVersion(0)
	public primaryType(_p?: number): PrimaryTypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrimaryTypeContext = new PrimaryTypeContext(this._ctx, _parentState);
		let _prevctx: PrimaryTypeContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, TSASMParser.RULE_primaryType, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				_localctx = new ParenthesizedPrimTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 280;
				this.match(TSASMParser.OpenParen);
				this.state = 281;
				this.type_();
				this.state = 282;
				this.match(TSASMParser.CloseParen);
				}
				break;

			case 2:
				{
				_localctx = new PredefinedPrimTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 284;
				this.predefinedType();
				}
				break;

			case 3:
				{
				_localctx = new ReferencePrimTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 285;
				this.typeReference();
				}
				break;

			case 4:
				{
				_localctx = new ObjectPrimTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 286;
				this.objectType();
				}
				break;

			case 5:
				{
				_localctx = new TuplePrimTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 287;
				this.match(TSASMParser.OpenBracket);
				this.state = 288;
				this.tupleElementTypes();
				this.state = 289;
				this.match(TSASMParser.CloseBracket);
				}
				break;

			case 6:
				{
				_localctx = new QueryPrimTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 291;
				this.typeQuery();
				}
				break;

			case 7:
				{
				_localctx = new RedefinitionOfTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 292;
				this.typeReference();
				this.state = 293;
				this.match(TSASMParser.Is);
				this.state = 294;
				this.primaryType(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 304;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ArrayPrimTypeContext(new PrimaryTypeContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_primaryType);
					this.state = 298;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 299;
					if (!(this.notLineTerminator())) {
						throw this.createFailedPredicateException("this.notLineTerminator()");
					}
					this.state = 300;
					this.match(TSASMParser.OpenBracket);
					this.state = 301;
					this.match(TSASMParser.CloseBracket);
					}
					}
				}
				this.state = 306;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predefinedType(): PredefinedTypeContext {
		let _localctx: PredefinedTypeContext = new PredefinedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TSASMParser.RULE_predefinedType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			_la = this._input.LA(1);
			if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (TSASMParser.Void - 69)) | (1 << (TSASMParser.Any - 69)) | (1 << (TSASMParser.Number - 69)) | (1 << (TSASMParser.Boolean - 69)) | (1 << (TSASMParser.String - 69)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeReference(): TypeReferenceContext {
		let _localctx: TypeReferenceContext = new TypeReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TSASMParser.RULE_typeReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.typeName();
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 310;
				this.nestedTypeGeneric();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nestedTypeGeneric(): NestedTypeGenericContext {
		let _localctx: NestedTypeGenericContext = new NestedTypeGenericContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TSASMParser.RULE_nestedTypeGeneric);
		try {
			this.state = 315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 313;
				this.typeIncludeGeneric();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 314;
				this.typeGeneric();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeGeneric(): TypeGenericContext {
		let _localctx: TypeGenericContext = new TypeGenericContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TSASMParser.RULE_typeGeneric);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.match(TSASMParser.LessThan);
			this.state = 318;
			this.typeArgumentList();
			this.state = 319;
			this.match(TSASMParser.MoreThan);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeIncludeGeneric(): TypeIncludeGenericContext {
		let _localctx: TypeIncludeGenericContext = new TypeIncludeGenericContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TSASMParser.RULE_typeIncludeGeneric);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(TSASMParser.LessThan);
			this.state = 322;
			this.typeArgumentList();
			this.state = 323;
			this.match(TSASMParser.LessThan);
			this.state = 324;
			this.typeArgumentList();
			this.state = 330;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.MoreThan:
				{
				this.state = 325;
				this.match(TSASMParser.MoreThan);
				this.state = 326;
				this.bindingPattern();
				this.state = 327;
				this.match(TSASMParser.MoreThan);
				}
				break;
			case TSASMParser.RightShiftArithmetic:
				{
				this.state = 329;
				this.match(TSASMParser.RightShiftArithmetic);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TSASMParser.RULE_typeName);
		try {
			this.state = 334;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 332;
				this.match(TSASMParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 333;
				this.namespaceName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectType(): ObjectTypeContext {
		let _localctx: ObjectTypeContext = new ObjectTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, TSASMParser.RULE_objectType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.match(TSASMParser.OpenBrace);
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.OpenBracket || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TSASMParser.NullLiteral - 54)) | (1 << (TSASMParser.BooleanLiteral - 54)) | (1 << (TSASMParser.DecimalLiteral - 54)) | (1 << (TSASMParser.HexIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral2 - 54)) | (1 << (TSASMParser.BinaryIntegerLiteral - 54)) | (1 << (TSASMParser.Break - 54)) | (1 << (TSASMParser.Typeof - 54)) | (1 << (TSASMParser.Case - 54)) | (1 << (TSASMParser.Else - 54)) | (1 << (TSASMParser.Catch - 54)) | (1 << (TSASMParser.Finally - 54)) | (1 << (TSASMParser.Return - 54)) | (1 << (TSASMParser.Void - 54)) | (1 << (TSASMParser.Continue - 54)) | (1 << (TSASMParser.For - 54)) | (1 << (TSASMParser.Switch - 54)) | (1 << (TSASMParser.While - 54)) | (1 << (TSASMParser.Debugger - 54)) | (1 << (TSASMParser.Default - 54)) | (1 << (TSASMParser.If - 54)) | (1 << (TSASMParser.Throw - 54)) | (1 << (TSASMParser.Delete - 54)) | (1 << (TSASMParser.In - 54)) | (1 << (TSASMParser.Try - 54)) | (1 << (TSASMParser.From - 54)) | (1 << (TSASMParser.Enum - 54)) | (1 << (TSASMParser.Extends - 54)) | (1 << (TSASMParser.Const - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TSASMParser.Export - 86)) | (1 << (TSASMParser.Import - 86)) | (1 << (TSASMParser.Implements - 86)) | (1 << (TSASMParser.Let - 86)) | (1 << (TSASMParser.Interface - 86)) | (1 << (TSASMParser.String - 86)) | (1 << (TSASMParser.TypeAlias - 86)) | (1 << (TSASMParser.Require - 86)) | (1 << (TSASMParser.Identifier - 86)) | (1 << (TSASMParser.StringLiteral - 86)))) !== 0)) {
				{
				this.state = 337;
				this.typeBody();
				}
			}

			this.state = 340;
			this.match(TSASMParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBody(): TypeBodyContext {
		let _localctx: TypeBodyContext = new TypeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TSASMParser.RULE_typeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.typeMemberList();
			this.state = 344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.SemiColon || _la === TSASMParser.Comma) {
				{
				this.state = 343;
				_la = this._input.LA(1);
				if (!(_la === TSASMParser.SemiColon || _la === TSASMParser.Comma)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeMemberList(): TypeMemberListContext {
		let _localctx: TypeMemberListContext = new TypeMemberListContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, TSASMParser.RULE_typeMemberList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.typeMember();
			this.state = 351;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 347;
					_la = this._input.LA(1);
					if (!(_la === TSASMParser.SemiColon || _la === TSASMParser.Comma)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 348;
					this.typeMember();
					}
					}
				}
				this.state = 353;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeMember(): TypeMemberContext {
		let _localctx: TypeMemberContext = new TypeMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, TSASMParser.RULE_typeMember);
		try {
			this.state = 356;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.NullLiteral:
			case TSASMParser.BooleanLiteral:
			case TSASMParser.DecimalLiteral:
			case TSASMParser.HexIntegerLiteral:
			case TSASMParser.OctalIntegerLiteral:
			case TSASMParser.OctalIntegerLiteral2:
			case TSASMParser.BinaryIntegerLiteral:
			case TSASMParser.Break:
			case TSASMParser.Typeof:
			case TSASMParser.Case:
			case TSASMParser.Else:
			case TSASMParser.Catch:
			case TSASMParser.Finally:
			case TSASMParser.Return:
			case TSASMParser.Void:
			case TSASMParser.Continue:
			case TSASMParser.For:
			case TSASMParser.Switch:
			case TSASMParser.While:
			case TSASMParser.Debugger:
			case TSASMParser.Default:
			case TSASMParser.If:
			case TSASMParser.Throw:
			case TSASMParser.Delete:
			case TSASMParser.In:
			case TSASMParser.Try:
			case TSASMParser.From:
			case TSASMParser.Enum:
			case TSASMParser.Extends:
			case TSASMParser.Const:
			case TSASMParser.Export:
			case TSASMParser.Import:
			case TSASMParser.Implements:
			case TSASMParser.Let:
			case TSASMParser.Interface:
			case TSASMParser.String:
			case TSASMParser.TypeAlias:
			case TSASMParser.Require:
			case TSASMParser.Identifier:
			case TSASMParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 354;
				this.propertySignature();
				}
				break;
			case TSASMParser.OpenBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 355;
				this.indexSignature();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, TSASMParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.primaryType(0);
			this.state = 359;
			if (!(this.notLineTerminator())) {
				throw this.createFailedPredicateException("this.notLineTerminator()");
			}
			this.state = 360;
			this.match(TSASMParser.OpenBracket);
			this.state = 361;
			this.match(TSASMParser.CloseBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleType(): TupleTypeContext {
		let _localctx: TupleTypeContext = new TupleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, TSASMParser.RULE_tupleType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			this.match(TSASMParser.OpenBracket);
			this.state = 364;
			this.tupleElementTypes();
			this.state = 365;
			this.match(TSASMParser.CloseBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleElementTypes(): TupleElementTypesContext {
		let _localctx: TupleElementTypesContext = new TupleElementTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, TSASMParser.RULE_tupleElementTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.type_();
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TSASMParser.Comma) {
				{
				{
				this.state = 368;
				this.match(TSASMParser.Comma);
				this.state = 369;
				this.type_();
				}
				}
				this.state = 374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionType(): FunctionTypeContext {
		let _localctx: FunctionTypeContext = new FunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, TSASMParser.RULE_functionType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.LessThan) {
				{
				this.state = 375;
				this.typeParameters();
				}
			}

			this.state = 378;
			this.match(TSASMParser.OpenParen);
			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.OpenBracket || _la === TSASMParser.OpenBrace || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TSASMParser.NullLiteral - 54)) | (1 << (TSASMParser.BooleanLiteral - 54)) | (1 << (TSASMParser.Break - 54)) | (1 << (TSASMParser.Typeof - 54)) | (1 << (TSASMParser.Case - 54)) | (1 << (TSASMParser.Else - 54)) | (1 << (TSASMParser.Catch - 54)) | (1 << (TSASMParser.Finally - 54)) | (1 << (TSASMParser.Return - 54)) | (1 << (TSASMParser.Void - 54)) | (1 << (TSASMParser.Continue - 54)) | (1 << (TSASMParser.For - 54)) | (1 << (TSASMParser.Switch - 54)) | (1 << (TSASMParser.While - 54)) | (1 << (TSASMParser.Debugger - 54)) | (1 << (TSASMParser.Default - 54)) | (1 << (TSASMParser.If - 54)) | (1 << (TSASMParser.Throw - 54)) | (1 << (TSASMParser.Delete - 54)) | (1 << (TSASMParser.In - 54)) | (1 << (TSASMParser.Try - 54)) | (1 << (TSASMParser.From - 54)) | (1 << (TSASMParser.Enum - 54)) | (1 << (TSASMParser.Extends - 54)) | (1 << (TSASMParser.Const - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TSASMParser.Export - 86)) | (1 << (TSASMParser.Import - 86)) | (1 << (TSASMParser.Implements - 86)) | (1 << (TSASMParser.Let - 86)) | (1 << (TSASMParser.Interface - 86)) | (1 << (TSASMParser.String - 86)) | (1 << (TSASMParser.TypeAlias - 86)) | (1 << (TSASMParser.Require - 86)) | (1 << (TSASMParser.Identifier - 86)))) !== 0)) {
				{
				this.state = 379;
				this.parameterList();
				}
			}

			this.state = 382;
			this.match(TSASMParser.CloseParen);
			this.state = 383;
			this.match(TSASMParser.ARROW);
			this.state = 384;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeQuery(): TypeQueryContext {
		let _localctx: TypeQueryContext = new TypeQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, TSASMParser.RULE_typeQuery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.match(TSASMParser.Typeof);
			this.state = 387;
			this.typeQueryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeQueryExpression(): TypeQueryExpressionContext {
		let _localctx: TypeQueryExpressionContext = new TypeQueryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, TSASMParser.RULE_typeQueryExpression);
		try {
			let _alt: number;
			this.state = 399;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 389;
				this.match(TSASMParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 393;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 390;
						this.identifierName();
						this.state = 391;
						this.match(TSASMParser.Dot);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 395;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 397;
				this.identifierName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertySignature(): PropertySignatureContext {
		let _localctx: PropertySignatureContext = new PropertySignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, TSASMParser.RULE_propertySignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.propertyName();
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.QuestionMark) {
				{
				this.state = 402;
				this.match(TSASMParser.QuestionMark);
				}
			}

			this.state = 406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.Colon) {
				{
				this.state = 405;
				this.typeAnnotation();
				}
			}

			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.ARROW) {
				{
				this.state = 408;
				this.match(TSASMParser.ARROW);
				this.state = 409;
				this.type_();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAnnotation(): TypeAnnotationContext {
		let _localctx: TypeAnnotationContext = new TypeAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, TSASMParser.RULE_typeAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			this.match(TSASMParser.Colon);
			this.state = 413;
			this.type_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callSignature(): CallSignatureContext {
		let _localctx: CallSignatureContext = new CallSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, TSASMParser.RULE_callSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.LessThan) {
				{
				this.state = 415;
				this.typeParameters();
				}
			}

			this.state = 418;
			this.match(TSASMParser.OpenParen);
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.OpenBracket || _la === TSASMParser.OpenBrace || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TSASMParser.NullLiteral - 54)) | (1 << (TSASMParser.BooleanLiteral - 54)) | (1 << (TSASMParser.Break - 54)) | (1 << (TSASMParser.Typeof - 54)) | (1 << (TSASMParser.Case - 54)) | (1 << (TSASMParser.Else - 54)) | (1 << (TSASMParser.Catch - 54)) | (1 << (TSASMParser.Finally - 54)) | (1 << (TSASMParser.Return - 54)) | (1 << (TSASMParser.Void - 54)) | (1 << (TSASMParser.Continue - 54)) | (1 << (TSASMParser.For - 54)) | (1 << (TSASMParser.Switch - 54)) | (1 << (TSASMParser.While - 54)) | (1 << (TSASMParser.Debugger - 54)) | (1 << (TSASMParser.Default - 54)) | (1 << (TSASMParser.If - 54)) | (1 << (TSASMParser.Throw - 54)) | (1 << (TSASMParser.Delete - 54)) | (1 << (TSASMParser.In - 54)) | (1 << (TSASMParser.Try - 54)) | (1 << (TSASMParser.From - 54)) | (1 << (TSASMParser.Enum - 54)) | (1 << (TSASMParser.Extends - 54)) | (1 << (TSASMParser.Const - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TSASMParser.Export - 86)) | (1 << (TSASMParser.Import - 86)) | (1 << (TSASMParser.Implements - 86)) | (1 << (TSASMParser.Let - 86)) | (1 << (TSASMParser.Interface - 86)) | (1 << (TSASMParser.String - 86)) | (1 << (TSASMParser.TypeAlias - 86)) | (1 << (TSASMParser.Require - 86)) | (1 << (TSASMParser.Identifier - 86)))) !== 0)) {
				{
				this.state = 419;
				this.parameterList();
				}
			}

			this.state = 422;
			this.match(TSASMParser.CloseParen);
			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.Colon) {
				{
				this.state = 423;
				this.typeAnnotation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, TSASMParser.RULE_parameterList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.parameter();
			this.state = 431;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 427;
					this.match(TSASMParser.Comma);
					this.state = 428;
					this.parameter();
					}
					}
				}
				this.state = 433;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requiredParameterList(): RequiredParameterListContext {
		let _localctx: RequiredParameterListContext = new RequiredParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, TSASMParser.RULE_requiredParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
			this.requiredParameter();
			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TSASMParser.Comma) {
				{
				{
				this.state = 435;
				this.match(TSASMParser.Comma);
				this.state = 436;
				this.requiredParameter();
				}
				}
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, TSASMParser.RULE_parameter);
		try {
			this.state = 444;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 442;
				this.requiredParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 443;
				this.optionalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalParameter(): OptionalParameterContext {
		let _localctx: OptionalParameterContext = new OptionalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, TSASMParser.RULE_optionalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 446;
			this.identifierOrPattern();
			this.state = 455;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.QuestionMark:
				{
				this.state = 447;
				this.match(TSASMParser.QuestionMark);
				this.state = 449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TSASMParser.Colon) {
					{
					this.state = 448;
					this.typeAnnotation();
					}
				}

				}
				break;
			case TSASMParser.Assign:
			case TSASMParser.Colon:
				{
				this.state = 452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TSASMParser.Colon) {
					{
					this.state = 451;
					this.typeAnnotation();
					}
				}

				this.state = 454;
				this.initializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public requiredParameter(): RequiredParameterContext {
		let _localctx: RequiredParameterContext = new RequiredParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, TSASMParser.RULE_requiredParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.identifierOrPattern();
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.Colon) {
				{
				this.state = 458;
				this.typeAnnotation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierOrPattern(): IdentifierOrPatternContext {
		let _localctx: IdentifierOrPatternContext = new IdentifierOrPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, TSASMParser.RULE_identifierOrPattern);
		try {
			this.state = 463;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.NullLiteral:
			case TSASMParser.BooleanLiteral:
			case TSASMParser.Break:
			case TSASMParser.Typeof:
			case TSASMParser.Case:
			case TSASMParser.Else:
			case TSASMParser.Catch:
			case TSASMParser.Finally:
			case TSASMParser.Return:
			case TSASMParser.Void:
			case TSASMParser.Continue:
			case TSASMParser.For:
			case TSASMParser.Switch:
			case TSASMParser.While:
			case TSASMParser.Debugger:
			case TSASMParser.Default:
			case TSASMParser.If:
			case TSASMParser.Throw:
			case TSASMParser.Delete:
			case TSASMParser.In:
			case TSASMParser.Try:
			case TSASMParser.From:
			case TSASMParser.Enum:
			case TSASMParser.Extends:
			case TSASMParser.Const:
			case TSASMParser.Export:
			case TSASMParser.Import:
			case TSASMParser.Implements:
			case TSASMParser.Let:
			case TSASMParser.Interface:
			case TSASMParser.String:
			case TSASMParser.TypeAlias:
			case TSASMParser.Require:
			case TSASMParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 461;
				this.identifierName();
				}
				break;
			case TSASMParser.OpenBracket:
			case TSASMParser.OpenBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 462;
				this.bindingPattern();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexSignature(): IndexSignatureContext {
		let _localctx: IndexSignatureContext = new IndexSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, TSASMParser.RULE_indexSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.match(TSASMParser.OpenBracket);
			this.state = 466;
			this.match(TSASMParser.Identifier);
			this.state = 467;
			this.match(TSASMParser.Colon);
			this.state = 468;
			_la = this._input.LA(1);
			if (!(_la === TSASMParser.Number || _la === TSASMParser.String)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 469;
			this.match(TSASMParser.CloseBracket);
			this.state = 470;
			this.typeAnnotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAliasDeclaration(): TypeAliasDeclarationContext {
		let _localctx: TypeAliasDeclarationContext = new TypeAliasDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, TSASMParser.RULE_typeAliasDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(TSASMParser.TypeAlias);
			this.state = 473;
			this.match(TSASMParser.Identifier);
			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.LessThan) {
				{
				this.state = 474;
				this.typeParameters();
				}
			}

			this.state = 477;
			this.match(TSASMParser.Assign);
			this.state = 478;
			this.type_();
			this.state = 479;
			this.match(TSASMParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, TSASMParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.Export) {
				{
				this.state = 481;
				this.match(TSASMParser.Export);
				}
			}

			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.Declare) {
				{
				this.state = 484;
				this.match(TSASMParser.Declare);
				}
			}

			this.state = 487;
			this.match(TSASMParser.Interface);
			this.state = 488;
			this.match(TSASMParser.Identifier);
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.LessThan) {
				{
				this.state = 489;
				this.typeParameters();
				}
			}

			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.Extends) {
				{
				this.state = 492;
				this.interfaceExtendsClause();
				}
			}

			this.state = 495;
			this.objectType();
			this.state = 497;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 496;
				this.match(TSASMParser.SemiColon);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceExtendsClause(): InterfaceExtendsClauseContext {
		let _localctx: InterfaceExtendsClauseContext = new InterfaceExtendsClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, TSASMParser.RULE_interfaceExtendsClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
			this.match(TSASMParser.Extends);
			this.state = 500;
			this.classOrInterfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceTypeList(): ClassOrInterfaceTypeListContext {
		let _localctx: ClassOrInterfaceTypeListContext = new ClassOrInterfaceTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, TSASMParser.RULE_classOrInterfaceTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			this.typeReference();
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TSASMParser.Comma) {
				{
				{
				this.state = 503;
				this.match(TSASMParser.Comma);
				this.state = 504;
				this.typeReference();
				}
				}
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, TSASMParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.Const) {
				{
				this.state = 510;
				this.match(TSASMParser.Const);
				}
			}

			this.state = 513;
			this.match(TSASMParser.Enum);
			this.state = 514;
			this.match(TSASMParser.Identifier);
			this.state = 515;
			this.match(TSASMParser.OpenBrace);
			this.state = 517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TSASMParser.NullLiteral - 54)) | (1 << (TSASMParser.BooleanLiteral - 54)) | (1 << (TSASMParser.DecimalLiteral - 54)) | (1 << (TSASMParser.HexIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral2 - 54)) | (1 << (TSASMParser.BinaryIntegerLiteral - 54)) | (1 << (TSASMParser.Break - 54)) | (1 << (TSASMParser.Typeof - 54)) | (1 << (TSASMParser.Case - 54)) | (1 << (TSASMParser.Else - 54)) | (1 << (TSASMParser.Catch - 54)) | (1 << (TSASMParser.Finally - 54)) | (1 << (TSASMParser.Return - 54)) | (1 << (TSASMParser.Void - 54)) | (1 << (TSASMParser.Continue - 54)) | (1 << (TSASMParser.For - 54)) | (1 << (TSASMParser.Switch - 54)) | (1 << (TSASMParser.While - 54)) | (1 << (TSASMParser.Debugger - 54)) | (1 << (TSASMParser.Default - 54)) | (1 << (TSASMParser.If - 54)) | (1 << (TSASMParser.Throw - 54)) | (1 << (TSASMParser.Delete - 54)) | (1 << (TSASMParser.In - 54)) | (1 << (TSASMParser.Try - 54)) | (1 << (TSASMParser.From - 54)) | (1 << (TSASMParser.Enum - 54)) | (1 << (TSASMParser.Extends - 54)) | (1 << (TSASMParser.Const - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TSASMParser.Export - 86)) | (1 << (TSASMParser.Import - 86)) | (1 << (TSASMParser.Implements - 86)) | (1 << (TSASMParser.Let - 86)) | (1 << (TSASMParser.Interface - 86)) | (1 << (TSASMParser.String - 86)) | (1 << (TSASMParser.TypeAlias - 86)) | (1 << (TSASMParser.Require - 86)) | (1 << (TSASMParser.Identifier - 86)) | (1 << (TSASMParser.StringLiteral - 86)))) !== 0)) {
				{
				this.state = 516;
				this.enumBody();
				}
			}

			this.state = 519;
			this.match(TSASMParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let _localctx: EnumBodyContext = new EnumBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, TSASMParser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this.enumMemberList();
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.Comma) {
				{
				this.state = 522;
				this.match(TSASMParser.Comma);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumMemberList(): EnumMemberListContext {
		let _localctx: EnumMemberListContext = new EnumMemberListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, TSASMParser.RULE_enumMemberList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this.enumMember();
			this.state = 530;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 526;
					this.match(TSASMParser.Comma);
					this.state = 527;
					this.enumMember();
					}
					}
				}
				this.state = 532;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumMember(): EnumMemberContext {
		let _localctx: EnumMemberContext = new EnumMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, TSASMParser.RULE_enumMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this.propertyName();
			this.state = 536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.Assign) {
				{
				this.state = 534;
				this.match(TSASMParser.Assign);
				this.state = 535;
				this.singleExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceName(): NamespaceNameContext {
		let _localctx: NamespaceNameContext = new NamespaceNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, TSASMParser.RULE_namespaceName);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			this.match(TSASMParser.Identifier);
			this.state = 547;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 540;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 539;
						this.match(TSASMParser.Dot);
						}
						}
						this.state = 542;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === TSASMParser.Dot);
					this.state = 544;
					this.match(TSASMParser.Identifier);
					}
					}
				}
				this.state = 549;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importAliasDeclaration(): ImportAliasDeclarationContext {
		let _localctx: ImportAliasDeclarationContext = new ImportAliasDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, TSASMParser.RULE_importAliasDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this.match(TSASMParser.Identifier);
			this.state = 551;
			this.match(TSASMParser.Assign);
			this.state = 552;
			this.namespaceName();
			this.state = 553;
			this.match(TSASMParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, TSASMParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 555;
				this.sourceElements();
				}
				break;
			}
			this.state = 558;
			this.match(TSASMParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElement(): SourceElementContext {
		let _localctx: SourceElementContext = new SourceElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, TSASMParser.RULE_sourceElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 560;
				this.match(TSASMParser.Export);
				}
				break;
			}
			this.state = 563;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, TSASMParser.RULE_statement);
		try {
			this.state = 586;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 565;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 566;
				this.importStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 567;
				this.exportStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 568;
				this.emptyStatement_();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 569;
				this.interfaceDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 570;
				this.ifStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 571;
				this.iterationStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 572;
				this.continueStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 573;
				this.breakStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 574;
				this.returnStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 575;
				this.switchStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 576;
				this.throwStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 577;
				this.tryStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 578;
				this.debuggerStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 579;
				this.arrowFunctionDeclaration();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 580;
				this.variableStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 581;
				this.typeAliasDeclaration();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 582;
				this.enumDeclaration();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 583;
				this.expressionStatement();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 584;
				this.match(TSASMParser.Export);
				this.state = 585;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, TSASMParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.match(TSASMParser.OpenBrace);
			this.state = 590;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 589;
				this.statementList();
				}
				break;
			}
			this.state = 592;
			this.match(TSASMParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, TSASMParser.RULE_statementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 594;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 597;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let _localctx: ImportStatementContext = new ImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, TSASMParser.RULE_importStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this.match(TSASMParser.Import);
			this.state = 602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 600;
				this.fromBlock();
				}
				break;

			case 2:
				{
				this.state = 601;
				this.importAliasDeclaration();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromBlock(): FromBlockContext {
		let _localctx: FromBlockContext = new FromBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, TSASMParser.RULE_fromBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 606;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.Multiply:
				{
				this.state = 604;
				this.match(TSASMParser.Multiply);
				}
				break;
			case TSASMParser.OpenBrace:
			case TSASMParser.NullLiteral:
			case TSASMParser.BooleanLiteral:
			case TSASMParser.Break:
			case TSASMParser.Typeof:
			case TSASMParser.Case:
			case TSASMParser.Else:
			case TSASMParser.Catch:
			case TSASMParser.Finally:
			case TSASMParser.Return:
			case TSASMParser.Void:
			case TSASMParser.Continue:
			case TSASMParser.For:
			case TSASMParser.Switch:
			case TSASMParser.While:
			case TSASMParser.Debugger:
			case TSASMParser.Default:
			case TSASMParser.If:
			case TSASMParser.Throw:
			case TSASMParser.Delete:
			case TSASMParser.In:
			case TSASMParser.Try:
			case TSASMParser.From:
			case TSASMParser.Enum:
			case TSASMParser.Extends:
			case TSASMParser.Const:
			case TSASMParser.Export:
			case TSASMParser.Import:
			case TSASMParser.Implements:
			case TSASMParser.Let:
			case TSASMParser.Interface:
			case TSASMParser.String:
			case TSASMParser.TypeAlias:
			case TSASMParser.Require:
			case TSASMParser.Identifier:
				{
				this.state = 605;
				this.multipleImportStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.As) {
				{
				this.state = 608;
				this.match(TSASMParser.As);
				this.state = 609;
				this.identifierName();
				}
			}

			this.state = 612;
			this.match(TSASMParser.From);
			this.state = 613;
			this.match(TSASMParser.StringLiteral);
			this.state = 614;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multipleImportStatement(): MultipleImportStatementContext {
		let _localctx: MultipleImportStatementContext = new MultipleImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, TSASMParser.RULE_multipleImportStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TSASMParser.NullLiteral - 54)) | (1 << (TSASMParser.BooleanLiteral - 54)) | (1 << (TSASMParser.Break - 54)) | (1 << (TSASMParser.Typeof - 54)) | (1 << (TSASMParser.Case - 54)) | (1 << (TSASMParser.Else - 54)) | (1 << (TSASMParser.Catch - 54)) | (1 << (TSASMParser.Finally - 54)) | (1 << (TSASMParser.Return - 54)) | (1 << (TSASMParser.Void - 54)) | (1 << (TSASMParser.Continue - 54)) | (1 << (TSASMParser.For - 54)) | (1 << (TSASMParser.Switch - 54)) | (1 << (TSASMParser.While - 54)) | (1 << (TSASMParser.Debugger - 54)) | (1 << (TSASMParser.Default - 54)) | (1 << (TSASMParser.If - 54)) | (1 << (TSASMParser.Throw - 54)) | (1 << (TSASMParser.Delete - 54)) | (1 << (TSASMParser.In - 54)) | (1 << (TSASMParser.Try - 54)) | (1 << (TSASMParser.From - 54)) | (1 << (TSASMParser.Enum - 54)) | (1 << (TSASMParser.Extends - 54)) | (1 << (TSASMParser.Const - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TSASMParser.Export - 86)) | (1 << (TSASMParser.Import - 86)) | (1 << (TSASMParser.Implements - 86)) | (1 << (TSASMParser.Let - 86)) | (1 << (TSASMParser.Interface - 86)) | (1 << (TSASMParser.String - 86)) | (1 << (TSASMParser.TypeAlias - 86)) | (1 << (TSASMParser.Require - 86)) | (1 << (TSASMParser.Identifier - 86)))) !== 0)) {
				{
				this.state = 616;
				this.identifierName();
				this.state = 617;
				this.match(TSASMParser.Comma);
				}
			}

			this.state = 621;
			this.match(TSASMParser.OpenBrace);
			this.state = 622;
			this.identifierName();
			this.state = 627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TSASMParser.Comma) {
				{
				{
				this.state = 623;
				this.match(TSASMParser.Comma);
				this.state = 624;
				this.identifierName();
				}
				}
				this.state = 629;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 630;
			this.match(TSASMParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportStatement(): ExportStatementContext {
		let _localctx: ExportStatementContext = new ExportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, TSASMParser.RULE_exportStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			this.match(TSASMParser.Export);
			this.state = 634;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 633;
				this.match(TSASMParser.Default);
				}
				break;
			}
			this.state = 638;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 636;
				this.fromBlock();
				}
				break;

			case 2:
				{
				this.state = 637;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableStatement(): VariableStatementContext {
		let _localctx: VariableStatementContext = new VariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, TSASMParser.RULE_variableStatement);
		let _la: number;
		try {
			this.state = 663;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.OpenBracket:
			case TSASMParser.OpenBrace:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 640;
				this.bindingPattern();
				this.state = 642;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TSASMParser.Colon) {
					{
					this.state = 641;
					this.typeAnnotation();
					}
				}

				this.state = 644;
				this.initializer();
				this.state = 646;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 645;
					this.match(TSASMParser.SemiColon);
					}
					break;
				}
				}
				break;
			case TSASMParser.Const:
			case TSASMParser.Let:
			case TSASMParser.TypeAlias:
			case TSASMParser.Require:
			case TSASMParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 649;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TSASMParser.Const || _la === TSASMParser.Let) {
					{
					this.state = 648;
					this.varModifier();
					}
				}

				this.state = 651;
				this.variableDeclarationList();
				this.state = 653;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 652;
					this.match(TSASMParser.SemiColon);
					}
					break;
				}
				}
				break;
			case TSASMParser.Declare:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 655;
				this.match(TSASMParser.Declare);
				this.state = 657;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TSASMParser.Const || _la === TSASMParser.Let) {
					{
					this.state = 656;
					this.varModifier();
					}
				}

				this.state = 659;
				this.variableDeclarationList();
				this.state = 661;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
				case 1:
					{
					this.state = 660;
					this.match(TSASMParser.SemiColon);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, TSASMParser.RULE_variableDeclarationList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 665;
			this.variableDeclaration();
			this.state = 670;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 666;
					this.match(TSASMParser.Comma);
					this.state = 667;
					this.variableDeclaration();
					}
					}
				}
				this.state = 672;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, TSASMParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 673;
			this.identifierOrKeyWord();
			}
			this.state = 675;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 674;
				this.typeAnnotation();
				}
				break;
			}
			this.state = 678;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 677;
				this.singleExpression(0);
				}
				break;
			}
			this.state = 685;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 680;
				this.match(TSASMParser.Assign);
				this.state = 682;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 681;
					this.typeParameters();
					}
					break;
				}
				this.state = 684;
				this.singleExpression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement_(): EmptyStatement_Context {
		let _localctx: EmptyStatement_Context = new EmptyStatement_Context(this._ctx, this.state);
		this.enterRule(_localctx, 120, TSASMParser.RULE_emptyStatement_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 687;
			this.match(TSASMParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, TSASMParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 689;
			if (!(this.notOpenBrace())) {
				throw this.createFailedPredicateException("this.notOpenBrace()");
			}
			this.state = 690;
			this.expressionSequence();
			this.state = 692;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 691;
				this.match(TSASMParser.SemiColon);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, TSASMParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this.match(TSASMParser.If);
			this.state = 695;
			this.match(TSASMParser.OpenParen);
			this.state = 696;
			this.expressionSequence();
			this.state = 697;
			this.match(TSASMParser.CloseParen);
			this.state = 698;
			this.statement();
			this.state = 701;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				this.state = 699;
				this.match(TSASMParser.Else);
				this.state = 700;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, TSASMParser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 724;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.While:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 703;
				this.match(TSASMParser.While);
				this.state = 704;
				this.match(TSASMParser.OpenParen);
				this.state = 705;
				this.expressionSequence();
				this.state = 706;
				this.match(TSASMParser.CloseParen);
				this.state = 707;
				this.statement();
				}
				break;
			case TSASMParser.For:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 709;
				this.match(TSASMParser.For);
				this.state = 710;
				this.match(TSASMParser.OpenParen);
				this.state = 712;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TSASMParser.RegularExpressionLiteral) | (1 << TSASMParser.OpenBracket) | (1 << TSASMParser.OpenParen) | (1 << TSASMParser.OpenBrace) | (1 << TSASMParser.PlusPlus) | (1 << TSASMParser.MinusMinus) | (1 << TSASMParser.Plus) | (1 << TSASMParser.Minus) | (1 << TSASMParser.BitNot) | (1 << TSASMParser.Not) | (1 << TSASMParser.LessThan))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TSASMParser.NullLiteral - 54)) | (1 << (TSASMParser.BooleanLiteral - 54)) | (1 << (TSASMParser.DecimalLiteral - 54)) | (1 << (TSASMParser.HexIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral2 - 54)) | (1 << (TSASMParser.BinaryIntegerLiteral - 54)) | (1 << (TSASMParser.Break - 54)) | (1 << (TSASMParser.Typeof - 54)) | (1 << (TSASMParser.Case - 54)) | (1 << (TSASMParser.Else - 54)) | (1 << (TSASMParser.Catch - 54)) | (1 << (TSASMParser.Finally - 54)) | (1 << (TSASMParser.Return - 54)) | (1 << (TSASMParser.Void - 54)) | (1 << (TSASMParser.Continue - 54)) | (1 << (TSASMParser.For - 54)) | (1 << (TSASMParser.Switch - 54)) | (1 << (TSASMParser.While - 54)) | (1 << (TSASMParser.Debugger - 54)) | (1 << (TSASMParser.Default - 54)) | (1 << (TSASMParser.If - 54)) | (1 << (TSASMParser.Throw - 54)) | (1 << (TSASMParser.Delete - 54)) | (1 << (TSASMParser.In - 54)) | (1 << (TSASMParser.Try - 54)) | (1 << (TSASMParser.From - 54)) | (1 << (TSASMParser.Enum - 54)) | (1 << (TSASMParser.Extends - 54)) | (1 << (TSASMParser.Const - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TSASMParser.Export - 86)) | (1 << (TSASMParser.Import - 86)) | (1 << (TSASMParser.Implements - 86)) | (1 << (TSASMParser.Let - 86)) | (1 << (TSASMParser.Interface - 86)) | (1 << (TSASMParser.String - 86)) | (1 << (TSASMParser.TypeAlias - 86)) | (1 << (TSASMParser.Require - 86)) | (1 << (TSASMParser.Identifier - 86)) | (1 << (TSASMParser.StringLiteral - 86)))) !== 0)) {
					{
					this.state = 711;
					this.expressionSequence();
					}
				}

				this.state = 714;
				this.match(TSASMParser.SemiColon);
				this.state = 716;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TSASMParser.RegularExpressionLiteral) | (1 << TSASMParser.OpenBracket) | (1 << TSASMParser.OpenParen) | (1 << TSASMParser.OpenBrace) | (1 << TSASMParser.PlusPlus) | (1 << TSASMParser.MinusMinus) | (1 << TSASMParser.Plus) | (1 << TSASMParser.Minus) | (1 << TSASMParser.BitNot) | (1 << TSASMParser.Not) | (1 << TSASMParser.LessThan))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TSASMParser.NullLiteral - 54)) | (1 << (TSASMParser.BooleanLiteral - 54)) | (1 << (TSASMParser.DecimalLiteral - 54)) | (1 << (TSASMParser.HexIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral2 - 54)) | (1 << (TSASMParser.BinaryIntegerLiteral - 54)) | (1 << (TSASMParser.Break - 54)) | (1 << (TSASMParser.Typeof - 54)) | (1 << (TSASMParser.Case - 54)) | (1 << (TSASMParser.Else - 54)) | (1 << (TSASMParser.Catch - 54)) | (1 << (TSASMParser.Finally - 54)) | (1 << (TSASMParser.Return - 54)) | (1 << (TSASMParser.Void - 54)) | (1 << (TSASMParser.Continue - 54)) | (1 << (TSASMParser.For - 54)) | (1 << (TSASMParser.Switch - 54)) | (1 << (TSASMParser.While - 54)) | (1 << (TSASMParser.Debugger - 54)) | (1 << (TSASMParser.Default - 54)) | (1 << (TSASMParser.If - 54)) | (1 << (TSASMParser.Throw - 54)) | (1 << (TSASMParser.Delete - 54)) | (1 << (TSASMParser.In - 54)) | (1 << (TSASMParser.Try - 54)) | (1 << (TSASMParser.From - 54)) | (1 << (TSASMParser.Enum - 54)) | (1 << (TSASMParser.Extends - 54)) | (1 << (TSASMParser.Const - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TSASMParser.Export - 86)) | (1 << (TSASMParser.Import - 86)) | (1 << (TSASMParser.Implements - 86)) | (1 << (TSASMParser.Let - 86)) | (1 << (TSASMParser.Interface - 86)) | (1 << (TSASMParser.String - 86)) | (1 << (TSASMParser.TypeAlias - 86)) | (1 << (TSASMParser.Require - 86)) | (1 << (TSASMParser.Identifier - 86)) | (1 << (TSASMParser.StringLiteral - 86)))) !== 0)) {
					{
					this.state = 715;
					this.expressionSequence();
					}
				}

				this.state = 718;
				this.match(TSASMParser.SemiColon);
				this.state = 720;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TSASMParser.RegularExpressionLiteral) | (1 << TSASMParser.OpenBracket) | (1 << TSASMParser.OpenParen) | (1 << TSASMParser.OpenBrace) | (1 << TSASMParser.PlusPlus) | (1 << TSASMParser.MinusMinus) | (1 << TSASMParser.Plus) | (1 << TSASMParser.Minus) | (1 << TSASMParser.BitNot) | (1 << TSASMParser.Not) | (1 << TSASMParser.LessThan))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TSASMParser.NullLiteral - 54)) | (1 << (TSASMParser.BooleanLiteral - 54)) | (1 << (TSASMParser.DecimalLiteral - 54)) | (1 << (TSASMParser.HexIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral2 - 54)) | (1 << (TSASMParser.BinaryIntegerLiteral - 54)) | (1 << (TSASMParser.Break - 54)) | (1 << (TSASMParser.Typeof - 54)) | (1 << (TSASMParser.Case - 54)) | (1 << (TSASMParser.Else - 54)) | (1 << (TSASMParser.Catch - 54)) | (1 << (TSASMParser.Finally - 54)) | (1 << (TSASMParser.Return - 54)) | (1 << (TSASMParser.Void - 54)) | (1 << (TSASMParser.Continue - 54)) | (1 << (TSASMParser.For - 54)) | (1 << (TSASMParser.Switch - 54)) | (1 << (TSASMParser.While - 54)) | (1 << (TSASMParser.Debugger - 54)) | (1 << (TSASMParser.Default - 54)) | (1 << (TSASMParser.If - 54)) | (1 << (TSASMParser.Throw - 54)) | (1 << (TSASMParser.Delete - 54)) | (1 << (TSASMParser.In - 54)) | (1 << (TSASMParser.Try - 54)) | (1 << (TSASMParser.From - 54)) | (1 << (TSASMParser.Enum - 54)) | (1 << (TSASMParser.Extends - 54)) | (1 << (TSASMParser.Const - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TSASMParser.Export - 86)) | (1 << (TSASMParser.Import - 86)) | (1 << (TSASMParser.Implements - 86)) | (1 << (TSASMParser.Let - 86)) | (1 << (TSASMParser.Interface - 86)) | (1 << (TSASMParser.String - 86)) | (1 << (TSASMParser.TypeAlias - 86)) | (1 << (TSASMParser.Require - 86)) | (1 << (TSASMParser.Identifier - 86)) | (1 << (TSASMParser.StringLiteral - 86)))) !== 0)) {
					{
					this.state = 719;
					this.expressionSequence();
					}
				}

				this.state = 722;
				this.match(TSASMParser.CloseParen);
				this.state = 723;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varModifier(): VarModifierContext {
		let _localctx: VarModifierContext = new VarModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, TSASMParser.RULE_varModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			_la = this._input.LA(1);
			if (!(_la === TSASMParser.Const || _la === TSASMParser.Let)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, TSASMParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this.match(TSASMParser.Continue);
			this.state = 731;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 729;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 730;
				this.match(TSASMParser.Identifier);
				}
				break;
			}
			this.state = 733;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, TSASMParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			this.match(TSASMParser.Break);
			this.state = 738;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 736;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 737;
				this.match(TSASMParser.Identifier);
				}
				break;
			}
			this.state = 740;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, TSASMParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 742;
			this.match(TSASMParser.Return);
			this.state = 745;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 743;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 744;
				this.expressionSequence();
				}
				break;
			}
			this.state = 747;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, TSASMParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 749;
			this.match(TSASMParser.Switch);
			this.state = 750;
			this.match(TSASMParser.OpenParen);
			this.state = 751;
			this.expressionSequence();
			this.state = 752;
			this.match(TSASMParser.CloseParen);
			this.state = 753;
			this.caseBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseBlock(): CaseBlockContext {
		let _localctx: CaseBlockContext = new CaseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, TSASMParser.RULE_caseBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 755;
			this.match(TSASMParser.OpenBrace);
			this.state = 757;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.Case) {
				{
				this.state = 756;
				this.caseClauses();
				}
			}

			this.state = 763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.Default) {
				{
				this.state = 759;
				this.defaultClause();
				this.state = 761;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TSASMParser.Case) {
					{
					this.state = 760;
					this.caseClauses();
					}
				}

				}
			}

			this.state = 765;
			this.match(TSASMParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseClauses(): CaseClausesContext {
		let _localctx: CaseClausesContext = new CaseClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, TSASMParser.RULE_caseClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 767;
				this.caseClause();
				}
				}
				this.state = 770;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === TSASMParser.Case);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseClause(): CaseClauseContext {
		let _localctx: CaseClauseContext = new CaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, TSASMParser.RULE_caseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 772;
			this.match(TSASMParser.Case);
			this.state = 773;
			this.expressionSequence();
			this.state = 774;
			this.match(TSASMParser.Colon);
			this.state = 776;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 775;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultClause(): DefaultClauseContext {
		let _localctx: DefaultClauseContext = new DefaultClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, TSASMParser.RULE_defaultClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this.match(TSASMParser.Default);
			this.state = 779;
			this.match(TSASMParser.Colon);
			this.state = 781;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 780;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, TSASMParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this.match(TSASMParser.Throw);
			this.state = 784;
			if (!(this.notLineTerminator())) {
				throw this.createFailedPredicateException("this.notLineTerminator()");
			}
			this.state = 785;
			this.expressionSequence();
			this.state = 786;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, TSASMParser.RULE_tryStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 788;
			this.match(TSASMParser.Try);
			this.state = 789;
			this.block();
			this.state = 795;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.Catch:
				{
				this.state = 790;
				this.catchProduction();
				this.state = 792;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
				case 1:
					{
					this.state = 791;
					this.finallyProduction();
					}
					break;
				}
				}
				break;
			case TSASMParser.Finally:
				{
				this.state = 794;
				this.finallyProduction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchProduction(): CatchProductionContext {
		let _localctx: CatchProductionContext = new CatchProductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, TSASMParser.RULE_catchProduction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this.match(TSASMParser.Catch);
			this.state = 798;
			this.match(TSASMParser.OpenParen);
			this.state = 799;
			this.match(TSASMParser.Identifier);
			this.state = 800;
			this.match(TSASMParser.CloseParen);
			this.state = 801;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyProduction(): FinallyProductionContext {
		let _localctx: FinallyProductionContext = new FinallyProductionContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, TSASMParser.RULE_finallyProduction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 803;
			this.match(TSASMParser.Finally);
			this.state = 804;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public debuggerStatement(): DebuggerStatementContext {
		let _localctx: DebuggerStatementContext = new DebuggerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, TSASMParser.RULE_debuggerStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 806;
			this.match(TSASMParser.Debugger);
			this.state = 807;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexMemberDeclaration(): IndexMemberDeclarationContext {
		let _localctx: IndexMemberDeclarationContext = new IndexMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, TSASMParser.RULE_indexMemberDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 809;
			this.indexSignature();
			this.state = 810;
			this.match(TSASMParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, TSASMParser.RULE_formalParameterList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			this.formalParameterArg();
			this.state = 817;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 813;
					this.match(TSASMParser.Comma);
					this.state = 814;
					this.formalParameterArg();
					}
					}
				}
				this.state = 819;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterArg(): FormalParameterArgContext {
		let _localctx: FormalParameterArgContext = new FormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, TSASMParser.RULE_formalParameterArg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
			this.identifierOrKeyWord();
			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.QuestionMark) {
				{
				this.state = 821;
				this.match(TSASMParser.QuestionMark);
				}
			}

			this.state = 825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.Colon) {
				{
				this.state = 824;
				this.typeAnnotation();
				}
			}

			this.state = 829;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.Assign) {
				{
				this.state = 827;
				this.match(TSASMParser.Assign);
				this.state = 828;
				this.singleExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, TSASMParser.RULE_functionBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 832;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 831;
				this.sourceElements();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElements(): SourceElementsContext {
		let _localctx: SourceElementsContext = new SourceElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, TSASMParser.RULE_sourceElements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 835;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 834;
					this.sourceElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 837;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, TSASMParser.RULE_arrayLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 839;
			this.match(TSASMParser.OpenBracket);
			this.state = 841;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TSASMParser.RegularExpressionLiteral) | (1 << TSASMParser.OpenBracket) | (1 << TSASMParser.OpenParen) | (1 << TSASMParser.OpenBrace) | (1 << TSASMParser.PlusPlus) | (1 << TSASMParser.MinusMinus) | (1 << TSASMParser.Plus) | (1 << TSASMParser.Minus) | (1 << TSASMParser.BitNot) | (1 << TSASMParser.Not) | (1 << TSASMParser.LessThan))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TSASMParser.NullLiteral - 54)) | (1 << (TSASMParser.BooleanLiteral - 54)) | (1 << (TSASMParser.DecimalLiteral - 54)) | (1 << (TSASMParser.HexIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral2 - 54)) | (1 << (TSASMParser.BinaryIntegerLiteral - 54)) | (1 << (TSASMParser.Break - 54)) | (1 << (TSASMParser.Typeof - 54)) | (1 << (TSASMParser.Case - 54)) | (1 << (TSASMParser.Else - 54)) | (1 << (TSASMParser.Catch - 54)) | (1 << (TSASMParser.Finally - 54)) | (1 << (TSASMParser.Return - 54)) | (1 << (TSASMParser.Void - 54)) | (1 << (TSASMParser.Continue - 54)) | (1 << (TSASMParser.For - 54)) | (1 << (TSASMParser.Switch - 54)) | (1 << (TSASMParser.While - 54)) | (1 << (TSASMParser.Debugger - 54)) | (1 << (TSASMParser.Default - 54)) | (1 << (TSASMParser.If - 54)) | (1 << (TSASMParser.Throw - 54)) | (1 << (TSASMParser.Delete - 54)) | (1 << (TSASMParser.In - 54)) | (1 << (TSASMParser.Try - 54)) | (1 << (TSASMParser.From - 54)) | (1 << (TSASMParser.Enum - 54)) | (1 << (TSASMParser.Extends - 54)) | (1 << (TSASMParser.Const - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TSASMParser.Export - 86)) | (1 << (TSASMParser.Import - 86)) | (1 << (TSASMParser.Implements - 86)) | (1 << (TSASMParser.Let - 86)) | (1 << (TSASMParser.Interface - 86)) | (1 << (TSASMParser.String - 86)) | (1 << (TSASMParser.TypeAlias - 86)) | (1 << (TSASMParser.Require - 86)) | (1 << (TSASMParser.Identifier - 86)) | (1 << (TSASMParser.StringLiteral - 86)))) !== 0)) {
				{
				this.state = 840;
				this.elementList();
				}
			}

			this.state = 843;
			this.match(TSASMParser.CloseBracket);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementList(): ElementListContext {
		let _localctx: ElementListContext = new ElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, TSASMParser.RULE_elementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			this.arrayElement();
			this.state = 854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TSASMParser.Comma) {
				{
				{
				this.state = 847;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 846;
					this.match(TSASMParser.Comma);
					}
					}
					this.state = 849;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === TSASMParser.Comma);
				this.state = 851;
				this.arrayElement();
				}
				}
				this.state = 856;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayElement(): ArrayElementContext {
		let _localctx: ArrayElementContext = new ArrayElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, TSASMParser.RULE_arrayElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 859;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 857;
				this.singleExpression(0);
				}
				break;

			case 2:
				{
				this.state = 858;
				this.match(TSASMParser.Identifier);
				}
				break;
			}
			this.state = 862;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				this.state = 861;
				this.match(TSASMParser.Comma);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectLiteral(): ObjectLiteralContext {
		let _localctx: ObjectLiteralContext = new ObjectLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, TSASMParser.RULE_objectLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 864;
			this.match(TSASMParser.OpenBrace);
			this.state = 876;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.OpenBracket || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TSASMParser.NullLiteral - 54)) | (1 << (TSASMParser.BooleanLiteral - 54)) | (1 << (TSASMParser.DecimalLiteral - 54)) | (1 << (TSASMParser.HexIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral2 - 54)) | (1 << (TSASMParser.BinaryIntegerLiteral - 54)) | (1 << (TSASMParser.Break - 54)) | (1 << (TSASMParser.Typeof - 54)) | (1 << (TSASMParser.Case - 54)) | (1 << (TSASMParser.Else - 54)) | (1 << (TSASMParser.Catch - 54)) | (1 << (TSASMParser.Finally - 54)) | (1 << (TSASMParser.Return - 54)) | (1 << (TSASMParser.Void - 54)) | (1 << (TSASMParser.Continue - 54)) | (1 << (TSASMParser.For - 54)) | (1 << (TSASMParser.Switch - 54)) | (1 << (TSASMParser.While - 54)) | (1 << (TSASMParser.Debugger - 54)) | (1 << (TSASMParser.Default - 54)) | (1 << (TSASMParser.If - 54)) | (1 << (TSASMParser.Throw - 54)) | (1 << (TSASMParser.Delete - 54)) | (1 << (TSASMParser.In - 54)) | (1 << (TSASMParser.Try - 54)) | (1 << (TSASMParser.From - 54)) | (1 << (TSASMParser.Enum - 54)) | (1 << (TSASMParser.Extends - 54)) | (1 << (TSASMParser.Const - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TSASMParser.Export - 86)) | (1 << (TSASMParser.Import - 86)) | (1 << (TSASMParser.Implements - 86)) | (1 << (TSASMParser.Let - 86)) | (1 << (TSASMParser.Interface - 86)) | (1 << (TSASMParser.String - 86)) | (1 << (TSASMParser.TypeAlias - 86)) | (1 << (TSASMParser.Require - 86)) | (1 << (TSASMParser.Identifier - 86)) | (1 << (TSASMParser.StringLiteral - 86)))) !== 0)) {
				{
				this.state = 865;
				this.propertyAssignment();
				this.state = 870;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 866;
						this.match(TSASMParser.Comma);
						this.state = 867;
						this.propertyAssignment();
						}
						}
					}
					this.state = 872;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
				}
				this.state = 874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TSASMParser.Comma) {
					{
					this.state = 873;
					this.match(TSASMParser.Comma);
					}
				}

				}
			}

			this.state = 878;
			this.match(TSASMParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyAssignment(): PropertyAssignmentContext {
		let _localctx: PropertyAssignmentContext = new PropertyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, TSASMParser.RULE_propertyAssignment);
		let _la: number;
		try {
			this.state = 891;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				_localctx = new PropertyExpressionAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 880;
				this.propertyName();
				this.state = 881;
				_la = this._input.LA(1);
				if (!(_la === TSASMParser.Assign || _la === TSASMParser.Colon)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 882;
				this.singleExpression(0);
				}
				break;

			case 2:
				_localctx = new ComputedPropertyExpressionAssignmentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 884;
				this.match(TSASMParser.OpenBracket);
				this.state = 885;
				this.singleExpression(0);
				this.state = 886;
				this.match(TSASMParser.CloseBracket);
				this.state = 887;
				this.match(TSASMParser.Colon);
				this.state = 888;
				this.singleExpression(0);
				}
				break;

			case 3:
				_localctx = new PropertyShorthandContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 890;
				this.identifierOrKeyWord();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyName(): PropertyNameContext {
		let _localctx: PropertyNameContext = new PropertyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, TSASMParser.RULE_propertyName);
		try {
			this.state = 896;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.NullLiteral:
			case TSASMParser.BooleanLiteral:
			case TSASMParser.Break:
			case TSASMParser.Typeof:
			case TSASMParser.Case:
			case TSASMParser.Else:
			case TSASMParser.Catch:
			case TSASMParser.Finally:
			case TSASMParser.Return:
			case TSASMParser.Void:
			case TSASMParser.Continue:
			case TSASMParser.For:
			case TSASMParser.Switch:
			case TSASMParser.While:
			case TSASMParser.Debugger:
			case TSASMParser.Default:
			case TSASMParser.If:
			case TSASMParser.Throw:
			case TSASMParser.Delete:
			case TSASMParser.In:
			case TSASMParser.Try:
			case TSASMParser.From:
			case TSASMParser.Enum:
			case TSASMParser.Extends:
			case TSASMParser.Const:
			case TSASMParser.Export:
			case TSASMParser.Import:
			case TSASMParser.Implements:
			case TSASMParser.Let:
			case TSASMParser.Interface:
			case TSASMParser.String:
			case TSASMParser.TypeAlias:
			case TSASMParser.Require:
			case TSASMParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 893;
				this.identifierName();
				}
				break;
			case TSASMParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 894;
				this.match(TSASMParser.StringLiteral);
				}
				break;
			case TSASMParser.DecimalLiteral:
			case TSASMParser.HexIntegerLiteral:
			case TSASMParser.OctalIntegerLiteral:
			case TSASMParser.OctalIntegerLiteral2:
			case TSASMParser.BinaryIntegerLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 895;
				this.numericLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, TSASMParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 898;
			this.match(TSASMParser.OpenParen);
			this.state = 903;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TSASMParser.RegularExpressionLiteral) | (1 << TSASMParser.OpenBracket) | (1 << TSASMParser.OpenParen) | (1 << TSASMParser.OpenBrace) | (1 << TSASMParser.PlusPlus) | (1 << TSASMParser.MinusMinus) | (1 << TSASMParser.Plus) | (1 << TSASMParser.Minus) | (1 << TSASMParser.BitNot) | (1 << TSASMParser.Not) | (1 << TSASMParser.LessThan))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (TSASMParser.NullLiteral - 54)) | (1 << (TSASMParser.BooleanLiteral - 54)) | (1 << (TSASMParser.DecimalLiteral - 54)) | (1 << (TSASMParser.HexIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral - 54)) | (1 << (TSASMParser.OctalIntegerLiteral2 - 54)) | (1 << (TSASMParser.BinaryIntegerLiteral - 54)) | (1 << (TSASMParser.Break - 54)) | (1 << (TSASMParser.Typeof - 54)) | (1 << (TSASMParser.Case - 54)) | (1 << (TSASMParser.Else - 54)) | (1 << (TSASMParser.Catch - 54)) | (1 << (TSASMParser.Finally - 54)) | (1 << (TSASMParser.Return - 54)) | (1 << (TSASMParser.Void - 54)) | (1 << (TSASMParser.Continue - 54)) | (1 << (TSASMParser.For - 54)) | (1 << (TSASMParser.Switch - 54)) | (1 << (TSASMParser.While - 54)) | (1 << (TSASMParser.Debugger - 54)) | (1 << (TSASMParser.Default - 54)) | (1 << (TSASMParser.If - 54)) | (1 << (TSASMParser.Throw - 54)) | (1 << (TSASMParser.Delete - 54)) | (1 << (TSASMParser.In - 54)) | (1 << (TSASMParser.Try - 54)) | (1 << (TSASMParser.From - 54)) | (1 << (TSASMParser.Enum - 54)) | (1 << (TSASMParser.Extends - 54)) | (1 << (TSASMParser.Const - 54)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (TSASMParser.Export - 86)) | (1 << (TSASMParser.Import - 86)) | (1 << (TSASMParser.Implements - 86)) | (1 << (TSASMParser.Let - 86)) | (1 << (TSASMParser.Interface - 86)) | (1 << (TSASMParser.String - 86)) | (1 << (TSASMParser.TypeAlias - 86)) | (1 << (TSASMParser.Require - 86)) | (1 << (TSASMParser.Identifier - 86)) | (1 << (TSASMParser.StringLiteral - 86)))) !== 0)) {
				{
				this.state = 899;
				this.argumentList();
				this.state = 901;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TSASMParser.Comma) {
					{
					this.state = 900;
					this.match(TSASMParser.Comma);
					}
				}

				}
			}

			this.state = 905;
			this.match(TSASMParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, TSASMParser.RULE_argumentList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 907;
			this.argument();
			this.state = 912;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 908;
					this.match(TSASMParser.Comma);
					this.state = 909;
					this.argument();
					}
					}
				}
				this.state = 914;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, TSASMParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 917;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				{
				this.state = 915;
				this.singleExpression(0);
				}
				break;

			case 2:
				{
				this.state = 916;
				this.match(TSASMParser.Identifier);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionSequence(): ExpressionSequenceContext {
		let _localctx: ExpressionSequenceContext = new ExpressionSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, TSASMParser.RULE_expressionSequence);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 919;
			this.singleExpression(0);
			this.state = 924;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 920;
					this.match(TSASMParser.Comma);
					this.state = 921;
					this.singleExpression(0);
					}
					}
				}
				this.state = 926;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	// @RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = _localctx;
		let _startState: number = 186;
		this.enterRecursionRule(_localctx, 186, TSASMParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 962;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				_localctx = new ArrowFunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 928;
				this.arrowFunctionDeclaration();
				}
				break;

			case 2:
				{
				_localctx = new DeleteExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 929;
				this.match(TSASMParser.Delete);
				this.state = 930;
				this.singleExpression(29);
				}
				break;

			case 3:
				{
				_localctx = new VoidExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 931;
				this.match(TSASMParser.Void);
				this.state = 932;
				this.singleExpression(28);
				}
				break;

			case 4:
				{
				_localctx = new TypeofExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 933;
				this.match(TSASMParser.Typeof);
				this.state = 934;
				this.singleExpression(27);
				}
				break;

			case 5:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 935;
				this.match(TSASMParser.PlusPlus);
				this.state = 936;
				this.singleExpression(26);
				}
				break;

			case 6:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 937;
				this.match(TSASMParser.MinusMinus);
				this.state = 938;
				this.singleExpression(25);
				}
				break;

			case 7:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 939;
				this.match(TSASMParser.Plus);
				this.state = 940;
				this.singleExpression(24);
				}
				break;

			case 8:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 941;
				this.match(TSASMParser.Minus);
				this.state = 942;
				this.singleExpression(23);
				}
				break;

			case 9:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 943;
				this.match(TSASMParser.BitNot);
				this.state = 944;
				this.singleExpression(22);
				}
				break;

			case 10:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 945;
				this.match(TSASMParser.Not);
				this.state = 946;
				this.singleExpression(21);
				}
				break;

			case 11:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 947;
				this.identifierName();
				this.state = 949;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
				case 1:
					{
					this.state = 948;
					this.singleExpression(0);
					}
					break;
				}
				}
				break;

			case 12:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 951;
				this.literal();
				}
				break;

			case 13:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 952;
				this.arrayLiteral();
				}
				break;

			case 14:
				{
				_localctx = new ObjectLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 953;
				this.objectLiteral();
				}
				break;

			case 15:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 954;
				this.match(TSASMParser.OpenParen);
				this.state = 955;
				this.expressionSequence();
				this.state = 956;
				this.match(TSASMParser.CloseParen);
				}
				break;

			case 16:
				{
				_localctx = new GenericTypesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 958;
				this.typeArguments();
				this.state = 960;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
				case 1:
					{
					this.state = 959;
					this.expressionSequence();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1031;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1029;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 964;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 965;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TSASMParser.Multiply) | (1 << TSASMParser.Divide) | (1 << TSASMParser.Modulus))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 966;
						this.singleExpression(21);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 967;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 968;
						_la = this._input.LA(1);
						if (!(_la === TSASMParser.Plus || _la === TSASMParser.Minus)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 969;
						this.singleExpression(20);
						}
						break;

					case 3:
						{
						_localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 970;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 971;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TSASMParser.RightShiftArithmetic) | (1 << TSASMParser.LeftShiftArithmetic) | (1 << TSASMParser.RightShiftLogical))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 972;
						this.singleExpression(19);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 973;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 974;
						_la = this._input.LA(1);
						if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (TSASMParser.LessThan - 29)) | (1 << (TSASMParser.MoreThan - 29)) | (1 << (TSASMParser.LessThanEquals - 29)) | (1 << (TSASMParser.GreaterThanEquals - 29)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 975;
						this.singleExpression(18);
						}
						break;

					case 5:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 976;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 977;
						_la = this._input.LA(1);
						if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (TSASMParser.Equals_ - 33)) | (1 << (TSASMParser.NotEquals - 33)) | (1 << (TSASMParser.IdentityEquals - 33)) | (1 << (TSASMParser.IdentityNotEquals - 33)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 978;
						this.singleExpression(17);
						}
						break;

					case 6:
						{
						_localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 979;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 980;
						this.match(TSASMParser.BitAnd);
						this.state = 981;
						this.singleExpression(16);
						}
						break;

					case 7:
						{
						_localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 982;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 983;
						this.match(TSASMParser.BitXOr);
						this.state = 984;
						this.singleExpression(15);
						}
						break;

					case 8:
						{
						_localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 985;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 986;
						this.match(TSASMParser.BitOr);
						this.state = 987;
						this.singleExpression(14);
						}
						break;

					case 9:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 988;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 989;
						this.match(TSASMParser.And);
						this.state = 990;
						this.singleExpression(13);
						}
						break;

					case 10:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 991;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 992;
						this.match(TSASMParser.Or);
						this.state = 993;
						this.singleExpression(12);
						}
						break;

					case 11:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 994;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 995;
						this.match(TSASMParser.QuestionMark);
						this.state = 996;
						this.singleExpression(0);
						this.state = 997;
						this.match(TSASMParser.Colon);
						this.state = 998;
						this.singleExpression(11);
						}
						break;

					case 12:
						{
						_localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 1000;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1001;
						this.match(TSASMParser.Assign);
						this.state = 1002;
						this.singleExpression(10);
						}
						break;

					case 13:
						{
						_localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 1003;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1004;
						this.assignmentOperator();
						this.state = 1005;
						this.singleExpression(9);
						}
						break;

					case 14:
						{
						_localctx = new MemberIndexExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 1007;
						if (!(this.precpred(this._ctx, 34))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 34)");
						}
						this.state = 1008;
						this.match(TSASMParser.OpenBracket);
						this.state = 1009;
						this.expressionSequence();
						this.state = 1010;
						this.match(TSASMParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 1012;
						if (!(this.precpred(this._ctx, 33))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 33)");
						}
						this.state = 1013;
						this.match(TSASMParser.Dot);
						this.state = 1014;
						this.identifierName();
						this.state = 1016;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
						case 1:
							{
							this.state = 1015;
							this.nestedTypeGeneric();
							}
							break;
						}
						}
						break;

					case 16:
						{
						_localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 1018;
						if (!(this.precpred(this._ctx, 32))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 32)");
						}
						this.state = 1019;
						this.arguments();
						}
						break;

					case 17:
						{
						_localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 1020;
						if (!(this.precpred(this._ctx, 31))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
						}
						this.state = 1021;
						if (!(this.notLineTerminator())) {
							throw this.createFailedPredicateException("this.notLineTerminator()");
						}
						this.state = 1022;
						this.match(TSASMParser.PlusPlus);
						}
						break;

					case 18:
						{
						_localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 1023;
						if (!(this.precpred(this._ctx, 30))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 30)");
						}
						this.state = 1024;
						if (!(this.notLineTerminator())) {
							throw this.createFailedPredicateException("this.notLineTerminator()");
						}
						this.state = 1025;
						this.match(TSASMParser.MinusMinus);
						}
						break;

					case 19:
						{
						_localctx = new CastAsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TSASMParser.RULE_singleExpression);
						this.state = 1026;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1027;
						this.match(TSASMParser.As);
						this.state = 1028;
						this.asExpression();
						}
						break;
					}
					}
				}
				this.state = 1033;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asExpression(): AsExpressionContext {
		let _localctx: AsExpressionContext = new AsExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, TSASMParser.RULE_asExpression);
		try {
			this.state = 1040;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1034;
				this.predefinedType();
				this.state = 1037;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
				case 1:
					{
					this.state = 1035;
					this.match(TSASMParser.OpenBracket);
					this.state = 1036;
					this.match(TSASMParser.CloseBracket);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1039;
				this.singleExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionDeclaration(): ArrowFunctionDeclarationContext {
		let _localctx: ArrowFunctionDeclarationContext = new ArrowFunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, TSASMParser.RULE_arrowFunctionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1042;
			this.arrowFunctionParameters();
			this.state = 1044;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TSASMParser.Colon) {
				{
				this.state = 1043;
				this.typeAnnotation();
				}
			}

			this.state = 1046;
			this.match(TSASMParser.ARROW);
			this.state = 1047;
			this.arrowFunctionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		let _localctx: ArrowFunctionParametersContext = new ArrowFunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, TSASMParser.RULE_arrowFunctionParameters);
		let _la: number;
		try {
			this.state = 1055;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1049;
				this.match(TSASMParser.Identifier);
				}
				break;
			case TSASMParser.OpenParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1050;
				this.match(TSASMParser.OpenParen);
				this.state = 1052;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (TSASMParser.TypeAlias - 95)) | (1 << (TSASMParser.Require - 95)) | (1 << (TSASMParser.Identifier - 95)))) !== 0)) {
					{
					this.state = 1051;
					this.formalParameterList();
					}
				}

				this.state = 1054;
				this.match(TSASMParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		let _localctx: ArrowFunctionBodyContext = new ArrowFunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, TSASMParser.RULE_arrowFunctionBody);
		try {
			this.state = 1062;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1057;
				this.singleExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1058;
				this.match(TSASMParser.OpenBrace);
				this.state = 1059;
				this.functionBody();
				this.state = 1060;
				this.match(TSASMParser.CloseBrace);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, TSASMParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1064;
			_la = this._input.LA(1);
			if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (TSASMParser.MultiplyAssign - 42)) | (1 << (TSASMParser.DivideAssign - 42)) | (1 << (TSASMParser.ModulusAssign - 42)) | (1 << (TSASMParser.PlusAssign - 42)) | (1 << (TSASMParser.MinusAssign - 42)) | (1 << (TSASMParser.LeftShiftArithmeticAssign - 42)) | (1 << (TSASMParser.RightShiftArithmeticAssign - 42)) | (1 << (TSASMParser.RightShiftLogicalAssign - 42)) | (1 << (TSASMParser.BitAndAssign - 42)) | (1 << (TSASMParser.BitXorAssign - 42)) | (1 << (TSASMParser.BitOrAssign - 42)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, TSASMParser.RULE_literal);
		try {
			this.state = 1071;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.NullLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1066;
				this.match(TSASMParser.NullLiteral);
				}
				break;
			case TSASMParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1067;
				this.match(TSASMParser.BooleanLiteral);
				}
				break;
			case TSASMParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1068;
				this.match(TSASMParser.StringLiteral);
				}
				break;
			case TSASMParser.RegularExpressionLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1069;
				this.match(TSASMParser.RegularExpressionLiteral);
				}
				break;
			case TSASMParser.DecimalLiteral:
			case TSASMParser.HexIntegerLiteral:
			case TSASMParser.OctalIntegerLiteral:
			case TSASMParser.OctalIntegerLiteral2:
			case TSASMParser.BinaryIntegerLiteral:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1070;
				this.numericLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, TSASMParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1073;
			_la = this._input.LA(1);
			if (!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (TSASMParser.DecimalLiteral - 56)) | (1 << (TSASMParser.HexIntegerLiteral - 56)) | (1 << (TSASMParser.OctalIntegerLiteral - 56)) | (1 << (TSASMParser.OctalIntegerLiteral2 - 56)) | (1 << (TSASMParser.BinaryIntegerLiteral - 56)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierName(): IdentifierNameContext {
		let _localctx: IdentifierNameContext = new IdentifierNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, TSASMParser.RULE_identifierName);
		try {
			this.state = 1077;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1075;
				this.match(TSASMParser.Identifier);
				}
				break;
			case TSASMParser.NullLiteral:
			case TSASMParser.BooleanLiteral:
			case TSASMParser.Break:
			case TSASMParser.Typeof:
			case TSASMParser.Case:
			case TSASMParser.Else:
			case TSASMParser.Catch:
			case TSASMParser.Finally:
			case TSASMParser.Return:
			case TSASMParser.Void:
			case TSASMParser.Continue:
			case TSASMParser.For:
			case TSASMParser.Switch:
			case TSASMParser.While:
			case TSASMParser.Debugger:
			case TSASMParser.Default:
			case TSASMParser.If:
			case TSASMParser.Throw:
			case TSASMParser.Delete:
			case TSASMParser.In:
			case TSASMParser.Try:
			case TSASMParser.From:
			case TSASMParser.Enum:
			case TSASMParser.Extends:
			case TSASMParser.Const:
			case TSASMParser.Export:
			case TSASMParser.Import:
			case TSASMParser.Implements:
			case TSASMParser.Let:
			case TSASMParser.Interface:
			case TSASMParser.String:
			case TSASMParser.TypeAlias:
			case TSASMParser.Require:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1076;
				this.reservedWord();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierOrKeyWord(): IdentifierOrKeyWordContext {
		let _localctx: IdentifierOrKeyWordContext = new IdentifierOrKeyWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, TSASMParser.RULE_identifierOrKeyWord);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1079;
			_la = this._input.LA(1);
			if (!(((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (TSASMParser.TypeAlias - 95)) | (1 << (TSASMParser.Require - 95)) | (1 << (TSASMParser.Identifier - 95)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedWord(): ReservedWordContext {
		let _localctx: ReservedWordContext = new ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, TSASMParser.RULE_reservedWord);
		try {
			this.state = 1084;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TSASMParser.Break:
			case TSASMParser.Typeof:
			case TSASMParser.Case:
			case TSASMParser.Else:
			case TSASMParser.Catch:
			case TSASMParser.Finally:
			case TSASMParser.Return:
			case TSASMParser.Void:
			case TSASMParser.Continue:
			case TSASMParser.For:
			case TSASMParser.Switch:
			case TSASMParser.While:
			case TSASMParser.Debugger:
			case TSASMParser.Default:
			case TSASMParser.If:
			case TSASMParser.Throw:
			case TSASMParser.Delete:
			case TSASMParser.In:
			case TSASMParser.Try:
			case TSASMParser.From:
			case TSASMParser.Enum:
			case TSASMParser.Extends:
			case TSASMParser.Const:
			case TSASMParser.Export:
			case TSASMParser.Import:
			case TSASMParser.Implements:
			case TSASMParser.Let:
			case TSASMParser.Interface:
			case TSASMParser.String:
			case TSASMParser.TypeAlias:
			case TSASMParser.Require:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1081;
				this.keyword();
				}
				break;
			case TSASMParser.NullLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1082;
				this.match(TSASMParser.NullLiteral);
				}
				break;
			case TSASMParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1083;
				this.match(TSASMParser.BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, TSASMParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1086;
			_la = this._input.LA(1);
			if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (TSASMParser.Break - 61)) | (1 << (TSASMParser.Typeof - 61)) | (1 << (TSASMParser.Case - 61)) | (1 << (TSASMParser.Else - 61)) | (1 << (TSASMParser.Catch - 61)) | (1 << (TSASMParser.Finally - 61)) | (1 << (TSASMParser.Return - 61)) | (1 << (TSASMParser.Void - 61)) | (1 << (TSASMParser.Continue - 61)) | (1 << (TSASMParser.For - 61)) | (1 << (TSASMParser.Switch - 61)) | (1 << (TSASMParser.While - 61)) | (1 << (TSASMParser.Debugger - 61)) | (1 << (TSASMParser.Default - 61)) | (1 << (TSASMParser.If - 61)) | (1 << (TSASMParser.Throw - 61)) | (1 << (TSASMParser.Delete - 61)) | (1 << (TSASMParser.In - 61)) | (1 << (TSASMParser.Try - 61)) | (1 << (TSASMParser.From - 61)) | (1 << (TSASMParser.Enum - 61)) | (1 << (TSASMParser.Extends - 61)) | (1 << (TSASMParser.Const - 61)) | (1 << (TSASMParser.Export - 61)) | (1 << (TSASMParser.Import - 61)) | (1 << (TSASMParser.Implements - 61)) | (1 << (TSASMParser.Let - 61)) | (1 << (TSASMParser.Interface - 61)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (TSASMParser.String - 94)) | (1 << (TSASMParser.TypeAlias - 94)) | (1 << (TSASMParser.Require - 94)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, TSASMParser.RULE_eos);
		try {
			this.state = 1092;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1088;
				this.match(TSASMParser.SemiColon);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1089;
				this.match(TSASMParser.EOF);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1090;
				if (!(this.lineTerminatorAhead())) {
					throw this.createFailedPredicateException("this.lineTerminatorAhead()");
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1091;
				if (!(this.closeBrace())) {
					throw this.createFailedPredicateException("this.closeBrace()");
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.unionOrIntersectionOrPrimaryType_sempred(_localctx as UnionOrIntersectionOrPrimaryTypeContext, predIndex);

		case 11:
			return this.primaryType_sempred(_localctx as PrimaryTypeContext, predIndex);

		case 22:
			return this.arrayType_sempred(_localctx as ArrayTypeContext, predIndex);

		case 61:
			return this.expressionStatement_sempred(_localctx as ExpressionStatementContext, predIndex);

		case 65:
			return this.continueStatement_sempred(_localctx as ContinueStatementContext, predIndex);

		case 66:
			return this.breakStatement_sempred(_localctx as BreakStatementContext, predIndex);

		case 67:
			return this.returnStatement_sempred(_localctx as ReturnStatementContext, predIndex);

		case 73:
			return this.throwStatement_sempred(_localctx as ThrowStatementContext, predIndex);

		case 93:
			return this.singleExpression_sempred(_localctx as SingleExpressionContext, predIndex);

		case 105:
			return this.eos_sempred(_localctx as EosContext, predIndex);
		}
		return true;
	}
	private unionOrIntersectionOrPrimaryType_sempred(_localctx: UnionOrIntersectionOrPrimaryTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private primaryType_sempred(_localctx: PrimaryTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.notLineTerminator();
		}
		return true;
	}
	private arrayType_sempred(_localctx: ArrayTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.notLineTerminator();
		}
		return true;
	}
	private expressionStatement_sempred(_localctx: ExpressionStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.notOpenBrace();
		}
		return true;
	}
	private continueStatement_sempred(_localctx: ContinueStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.notLineTerminator();
		}
		return true;
	}
	private breakStatement_sempred(_localctx: BreakStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.notLineTerminator();
		}
		return true;
	}
	private returnStatement_sempred(_localctx: ReturnStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.notLineTerminator();
		}
		return true;
	}
	private throwStatement_sempred(_localctx: ThrowStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.notLineTerminator();
		}
		return true;
	}
	private singleExpression_sempred(_localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 20);

		case 11:
			return this.precpred(this._ctx, 19);

		case 12:
			return this.precpred(this._ctx, 18);

		case 13:
			return this.precpred(this._ctx, 17);

		case 14:
			return this.precpred(this._ctx, 16);

		case 15:
			return this.precpred(this._ctx, 15);

		case 16:
			return this.precpred(this._ctx, 14);

		case 17:
			return this.precpred(this._ctx, 13);

		case 18:
			return this.precpred(this._ctx, 12);

		case 19:
			return this.precpred(this._ctx, 11);

		case 20:
			return this.precpred(this._ctx, 10);

		case 21:
			return this.precpred(this._ctx, 9);

		case 22:
			return this.precpred(this._ctx, 8);

		case 23:
			return this.precpred(this._ctx, 34);

		case 24:
			return this.precpred(this._ctx, 33);

		case 25:
			return this.precpred(this._ctx, 32);

		case 26:
			return this.precpred(this._ctx, 31);

		case 27:
			return this.notLineTerminator();

		case 28:
			return this.precpred(this._ctx, 30);

		case 29:
			return this.notLineTerminator();

		case 30:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private eos_sempred(_localctx: EosContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return this.lineTerminatorAhead();

		case 32:
			return this.closeBrace();
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03m\u0449\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\xDC" +
		"\n\x03\x03\x04\x03\x04\x05\x04\xE0\n\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x07\x05\xE7\n\x05\f\x05\x0E\x05\xEA\v\x05\x03\x06\x03\x06\x05" +
		"\x06\xEE\n\x06\x03\x06\x05\x06\xF1\n\x06\x03\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x05\b\xF8\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\t\xFF\n\t\f\t\x0E" +
		"\t\u0102\v\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\v\u010A\n\v\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u0115\n\f\f\f\x0E" +
		"\f\u0118\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u012B\n\r\x03\r\x03" +
		"\r\x03\r\x03\r\x07\r\u0131\n\r\f\r\x0E\r\u0134\v\r\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x05\x0F\u013A\n\x0F\x03\x10\x03\x10\x05\x10\u013E\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x05\x12\u014D\n\x12\x03\x13\x03\x13\x05\x13" +
		"\u0151\n\x13\x03\x14\x03\x14\x05\x14\u0155\n\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x05\x15\u015B\n\x15\x03\x16\x03\x16\x03\x16\x07\x16\u0160\n\x16" +
		"\f\x16\x0E\x16\u0163\v\x16\x03\x17\x03\x17\x05\x17\u0167\n\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x03\x1A\x07\x1A\u0175\n\x1A\f\x1A\x0E\x1A\u0178\v\x1A\x03\x1B" +
		"\x05\x1B\u017B\n\x1B\x03\x1B\x03\x1B\x05\x1B\u017F\n\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x06\x1D\u018C\n\x1D\r\x1D\x0E\x1D\u018D\x03\x1D\x03\x1D\x05\x1D\u0192" +
		"\n\x1D\x03\x1E\x03\x1E\x05\x1E\u0196\n\x1E\x03\x1E\x05\x1E\u0199\n\x1E" +
		"\x03\x1E\x03\x1E\x05\x1E\u019D\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x05" +
		" \u01A3\n \x03 \x03 \x05 \u01A7\n \x03 \x03 \x05 \u01AB\n \x03!\x03!\x03" +
		"!\x07!\u01B0\n!\f!\x0E!\u01B3\v!\x03\"\x03\"\x03\"\x07\"\u01B8\n\"\f\"" +
		"\x0E\"\u01BB\v\"\x03#\x03#\x05#\u01BF\n#\x03$\x03$\x03$\x05$\u01C4\n$" +
		"\x03$\x05$\u01C7\n$\x03$\x05$\u01CA\n$\x03%\x03%\x05%\u01CE\n%\x03&\x03" +
		"&\x05&\u01D2\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03" +
		"(\x05(\u01DE\n(\x03(\x03(\x03(\x03(\x03)\x05)\u01E5\n)\x03)\x05)\u01E8" +
		"\n)\x03)\x03)\x03)\x05)\u01ED\n)\x03)\x05)\u01F0\n)\x03)\x03)\x05)\u01F4" +
		"\n)\x03*\x03*\x03*\x03+\x03+\x03+\x07+\u01FC\n+\f+\x0E+\u01FF\v+\x03," +
		"\x05,\u0202\n,\x03,\x03,\x03,\x03,\x05,\u0208\n,\x03,\x03,\x03-\x03-\x05" +
		"-\u020E\n-\x03.\x03.\x03.\x07.\u0213\n.\f.\x0E.\u0216\v.\x03/\x03/\x03" +
		"/\x05/\u021B\n/\x030\x030\x060\u021F\n0\r0\x0E0\u0220\x030\x070\u0224" +
		"\n0\f0\x0E0\u0227\v0\x031\x031\x031\x031\x031\x032\x052\u022F\n2\x032" +
		"\x032\x033\x053\u0234\n3\x033\x033\x034\x034\x034\x034\x034\x034\x034" +
		"\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
		"4\x054\u024D\n4\x035\x035\x055\u0251\n5\x035\x035\x036\x066\u0256\n6\r" +
		"6\x0E6\u0257\x037\x037\x037\x057\u025D\n7\x038\x038\x058\u0261\n8\x03" +
		"8\x038\x058\u0265\n8\x038\x038\x038\x038\x039\x039\x039\x059\u026E\n9" +
		"\x039\x039\x039\x039\x079\u0274\n9\f9\x0E9\u0277\v9\x039\x039\x03:\x03" +
		":\x05:\u027D\n:\x03:\x03:\x05:\u0281\n:\x03;\x03;\x05;\u0285\n;\x03;\x03" +
		";\x05;\u0289\n;\x03;\x05;\u028C\n;\x03;\x03;\x05;\u0290\n;\x03;\x03;\x05" +
		";\u0294\n;\x03;\x03;\x05;\u0298\n;\x05;\u029A\n;\x03<\x03<\x03<\x07<\u029F" +
		"\n<\f<\x0E<\u02A2\v<\x03=\x03=\x05=\u02A6\n=\x03=\x05=\u02A9\n=\x03=\x03" +
		"=\x05=\u02AD\n=\x03=\x05=\u02B0\n=\x03>\x03>\x03?\x03?\x03?\x05?\u02B7" +
		"\n?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u02C0\n@\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x05A\u02CB\nA\x03A\x03A\x05A\u02CF\nA\x03A" +
		"\x03A\x05A\u02D3\nA\x03A\x03A\x05A\u02D7\nA\x03B\x03B\x03C\x03C\x03C\x05" +
		"C\u02DE\nC\x03C\x03C\x03D\x03D\x03D\x05D\u02E5\nD\x03D\x03D\x03E\x03E" +
		"\x03E\x05E\u02EC\nE\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03G\x03G" +
		"\x05G\u02F8\nG\x03G\x03G\x05G\u02FC\nG\x05G\u02FE\nG\x03G\x03G\x03H\x06" +
		"H\u0303\nH\rH\x0EH\u0304\x03I\x03I\x03I\x03I\x05I\u030B\nI\x03J\x03J\x03" +
		"J\x05J\u0310\nJ\x03K\x03K\x03K\x03K\x03K\x03L\x03L\x03L\x03L\x05L\u031B" +
		"\nL\x03L\x05L\u031E\nL\x03M\x03M\x03M\x03M\x03M\x03M\x03N\x03N\x03N\x03" +
		"O\x03O\x03O\x03P\x03P\x03P\x03Q\x03Q\x03Q\x07Q\u0332\nQ\fQ\x0EQ\u0335" +
		"\vQ\x03R\x03R\x05R\u0339\nR\x03R\x05R\u033C\nR\x03R\x03R\x05R\u0340\n" +
		"R\x03S\x05S\u0343\nS\x03T\x06T\u0346\nT\rT\x0ET\u0347\x03U\x03U\x05U\u034C" +
		"\nU\x03U\x03U\x03V\x03V\x06V\u0352\nV\rV\x0EV\u0353\x03V\x07V\u0357\n" +
		"V\fV\x0EV\u035A\vV\x03W\x03W\x05W\u035E\nW\x03W\x05W\u0361\nW\x03X\x03" +
		"X\x03X\x03X\x07X\u0367\nX\fX\x0EX\u036A\vX\x03X\x05X\u036D\nX\x05X\u036F" +
		"\nX\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05" +
		"Y\u037E\nY\x03Z\x03Z\x03Z\x05Z\u0383\nZ\x03[\x03[\x03[\x05[\u0388\n[\x05" +
		"[\u038A\n[\x03[\x03[\x03\\\x03\\\x03\\\x07\\\u0391\n\\\f\\\x0E\\\u0394" +
		"\v\\\x03]\x03]\x05]\u0398\n]\x03^\x03^\x03^\x07^\u039D\n^\f^\x0E^\u03A0" +
		"\v^\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
		"_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x05_\u03B8\n_\x03_\x03_\x03" +
		"_\x03_\x03_\x03_\x03_\x03_\x03_\x05_\u03C3\n_\x05_\u03C5\n_\x03_\x03_" +
		"\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
		"_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
		"_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
		"_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x05_\u03FB\n_\x03_\x03_\x03" +
		"_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x07_\u0408\n_\f_\x0E_\u040B" +
		"\v_\x03`\x03`\x03`\x05`\u0410\n`\x03`\x05`\u0413\n`\x03a\x03a\x05a\u0417" +
		"\na\x03a\x03a\x03a\x03b\x03b\x03b\x05b\u041F\nb\x03b\x05b\u0422\nb\x03" +
		"c\x03c\x03c\x03c\x03c\x05c\u0429\nc\x03d\x03d\x03e\x03e\x03e\x03e\x03" +
		"e\x05e\u0432\ne\x03f\x03f\x03g\x03g\x05g\u0438\ng\x03h\x03h\x03i\x03i" +
		"\x03i\x05i\u043F\ni\x03j\x03j\x03k\x03k\x03k\x03k\x05k\u0447\nk\x03k\x04" +
		"\u01B1\u0333\x02\x05\x16\x18\xBCl\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
		"\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02" +
		"\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02" +
		"\xD0\x02\xD2\x02\xD4\x02\x02\x10\x04\x02GG]`\x03\x02\r\x0E\x04\x02^^`" +
		"`\x04\x02WW[[\x04\x02\x0F\x0F\x11\x11\x03\x02\x19\x1B\x03\x02\x15\x16" +
		"\x03\x02\x1C\x1E\x03\x02\x1F\"\x03\x02#&\x03\x02,6\x03\x02:>\x04\x02a" +
		"bgg\x06\x02??ART\\`b\x02\u04A2\x02\xD6\x03\x02\x02\x02\x04\xDB\x03\x02" +
		"\x02\x02\x06\xDD\x03\x02\x02\x02\b\xE3\x03\x02\x02\x02\n\xF0\x03\x02\x02" +
		"\x02\f\xF2\x03\x02\x02\x02\x0E\xF5\x03\x02\x02\x02\x10\xFB\x03\x02\x02" +
		"\x02\x12\u0103\x03\x02\x02\x02\x14\u0109\x03\x02\x02\x02\x16\u010B\x03" +
		"\x02\x02\x02\x18\u012A\x03\x02\x02\x02\x1A\u0135\x03\x02\x02\x02\x1C\u0137" +
		"\x03\x02\x02\x02\x1E\u013D\x03\x02\x02\x02 \u013F\x03\x02\x02\x02\"\u0143" +
		"\x03\x02\x02\x02$\u0150\x03\x02\x02\x02&\u0152\x03\x02\x02\x02(\u0158" +
		"\x03\x02\x02\x02*\u015C\x03\x02\x02\x02,\u0166\x03\x02\x02\x02.\u0168" +
		"\x03\x02\x02\x020\u016D\x03\x02\x02\x022\u0171\x03\x02\x02\x024\u017A" +
		"\x03\x02\x02\x026\u0184\x03\x02\x02\x028\u0191\x03\x02\x02\x02:\u0193" +
		"\x03\x02\x02\x02<\u019E\x03\x02\x02\x02>\u01A2\x03\x02\x02\x02@\u01AC" +
		"\x03\x02\x02\x02B\u01B4\x03\x02\x02\x02D\u01BE\x03\x02\x02\x02F\u01C0" +
		"\x03\x02\x02\x02H\u01CB\x03\x02\x02\x02J\u01D1\x03\x02\x02\x02L\u01D3" +
		"\x03\x02\x02\x02N\u01DA\x03\x02\x02\x02P\u01E4\x03\x02\x02\x02R\u01F5" +
		"\x03\x02\x02\x02T\u01F8\x03\x02\x02\x02V\u0201\x03\x02\x02\x02X\u020B" +
		"\x03\x02\x02\x02Z\u020F\x03\x02\x02\x02\\\u0217\x03\x02\x02\x02^\u021C" +
		"\x03\x02\x02\x02`\u0228\x03\x02\x02\x02b\u022E\x03\x02\x02\x02d\u0233" +
		"\x03\x02\x02\x02f\u024C\x03\x02\x02\x02h\u024E\x03\x02\x02\x02j\u0255" +
		"\x03\x02\x02\x02l\u0259\x03\x02\x02\x02n\u0260\x03\x02\x02\x02p\u026D" +
		"\x03\x02\x02\x02r\u027A\x03\x02\x02\x02t\u0299\x03\x02\x02\x02v\u029B" +
		"\x03\x02\x02\x02x\u02A3\x03\x02\x02\x02z\u02B1\x03\x02\x02\x02|\u02B3" +
		"\x03\x02\x02\x02~\u02B8\x03\x02\x02\x02\x80\u02D6\x03\x02\x02\x02\x82" +
		"\u02D8\x03\x02\x02\x02\x84\u02DA\x03\x02\x02\x02\x86\u02E1\x03\x02\x02" +
		"\x02\x88\u02E8\x03\x02\x02\x02\x8A\u02EF\x03\x02\x02\x02\x8C\u02F5\x03" +
		"\x02\x02\x02\x8E\u0302\x03\x02\x02\x02\x90\u0306\x03\x02\x02\x02\x92\u030C" +
		"\x03\x02\x02\x02\x94\u0311\x03\x02\x02\x02\x96\u0316\x03\x02\x02\x02\x98" +
		"\u031F\x03\x02\x02\x02\x9A\u0325\x03\x02\x02\x02\x9C\u0328\x03\x02\x02" +
		"\x02\x9E\u032B\x03\x02\x02\x02\xA0\u032E\x03\x02\x02\x02\xA2\u0336\x03" +
		"\x02\x02\x02\xA4\u0342\x03\x02\x02\x02\xA6\u0345\x03\x02\x02\x02\xA8\u0349" +
		"\x03\x02\x02\x02\xAA\u034F\x03\x02\x02\x02\xAC\u035D\x03\x02\x02\x02\xAE" +
		"\u0362\x03\x02\x02\x02\xB0\u037D\x03\x02\x02\x02\xB2\u0382\x03\x02\x02" +
		"\x02\xB4\u0384\x03\x02\x02\x02\xB6\u038D\x03\x02\x02\x02\xB8\u0397\x03" +
		"\x02\x02\x02\xBA\u0399\x03\x02\x02\x02\xBC\u03C4\x03\x02\x02\x02\xBE\u0412" +
		"\x03\x02\x02\x02\xC0\u0414\x03\x02\x02\x02\xC2\u0421\x03\x02\x02\x02\xC4" +
		"\u0428\x03\x02\x02\x02\xC6\u042A\x03\x02\x02\x02\xC8\u0431\x03\x02\x02" +
		"\x02\xCA\u0433\x03\x02\x02\x02\xCC\u0437\x03\x02\x02\x02\xCE\u0439\x03" +
		"\x02\x02\x02\xD0\u043E\x03\x02\x02\x02\xD2\u0440\x03\x02\x02\x02\xD4\u0446" +
		"\x03\x02\x02\x02\xD6\xD7\x07\x0F\x02\x02\xD7\xD8\x05\xBC_\x02\xD8\x03" +
		"\x03\x02\x02\x02\xD9\xDC\x05\xA8U\x02\xDA\xDC\x05\xAEX\x02\xDB\xD9\x03" +
		"\x02\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\x05\x03\x02\x02\x02\xDD\xDF\x07" +
		"\x1F\x02\x02\xDE\xE0\x05\b\x05\x02\xDF\xDE\x03\x02\x02\x02\xDF\xE0\x03" +
		"\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x07 \x02\x02\xE2\x07\x03" +
		"\x02\x02\x02\xE3\xE8\x05\n\x06\x02\xE4\xE5\x07\x0E\x02\x02\xE5\xE7\x05" +
		"\n\x06\x02\xE6\xE4\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03" +
		"\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\t\x03\x02\x02\x02\xEA\xE8\x03" +
		"\x02\x02\x02\xEB\xED\x07g\x02\x02\xEC\xEE\x05\f\x07\x02\xED\xEC\x03\x02" +
		"\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xF1\x05\x06" +
		"\x04\x02\xF0\xEB\x03\x02\x02\x02\xF0\xEF\x03\x02\x02\x02\xF1\v\x03\x02" +
		"\x02\x02\xF2\xF3\x07V\x02\x02\xF3\xF4\x05\x14\v\x02\xF4\r\x03\x02\x02" +
		"\x02\xF5\xF7\x07\x1F\x02\x02\xF6\xF8\x05\x10\t\x02\xF7\xF6\x03\x02\x02" +
		"\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x07 \x02" +
		"\x02\xFA\x0F\x03\x02\x02\x02\xFB\u0100\x05\x12\n\x02\xFC\xFD\x07\x0E\x02" +
		"\x02\xFD\xFF\x05\x12\n\x02\xFE\xFC\x03\x02\x02\x02\xFF\u0102\x03\x02\x02" +
		"\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\x11\x03" +
		"\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0103\u0104\x05\x14\v\x02\u0104" +
		"\x13\x03\x02\x02\x02\u0105\u010A\x05\x16\f\x02\u0106\u010A\x054\x1B\x02" +
		"\u0107\u010A\x05 \x11\x02\u0108\u010A\x07h\x02\x02\u0109\u0105\x03\x02" +
		"\x02\x02\u0109\u0106\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u0109" +
		"\u0108\x03\x02\x02\x02\u010A\x15\x03\x02\x02\x02\u010B\u010C\b\f\x01\x02" +
		"\u010C\u010D\x05\x18\r\x02\u010D\u0116\x03\x02\x02\x02\u010E\u010F\f\x05" +
		"\x02\x02\u010F\u0110\x07)\x02\x02\u0110\u0115\x05\x16\f\x06\u0111\u0112" +
		"\f\x04\x02\x02\u0112\u0113\x07\'\x02\x02\u0113\u0115\x05\x16\f\x05\u0114" +
		"\u010E\x03\x02\x02\x02\u0114\u0111\x03\x02\x02\x02\u0115\u0118\x03\x02" +
		"\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117" +
		"\x17\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011A\b\r\x01\x02" +
		"\u011A\u011B\x07\b\x02\x02\u011B\u011C\x05\x14\v\x02\u011C\u011D\x07\t" +
		"\x02\x02\u011D\u012B\x03\x02\x02\x02\u011E\u012B\x05\x1A\x0E\x02\u011F" +
		"\u012B\x05\x1C\x0F\x02\u0120\u012B\x05&\x14\x02\u0121\u0122\x07\x06\x02" +
		"\x02\u0122\u0123\x052\x1A\x02\u0123\u0124\x07\x07\x02\x02\u0124\u012B" +
		"\x03\x02\x02\x02\u0125\u012B\x056\x1C\x02\u0126\u0127\x05\x1C\x0F\x02" +
		"\u0127\u0128\x07e\x02\x02\u0128\u0129\x05\x18\r\x03\u0129\u012B\x03\x02" +
		"\x02\x02\u012A\u0119\x03\x02\x02\x02\u012A\u011E\x03\x02\x02\x02\u012A" +
		"\u011F\x03\x02\x02\x02\u012A\u0120\x03\x02\x02\x02\u012A\u0121\x03\x02" +
		"\x02\x02\u012A\u0125\x03\x02\x02\x02\u012A\u0126\x03\x02\x02\x02\u012B" +
		"\u0132\x03\x02\x02\x02\u012C\u012D\f\x06\x02\x02\u012D\u012E\x06\r\x05" +
		"\x02\u012E\u012F\x07\x06\x02\x02\u012F\u0131\x07\x07\x02\x02\u0130\u012C" +
		"\x03\x02\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02" +
		"\u0132\u0133\x03\x02\x02\x02\u0133\x19\x03\x02\x02\x02\u0134\u0132\x03" +
		"\x02\x02\x02\u0135\u0136\t\x02\x02\x02\u0136\x1B\x03\x02\x02\x02\u0137" +
		"\u0139\x05$\x13\x02\u0138\u013A\x05\x1E\x10\x02\u0139\u0138\x03\x02\x02" +
		"\x02\u0139\u013A\x03\x02\x02\x02\u013A\x1D\x03\x02\x02\x02\u013B\u013E" +
		"\x05\"\x12\x02\u013C\u013E\x05 \x11\x02\u013D\u013B\x03\x02\x02\x02\u013D" +
		"\u013C\x03\x02\x02\x02\u013E\x1F\x03\x02\x02\x02\u013F\u0140\x07\x1F\x02" +
		"\x02\u0140\u0141\x05\x10\t\x02\u0141\u0142\x07 \x02\x02\u0142!\x03\x02" +
		"\x02\x02\u0143\u0144\x07\x1F\x02\x02\u0144\u0145\x05\x10\t\x02\u0145\u0146" +
		"\x07\x1F\x02\x02\u0146\u014C\x05\x10\t\x02\u0147\u0148\x07 \x02\x02\u0148" +
		"\u0149\x05\x04\x03\x02\u0149\u014A\x07 \x02\x02\u014A\u014D\x03\x02\x02" +
		"\x02\u014B\u014D\x07\x1C\x02\x02\u014C\u0147\x03\x02\x02\x02\u014C\u014B" +
		"\x03\x02\x02\x02\u014D#\x03\x02\x02\x02\u014E\u0151\x07g\x02\x02\u014F" +
		"\u0151\x05^0\x02\u0150\u014E\x03\x02\x02\x02\u0150\u014F\x03\x02\x02\x02" +
		"\u0151%\x03\x02\x02\x02\u0152\u0154\x07\n\x02\x02\u0153\u0155\x05(\x15" +
		"\x02\u0154\u0153\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156" +
		"\x03\x02\x02\x02\u0156\u0157\x07\f\x02\x02\u0157\'\x03\x02\x02\x02\u0158" +
		"\u015A\x05*\x16\x02\u0159\u015B\t\x03\x02\x02\u015A\u0159\x03\x02\x02" +
		"\x02\u015A\u015B\x03\x02\x02\x02\u015B)\x03\x02\x02\x02\u015C\u0161\x05" +
		",\x17\x02\u015D\u015E\t\x03\x02\x02\u015E\u0160\x05,\x17\x02\u015F\u015D" +
		"\x03\x02\x02\x02\u0160\u0163\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02" +
		"\u0161\u0162\x03\x02\x02\x02\u0162+\x03\x02\x02\x02\u0163\u0161\x03\x02" +
		"\x02\x02\u0164\u0167\x05:\x1E\x02\u0165\u0167\x05L\'\x02\u0166\u0164\x03" +
		"\x02\x02\x02\u0166\u0165\x03\x02\x02\x02\u0167-\x03\x02\x02\x02\u0168" +
		"\u0169\x05\x18\r\x02\u0169\u016A\x06\x18\x06\x02\u016A\u016B\x07\x06\x02" +
		"\x02\u016B\u016C\x07\x07\x02\x02\u016C/\x03\x02\x02\x02\u016D\u016E\x07" +
		"\x06\x02\x02\u016E\u016F\x052\x1A\x02\u016F\u0170\x07\x07\x02\x02\u0170" +
		"1\x03\x02\x02\x02\u0171\u0176\x05\x14\v\x02\u0172\u0173\x07\x0E\x02\x02" +
		"\u0173\u0175\x05\x14\v\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0178\x03" +
		"\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177" +
		"3\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0179\u017B\x05\x06\x04" +
		"\x02\u017A\u0179\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C" +
		"\x03\x02\x02\x02\u017C\u017E\x07\b\x02\x02\u017D\u017F\x05@!\x02\u017E" +
		"\u017D\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0180\x03\x02" +
		"\x02\x02\u0180\u0181\x07\t\x02\x02\u0181\u0182\x077\x02\x02\u0182\u0183" +
		"\x05\x14\v\x02\u01835\x03\x02\x02\x02\u0184\u0185\x07A\x02\x02\u0185\u0186" +
		"\x058\x1D\x02\u01867\x03\x02\x02\x02\u0187\u0192\x07g\x02\x02\u0188\u0189" +
		"\x05\xCCg\x02\u0189\u018A\x07\x12\x02\x02\u018A\u018C\x03\x02\x02\x02" +
		"\u018B\u0188\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018B\x03" +
		"\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F" +
		"\u0190\x05\xCCg\x02\u0190\u0192\x03\x02\x02\x02\u0191\u0187\x03\x02\x02" +
		"\x02\u0191\u018B\x03\x02\x02\x02\u01929\x03\x02\x02\x02\u0193\u0195\x05" +
		"\xB2Z\x02\u0194\u0196\x07\x10\x02\x02\u0195\u0194\x03\x02\x02\x02\u0195" +
		"\u0196\x03\x02\x02\x02\u0196\u0198\x03\x02\x02\x02\u0197\u0199\x05<\x1F" +
		"\x02\u0198\u0197\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019C" +
		"\x03\x02\x02\x02\u019A\u019B\x077\x02\x02\u019B\u019D\x05\x14\v\x02\u019C" +
		"\u019A\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D;\x03\x02\x02" +
		"\x02\u019E\u019F\x07\x11\x02\x02\u019F\u01A0\x05\x14\v\x02\u01A0=\x03" +
		"\x02\x02\x02\u01A1\u01A3\x05\x06\x04\x02\u01A2\u01A1\x03\x02\x02\x02\u01A2" +
		"\u01A3\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A6\x07\b\x02" +
		"\x02\u01A5\u01A7\x05@!\x02\u01A6\u01A5\x03\x02\x02\x02\u01A6\u01A7\x03" +
		"\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AA\x07\t\x02\x02\u01A9" +
		"\u01AB\x05<\x1F\x02\u01AA\u01A9\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02" +
		"\x02\u01AB?\x03\x02\x02\x02\u01AC\u01B1\x05D#\x02\u01AD\u01AE\x07\x0E" +
		"\x02\x02\u01AE\u01B0\x05D#\x02\u01AF\u01AD\x03\x02\x02\x02\u01B0\u01B3" +
		"\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02" +
		"\u01B2A\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B4\u01B9\x05H%" +
		"\x02\u01B5\u01B6\x07\x0E\x02\x02\u01B6\u01B8\x05H%\x02\u01B7\u01B5\x03" +
		"\x02\x02\x02\u01B8\u01BB\x03\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02\u01B9" +
		"\u01BA\x03\x02\x02\x02\u01BAC\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02" +
		"\x02\u01BC\u01BF\x05H%\x02\u01BD\u01BF\x05F$\x02\u01BE\u01BC\x03\x02\x02" +
		"\x02\u01BE\u01BD\x03\x02\x02\x02\u01BFE\x03\x02\x02\x02\u01C0\u01C9\x05" +
		"J&\x02\u01C1\u01C3\x07\x10\x02\x02\u01C2\u01C4\x05<\x1F\x02\u01C3\u01C2" +
		"\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01CA\x03\x02\x02\x02" +
		"\u01C5\u01C7\x05<\x1F\x02\u01C6\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03" +
		"\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8";
	private static readonly _serializedATNSegment1: string =
		"\u01CA\x05\x02\x02\x02\u01C9\u01C1\x03\x02\x02\x02\u01C9\u01C6\x03\x02" +
		"\x02\x02\u01CAG\x03\x02\x02\x02\u01CB\u01CD\x05J&\x02\u01CC\u01CE\x05" +
		"<\x1F\x02\u01CD\u01CC\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE" +
		"I\x03\x02\x02\x02\u01CF\u01D2\x05\xCCg\x02\u01D0\u01D2\x05\x04\x03\x02" +
		"\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D0\x03\x02\x02\x02\u01D2K\x03\x02" +
		"\x02\x02\u01D3\u01D4\x07\x06\x02\x02\u01D4\u01D5\x07g\x02\x02\u01D5\u01D6" +
		"\x07\x11\x02\x02\u01D6\u01D7\t\x04\x02\x02\u01D7\u01D8\x07\x07\x02\x02" +
		"\u01D8\u01D9\x05<\x1F\x02\u01D9M\x03\x02\x02\x02\u01DA\u01DB\x07a\x02" +
		"\x02\u01DB\u01DD\x07g\x02\x02\u01DC\u01DE\x05\x06\x04\x02\u01DD\u01DC" +
		"\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02" +
		"\u01DF\u01E0\x07\x0F\x02\x02\u01E0\u01E1\x05\x14\v\x02\u01E1\u01E2\x07" +
		"\r\x02\x02\u01E2O\x03\x02\x02\x02\u01E3\u01E5\x07X\x02\x02\u01E4\u01E3" +
		"\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E7\x03\x02\x02\x02" +
		"\u01E6\u01E8\x07d\x02\x02\u01E7\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03" +
		"\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EA\x07\\\x02\x02\u01EA" +
		"\u01EC\x07g\x02\x02\u01EB\u01ED\x05\x06\x04\x02\u01EC\u01EB\x03\x02\x02" +
		"\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE\u01F0" +
		"\x05R*\x02\u01EF\u01EE\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0" +
		"\u01F1\x03\x02\x02\x02\u01F1\u01F3\x05&\x14\x02\u01F2\u01F4\x07\r\x02" +
		"\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4Q\x03" +
		"\x02\x02\x02\u01F5\u01F6\x07V\x02\x02\u01F6\u01F7\x05T+\x02\u01F7S\x03" +
		"\x02\x02\x02\u01F8\u01FD\x05\x1C\x0F\x02\u01F9\u01FA\x07\x0E\x02\x02\u01FA" +
		"\u01FC\x05\x1C\x0F\x02\u01FB\u01F9\x03\x02\x02\x02\u01FC\u01FF\x03\x02" +
		"\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE" +
		"U\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u0200\u0202\x07W\x02\x02" +
		"\u0201\u0200\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0203\x03" +
		"\x02\x02\x02\u0203\u0204\x07U\x02\x02\u0204\u0205\x07g\x02\x02\u0205\u0207" +
		"\x07\n\x02\x02\u0206\u0208\x05X-\x02\u0207\u0206\x03\x02\x02\x02\u0207" +
		"\u0208\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x07\f\x02" +
		"\x02\u020AW\x03\x02\x02\x02\u020B\u020D\x05Z.\x02\u020C\u020E\x07\x0E" +
		"\x02\x02\u020D\u020C\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E" +
		"Y\x03\x02\x02\x02\u020F\u0214\x05\\/\x02\u0210\u0211\x07\x0E\x02\x02\u0211" +
		"\u0213\x05\\/\x02\u0212\u0210\x03\x02\x02\x02\u0213\u0216\x03\x02\x02" +
		"\x02\u0214\u0212\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215[\x03" +
		"\x02\x02\x02\u0216\u0214\x03\x02\x02\x02\u0217\u021A\x05\xB2Z\x02\u0218" +
		"\u0219\x07\x0F\x02\x02\u0219\u021B\x05\xBC_\x02\u021A\u0218\x03\x02\x02" +
		"\x02\u021A\u021B\x03\x02\x02\x02\u021B]\x03\x02\x02\x02\u021C\u0225\x07" +
		"g\x02\x02\u021D\u021F\x07\x12\x02\x02\u021E\u021D\x03\x02\x02\x02\u021F" +
		"\u0220\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0220\u0221\x03\x02" +
		"\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0224\x07g\x02\x02\u0223\u021E" +
		"\x03\x02\x02\x02\u0224\u0227\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02" +
		"\u0225\u0226\x03\x02\x02\x02\u0226_\x03\x02\x02\x02\u0227\u0225\x03\x02" +
		"\x02\x02\u0228\u0229\x07g\x02\x02\u0229\u022A\x07\x0F\x02\x02\u022A\u022B" +
		"\x05^0\x02\u022B\u022C\x07\r\x02\x02\u022Ca\x03\x02\x02\x02\u022D\u022F" +
		"\x05\xA6T\x02\u022E\u022D\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02" +
		"\u022F\u0230\x03\x02\x02\x02\u0230\u0231\x07\x02\x02\x03\u0231c\x03\x02" +
		"\x02\x02\u0232\u0234\x07X\x02\x02\u0233\u0232\x03\x02\x02\x02\u0233\u0234" +
		"\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0236\x05f4\x02\u0236" +
		"e\x03\x02\x02\x02\u0237\u024D\x05h5\x02\u0238\u024D\x05l7\x02\u0239\u024D" +
		"\x05r:\x02\u023A\u024D\x05z>\x02\u023B\u024D\x05P)\x02\u023C\u024D\x05" +
		"~@\x02\u023D\u024D\x05\x80A\x02\u023E\u024D\x05\x84C\x02\u023F\u024D\x05" +
		"\x86D\x02\u0240\u024D\x05\x88E\x02\u0241\u024D\x05\x8AF\x02\u0242\u024D" +
		"\x05\x94K\x02\u0243\u024D\x05\x96L\x02\u0244\u024D\x05\x9CO\x02\u0245" +
		"\u024D\x05\xC0a\x02\u0246\u024D\x05t;\x02\u0247\u024D\x05N(\x02\u0248" +
		"\u024D\x05V,\x02\u0249\u024D\x05|?\x02\u024A\u024B\x07X\x02\x02\u024B" +
		"\u024D\x05f4\x02\u024C\u0237\x03\x02\x02\x02\u024C\u0238\x03\x02\x02\x02" +
		"\u024C\u0239\x03\x02\x02\x02\u024C\u023A\x03\x02\x02\x02\u024C\u023B\x03" +
		"\x02\x02\x02\u024C\u023C\x03\x02\x02\x02\u024C\u023D\x03\x02\x02\x02\u024C" +
		"\u023E\x03\x02\x02\x02\u024C\u023F\x03\x02\x02\x02\u024C\u0240\x03\x02" +
		"\x02\x02\u024C\u0241\x03\x02\x02\x02\u024C\u0242\x03\x02\x02\x02\u024C" +
		"\u0243\x03\x02\x02\x02\u024C\u0244\x03\x02\x02\x02\u024C\u0245\x03\x02" +
		"\x02\x02\u024C\u0246\x03\x02\x02\x02\u024C\u0247\x03\x02\x02\x02\u024C" +
		"\u0248\x03\x02\x02\x02\u024C\u0249\x03\x02\x02\x02\u024C\u024A\x03\x02" +
		"\x02\x02\u024Dg\x03\x02\x02\x02\u024E\u0250\x07\n\x02\x02\u024F\u0251" +
		"\x05j6\x02\u0250\u024F\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251" +
		"\u0252\x03\x02\x02\x02\u0252\u0253\x07\f\x02\x02\u0253i\x03\x02\x02\x02" +
		"\u0254\u0256\x05f4\x02\u0255\u0254\x03\x02\x02\x02\u0256\u0257\x03\x02" +
		"\x02\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258" +
		"k\x03\x02\x02\x02\u0259\u025C\x07Y\x02\x02\u025A\u025D\x05n8\x02\u025B" +
		"\u025D\x05`1\x02\u025C\u025A\x03\x02\x02\x02\u025C\u025B\x03\x02\x02\x02" +
		"\u025Dm\x03\x02\x02\x02\u025E\u0261\x07\x19\x02\x02\u025F\u0261\x05p9" +
		"\x02\u0260\u025E\x03\x02\x02\x02\u0260\u025F\x03\x02\x02\x02\u0261\u0264" +
		"\x03\x02\x02\x02\u0262\u0263\x07S\x02\x02\u0263\u0265\x05\xCCg\x02\u0264" +
		"\u0262\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0266\x03\x02" +
		"\x02\x02\u0266\u0267\x07T\x02\x02\u0267\u0268\x07h\x02\x02\u0268\u0269" +
		"\x05\xD4k\x02\u0269o\x03\x02\x02\x02\u026A\u026B\x05\xCCg\x02\u026B\u026C" +
		"\x07\x0E\x02\x02\u026C\u026E\x03\x02\x02\x02\u026D\u026A\x03\x02\x02\x02" +
		"\u026D\u026E\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F\u0270\x07" +
		"\n\x02\x02\u0270\u0275\x05\xCCg\x02\u0271\u0272\x07\x0E\x02\x02\u0272" +
		"\u0274\x05\xCCg\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0277\x03\x02\x02" +
		"\x02\u0275\u0273\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0278" +
		"\x03\x02\x02\x02\u0277\u0275\x03\x02\x02\x02\u0278\u0279\x07\f\x02\x02" +
		"\u0279q\x03\x02\x02\x02\u027A\u027C\x07X\x02\x02\u027B\u027D\x07M\x02" +
		"\x02\u027C\u027B\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u0280" +
		"\x03\x02\x02\x02\u027E\u0281\x05n8\x02\u027F\u0281\x05f4\x02\u0280\u027E" +
		"\x03\x02\x02\x02\u0280\u027F\x03\x02\x02\x02\u0281s\x03\x02\x02\x02\u0282" +
		"\u0284\x05\x04\x03\x02\u0283\u0285\x05<\x1F\x02\u0284\u0283\x03\x02\x02" +
		"\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0288" +
		"\x05\x02\x02\x02\u0287\u0289\x07\r\x02\x02\u0288\u0287\x03\x02\x02\x02" +
		"\u0288\u0289\x03\x02\x02\x02\u0289\u029A\x03\x02\x02\x02\u028A\u028C\x05" +
		"\x82B\x02\u028B\u028A\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C" +
		"\u028D\x03\x02\x02\x02\u028D\u028F\x05v<\x02\u028E\u0290\x07\r\x02\x02" +
		"\u028F\u028E\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u029A\x03" +
		"\x02\x02\x02\u0291\u0293\x07d\x02\x02\u0292\u0294\x05\x82B\x02\u0293\u0292" +
		"\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02" +
		"\u0295\u0297\x05v<\x02\u0296\u0298\x07\r\x02\x02\u0297\u0296\x03\x02\x02" +
		"\x02\u0297\u0298\x03\x02\x02\x02\u0298\u029A\x03\x02\x02\x02\u0299\u0282" +
		"\x03\x02\x02\x02\u0299\u028B\x03\x02\x02\x02\u0299\u0291\x03\x02\x02\x02" +
		"\u029Au\x03\x02\x02\x02\u029B\u02A0\x05x=\x02\u029C\u029D\x07\x0E\x02" +
		"\x02\u029D\u029F\x05x=\x02\u029E\u029C\x03\x02\x02\x02\u029F\u02A2\x03" +
		"\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1" +
		"w\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A3\u02A5\x05\xCEh\x02" +
		"\u02A4\u02A6\x05<\x1F\x02\u02A5\u02A4\x03\x02\x02\x02\u02A5\u02A6\x03" +
		"\x02\x02\x02\u02A6\u02A8\x03\x02\x02\x02\u02A7\u02A9\x05\xBC_\x02\u02A8" +
		"\u02A7\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AF\x03\x02" +
		"\x02\x02\u02AA\u02AC\x07\x0F\x02\x02\u02AB\u02AD\x05\x06\x04\x02\u02AC" +
		"\u02AB\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD\u02AE\x03\x02" +
		"\x02\x02\u02AE\u02B0\x05\xBC_\x02\u02AF\u02AA\x03\x02\x02\x02\u02AF\u02B0" +
		"\x03\x02\x02\x02\u02B0y\x03\x02\x02\x02\u02B1\u02B2\x07\r\x02\x02\u02B2" +
		"{\x03\x02\x02\x02\u02B3\u02B4\x06?\x07\x02\u02B4\u02B6\x05\xBA^\x02\u02B5" +
		"\u02B7\x07\r\x02\x02\u02B6\u02B5\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02" +
		"\x02\u02B7}\x03\x02\x02\x02\u02B8\u02B9\x07N\x02\x02\u02B9\u02BA\x07\b" +
		"\x02\x02\u02BA\u02BB\x05\xBA^\x02\u02BB\u02BC\x07\t\x02\x02\u02BC\u02BF" +
		"\x05f4\x02\u02BD\u02BE\x07C\x02\x02\u02BE\u02C0\x05f4\x02\u02BF\u02BD" +
		"\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\x7F\x03\x02\x02\x02" +
		"\u02C1\u02C2\x07K\x02\x02\u02C2\u02C3\x07\b\x02\x02\u02C3\u02C4\x05\xBA" +
		"^\x02\u02C4\u02C5\x07\t\x02\x02\u02C5\u02C6\x05f4\x02\u02C6\u02D7\x03" +
		"\x02\x02\x02\u02C7\u02C8\x07I\x02\x02\u02C8\u02CA\x07\b\x02\x02\u02C9" +
		"\u02CB\x05\xBA^\x02\u02CA\u02C9\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02" +
		"\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02CE\x07\r\x02\x02\u02CD\u02CF" +
		"\x05\xBA^\x02\u02CE\u02CD\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02" +
		"\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02D2\x07\r\x02\x02\u02D1\u02D3\x05" +
		"\xBA^\x02\u02D2\u02D1\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3" +
		"\u02D4\x03\x02\x02\x02\u02D4\u02D5\x07\t\x02\x02\u02D5\u02D7\x05f4\x02" +
		"\u02D6\u02C1\x03\x02\x02\x02\u02D6\u02C7\x03\x02\x02\x02\u02D7\x81\x03" +
		"\x02\x02\x02\u02D8\u02D9\t\x05\x02\x02\u02D9\x83\x03\x02\x02\x02\u02DA" +
		"\u02DD\x07H\x02\x02\u02DB\u02DC\x06C\b\x02\u02DC\u02DE\x07g\x02\x02\u02DD" +
		"\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02DF\x03\x02" +
		"\x02\x02\u02DF\u02E0\x05\xD4k\x02\u02E0\x85\x03\x02\x02\x02\u02E1\u02E4" +
		"\x07?\x02\x02\u02E2\u02E3\x06D\t\x02\u02E3\u02E5\x07g\x02\x02\u02E4\u02E2" +
		"\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02" +
		"\u02E6\u02E7\x05\xD4k\x02\u02E7\x87\x03\x02\x02\x02\u02E8\u02EB\x07F\x02" +
		"\x02\u02E9\u02EA\x06E\n\x02\u02EA\u02EC\x05\xBA^\x02\u02EB\u02E9\x03\x02" +
		"\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED" +
		"\u02EE\x05\xD4k\x02\u02EE\x89\x03\x02\x02\x02\u02EF\u02F0\x07J\x02\x02" +
		"\u02F0\u02F1\x07\b\x02\x02\u02F1\u02F2\x05\xBA^\x02\u02F2\u02F3\x07\t" +
		"\x02\x02\u02F3\u02F4\x05\x8CG\x02\u02F4\x8B\x03\x02\x02\x02\u02F5\u02F7" +
		"\x07\n\x02\x02\u02F6\u02F8\x05\x8EH\x02\u02F7\u02F6\x03\x02\x02\x02\u02F7" +
		"\u02F8\x03\x02\x02\x02\u02F8\u02FD\x03\x02\x02\x02\u02F9\u02FB\x05\x92" +
		"J\x02\u02FA\u02FC\x05\x8EH\x02\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC" +
		"\x03\x02\x02\x02\u02FC\u02FE\x03\x02\x02\x02\u02FD\u02F9\x03\x02\x02\x02" +
		"\u02FD\u02FE\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0300\x07" +
		"\f\x02\x02\u0300\x8D\x03\x02\x02\x02\u0301\u0303\x05\x90I\x02\u0302\u0301" +
		"\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02" +
		"\u0304\u0305\x03\x02\x02\x02\u0305\x8F\x03\x02\x02\x02\u0306\u0307\x07" +
		"B\x02\x02\u0307\u0308\x05\xBA^\x02\u0308\u030A\x07\x11\x02\x02\u0309\u030B" +
		"\x05j6\x02\u030A\u0309\x03\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B" +
		"\x91\x03\x02\x02\x02\u030C\u030D\x07M\x02\x02\u030D\u030F\x07\x11\x02" +
		"\x02\u030E\u0310\x05j6\x02\u030F\u030E\x03\x02\x02\x02\u030F\u0310\x03" +
		"\x02\x02\x02\u0310\x93\x03\x02\x02\x02\u0311\u0312\x07O\x02\x02\u0312" +
		"\u0313\x06K\v\x02\u0313\u0314\x05\xBA^\x02\u0314\u0315\x05\xD4k\x02\u0315" +
		"\x95\x03\x02\x02\x02\u0316\u0317\x07R\x02\x02\u0317\u031D\x05h5\x02\u0318" +
		"\u031A\x05\x98M\x02\u0319\u031B\x05\x9AN\x02\u031A\u0319\x03\x02\x02\x02" +
		"\u031A\u031B\x03\x02\x02\x02\u031B\u031E\x03\x02\x02\x02\u031C\u031E\x05" +
		"\x9AN\x02\u031D\u0318\x03\x02\x02\x02\u031D\u031C\x03\x02\x02\x02\u031E" +
		"\x97\x03\x02\x02\x02\u031F\u0320\x07D\x02\x02\u0320\u0321\x07\b\x02\x02" +
		"\u0321\u0322\x07g\x02\x02\u0322\u0323\x07\t\x02\x02\u0323\u0324\x05h5" +
		"\x02\u0324\x99\x03\x02\x02\x02\u0325\u0326\x07E\x02\x02\u0326\u0327\x05" +
		"h5\x02\u0327\x9B\x03\x02\x02\x02\u0328\u0329\x07L\x02\x02\u0329\u032A" +
		"\x05\xD4k\x02\u032A\x9D\x03\x02\x02\x02\u032B\u032C\x05L\'\x02\u032C\u032D" +
		"\x07\r\x02\x02\u032D\x9F\x03\x02\x02\x02\u032E\u0333\x05\xA2R\x02\u032F" +
		"\u0330\x07\x0E\x02\x02\u0330\u0332\x05\xA2R\x02\u0331\u032F\x03\x02\x02" +
		"\x02\u0332\u0335\x03\x02\x02\x02\u0333\u0334\x03\x02\x02\x02\u0333\u0331" +
		"\x03\x02\x02\x02\u0334\xA1\x03\x02\x02\x02\u0335\u0333\x03\x02\x02\x02" +
		"\u0336\u0338\x05\xCEh\x02\u0337\u0339\x07\x10\x02\x02\u0338\u0337\x03" +
		"\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\u033B\x03\x02\x02\x02\u033A" +
		"\u033C\x05<\x1F\x02\u033B\u033A\x03\x02\x02\x02\u033B\u033C\x03\x02\x02" +
		"\x02\u033C\u033F\x03\x02\x02\x02\u033D\u033E\x07\x0F\x02\x02\u033E\u0340" +
		"\x05\xBC_\x02\u033F\u033D\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02" +
		"\u0340\xA3\x03\x02\x02\x02\u0341\u0343\x05\xA6T\x02\u0342\u0341\x03\x02" +
		"\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343\xA5\x03\x02\x02\x02\u0344\u0346" +
		"\x05d3\x02\u0345\u0344\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347" +
		"\u0345\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348\xA7\x03\x02\x02" +
		"\x02\u0349\u034B\x07\x06\x02\x02\u034A\u034C\x05\xAAV\x02\u034B\u034A" +
		"\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02" +
		"\u034D\u034E\x07\x07\x02\x02\u034E\xA9\x03\x02\x02\x02\u034F\u0358\x05" +
		"\xACW\x02\u0350\u0352\x07\x0E\x02\x02\u0351\u0350\x03\x02\x02\x02\u0352" +
		"\u0353\x03\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0353\u0354\x03\x02" +
		"\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\u0357\x05\xACW\x02\u0356\u0351" +
		"\x03\x02\x02\x02\u0357\u035A\x03\x02\x02\x02\u0358\u0356\x03\x02\x02\x02" +
		"\u0358\u0359\x03\x02\x02\x02\u0359\xAB\x03\x02\x02\x02\u035A\u0358\x03" +
		"\x02\x02\x02\u035B\u035E\x05\xBC_\x02\u035C\u035E\x07g\x02\x02\u035D\u035B" +
		"\x03\x02\x02\x02\u035D\u035C\x03\x02\x02\x02\u035E\u0360\x03\x02\x02\x02" +
		"\u035F\u0361\x07\x0E\x02\x02\u0360\u035F\x03\x02\x02\x02\u0360\u0361\x03" +
		"\x02\x02\x02\u0361\xAD\x03\x02\x02\x02\u0362\u036E\x07\n\x02\x02\u0363" +
		"\u0368\x05\xB0Y\x02\u0364\u0365\x07\x0E\x02\x02\u0365\u0367\x05\xB0Y\x02" +
		"\u0366\u0364\x03\x02\x02\x02\u0367\u036A\x03\x02\x02\x02\u0368\u0366\x03" +
		"\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369\u036C\x03\x02\x02\x02\u036A" +
		"\u0368\x03\x02\x02\x02\u036B\u036D\x07\x0E\x02\x02\u036C\u036B\x03\x02" +
		"\x02\x02\u036C\u036D\x03\x02\x02\x02\u036D\u036F\x03\x02\x02\x02\u036E" +
		"\u0363\x03\x02\x02\x02\u036E\u036F\x03\x02\x02\x02\u036F\u0370\x03\x02" +
		"\x02\x02\u0370\u0371\x07\f\x02\x02\u0371\xAF\x03\x02\x02\x02\u0372\u0373" +
		"\x05\xB2Z\x02\u0373\u0374\t\x06\x02\x02\u0374\u0375\x05\xBC_\x02\u0375" +
		"\u037E\x03\x02\x02\x02\u0376\u0377\x07\x06\x02\x02\u0377\u0378\x05\xBC" +
		"_\x02\u0378\u0379\x07\x07\x02\x02\u0379\u037A\x07\x11\x02\x02\u037A\u037B" +
		"\x05\xBC_\x02\u037B\u037E\x03\x02\x02\x02\u037C\u037E\x05\xCEh\x02\u037D" +
		"\u0372\x03\x02\x02\x02\u037D\u0376\x03\x02\x02\x02\u037D\u037C\x03\x02" +
		"\x02\x02\u037E\xB1\x03\x02\x02\x02\u037F\u0383\x05\xCCg\x02\u0380\u0383" +
		"\x07h\x02\x02\u0381\u0383\x05\xCAf\x02\u0382\u037F\x03\x02\x02\x02\u0382" +
		"\u0380\x03\x02\x02\x02\u0382\u0381\x03\x02\x02\x02\u0383\xB3\x03\x02\x02" +
		"\x02\u0384\u0389\x07\b\x02\x02\u0385\u0387\x05\xB6\\\x02\u0386\u0388\x07" +
		"\x0E\x02\x02\u0387\u0386\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388" +
		"\u038A\x03\x02\x02\x02\u0389\u0385\x03\x02\x02\x02\u0389\u038A\x03\x02" +
		"\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\u038C\x07\t\x02\x02\u038C\xB5" +
		"\x03\x02\x02\x02\u038D\u0392\x05\xB8]\x02\u038E\u038F\x07\x0E\x02\x02" +
		"\u038F\u0391\x05\xB8]\x02\u0390\u038E\x03\x02\x02\x02\u0391\u0394\x03" +
		"\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393" +
		"\xB7\x03\x02\x02\x02\u0394\u0392\x03\x02\x02\x02\u0395\u0398\x05\xBC_" +
		"\x02\u0396\u0398\x07g\x02\x02\u0397\u0395\x03\x02\x02\x02\u0397\u0396" +
		"\x03\x02\x02\x02\u0398\xB9\x03\x02\x02\x02\u0399\u039E\x05\xBC_\x02\u039A" +
		"\u039B\x07\x0E\x02\x02\u039B\u039D\x05\xBC_\x02\u039C\u039A\x03\x02\x02" +
		"\x02\u039D\u03A0\x03\x02\x02\x02\u039E\u039C\x03\x02\x02\x02\u039E\u039F" +
		"\x03\x02\x02\x02\u039F\xBB\x03\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02" +
		"\u03A1\u03A2\b_\x01\x02\u03A2\u03C5\x05\xC0a\x02\u03A3\u03A4\x07P\x02" +
		"\x02\u03A4\u03C5\x05\xBC_\x1F\u03A5\u03A6\x07G\x02\x02\u03A6\u03C5\x05" +
		"\xBC_\x1E\u03A7\u03A8\x07A\x02\x02\u03A8\u03C5\x05\xBC_\x1D\u03A9\u03AA" +
		"\x07\x13\x02\x02\u03AA\u03C5\x05\xBC_\x1C\u03AB\u03AC\x07\x14\x02\x02" +
		"\u03AC\u03C5\x05\xBC_\x1B\u03AD\u03AE\x07\x15\x02\x02\u03AE\u03C5\x05" +
		"\xBC_\x1A\u03AF\u03B0\x07\x16\x02\x02\u03B0\u03C5\x05\xBC_\x19\u03B1\u03B2" +
		"\x07\x17\x02\x02\u03B2\u03C5\x05\xBC_\x18\u03B3\u03B4\x07\x18\x02\x02" +
		"\u03B4\u03C5\x05\xBC_\x17\u03B5\u03B7\x05\xCCg\x02\u03B6\u03B8\x05\xBC" +
		"_\x02\u03B7\u03B6\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8\u03C5" +
		"\x03\x02\x02\x02\u03B9\u03C5\x05\xC8e\x02\u03BA\u03C5\x05\xA8U\x02\u03BB" +
		"\u03C5\x05\xAEX\x02\u03BC\u03BD\x07\b\x02\x02\u03BD\u03BE\x05\xBA^\x02" +
		"\u03BE\u03BF\x07\t\x02\x02\u03BF\u03C5\x03\x02\x02\x02\u03C0\u03C2\x05" +
		"\x0E\b\x02\u03C1\u03C3\x05\xBA^\x02\u03C2\u03C1\x03\x02\x02\x02\u03C2" +
		"\u03C3\x03\x02\x02\x02\u03C3\u03C5\x03\x02\x02\x02\u03C4\u03A1\x03\x02" +
		"\x02\x02\u03C4\u03A3\x03\x02\x02\x02\u03C4\u03A5\x03\x02\x02\x02\u03C4" +
		"\u03A7\x03\x02\x02\x02\u03C4\u03A9\x03\x02\x02\x02\u03C4\u03AB\x03\x02" +
		"\x02\x02\u03C4\u03AD\x03\x02\x02\x02\u03C4\u03AF\x03\x02\x02\x02\u03C4" +
		"\u03B1\x03\x02\x02\x02\u03C4\u03B3\x03\x02\x02\x02\u03C4\u03B5\x03\x02" +
		"\x02\x02\u03C4\u03B9\x03\x02\x02\x02\u03C4\u03BA\x03\x02\x02\x02\u03C4" +
		"\u03BB\x03\x02\x02\x02\u03C4\u03BC\x03\x02\x02\x02\u03C4\u03C0\x03\x02" +
		"\x02\x02\u03C5\u0409\x03\x02\x02\x02\u03C6\u03C7\f\x16\x02\x02\u03C7\u03C8" +
		"\t\x07\x02\x02\u03C8\u0408\x05\xBC_\x17\u03C9\u03CA\f\x15\x02\x02\u03CA" +
		"\u03CB\t\b\x02\x02\u03CB\u0408\x05\xBC_\x16\u03CC\u03CD\f\x14\x02\x02" +
		"\u03CD\u03CE\t\t\x02\x02\u03CE\u0408\x05\xBC_\x15\u03CF\u03D0\f\x13\x02" +
		"\x02\u03D0\u03D1\t\n\x02\x02\u03D1\u0408\x05\xBC_\x14\u03D2\u03D3\f\x12" +
		"\x02\x02\u03D3\u03D4\t\v\x02\x02\u03D4\u0408\x05\xBC_\x13\u03D5\u03D6" +
		"\f\x11\x02\x02\u03D6\u03D7\x07\'\x02\x02\u03D7\u0408\x05\xBC_\x12\u03D8" +
		"\u03D9\f\x10\x02\x02\u03D9\u03DA\x07(\x02\x02\u03DA\u0408\x05\xBC_\x11" +
		"\u03DB\u03DC\f\x0F\x02\x02\u03DC\u03DD\x07)\x02\x02\u03DD\u0408\x05\xBC" +
		"_\x10\u03DE\u03DF\f\x0E\x02\x02\u03DF\u03E0\x07*\x02\x02\u03E0\u0408\x05" +
		"\xBC_\x0F\u03E1\u03E2\f\r\x02\x02\u03E2\u03E3\x07+\x02\x02\u03E3\u0408" +
		"\x05\xBC_\x0E\u03E4\u03E5\f\f\x02\x02\u03E5\u03E6\x07\x10\x02\x02\u03E6" +
		"\u03E7\x05\xBC_\x02\u03E7\u03E8\x07\x11\x02\x02\u03E8\u03E9\x05\xBC_\r" +
		"\u03E9\u0408\x03\x02\x02\x02\u03EA\u03EB\f\v\x02\x02\u03EB\u03EC\x07\x0F" +
		"\x02\x02\u03EC\u0408\x05\xBC_\f\u03ED\u03EE\f\n\x02\x02\u03EE\u03EF\x05" +
		"\xC6d\x02\u03EF\u03F0\x05\xBC_\v\u03F0\u0408\x03\x02\x02\x02\u03F1\u03F2" +
		"\f$\x02\x02\u03F2\u03F3\x07\x06\x02\x02\u03F3\u03F4\x05\xBA^\x02\u03F4" +
		"\u03F5\x07\x07\x02\x02\u03F5\u0408\x03\x02\x02\x02\u03F6\u03F7\f#\x02" +
		"\x02\u03F7\u03F8\x07\x12\x02\x02\u03F8\u03FA\x05\xCCg\x02\u03F9\u03FB" +
		"\x05\x1E\x10\x02\u03FA\u03F9\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02" +
		"\u03FB\u0408\x03\x02\x02\x02\u03FC\u03FD\f\"\x02\x02\u03FD\u0408\x05\xB4" +
		"[\x02\u03FE\u03FF\f!\x02\x02\u03FF\u0400\x06_\x1D\x02\u0400\u0408\x07" +
		"\x13\x02\x02\u0401\u0402\f \x02\x02\u0402\u0403\x06_\x1F\x02\u0403\u0408" +
		"\x07\x14\x02\x02\u0404\u0405\f\x03\x02\x02\u0405\u0406\x07S\x02\x02\u0406" +
		"\u0408\x05\xBE`\x02\u0407\u03C6\x03\x02\x02\x02\u0407\u03C9\x03\x02\x02" +
		"\x02\u0407\u03CC\x03\x02\x02\x02\u0407\u03CF\x03\x02\x02\x02\u0407\u03D2" +
		"\x03\x02\x02\x02\u0407\u03D5\x03\x02\x02\x02\u0407\u03D8\x03\x02\x02\x02" +
		"\u0407\u03DB\x03\x02\x02\x02\u0407\u03DE\x03\x02\x02\x02\u0407\u03E1\x03" +
		"\x02\x02\x02\u0407\u03E4\x03\x02\x02\x02\u0407\u03EA\x03\x02\x02\x02\u0407" +
		"\u03ED\x03\x02\x02\x02\u0407\u03F1\x03\x02\x02\x02\u0407\u03F6\x03\x02" +
		"\x02\x02\u0407\u03FC\x03\x02\x02\x02\u0407\u03FE\x03\x02\x02\x02\u0407" +
		"\u0401\x03\x02\x02\x02\u0407\u0404\x03\x02\x02\x02\u0408\u040B\x03\x02" +
		"\x02\x02\u0409\u0407\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A" +
		"\xBD\x03\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040C\u040F\x05\x1A\x0E" +
		"\x02\u040D\u040E\x07\x06\x02\x02\u040E\u0410\x07\x07\x02\x02\u040F\u040D" +
		"\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0413\x03\x02\x02\x02" +
		"\u0411\u0413\x05\xBC_\x02\u0412\u040C\x03\x02\x02\x02\u0412\u0411\x03" +
		"\x02\x02\x02\u0413\xBF\x03\x02\x02\x02\u0414\u0416\x05\xC2b\x02\u0415" +
		"\u0417\x05<\x1F\x02\u0416\u0415\x03\x02\x02\x02\u0416\u0417\x03\x02\x02" +
		"\x02\u0417\u0418\x03\x02\x02\x02\u0418\u0419\x077\x02\x02\u0419\u041A" +
		"\x05\xC4c\x02\u041A\xC1\x03\x02\x02\x02\u041B\u0422\x07g\x02\x02\u041C" +
		"\u041E\x07\b\x02\x02\u041D\u041F\x05\xA0Q\x02\u041E\u041D\x03\x02\x02" +
		"\x02\u041E\u041F\x03\x02\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420\u0422" +
		"\x07\t\x02\x02\u0421\u041B\x03\x02\x02\x02\u0421\u041C\x03\x02\x02\x02" +
		"\u0422\xC3\x03\x02\x02\x02\u0423\u0429\x05\xBC_\x02\u0424\u0425\x07\n" +
		"\x02\x02\u0425\u0426\x05\xA4S\x02\u0426\u0427\x07\f\x02\x02\u0427\u0429" +
		"\x03\x02\x02\x02\u0428\u0423\x03\x02\x02\x02\u0428\u0424\x03\x02\x02\x02" +
		"\u0429\xC5\x03\x02\x02\x02\u042A\u042B\t\f\x02\x02\u042B\xC7\x03\x02\x02" +
		"\x02\u042C\u0432\x078\x02\x02\u042D\u0432\x079\x02\x02\u042E\u0432\x07" +
		"h\x02\x02\u042F\u0432\x07\x05\x02\x02\u0430\u0432\x05\xCAf\x02\u0431\u042C" +
		"\x03\x02\x02\x02\u0431\u042D\x03\x02\x02\x02\u0431\u042E\x03\x02\x02\x02" +
		"\u0431\u042F\x03\x02\x02\x02\u0431\u0430\x03\x02\x02\x02\u0432\xC9\x03" +
		"\x02\x02\x02\u0433\u0434\t\r\x02\x02\u0434\xCB\x03\x02\x02\x02\u0435\u0438" +
		"\x07g\x02\x02\u0436\u0438\x05\xD0i\x02\u0437\u0435\x03\x02\x02\x02\u0437" +
		"\u0436\x03\x02\x02\x02\u0438\xCD\x03\x02\x02\x02\u0439\u043A\t\x0E\x02" +
		"\x02\u043A\xCF\x03\x02\x02\x02\u043B\u043F\x05\xD2j\x02\u043C\u043F\x07" +
		"8\x02\x02\u043D\u043F\x079\x02\x02\u043E\u043B\x03\x02\x02\x02\u043E\u043C" +
		"\x03\x02\x02\x02\u043E\u043D\x03\x02\x02\x02\u043F\xD1\x03\x02\x02\x02" +
		"\u0440\u0441\t\x0F\x02\x02\u0441\xD3\x03\x02\x02\x02\u0442\u0447\x07\r" +
		"\x02\x02\u0443\u0447\x07\x02\x02\x03\u0444\u0447\x06k!\x02\u0445\u0447" +
		"\x06k\"\x02\u0446\u0442\x03\x02\x02\x02\u0446\u0443\x03\x02\x02\x02\u0446" +
		"\u0444\x03\x02\x02\x02\u0446\u0445\x03\x02\x02\x02\u0447\xD5\x03\x02\x02" +
		"\x02\x85\xDB\xDF\xE8\xED\xF0\xF7\u0100\u0109\u0114\u0116\u012A\u0132\u0139" +
		"\u013D\u014C\u0150\u0154\u015A\u0161\u0166\u0176\u017A\u017E\u018D\u0191" +
		"\u0195\u0198\u019C\u01A2\u01A6\u01AA\u01B1\u01B9\u01BE\u01C3\u01C6\u01C9" +
		"\u01CD\u01D1\u01DD\u01E4\u01E7\u01EC\u01EF\u01F3\u01FD\u0201\u0207\u020D" +
		"\u0214\u021A\u0220\u0225\u022E\u0233\u024C\u0250\u0257\u025C\u0260\u0264" +
		"\u026D\u0275\u027C\u0280\u0284\u0288\u028B\u028F\u0293\u0297\u0299\u02A0" +
		"\u02A5\u02A8\u02AC\u02AF\u02B6\u02BF\u02CA\u02CE\u02D2\u02D6\u02DD\u02E4" +
		"\u02EB\u02F7\u02FB\u02FD\u0304\u030A\u030F\u031A\u031D\u0333\u0338\u033B" +
		"\u033F\u0342\u0347\u034B\u0353\u0358\u035D\u0360\u0368\u036C\u036E\u037D" +
		"\u0382\u0387\u0389\u0392\u0397\u039E\u03B7\u03C2\u03C4\u03FA\u0407\u0409" +
		"\u040F\u0412\u0416\u041E\u0421\u0428\u0431\u0437\u043E\u0446";
	public static readonly _serializedATN: string = Utils.join(
		[
			TSASMParser._serializedATNSegment0,
			TSASMParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TSASMParser.__ATN) {
			TSASMParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TSASMParser._serializedATN));
		}

		return TSASMParser.__ATN;
	}

}

export class InitializerContext extends ParserRuleContext {
	public Assign(): TerminalNode { return this.getToken(TSASMParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_initializer; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitInitializer) {
			return visitor.visitInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BindingPatternContext extends ParserRuleContext {
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_bindingPattern; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterBindingPattern) {
			listener.enterBindingPattern(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitBindingPattern) {
			listener.exitBindingPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitBindingPattern) {
			return visitor.visitBindingPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public LessThan(): TerminalNode { return this.getToken(TSASMParser.LessThan, 0); }
	public MoreThan(): TerminalNode { return this.getToken(TSASMParser.MoreThan, 0); }
	public typeParameterList(): TypeParameterListContext | undefined {
		return this.tryGetRuleContext(0, TypeParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterListContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeParameterList; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeParameterList) {
			listener.enterTypeParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeParameterList) {
			listener.exitTypeParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeParameterList) {
			return visitor.visitTypeParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Identifier, 0); }
	public constraint(): ConstraintContext | undefined {
		return this.tryGetRuleContext(0, ConstraintContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstraintContext extends ParserRuleContext {
	public Extends(): TerminalNode { return this.getToken(TSASMParser.Extends, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_constraint; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterConstraint) {
			listener.enterConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitConstraint) {
			listener.exitConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitConstraint) {
			return visitor.visitConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LessThan(): TerminalNode { return this.getToken(TSASMParser.LessThan, 0); }
	public MoreThan(): TerminalNode { return this.getToken(TSASMParser.MoreThan, 0); }
	public typeArgumentList(): TypeArgumentListContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentListContext extends ParserRuleContext {
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeArgumentList; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeArgumentList) {
			listener.enterTypeArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeArgumentList) {
			listener.exitTypeArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentList) {
			return visitor.visitTypeArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeArgument; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeArgument) {
			listener.enterTypeArgument(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeArgument) {
			listener.exitTypeArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public unionOrIntersectionOrPrimaryType(): UnionOrIntersectionOrPrimaryTypeContext | undefined {
		return this.tryGetRuleContext(0, UnionOrIntersectionOrPrimaryTypeContext);
	}
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public typeGeneric(): TypeGenericContext | undefined {
		return this.tryGetRuleContext(0, TypeGenericContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_type_; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionOrIntersectionOrPrimaryTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_unionOrIntersectionOrPrimaryType; }
	public copyFrom(ctx: UnionOrIntersectionOrPrimaryTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class UnionContext extends UnionOrIntersectionOrPrimaryTypeContext {
	public unionOrIntersectionOrPrimaryType(): UnionOrIntersectionOrPrimaryTypeContext[];
	public unionOrIntersectionOrPrimaryType(i: number): UnionOrIntersectionOrPrimaryTypeContext;
	public unionOrIntersectionOrPrimaryType(i?: number): UnionOrIntersectionOrPrimaryTypeContext | UnionOrIntersectionOrPrimaryTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnionOrIntersectionOrPrimaryTypeContext);
		} else {
			return this.getRuleContext(i, UnionOrIntersectionOrPrimaryTypeContext);
		}
	}
	public BitOr(): TerminalNode { return this.getToken(TSASMParser.BitOr, 0); }
	constructor(ctx: UnionOrIntersectionOrPrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterUnion) {
			listener.enterUnion(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitUnion) {
			listener.exitUnion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitUnion) {
			return visitor.visitUnion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntersectionContext extends UnionOrIntersectionOrPrimaryTypeContext {
	public unionOrIntersectionOrPrimaryType(): UnionOrIntersectionOrPrimaryTypeContext[];
	public unionOrIntersectionOrPrimaryType(i: number): UnionOrIntersectionOrPrimaryTypeContext;
	public unionOrIntersectionOrPrimaryType(i?: number): UnionOrIntersectionOrPrimaryTypeContext | UnionOrIntersectionOrPrimaryTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnionOrIntersectionOrPrimaryTypeContext);
		} else {
			return this.getRuleContext(i, UnionOrIntersectionOrPrimaryTypeContext);
		}
	}
	public BitAnd(): TerminalNode { return this.getToken(TSASMParser.BitAnd, 0); }
	constructor(ctx: UnionOrIntersectionOrPrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterIntersection) {
			listener.enterIntersection(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitIntersection) {
			listener.exitIntersection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitIntersection) {
			return visitor.visitIntersection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimaryContext extends UnionOrIntersectionOrPrimaryTypeContext {
	public primaryType(): PrimaryTypeContext {
		return this.getRuleContext(0, PrimaryTypeContext);
	}
	constructor(ctx: UnionOrIntersectionOrPrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_primaryType; }
	public copyFrom(ctx: PrimaryTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class ParenthesizedPrimTypeContext extends PrimaryTypeContext {
	public OpenParen(): TerminalNode { return this.getToken(TSASMParser.OpenParen, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public CloseParen(): TerminalNode { return this.getToken(TSASMParser.CloseParen, 0); }
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterParenthesizedPrimType) {
			listener.enterParenthesizedPrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitParenthesizedPrimType) {
			listener.exitParenthesizedPrimType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedPrimType) {
			return visitor.visitParenthesizedPrimType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredefinedPrimTypeContext extends PrimaryTypeContext {
	public predefinedType(): PredefinedTypeContext {
		return this.getRuleContext(0, PredefinedTypeContext);
	}
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterPredefinedPrimType) {
			listener.enterPredefinedPrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitPredefinedPrimType) {
			listener.exitPredefinedPrimType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitPredefinedPrimType) {
			return visitor.visitPredefinedPrimType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReferencePrimTypeContext extends PrimaryTypeContext {
	public typeReference(): TypeReferenceContext {
		return this.getRuleContext(0, TypeReferenceContext);
	}
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterReferencePrimType) {
			listener.enterReferencePrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitReferencePrimType) {
			listener.exitReferencePrimType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitReferencePrimType) {
			return visitor.visitReferencePrimType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ObjectPrimTypeContext extends PrimaryTypeContext {
	public objectType(): ObjectTypeContext {
		return this.getRuleContext(0, ObjectTypeContext);
	}
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterObjectPrimType) {
			listener.enterObjectPrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitObjectPrimType) {
			listener.exitObjectPrimType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitObjectPrimType) {
			return visitor.visitObjectPrimType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayPrimTypeContext extends PrimaryTypeContext {
	public primaryType(): PrimaryTypeContext {
		return this.getRuleContext(0, PrimaryTypeContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(TSASMParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(TSASMParser.CloseBracket, 0); }
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterArrayPrimType) {
			listener.enterArrayPrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitArrayPrimType) {
			listener.exitArrayPrimType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitArrayPrimType) {
			return visitor.visitArrayPrimType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TuplePrimTypeContext extends PrimaryTypeContext {
	public OpenBracket(): TerminalNode { return this.getToken(TSASMParser.OpenBracket, 0); }
	public tupleElementTypes(): TupleElementTypesContext {
		return this.getRuleContext(0, TupleElementTypesContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(TSASMParser.CloseBracket, 0); }
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTuplePrimType) {
			listener.enterTuplePrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTuplePrimType) {
			listener.exitTuplePrimType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTuplePrimType) {
			return visitor.visitTuplePrimType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryPrimTypeContext extends PrimaryTypeContext {
	public typeQuery(): TypeQueryContext {
		return this.getRuleContext(0, TypeQueryContext);
	}
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterQueryPrimType) {
			listener.enterQueryPrimType(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitQueryPrimType) {
			listener.exitQueryPrimType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitQueryPrimType) {
			return visitor.visitQueryPrimType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RedefinitionOfTypeContext extends PrimaryTypeContext {
	public typeReference(): TypeReferenceContext {
		return this.getRuleContext(0, TypeReferenceContext);
	}
	public Is(): TerminalNode { return this.getToken(TSASMParser.Is, 0); }
	public primaryType(): PrimaryTypeContext {
		return this.getRuleContext(0, PrimaryTypeContext);
	}
	constructor(ctx: PrimaryTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterRedefinitionOfType) {
			listener.enterRedefinitionOfType(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitRedefinitionOfType) {
			listener.exitRedefinitionOfType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitRedefinitionOfType) {
			return visitor.visitRedefinitionOfType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredefinedTypeContext extends ParserRuleContext {
	public Any(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Any, 0); }
	public Number(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Number, 0); }
	public Boolean(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Boolean, 0); }
	public String(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.String, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Void, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_predefinedType; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterPredefinedType) {
			listener.enterPredefinedType(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitPredefinedType) {
			listener.exitPredefinedType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitPredefinedType) {
			return visitor.visitPredefinedType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeReferenceContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public nestedTypeGeneric(): NestedTypeGenericContext | undefined {
		return this.tryGetRuleContext(0, NestedTypeGenericContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeReference; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeReference) {
			listener.enterTypeReference(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeReference) {
			listener.exitTypeReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeReference) {
			return visitor.visitTypeReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NestedTypeGenericContext extends ParserRuleContext {
	public typeIncludeGeneric(): TypeIncludeGenericContext | undefined {
		return this.tryGetRuleContext(0, TypeIncludeGenericContext);
	}
	public typeGeneric(): TypeGenericContext | undefined {
		return this.tryGetRuleContext(0, TypeGenericContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_nestedTypeGeneric; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterNestedTypeGeneric) {
			listener.enterNestedTypeGeneric(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitNestedTypeGeneric) {
			listener.exitNestedTypeGeneric(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitNestedTypeGeneric) {
			return visitor.visitNestedTypeGeneric(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeGenericContext extends ParserRuleContext {
	public LessThan(): TerminalNode { return this.getToken(TSASMParser.LessThan, 0); }
	public typeArgumentList(): TypeArgumentListContext {
		return this.getRuleContext(0, TypeArgumentListContext);
	}
	public MoreThan(): TerminalNode { return this.getToken(TSASMParser.MoreThan, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeGeneric; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeGeneric) {
			listener.enterTypeGeneric(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeGeneric) {
			listener.exitTypeGeneric(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeGeneric) {
			return visitor.visitTypeGeneric(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeIncludeGenericContext extends ParserRuleContext {
	public LessThan(): TerminalNode[];
	public LessThan(i: number): TerminalNode;
	public LessThan(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.LessThan);
		} else {
			return this.getToken(TSASMParser.LessThan, i);
		}
	}
	public typeArgumentList(): TypeArgumentListContext[];
	public typeArgumentList(i: number): TypeArgumentListContext;
	public typeArgumentList(i?: number): TypeArgumentListContext | TypeArgumentListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentListContext);
		} else {
			return this.getRuleContext(i, TypeArgumentListContext);
		}
	}
	public MoreThan(): TerminalNode[];
	public MoreThan(i: number): TerminalNode;
	public MoreThan(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.MoreThan);
		} else {
			return this.getToken(TSASMParser.MoreThan, i);
		}
	}
	public bindingPattern(): BindingPatternContext | undefined {
		return this.tryGetRuleContext(0, BindingPatternContext);
	}
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.RightShiftArithmetic, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeIncludeGeneric; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeIncludeGeneric) {
			listener.enterTypeIncludeGeneric(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeIncludeGeneric) {
			listener.exitTypeIncludeGeneric(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeIncludeGeneric) {
			return visitor.visitTypeIncludeGeneric(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Identifier, 0); }
	public namespaceName(): NamespaceNameContext | undefined {
		return this.tryGetRuleContext(0, NamespaceNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeName; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectTypeContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TSASMParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TSASMParser.CloseBrace, 0); }
	public typeBody(): TypeBodyContext | undefined {
		return this.tryGetRuleContext(0, TypeBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_objectType; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterObjectType) {
			listener.enterObjectType(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitObjectType) {
			listener.exitObjectType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitObjectType) {
			return visitor.visitObjectType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBodyContext extends ParserRuleContext {
	public typeMemberList(): TypeMemberListContext {
		return this.getRuleContext(0, TypeMemberListContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.SemiColon, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeBody; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeBody) {
			listener.enterTypeBody(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeBody) {
			listener.exitTypeBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeBody) {
			return visitor.visitTypeBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeMemberListContext extends ParserRuleContext {
	public typeMember(): TypeMemberContext[];
	public typeMember(i: number): TypeMemberContext;
	public typeMember(i?: number): TypeMemberContext | TypeMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeMemberContext);
		} else {
			return this.getRuleContext(i, TypeMemberContext);
		}
	}
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.SemiColon);
		} else {
			return this.getToken(TSASMParser.SemiColon, i);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeMemberList; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeMemberList) {
			listener.enterTypeMemberList(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeMemberList) {
			listener.exitTypeMemberList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeMemberList) {
			return visitor.visitTypeMemberList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeMemberContext extends ParserRuleContext {
	public propertySignature(): PropertySignatureContext | undefined {
		return this.tryGetRuleContext(0, PropertySignatureContext);
	}
	public indexSignature(): IndexSignatureContext | undefined {
		return this.tryGetRuleContext(0, IndexSignatureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeMember; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeMember) {
			listener.enterTypeMember(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeMember) {
			listener.exitTypeMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeMember) {
			return visitor.visitTypeMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public primaryType(): PrimaryTypeContext {
		return this.getRuleContext(0, PrimaryTypeContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(TSASMParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(TSASMParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleTypeContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode { return this.getToken(TSASMParser.OpenBracket, 0); }
	public tupleElementTypes(): TupleElementTypesContext {
		return this.getRuleContext(0, TupleElementTypesContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(TSASMParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_tupleType; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTupleType) {
			listener.enterTupleType(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTupleType) {
			listener.exitTupleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTupleType) {
			return visitor.visitTupleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleElementTypesContext extends ParserRuleContext {
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_tupleElementTypes; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTupleElementTypes) {
			listener.enterTupleElementTypes(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTupleElementTypes) {
			listener.exitTupleElementTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTupleElementTypes) {
			return visitor.visitTupleElementTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(TSASMParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TSASMParser.CloseParen, 0); }
	public ARROW(): TerminalNode { return this.getToken(TSASMParser.ARROW, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_functionType; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitFunctionType) {
			return visitor.visitFunctionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeQueryContext extends ParserRuleContext {
	public Typeof(): TerminalNode { return this.getToken(TSASMParser.Typeof, 0); }
	public typeQueryExpression(): TypeQueryExpressionContext {
		return this.getRuleContext(0, TypeQueryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeQuery; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeQuery) {
			listener.enterTypeQuery(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeQuery) {
			listener.exitTypeQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeQuery) {
			return visitor.visitTypeQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeQueryExpressionContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Identifier, 0); }
	public identifierName(): IdentifierNameContext[];
	public identifierName(i: number): IdentifierNameContext;
	public identifierName(i?: number): IdentifierNameContext | IdentifierNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierNameContext);
		} else {
			return this.getRuleContext(i, IdentifierNameContext);
		}
	}
	public Dot(): TerminalNode[];
	public Dot(i: number): TerminalNode;
	public Dot(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Dot);
		} else {
			return this.getToken(TSASMParser.Dot, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeQueryExpression; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeQueryExpression) {
			listener.enterTypeQueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeQueryExpression) {
			listener.exitTypeQueryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeQueryExpression) {
			return visitor.visitTypeQueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertySignatureContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.QuestionMark, 0); }
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.ARROW, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_propertySignature; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterPropertySignature) {
			listener.enterPropertySignature(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitPropertySignature) {
			listener.exitPropertySignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitPropertySignature) {
			return visitor.visitPropertySignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAnnotationContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(TSASMParser.Colon, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeAnnotation; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeAnnotation) {
			listener.enterTypeAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeAnnotation) {
			listener.exitTypeAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeAnnotation) {
			return visitor.visitTypeAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallSignatureContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(TSASMParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TSASMParser.CloseParen, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_callSignature; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterCallSignature) {
			listener.enterCallSignature(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitCallSignature) {
			listener.exitCallSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitCallSignature) {
			return visitor.visitCallSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RequiredParameterListContext extends ParserRuleContext {
	public requiredParameter(): RequiredParameterContext[];
	public requiredParameter(i: number): RequiredParameterContext;
	public requiredParameter(i?: number): RequiredParameterContext | RequiredParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RequiredParameterContext);
		} else {
			return this.getRuleContext(i, RequiredParameterContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_requiredParameterList; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterRequiredParameterList) {
			listener.enterRequiredParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitRequiredParameterList) {
			listener.exitRequiredParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitRequiredParameterList) {
			return visitor.visitRequiredParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public requiredParameter(): RequiredParameterContext | undefined {
		return this.tryGetRuleContext(0, RequiredParameterContext);
	}
	public optionalParameter(): OptionalParameterContext | undefined {
		return this.tryGetRuleContext(0, OptionalParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_parameter; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalParameterContext extends ParserRuleContext {
	public identifierOrPattern(): IdentifierOrPatternContext | undefined {
		return this.tryGetRuleContext(0, IdentifierOrPatternContext);
	}
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.QuestionMark, 0); }
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_optionalParameter; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterOptionalParameter) {
			listener.enterOptionalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitOptionalParameter) {
			listener.exitOptionalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitOptionalParameter) {
			return visitor.visitOptionalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RequiredParameterContext extends ParserRuleContext {
	public identifierOrPattern(): IdentifierOrPatternContext {
		return this.getRuleContext(0, IdentifierOrPatternContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_requiredParameter; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterRequiredParameter) {
			listener.enterRequiredParameter(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitRequiredParameter) {
			listener.exitRequiredParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitRequiredParameter) {
			return visitor.visitRequiredParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierOrPatternContext extends ParserRuleContext {
	public identifierName(): IdentifierNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNameContext);
	}
	public bindingPattern(): BindingPatternContext | undefined {
		return this.tryGetRuleContext(0, BindingPatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_identifierOrPattern; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterIdentifierOrPattern) {
			listener.enterIdentifierOrPattern(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitIdentifierOrPattern) {
			listener.exitIdentifierOrPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitIdentifierOrPattern) {
			return visitor.visitIdentifierOrPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexSignatureContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode { return this.getToken(TSASMParser.OpenBracket, 0); }
	public Identifier(): TerminalNode { return this.getToken(TSASMParser.Identifier, 0); }
	public Colon(): TerminalNode { return this.getToken(TSASMParser.Colon, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(TSASMParser.CloseBracket, 0); }
	public typeAnnotation(): TypeAnnotationContext {
		return this.getRuleContext(0, TypeAnnotationContext);
	}
	public Number(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Number, 0); }
	public String(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.String, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_indexSignature; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterIndexSignature) {
			listener.enterIndexSignature(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitIndexSignature) {
			listener.exitIndexSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitIndexSignature) {
			return visitor.visitIndexSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasDeclarationContext extends ParserRuleContext {
	public TypeAlias(): TerminalNode { return this.getToken(TSASMParser.TypeAlias, 0); }
	public Identifier(): TerminalNode { return this.getToken(TSASMParser.Identifier, 0); }
	public Assign(): TerminalNode { return this.getToken(TSASMParser.Assign, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public SemiColon(): TerminalNode { return this.getToken(TSASMParser.SemiColon, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_typeAliasDeclaration; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeAliasDeclaration) {
			listener.enterTypeAliasDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeAliasDeclaration) {
			listener.exitTypeAliasDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeAliasDeclaration) {
			return visitor.visitTypeAliasDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public Interface(): TerminalNode { return this.getToken(TSASMParser.Interface, 0); }
	public Identifier(): TerminalNode { return this.getToken(TSASMParser.Identifier, 0); }
	public objectType(): ObjectTypeContext {
		return this.getRuleContext(0, ObjectTypeContext);
	}
	public Export(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Export, 0); }
	public Declare(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Declare, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public interfaceExtendsClause(): InterfaceExtendsClauseContext | undefined {
		return this.tryGetRuleContext(0, InterfaceExtendsClauseContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_interfaceDeclaration; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterInterfaceDeclaration) {
			listener.enterInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitInterfaceDeclaration) {
			listener.exitInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceExtendsClauseContext extends ParserRuleContext {
	public Extends(): TerminalNode { return this.getToken(TSASMParser.Extends, 0); }
	public classOrInterfaceTypeList(): ClassOrInterfaceTypeListContext {
		return this.getRuleContext(0, ClassOrInterfaceTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_interfaceExtendsClause; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterInterfaceExtendsClause) {
			listener.enterInterfaceExtendsClause(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitInterfaceExtendsClause) {
			listener.exitInterfaceExtendsClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitInterfaceExtendsClause) {
			return visitor.visitInterfaceExtendsClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeListContext extends ParserRuleContext {
	public typeReference(): TypeReferenceContext[];
	public typeReference(i: number): TypeReferenceContext;
	public typeReference(i?: number): TypeReferenceContext | TypeReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeReferenceContext);
		} else {
			return this.getRuleContext(i, TypeReferenceContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_classOrInterfaceTypeList; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterClassOrInterfaceTypeList) {
			listener.enterClassOrInterfaceTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitClassOrInterfaceTypeList) {
			listener.exitClassOrInterfaceTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceTypeList) {
			return visitor.visitClassOrInterfaceTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public Enum(): TerminalNode { return this.getToken(TSASMParser.Enum, 0); }
	public Identifier(): TerminalNode { return this.getToken(TSASMParser.Identifier, 0); }
	public OpenBrace(): TerminalNode { return this.getToken(TSASMParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TSASMParser.CloseBrace, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Const, 0); }
	public enumBody(): EnumBodyContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	public enumMemberList(): EnumMemberListContext {
		return this.getRuleContext(0, EnumMemberListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_enumBody; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterEnumBody) {
			listener.enterEnumBody(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitEnumBody) {
			listener.exitEnumBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitEnumBody) {
			return visitor.visitEnumBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumMemberListContext extends ParserRuleContext {
	public enumMember(): EnumMemberContext[];
	public enumMember(i: number): EnumMemberContext;
	public enumMember(i?: number): EnumMemberContext | EnumMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumMemberContext);
		} else {
			return this.getRuleContext(i, EnumMemberContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_enumMemberList; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterEnumMemberList) {
			listener.enterEnumMemberList(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitEnumMemberList) {
			listener.exitEnumMemberList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitEnumMemberList) {
			return visitor.visitEnumMemberList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumMemberContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_enumMember; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterEnumMember) {
			listener.enterEnumMember(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitEnumMember) {
			listener.exitEnumMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitEnumMember) {
			return visitor.visitEnumMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Identifier);
		} else {
			return this.getToken(TSASMParser.Identifier, i);
		}
	}
	public Dot(): TerminalNode[];
	public Dot(i: number): TerminalNode;
	public Dot(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Dot);
		} else {
			return this.getToken(TSASMParser.Dot, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_namespaceName; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterNamespaceName) {
			listener.enterNamespaceName(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitNamespaceName) {
			listener.exitNamespaceName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitNamespaceName) {
			return visitor.visitNamespaceName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportAliasDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(TSASMParser.Identifier, 0); }
	public Assign(): TerminalNode { return this.getToken(TSASMParser.Assign, 0); }
	public namespaceName(): NamespaceNameContext {
		return this.getRuleContext(0, NamespaceNameContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(TSASMParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_importAliasDeclaration; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterImportAliasDeclaration) {
			listener.enterImportAliasDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitImportAliasDeclaration) {
			listener.exitImportAliasDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitImportAliasDeclaration) {
			return visitor.visitImportAliasDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(TSASMParser.EOF, 0); }
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_program; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Export(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Export, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_sourceElement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterSourceElement) {
			listener.enterSourceElement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitSourceElement) {
			listener.exitSourceElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitSourceElement) {
			return visitor.visitSourceElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public importStatement(): ImportStatementContext | undefined {
		return this.tryGetRuleContext(0, ImportStatementContext);
	}
	public exportStatement(): ExportStatementContext | undefined {
		return this.tryGetRuleContext(0, ExportStatementContext);
	}
	public emptyStatement_(): EmptyStatement_Context | undefined {
		return this.tryGetRuleContext(0, EmptyStatement_Context);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public debuggerStatement(): DebuggerStatementContext | undefined {
		return this.tryGetRuleContext(0, DebuggerStatementContext);
	}
	public arrowFunctionDeclaration(): ArrowFunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ArrowFunctionDeclarationContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public typeAliasDeclaration(): TypeAliasDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeAliasDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public Export(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Export, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_statement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TSASMParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TSASMParser.CloseBrace, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_block; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_statementList; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	public Import(): TerminalNode { return this.getToken(TSASMParser.Import, 0); }
	public fromBlock(): FromBlockContext | undefined {
		return this.tryGetRuleContext(0, FromBlockContext);
	}
	public importAliasDeclaration(): ImportAliasDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ImportAliasDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_importStatement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterImportStatement) {
			listener.enterImportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitImportStatement) {
			listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromBlockContext extends ParserRuleContext {
	public From(): TerminalNode { return this.getToken(TSASMParser.From, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(TSASMParser.StringLiteral, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Multiply, 0); }
	public multipleImportStatement(): MultipleImportStatementContext | undefined {
		return this.tryGetRuleContext(0, MultipleImportStatementContext);
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.As, 0); }
	public identifierName(): IdentifierNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_fromBlock; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterFromBlock) {
			listener.enterFromBlock(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitFromBlock) {
			listener.exitFromBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitFromBlock) {
			return visitor.visitFromBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultipleImportStatementContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TSASMParser.OpenBrace, 0); }
	public identifierName(): IdentifierNameContext[];
	public identifierName(i: number): IdentifierNameContext;
	public identifierName(i?: number): IdentifierNameContext | IdentifierNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierNameContext);
		} else {
			return this.getRuleContext(i, IdentifierNameContext);
		}
	}
	public CloseBrace(): TerminalNode { return this.getToken(TSASMParser.CloseBrace, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_multipleImportStatement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterMultipleImportStatement) {
			listener.enterMultipleImportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitMultipleImportStatement) {
			listener.exitMultipleImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitMultipleImportStatement) {
			return visitor.visitMultipleImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportStatementContext extends ParserRuleContext {
	public Export(): TerminalNode { return this.getToken(TSASMParser.Export, 0); }
	public fromBlock(): FromBlockContext | undefined {
		return this.tryGetRuleContext(0, FromBlockContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Default, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_exportStatement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterExportStatement) {
			listener.enterExportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitExportStatement) {
			listener.exitExportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitExportStatement) {
			return visitor.visitExportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableStatementContext extends ParserRuleContext {
	public bindingPattern(): BindingPatternContext | undefined {
		return this.tryGetRuleContext(0, BindingPatternContext);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.SemiColon, 0); }
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	public varModifier(): VarModifierContext | undefined {
		return this.tryGetRuleContext(0, VarModifierContext);
	}
	public Declare(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Declare, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_variableStatement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterVariableStatement) {
			listener.enterVariableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitVariableStatement) {
			listener.exitVariableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitVariableStatement) {
			return visitor.visitVariableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public identifierOrKeyWord(): IdentifierOrKeyWordContext | undefined {
		return this.tryGetRuleContext(0, IdentifierOrKeyWordContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Assign, 0); }
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatement_Context extends ParserRuleContext {
	public SemiColon(): TerminalNode { return this.getToken(TSASMParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_emptyStatement_; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterEmptyStatement_) {
			listener.enterEmptyStatement_(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitEmptyStatement_) {
			listener.exitEmptyStatement_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement_) {
			return visitor.visitEmptyStatement_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(TSASMParser.If, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TSASMParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TSASMParser.CloseParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Else, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_iterationStatement; }
	public copyFrom(ctx: IterationStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class WhileStatementContext extends IterationStatementContext {
	public While(): TerminalNode { return this.getToken(TSASMParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TSASMParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TSASMParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(TSASMParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TSASMParser.OpenParen, 0); }
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.SemiColon);
		} else {
			return this.getToken(TSASMParser.SemiColon, i);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(TSASMParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expressionSequence(): ExpressionSequenceContext[];
	public expressionSequence(i: number): ExpressionSequenceContext;
	public expressionSequence(i?: number): ExpressionSequenceContext | ExpressionSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionSequenceContext);
		} else {
			return this.getRuleContext(i, ExpressionSequenceContext);
		}
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarModifierContext extends ParserRuleContext {
	public Let(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Let, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Const, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_varModifier; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterVarModifier) {
			listener.enterVarModifier(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitVarModifier) {
			listener.exitVarModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitVarModifier) {
			return visitor.visitVarModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public Continue(): TerminalNode { return this.getToken(TSASMParser.Continue, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public Break(): TerminalNode { return this.getToken(TSASMParser.Break, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public Return(): TerminalNode { return this.getToken(TSASMParser.Return, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public Switch(): TerminalNode { return this.getToken(TSASMParser.Switch, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TSASMParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TSASMParser.CloseParen, 0); }
	public caseBlock(): CaseBlockContext {
		return this.getRuleContext(0, CaseBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseBlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TSASMParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TSASMParser.CloseBrace, 0); }
	public caseClauses(): CaseClausesContext[];
	public caseClauses(i: number): CaseClausesContext;
	public caseClauses(i?: number): CaseClausesContext | CaseClausesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClausesContext);
		} else {
			return this.getRuleContext(i, CaseClausesContext);
		}
	}
	public defaultClause(): DefaultClauseContext | undefined {
		return this.tryGetRuleContext(0, DefaultClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_caseBlock; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterCaseBlock) {
			listener.enterCaseBlock(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitCaseBlock) {
			listener.exitCaseBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitCaseBlock) {
			return visitor.visitCaseBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseClausesContext extends ParserRuleContext {
	public caseClause(): CaseClauseContext[];
	public caseClause(i: number): CaseClauseContext;
	public caseClause(i?: number): CaseClauseContext | CaseClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClauseContext);
		} else {
			return this.getRuleContext(i, CaseClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_caseClauses; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterCaseClauses) {
			listener.enterCaseClauses(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitCaseClauses) {
			listener.exitCaseClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitCaseClauses) {
			return visitor.visitCaseClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseClauseContext extends ParserRuleContext {
	public Case(): TerminalNode { return this.getToken(TSASMParser.Case, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public Colon(): TerminalNode { return this.getToken(TSASMParser.Colon, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_caseClause; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterCaseClause) {
			listener.enterCaseClause(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitCaseClause) {
			listener.exitCaseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitCaseClause) {
			return visitor.visitCaseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultClauseContext extends ParserRuleContext {
	public Default(): TerminalNode { return this.getToken(TSASMParser.Default, 0); }
	public Colon(): TerminalNode { return this.getToken(TSASMParser.Colon, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_defaultClause; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterDefaultClause) {
			listener.enterDefaultClause(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitDefaultClause) {
			listener.exitDefaultClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitDefaultClause) {
			return visitor.visitDefaultClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(TSASMParser.Throw, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(TSASMParser.Try, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catchProduction(): CatchProductionContext | undefined {
		return this.tryGetRuleContext(0, CatchProductionContext);
	}
	public finallyProduction(): FinallyProductionContext | undefined {
		return this.tryGetRuleContext(0, FinallyProductionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchProductionContext extends ParserRuleContext {
	public Catch(): TerminalNode { return this.getToken(TSASMParser.Catch, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TSASMParser.OpenParen, 0); }
	public Identifier(): TerminalNode { return this.getToken(TSASMParser.Identifier, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TSASMParser.CloseParen, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_catchProduction; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterCatchProduction) {
			listener.enterCatchProduction(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitCatchProduction) {
			listener.exitCatchProduction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitCatchProduction) {
			return visitor.visitCatchProduction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyProductionContext extends ParserRuleContext {
	public Finally(): TerminalNode { return this.getToken(TSASMParser.Finally, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_finallyProduction; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterFinallyProduction) {
			listener.enterFinallyProduction(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitFinallyProduction) {
			listener.exitFinallyProduction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitFinallyProduction) {
			return visitor.visitFinallyProduction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DebuggerStatementContext extends ParserRuleContext {
	public Debugger(): TerminalNode { return this.getToken(TSASMParser.Debugger, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_debuggerStatement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterDebuggerStatement) {
			listener.enterDebuggerStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitDebuggerStatement) {
			listener.exitDebuggerStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitDebuggerStatement) {
			return visitor.visitDebuggerStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexMemberDeclarationContext extends ParserRuleContext {
	public indexSignature(): IndexSignatureContext {
		return this.getRuleContext(0, IndexSignatureContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(TSASMParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_indexMemberDeclaration; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterIndexMemberDeclaration) {
			listener.enterIndexMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitIndexMemberDeclaration) {
			listener.exitIndexMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitIndexMemberDeclaration) {
			return visitor.visitIndexMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameterArg(): FormalParameterArgContext[];
	public formalParameterArg(i: number): FormalParameterArgContext;
	public formalParameterArg(i?: number): FormalParameterArgContext | FormalParameterArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterArgContext);
		} else {
			return this.getRuleContext(i, FormalParameterArgContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterArgContext extends ParserRuleContext {
	public identifierOrKeyWord(): IdentifierOrKeyWordContext {
		return this.getRuleContext(0, IdentifierOrKeyWordContext);
	}
	public QuestionMark(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.QuestionMark, 0); }
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_formalParameterArg; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterFormalParameterArg) {
			listener.enterFormalParameterArg(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitFormalParameterArg) {
			listener.exitFormalParameterArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterArg) {
			return visitor.visitFormalParameterArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementsContext extends ParserRuleContext {
	public sourceElement(): SourceElementContext[];
	public sourceElement(i: number): SourceElementContext;
	public sourceElement(i?: number): SourceElementContext | SourceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceElementContext);
		} else {
			return this.getRuleContext(i, SourceElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_sourceElements; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterSourceElements) {
			listener.enterSourceElements(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitSourceElements) {
			listener.exitSourceElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitSourceElements) {
			return visitor.visitSourceElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.CloseBracket, 0); }
	public elementList(): ElementListContext | undefined {
		return this.tryGetRuleContext(0, ElementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_arrayLiteral; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterArrayLiteral) {
			listener.enterArrayLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitArrayLiteral) {
			listener.exitArrayLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementListContext extends ParserRuleContext {
	public arrayElement(): ArrayElementContext[];
	public arrayElement(i: number): ArrayElementContext;
	public arrayElement(i?: number): ArrayElementContext | ArrayElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayElementContext);
		} else {
			return this.getRuleContext(i, ArrayElementContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_elementList; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterElementList) {
			listener.enterElementList(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitElementList) {
			listener.exitElementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitElementList) {
			return visitor.visitElementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayElementContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Identifier, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_arrayElement; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterArrayElement) {
			listener.enterArrayElement(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitArrayElement) {
			listener.exitArrayElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitArrayElement) {
			return visitor.visitArrayElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectLiteralContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TSASMParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TSASMParser.CloseBrace, 0); }
	public propertyAssignment(): PropertyAssignmentContext[];
	public propertyAssignment(i: number): PropertyAssignmentContext;
	public propertyAssignment(i?: number): PropertyAssignmentContext | PropertyAssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyAssignmentContext);
		} else {
			return this.getRuleContext(i, PropertyAssignmentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_objectLiteral; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterObjectLiteral) {
			listener.enterObjectLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitObjectLiteral) {
			listener.exitObjectLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitObjectLiteral) {
			return visitor.visitObjectLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyAssignmentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_propertyAssignment; }
	public copyFrom(ctx: PropertyAssignmentContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Colon, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Assign, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterPropertyExpressionAssignment) {
			listener.enterPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitPropertyExpressionAssignment) {
			listener.exitPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitPropertyExpressionAssignment) {
			return visitor.visitPropertyExpressionAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComputedPropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	public OpenBracket(): TerminalNode { return this.getToken(TSASMParser.OpenBracket, 0); }
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public CloseBracket(): TerminalNode { return this.getToken(TSASMParser.CloseBracket, 0); }
	public Colon(): TerminalNode { return this.getToken(TSASMParser.Colon, 0); }
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterComputedPropertyExpressionAssignment) {
			listener.enterComputedPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitComputedPropertyExpressionAssignment) {
			listener.exitComputedPropertyExpressionAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitComputedPropertyExpressionAssignment) {
			return visitor.visitComputedPropertyExpressionAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyShorthandContext extends PropertyAssignmentContext {
	public identifierOrKeyWord(): IdentifierOrKeyWordContext {
		return this.getRuleContext(0, IdentifierOrKeyWordContext);
	}
	constructor(ctx: PropertyAssignmentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterPropertyShorthand) {
			listener.enterPropertyShorthand(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitPropertyShorthand) {
			listener.exitPropertyShorthand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitPropertyShorthand) {
			return visitor.visitPropertyShorthand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyNameContext extends ParserRuleContext {
	public identifierName(): IdentifierNameContext | undefined {
		return this.tryGetRuleContext(0, IdentifierNameContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.StringLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_propertyName; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterPropertyName) {
			listener.enterPropertyName(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitPropertyName) {
			listener.exitPropertyName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitPropertyName) {
			return visitor.visitPropertyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(TSASMParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(TSASMParser.CloseParen, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_arguments; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_argument; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionSequenceContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TSASMParser.Comma);
		} else {
			return this.getToken(TSASMParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_expressionSequence; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterExpressionSequence) {
			listener.enterExpressionSequence(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitExpressionSequence) {
			listener.exitExpressionSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitExpressionSequence) {
			return visitor.visitExpressionSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_singleExpression; }
	public copyFrom(ctx: SingleExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ArrowFunctionExpressionContext extends SingleExpressionContext {
	public arrowFunctionDeclaration(): ArrowFunctionDeclarationContext {
		return this.getRuleContext(0, ArrowFunctionDeclarationContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterArrowFunctionExpression) {
			listener.enterArrowFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitArrowFunctionExpression) {
			listener.exitArrowFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitArrowFunctionExpression) {
			return visitor.visitArrowFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberIndexExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(TSASMParser.OpenBracket, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(TSASMParser.CloseBracket, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterMemberIndexExpression) {
			listener.enterMemberIndexExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitMemberIndexExpression) {
			listener.exitMemberIndexExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitMemberIndexExpression) {
			return visitor.visitMemberIndexExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberDotExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Dot(): TerminalNode { return this.getToken(TSASMParser.Dot, 0); }
	public identifierName(): IdentifierNameContext {
		return this.getRuleContext(0, IdentifierNameContext);
	}
	public nestedTypeGeneric(): NestedTypeGenericContext | undefined {
		return this.tryGetRuleContext(0, NestedTypeGenericContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterMemberDotExpression) {
			listener.enterMemberDotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitMemberDotExpression) {
			listener.exitMemberDotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitMemberDotExpression) {
			return visitor.visitMemberDotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArgumentsExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterArgumentsExpression) {
			listener.enterArgumentsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitArgumentsExpression) {
			listener.exitArgumentsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitArgumentsExpression) {
			return visitor.visitArgumentsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostIncrementExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public PlusPlus(): TerminalNode { return this.getToken(TSASMParser.PlusPlus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterPostIncrementExpression) {
			listener.enterPostIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitPostIncrementExpression) {
			listener.exitPostIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression) {
			return visitor.visitPostIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostDecreaseExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public MinusMinus(): TerminalNode { return this.getToken(TSASMParser.MinusMinus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterPostDecreaseExpression) {
			listener.enterPostDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitPostDecreaseExpression) {
			listener.exitPostDecreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitPostDecreaseExpression) {
			return visitor.visitPostDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeleteExpressionContext extends SingleExpressionContext {
	public Delete(): TerminalNode { return this.getToken(TSASMParser.Delete, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterDeleteExpression) {
			listener.enterDeleteExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitDeleteExpression) {
			listener.exitDeleteExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitDeleteExpression) {
			return visitor.visitDeleteExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VoidExpressionContext extends SingleExpressionContext {
	public Void(): TerminalNode { return this.getToken(TSASMParser.Void, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterVoidExpression) {
			listener.enterVoidExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitVoidExpression) {
			listener.exitVoidExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitVoidExpression) {
			return visitor.visitVoidExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeofExpressionContext extends SingleExpressionContext {
	public Typeof(): TerminalNode { return this.getToken(TSASMParser.Typeof, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTypeofExpression) {
			listener.enterTypeofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTypeofExpression) {
			listener.exitTypeofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTypeofExpression) {
			return visitor.visitTypeofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreIncrementExpressionContext extends SingleExpressionContext {
	public PlusPlus(): TerminalNode { return this.getToken(TSASMParser.PlusPlus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterPreIncrementExpression) {
			listener.enterPreIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitPreIncrementExpression) {
			listener.exitPreIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitPreIncrementExpression) {
			return visitor.visitPreIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreDecreaseExpressionContext extends SingleExpressionContext {
	public MinusMinus(): TerminalNode { return this.getToken(TSASMParser.MinusMinus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterPreDecreaseExpression) {
			listener.enterPreDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitPreDecreaseExpression) {
			listener.exitPreDecreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitPreDecreaseExpression) {
			return visitor.visitPreDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryPlusExpressionContext extends SingleExpressionContext {
	public Plus(): TerminalNode { return this.getToken(TSASMParser.Plus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterUnaryPlusExpression) {
			listener.enterUnaryPlusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitUnaryPlusExpression) {
			listener.exitUnaryPlusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitUnaryPlusExpression) {
			return visitor.visitUnaryPlusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
	public Minus(): TerminalNode { return this.getToken(TSASMParser.Minus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpression) {
			return visitor.visitUnaryMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitNotExpressionContext extends SingleExpressionContext {
	public BitNot(): TerminalNode { return this.getToken(TSASMParser.BitNot, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterBitNotExpression) {
			listener.enterBitNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitBitNotExpression) {
			listener.exitBitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitBitNotExpression) {
			return visitor.visitBitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends SingleExpressionContext {
	public Not(): TerminalNode { return this.getToken(TSASMParser.Not, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Modulus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Minus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitShiftExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.LeftShiftArithmetic, 0); }
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.RightShiftArithmetic, 0); }
	public RightShiftLogical(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.RightShiftLogical, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterBitShiftExpression) {
			listener.enterBitShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitBitShiftExpression) {
			listener.exitBitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitBitShiftExpression) {
			return visitor.visitBitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.MoreThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.LessThanEquals, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.GreaterThanEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Equals_(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Equals_, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.NotEquals, 0); }
	public IdentityEquals(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.IdentityEquals, 0); }
	public IdentityNotEquals(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.IdentityNotEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitAnd(): TerminalNode { return this.getToken(TSASMParser.BitAnd, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterBitAndExpression) {
			listener.enterBitAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitBitAndExpression) {
			listener.exitBitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitBitAndExpression) {
			return visitor.visitBitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitXOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitXOr(): TerminalNode { return this.getToken(TSASMParser.BitXOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterBitXOrExpression) {
			listener.enterBitXOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitBitXOrExpression) {
			listener.exitBitXOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitBitXOrExpression) {
			return visitor.visitBitXOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitOr(): TerminalNode { return this.getToken(TSASMParser.BitOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterBitOrExpression) {
			listener.enterBitOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitBitOrExpression) {
			listener.exitBitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitBitOrExpression) {
			return visitor.visitBitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public And(): TerminalNode { return this.getToken(TSASMParser.And, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Or(): TerminalNode { return this.getToken(TSASMParser.Or, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public QuestionMark(): TerminalNode { return this.getToken(TSASMParser.QuestionMark, 0); }
	public Colon(): TerminalNode { return this.getToken(TSASMParser.Colon, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Assign(): TerminalNode { return this.getToken(TSASMParser.Assign, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentOperatorExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterAssignmentOperatorExpression) {
			listener.enterAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitAssignmentOperatorExpression) {
			listener.exitAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperatorExpression) {
			return visitor.visitAssignmentOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends SingleExpressionContext {
	public identifierName(): IdentifierNameContext {
		return this.getRuleContext(0, IdentifierNameContext);
	}
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends SingleExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayLiteralExpressionContext extends SingleExpressionContext {
	public arrayLiteral(): ArrayLiteralContext {
		return this.getRuleContext(0, ArrayLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterArrayLiteralExpression) {
			listener.enterArrayLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitArrayLiteralExpression) {
			listener.exitArrayLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteralExpression) {
			return visitor.visitArrayLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ObjectLiteralExpressionContext extends SingleExpressionContext {
	public objectLiteral(): ObjectLiteralContext {
		return this.getRuleContext(0, ObjectLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterObjectLiteralExpression) {
			listener.enterObjectLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitObjectLiteralExpression) {
			listener.exitObjectLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitObjectLiteralExpression) {
			return visitor.visitObjectLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(TSASMParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TSASMParser.CloseParen, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GenericTypesContext extends SingleExpressionContext {
	public typeArguments(): TypeArgumentsContext {
		return this.getRuleContext(0, TypeArgumentsContext);
	}
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterGenericTypes) {
			listener.enterGenericTypes(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitGenericTypes) {
			listener.exitGenericTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitGenericTypes) {
			return visitor.visitGenericTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastAsExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public As(): TerminalNode { return this.getToken(TSASMParser.As, 0); }
	public asExpression(): AsExpressionContext {
		return this.getRuleContext(0, AsExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterCastAsExpression) {
			listener.enterCastAsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitCastAsExpression) {
			listener.exitCastAsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitCastAsExpression) {
			return visitor.visitCastAsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsExpressionContext extends ParserRuleContext {
	public predefinedType(): PredefinedTypeContext | undefined {
		return this.tryGetRuleContext(0, PredefinedTypeContext);
	}
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.CloseBracket, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_asExpression; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterAsExpression) {
			listener.enterAsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitAsExpression) {
			listener.exitAsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitAsExpression) {
			return visitor.visitAsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowFunctionDeclarationContext extends ParserRuleContext {
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		return this.getRuleContext(0, ArrowFunctionParametersContext);
	}
	public ARROW(): TerminalNode { return this.getToken(TSASMParser.ARROW, 0); }
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		return this.getRuleContext(0, ArrowFunctionBodyContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_arrowFunctionDeclaration; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterArrowFunctionDeclaration) {
			listener.enterArrowFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitArrowFunctionDeclaration) {
			listener.exitArrowFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitArrowFunctionDeclaration) {
			return visitor.visitArrowFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowFunctionParametersContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Identifier, 0); }
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.CloseParen, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_arrowFunctionParameters; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterArrowFunctionParameters) {
			listener.enterArrowFunctionParameters(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitArrowFunctionParameters) {
			listener.exitArrowFunctionParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitArrowFunctionParameters) {
			return visitor.visitArrowFunctionParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowFunctionBodyContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.OpenBrace, 0); }
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.CloseBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_arrowFunctionBody; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterArrowFunctionBody) {
			listener.enterArrowFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitArrowFunctionBody) {
			listener.exitArrowFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitArrowFunctionBody) {
			return visitor.visitArrowFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public MultiplyAssign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.MultiplyAssign, 0); }
	public DivideAssign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.DivideAssign, 0); }
	public ModulusAssign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.ModulusAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.MinusAssign, 0); }
	public LeftShiftArithmeticAssign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.LeftShiftArithmeticAssign, 0); }
	public RightShiftArithmeticAssign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.RightShiftArithmeticAssign, 0); }
	public RightShiftLogicalAssign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.RightShiftLogicalAssign, 0); }
	public BitAndAssign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.BitAndAssign, 0); }
	public BitXorAssign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.BitXorAssign, 0); }
	public BitOrAssign(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.BitOrAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.BooleanLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.StringLiteral, 0); }
	public RegularExpressionLiteral(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.RegularExpressionLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_literal; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.DecimalLiteral, 0); }
	public HexIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.HexIntegerLiteral, 0); }
	public OctalIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.OctalIntegerLiteral, 0); }
	public OctalIntegerLiteral2(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.OctalIntegerLiteral2, 0); }
	public BinaryIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.BinaryIntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_numericLiteral; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Identifier, 0); }
	public reservedWord(): ReservedWordContext | undefined {
		return this.tryGetRuleContext(0, ReservedWordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_identifierName; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterIdentifierName) {
			listener.enterIdentifierName(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitIdentifierName) {
			listener.exitIdentifierName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitIdentifierName) {
			return visitor.visitIdentifierName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierOrKeyWordContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Identifier, 0); }
	public TypeAlias(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.TypeAlias, 0); }
	public Require(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Require, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_identifierOrKeyWord; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterIdentifierOrKeyWord) {
			listener.enterIdentifierOrKeyWord(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitIdentifierOrKeyWord) {
			listener.exitIdentifierOrKeyWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitIdentifierOrKeyWord) {
			return visitor.visitIdentifierOrKeyWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_reservedWord; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterReservedWord) {
			listener.enterReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitReservedWord) {
			listener.exitReservedWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitReservedWord) {
			return visitor.visitReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public Break(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Break, 0); }
	public Typeof(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Typeof, 0); }
	public Case(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Case, 0); }
	public Else(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Else, 0); }
	public Catch(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Catch, 0); }
	public Finally(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Finally, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Return, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Void, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Continue, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.For, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Switch, 0); }
	public While(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.While, 0); }
	public Debugger(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Debugger, 0); }
	public Default(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Default, 0); }
	public If(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.If, 0); }
	public Throw(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Throw, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Delete, 0); }
	public In(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.In, 0); }
	public Try(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Try, 0); }
	public From(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.From, 0); }
	public Enum(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Enum, 0); }
	public Extends(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Extends, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Const, 0); }
	public Export(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Export, 0); }
	public Import(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Import, 0); }
	public Implements(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Implements, 0); }
	public Let(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Let, 0); }
	public Interface(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Interface, 0); }
	public Require(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.Require, 0); }
	public TypeAlias(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.TypeAlias, 0); }
	public String(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.String, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_keyword; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.SemiColon, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(TSASMParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TSASMParser.RULE_eos; }
	// @Override
	public enterRule(listener: TSASMParserListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: TSASMParserListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TSASMParserVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


