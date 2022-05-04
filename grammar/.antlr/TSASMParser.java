// Generated from /Users/aron/Code/AssemblyScriptOS/ts.asm/grammar/TSASMParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TSASMParser extends TSASMParserBase {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		MultiLineComment=1, SingleLineComment=2, RegularExpressionLiteral=3, OpenBracket=4, 
		CloseBracket=5, OpenParen=6, CloseParen=7, OpenBrace=8, TemplateCloseBrace=9, 
		CloseBrace=10, SemiColon=11, Comma=12, Assign=13, QuestionMark=14, Colon=15, 
		Dot=16, PlusPlus=17, MinusMinus=18, Plus=19, Minus=20, BitNot=21, Not=22, 
		Multiply=23, Divide=24, Modulus=25, RightShiftArithmetic=26, LeftShiftArithmetic=27, 
		RightShiftLogical=28, LessThan=29, MoreThan=30, LessThanEquals=31, GreaterThanEquals=32, 
		Equals_=33, NotEquals=34, IdentityEquals=35, IdentityNotEquals=36, BitAnd=37, 
		BitXOr=38, BitOr=39, And=40, Or=41, MultiplyAssign=42, DivideAssign=43, 
		ModulusAssign=44, PlusAssign=45, MinusAssign=46, LeftShiftArithmeticAssign=47, 
		RightShiftArithmeticAssign=48, RightShiftLogicalAssign=49, BitAndAssign=50, 
		BitXorAssign=51, BitOrAssign=52, ARROW=53, NullLiteral=54, BooleanLiteral=55, 
		DecimalLiteral=56, HexIntegerLiteral=57, OctalIntegerLiteral=58, OctalIntegerLiteral2=59, 
		BinaryIntegerLiteral=60, Break=61, Instanceof=62, Typeof=63, Case=64, 
		Else=65, Catch=66, Finally=67, Return=68, Void=69, Continue=70, For=71, 
		Switch=72, While=73, Debugger=74, Default=75, If=76, Throw=77, Delete=78, 
		In=79, Try=80, As=81, From=82, Enum=83, Extends=84, Const=85, Export=86, 
		Import=87, Implements=88, Let=89, Interface=90, Any=91, Number=92, Boolean=93, 
		String=94, TypeAlias=95, Require=96, Module=97, Declare=98, Is=99, At=100, 
		Identifier=101, StringLiteral=102, WhiteSpaces=103, LineTerminator=104, 
		HtmlComment=105, CDataComment=106, UnexpectedCharacter=107;
	public static final int
		RULE_initializer = 0, RULE_bindingPattern = 1, RULE_typeParameters = 2, 
		RULE_typeParameterList = 3, RULE_typeParameter = 4, RULE_constraint = 5, 
		RULE_typeArguments = 6, RULE_typeArgumentList = 7, RULE_typeArgument = 8, 
		RULE_type_ = 9, RULE_unionOrIntersectionOrPrimaryType = 10, RULE_primaryType = 11, 
		RULE_predefinedType = 12, RULE_typeReference = 13, RULE_nestedTypeGeneric = 14, 
		RULE_typeGeneric = 15, RULE_typeIncludeGeneric = 16, RULE_typeName = 17, 
		RULE_objectType = 18, RULE_typeBody = 19, RULE_typeMemberList = 20, RULE_typeMember = 21, 
		RULE_arrayType = 22, RULE_tupleType = 23, RULE_tupleElementTypes = 24, 
		RULE_functionType = 25, RULE_typeQuery = 26, RULE_typeQueryExpression = 27, 
		RULE_propertySignature = 28, RULE_typeAnnotation = 29, RULE_callSignature = 30, 
		RULE_parameterList = 31, RULE_requiredParameterList = 32, RULE_parameter = 33, 
		RULE_optionalParameter = 34, RULE_requiredParameter = 35, RULE_identifierOrPattern = 36, 
		RULE_indexSignature = 37, RULE_typeAliasDeclaration = 38, RULE_interfaceDeclaration = 39, 
		RULE_interfaceExtendsClause = 40, RULE_classOrInterfaceTypeList = 41, 
		RULE_enumDeclaration = 42, RULE_enumBody = 43, RULE_enumMemberList = 44, 
		RULE_enumMember = 45, RULE_namespaceName = 46, RULE_importAliasDeclaration = 47, 
		RULE_program = 48, RULE_sourceElement = 49, RULE_statement = 50, RULE_block = 51, 
		RULE_statementList = 52, RULE_importStatement = 53, RULE_fromBlock = 54, 
		RULE_multipleImportStatement = 55, RULE_exportStatement = 56, RULE_variableStatement = 57, 
		RULE_variableDeclarationList = 58, RULE_variableDeclaration = 59, RULE_emptyStatement_ = 60, 
		RULE_expressionStatement = 61, RULE_ifStatement = 62, RULE_iterationStatement = 63, 
		RULE_varModifier = 64, RULE_continueStatement = 65, RULE_breakStatement = 66, 
		RULE_returnStatement = 67, RULE_switchStatement = 68, RULE_caseBlock = 69, 
		RULE_caseClauses = 70, RULE_caseClause = 71, RULE_defaultClause = 72, 
		RULE_throwStatement = 73, RULE_tryStatement = 74, RULE_catchProduction = 75, 
		RULE_finallyProduction = 76, RULE_debuggerStatement = 77, RULE_indexMemberDeclaration = 78, 
		RULE_formalParameterList = 79, RULE_formalParameterArg = 80, RULE_functionBody = 81, 
		RULE_sourceElements = 82, RULE_arrayLiteral = 83, RULE_elementList = 84, 
		RULE_arrayElement = 85, RULE_objectLiteral = 86, RULE_propertyAssignment = 87, 
		RULE_propertyName = 88, RULE_arguments = 89, RULE_argumentList = 90, RULE_argument = 91, 
		RULE_expressionSequence = 92, RULE_singleExpression = 93, RULE_asExpression = 94, 
		RULE_arrowFunctionDeclaration = 95, RULE_arrowFunctionParameters = 96, 
		RULE_arrowFunctionBody = 97, RULE_assignmentOperator = 98, RULE_literal = 99, 
		RULE_numericLiteral = 100, RULE_identifierName = 101, RULE_identifierOrKeyWord = 102, 
		RULE_reservedWord = 103, RULE_keyword = 104, RULE_eos = 105;
	private static String[] makeRuleNames() {
		return new String[] {
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
			"identifierName", "identifierOrKeyWord", "reservedWord", "keyword", "eos"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'['", "']'", "'('", "')'", "'{'", null, "'}'", 
			"';'", "','", "'='", "'?'", "':'", "'.'", "'++'", "'--'", "'+'", "'-'", 
			"'~'", "'!'", "'*'", "'/'", "'%'", "'>>'", "'<<'", "'>>>'", "'<'", "'>'", 
			"'<='", "'>='", "'=='", "'!='", "'==='", "'!=='", "'&'", "'^'", "'|'", 
			"'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", 
			"'>>>='", "'&='", "'^='", "'|='", "'=>'", "'null'", null, null, null, 
			null, null, null, "'break'", "'instanceof'", "'typeof'", "'case'", "'else'", 
			"'catch'", "'finally'", "'return'", "'void'", "'continue'", "'for'", 
			"'switch'", "'while'", "'debugger'", "'default'", "'if'", "'throw'", 
			"'delete'", "'in'", "'try'", "'as'", "'from'", "'enum'", "'extends'", 
			"'const'", "'export'", "'import'", "'implements'", "'let'", "'interface'", 
			"'any'", "'number'", "'boolean'", "'string'", "'type'", "'require'", 
			"'module'", "'declare'", "'is'", "'@'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MultiLineComment", "SingleLineComment", "RegularExpressionLiteral", 
			"OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
			"TemplateCloseBrace", "CloseBrace", "SemiColon", "Comma", "Assign", "QuestionMark", 
			"Colon", "Dot", "PlusPlus", "MinusMinus", "Plus", "Minus", "BitNot", 
			"Not", "Multiply", "Divide", "Modulus", "RightShiftArithmetic", "LeftShiftArithmetic", 
			"RightShiftLogical", "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", 
			"Equals_", "NotEquals", "IdentityEquals", "IdentityNotEquals", "BitAnd", 
			"BitXOr", "BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
			"PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", 
			"RightShiftLogicalAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
			"ARROW", "NullLiteral", "BooleanLiteral", "DecimalLiteral", "HexIntegerLiteral", 
			"OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
			"Break", "Instanceof", "Typeof", "Case", "Else", "Catch", "Finally", 
			"Return", "Void", "Continue", "For", "Switch", "While", "Debugger", "Default", 
			"If", "Throw", "Delete", "In", "Try", "As", "From", "Enum", "Extends", 
			"Const", "Export", "Import", "Implements", "Let", "Interface", "Any", 
			"Number", "Boolean", "String", "TypeAlias", "Require", "Module", "Declare", 
			"Is", "At", "Identifier", "StringLiteral", "WhiteSpaces", "LineTerminator", 
			"HtmlComment", "CDataComment", "UnexpectedCharacter"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "TSASMParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TSASMParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class InitializerContext extends ParserRuleContext {
		public TerminalNode Assign() { return getToken(TSASMParser.Assign, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public InitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializer; }
	}

	public final InitializerContext initializer() throws RecognitionException {
		InitializerContext _localctx = new InitializerContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_initializer);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			match(Assign);
			setState(213);
			singleExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BindingPatternContext extends ParserRuleContext {
		public ArrayLiteralContext arrayLiteral() {
			return getRuleContext(ArrayLiteralContext.class,0);
		}
		public ObjectLiteralContext objectLiteral() {
			return getRuleContext(ObjectLiteralContext.class,0);
		}
		public BindingPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bindingPattern; }
	}

	public final BindingPatternContext bindingPattern() throws RecognitionException {
		BindingPatternContext _localctx = new BindingPatternContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_bindingPattern);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(217);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OpenBracket:
				{
				setState(215);
				arrayLiteral();
				}
				break;
			case OpenBrace:
				{
				setState(216);
				objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeParametersContext extends ParserRuleContext {
		public TerminalNode LessThan() { return getToken(TSASMParser.LessThan, 0); }
		public TerminalNode MoreThan() { return getToken(TSASMParser.MoreThan, 0); }
		public TypeParameterListContext typeParameterList() {
			return getRuleContext(TypeParameterListContext.class,0);
		}
		public TypeParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeParameters; }
	}

	public final TypeParametersContext typeParameters() throws RecognitionException {
		TypeParametersContext _localctx = new TypeParametersContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_typeParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			match(LessThan);
			setState(221);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LessThan || _la==Identifier) {
				{
				setState(220);
				typeParameterList();
				}
			}

			setState(223);
			match(MoreThan);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeParameterListContext extends ParserRuleContext {
		public List<TypeParameterContext> typeParameter() {
			return getRuleContexts(TypeParameterContext.class);
		}
		public TypeParameterContext typeParameter(int i) {
			return getRuleContext(TypeParameterContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public TypeParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeParameterList; }
	}

	public final TypeParameterListContext typeParameterList() throws RecognitionException {
		TypeParameterListContext _localctx = new TypeParameterListContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_typeParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(225);
			typeParameter();
			setState(230);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(226);
				match(Comma);
				setState(227);
				typeParameter();
				}
				}
				setState(232);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeParameterContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public ConstraintContext constraint() {
			return getRuleContext(ConstraintContext.class,0);
		}
		public TypeParametersContext typeParameters() {
			return getRuleContext(TypeParametersContext.class,0);
		}
		public TypeParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeParameter; }
	}

	public final TypeParameterContext typeParameter() throws RecognitionException {
		TypeParameterContext _localctx = new TypeParameterContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_typeParameter);
		int _la;
		try {
			setState(238);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(233);
				match(Identifier);
				setState(235);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Extends) {
					{
					setState(234);
					constraint();
					}
				}

				}
				break;
			case LessThan:
				enterOuterAlt(_localctx, 2);
				{
				setState(237);
				typeParameters();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstraintContext extends ParserRuleContext {
		public TerminalNode Extends() { return getToken(TSASMParser.Extends, 0); }
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public ConstraintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constraint; }
	}

	public final ConstraintContext constraint() throws RecognitionException {
		ConstraintContext _localctx = new ConstraintContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_constraint);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			match(Extends);
			setState(241);
			type_();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeArgumentsContext extends ParserRuleContext {
		public TerminalNode LessThan() { return getToken(TSASMParser.LessThan, 0); }
		public TerminalNode MoreThan() { return getToken(TSASMParser.MoreThan, 0); }
		public TypeArgumentListContext typeArgumentList() {
			return getRuleContext(TypeArgumentListContext.class,0);
		}
		public TypeArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeArguments; }
	}

	public final TypeArgumentsContext typeArguments() throws RecognitionException {
		TypeArgumentsContext _localctx = new TypeArgumentsContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_typeArguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(243);
			match(LessThan);
			setState(245);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << LessThan) | (1L << Typeof))) != 0) || ((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & ((1L << (Void - 69)) | (1L << (Any - 69)) | (1L << (Number - 69)) | (1L << (Boolean - 69)) | (1L << (String - 69)) | (1L << (Identifier - 69)) | (1L << (StringLiteral - 69)))) != 0)) {
				{
				setState(244);
				typeArgumentList();
				}
			}

			setState(247);
			match(MoreThan);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeArgumentListContext extends ParserRuleContext {
		public List<TypeArgumentContext> typeArgument() {
			return getRuleContexts(TypeArgumentContext.class);
		}
		public TypeArgumentContext typeArgument(int i) {
			return getRuleContext(TypeArgumentContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public TypeArgumentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeArgumentList; }
	}

	public final TypeArgumentListContext typeArgumentList() throws RecognitionException {
		TypeArgumentListContext _localctx = new TypeArgumentListContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_typeArgumentList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			typeArgument();
			setState(254);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(250);
				match(Comma);
				setState(251);
				typeArgument();
				}
				}
				setState(256);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeArgumentContext extends ParserRuleContext {
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public TypeArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeArgument; }
	}

	public final TypeArgumentContext typeArgument() throws RecognitionException {
		TypeArgumentContext _localctx = new TypeArgumentContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_typeArgument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(257);
			type_();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Type_Context extends ParserRuleContext {
		public UnionOrIntersectionOrPrimaryTypeContext unionOrIntersectionOrPrimaryType() {
			return getRuleContext(UnionOrIntersectionOrPrimaryTypeContext.class,0);
		}
		public FunctionTypeContext functionType() {
			return getRuleContext(FunctionTypeContext.class,0);
		}
		public TypeGenericContext typeGeneric() {
			return getRuleContext(TypeGenericContext.class,0);
		}
		public TerminalNode StringLiteral() { return getToken(TSASMParser.StringLiteral, 0); }
		public Type_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_; }
	}

	public final Type_Context type_() throws RecognitionException {
		Type_Context _localctx = new Type_Context(_ctx, getState());
		enterRule(_localctx, 18, RULE_type_);
		try {
			setState(263);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(259);
				unionOrIntersectionOrPrimaryType(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(260);
				functionType();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(261);
				typeGeneric();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(262);
				match(StringLiteral);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnionOrIntersectionOrPrimaryTypeContext extends ParserRuleContext {
		public UnionOrIntersectionOrPrimaryTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unionOrIntersectionOrPrimaryType; }
	 
		public UnionOrIntersectionOrPrimaryTypeContext() { }
		public void copyFrom(UnionOrIntersectionOrPrimaryTypeContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IntersectionContext extends UnionOrIntersectionOrPrimaryTypeContext {
		public List<UnionOrIntersectionOrPrimaryTypeContext> unionOrIntersectionOrPrimaryType() {
			return getRuleContexts(UnionOrIntersectionOrPrimaryTypeContext.class);
		}
		public UnionOrIntersectionOrPrimaryTypeContext unionOrIntersectionOrPrimaryType(int i) {
			return getRuleContext(UnionOrIntersectionOrPrimaryTypeContext.class,i);
		}
		public TerminalNode BitAnd() { return getToken(TSASMParser.BitAnd, 0); }
		public IntersectionContext(UnionOrIntersectionOrPrimaryTypeContext ctx) { copyFrom(ctx); }
	}
	public static class PrimaryContext extends UnionOrIntersectionOrPrimaryTypeContext {
		public PrimaryTypeContext primaryType() {
			return getRuleContext(PrimaryTypeContext.class,0);
		}
		public PrimaryContext(UnionOrIntersectionOrPrimaryTypeContext ctx) { copyFrom(ctx); }
	}
	public static class UnionContext extends UnionOrIntersectionOrPrimaryTypeContext {
		public List<UnionOrIntersectionOrPrimaryTypeContext> unionOrIntersectionOrPrimaryType() {
			return getRuleContexts(UnionOrIntersectionOrPrimaryTypeContext.class);
		}
		public UnionOrIntersectionOrPrimaryTypeContext unionOrIntersectionOrPrimaryType(int i) {
			return getRuleContext(UnionOrIntersectionOrPrimaryTypeContext.class,i);
		}
		public TerminalNode BitOr() { return getToken(TSASMParser.BitOr, 0); }
		public UnionContext(UnionOrIntersectionOrPrimaryTypeContext ctx) { copyFrom(ctx); }
	}

	public final UnionOrIntersectionOrPrimaryTypeContext unionOrIntersectionOrPrimaryType() throws RecognitionException {
		return unionOrIntersectionOrPrimaryType(0);
	}

	private UnionOrIntersectionOrPrimaryTypeContext unionOrIntersectionOrPrimaryType(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		UnionOrIntersectionOrPrimaryTypeContext _localctx = new UnionOrIntersectionOrPrimaryTypeContext(_ctx, _parentState);
		UnionOrIntersectionOrPrimaryTypeContext _prevctx = _localctx;
		int _startState = 20;
		enterRecursionRule(_localctx, 20, RULE_unionOrIntersectionOrPrimaryType, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PrimaryContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(266);
			primaryType(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(276);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(274);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						_localctx = new UnionContext(new UnionOrIntersectionOrPrimaryTypeContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_unionOrIntersectionOrPrimaryType);
						setState(268);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(269);
						match(BitOr);
						setState(270);
						unionOrIntersectionOrPrimaryType(4);
						}
						break;
					case 2:
						{
						_localctx = new IntersectionContext(new UnionOrIntersectionOrPrimaryTypeContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_unionOrIntersectionOrPrimaryType);
						setState(271);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(272);
						match(BitAnd);
						setState(273);
						unionOrIntersectionOrPrimaryType(3);
						}
						break;
					}
					} 
				}
				setState(278);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PrimaryTypeContext extends ParserRuleContext {
		public PrimaryTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryType; }
	 
		public PrimaryTypeContext() { }
		public void copyFrom(PrimaryTypeContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class RedefinitionOfTypeContext extends PrimaryTypeContext {
		public TypeReferenceContext typeReference() {
			return getRuleContext(TypeReferenceContext.class,0);
		}
		public TerminalNode Is() { return getToken(TSASMParser.Is, 0); }
		public PrimaryTypeContext primaryType() {
			return getRuleContext(PrimaryTypeContext.class,0);
		}
		public RedefinitionOfTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
	}
	public static class PredefinedPrimTypeContext extends PrimaryTypeContext {
		public PredefinedTypeContext predefinedType() {
			return getRuleContext(PredefinedTypeContext.class,0);
		}
		public PredefinedPrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
	}
	public static class ArrayPrimTypeContext extends PrimaryTypeContext {
		public PrimaryTypeContext primaryType() {
			return getRuleContext(PrimaryTypeContext.class,0);
		}
		public TerminalNode OpenBracket() { return getToken(TSASMParser.OpenBracket, 0); }
		public TerminalNode CloseBracket() { return getToken(TSASMParser.CloseBracket, 0); }
		public ArrayPrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesizedPrimTypeContext extends PrimaryTypeContext {
		public TerminalNode OpenParen() { return getToken(TSASMParser.OpenParen, 0); }
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public TerminalNode CloseParen() { return getToken(TSASMParser.CloseParen, 0); }
		public ParenthesizedPrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
	}
	public static class TuplePrimTypeContext extends PrimaryTypeContext {
		public TerminalNode OpenBracket() { return getToken(TSASMParser.OpenBracket, 0); }
		public TupleElementTypesContext tupleElementTypes() {
			return getRuleContext(TupleElementTypesContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(TSASMParser.CloseBracket, 0); }
		public TuplePrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
	}
	public static class ObjectPrimTypeContext extends PrimaryTypeContext {
		public ObjectTypeContext objectType() {
			return getRuleContext(ObjectTypeContext.class,0);
		}
		public ObjectPrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
	}
	public static class ReferencePrimTypeContext extends PrimaryTypeContext {
		public TypeReferenceContext typeReference() {
			return getRuleContext(TypeReferenceContext.class,0);
		}
		public ReferencePrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
	}
	public static class QueryPrimTypeContext extends PrimaryTypeContext {
		public TypeQueryContext typeQuery() {
			return getRuleContext(TypeQueryContext.class,0);
		}
		public QueryPrimTypeContext(PrimaryTypeContext ctx) { copyFrom(ctx); }
	}

	public final PrimaryTypeContext primaryType() throws RecognitionException {
		return primaryType(0);
	}

	private PrimaryTypeContext primaryType(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		PrimaryTypeContext _localctx = new PrimaryTypeContext(_ctx, _parentState);
		PrimaryTypeContext _prevctx = _localctx;
		int _startState = 22;
		enterRecursionRule(_localctx, 22, RULE_primaryType, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(296);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				_localctx = new ParenthesizedPrimTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(280);
				match(OpenParen);
				setState(281);
				type_();
				setState(282);
				match(CloseParen);
				}
				break;
			case 2:
				{
				_localctx = new PredefinedPrimTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(284);
				predefinedType();
				}
				break;
			case 3:
				{
				_localctx = new ReferencePrimTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(285);
				typeReference();
				}
				break;
			case 4:
				{
				_localctx = new ObjectPrimTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(286);
				objectType();
				}
				break;
			case 5:
				{
				_localctx = new TuplePrimTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(287);
				match(OpenBracket);
				setState(288);
				tupleElementTypes();
				setState(289);
				match(CloseBracket);
				}
				break;
			case 6:
				{
				_localctx = new QueryPrimTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(291);
				typeQuery();
				}
				break;
			case 7:
				{
				_localctx = new RedefinitionOfTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(292);
				typeReference();
				setState(293);
				match(Is);
				setState(294);
				primaryType(1);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(304);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ArrayPrimTypeContext(new PrimaryTypeContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_primaryType);
					setState(298);
					if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
					setState(299);
					if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
					setState(300);
					match(OpenBracket);
					setState(301);
					match(CloseBracket);
					}
					} 
				}
				setState(306);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PredefinedTypeContext extends ParserRuleContext {
		public TerminalNode Any() { return getToken(TSASMParser.Any, 0); }
		public TerminalNode Number() { return getToken(TSASMParser.Number, 0); }
		public TerminalNode Boolean() { return getToken(TSASMParser.Boolean, 0); }
		public TerminalNode String() { return getToken(TSASMParser.String, 0); }
		public TerminalNode Void() { return getToken(TSASMParser.Void, 0); }
		public PredefinedTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_predefinedType; }
	}

	public final PredefinedTypeContext predefinedType() throws RecognitionException {
		PredefinedTypeContext _localctx = new PredefinedTypeContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_predefinedType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(307);
			_la = _input.LA(1);
			if ( !(((((_la - 69)) & ~0x3f) == 0 && ((1L << (_la - 69)) & ((1L << (Void - 69)) | (1L << (Any - 69)) | (1L << (Number - 69)) | (1L << (Boolean - 69)) | (1L << (String - 69)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeReferenceContext extends ParserRuleContext {
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public NestedTypeGenericContext nestedTypeGeneric() {
			return getRuleContext(NestedTypeGenericContext.class,0);
		}
		public TypeReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeReference; }
	}

	public final TypeReferenceContext typeReference() throws RecognitionException {
		TypeReferenceContext _localctx = new TypeReferenceContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_typeReference);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(309);
			typeName();
			setState(311);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				setState(310);
				nestedTypeGeneric();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NestedTypeGenericContext extends ParserRuleContext {
		public TypeIncludeGenericContext typeIncludeGeneric() {
			return getRuleContext(TypeIncludeGenericContext.class,0);
		}
		public TypeGenericContext typeGeneric() {
			return getRuleContext(TypeGenericContext.class,0);
		}
		public NestedTypeGenericContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nestedTypeGeneric; }
	}

	public final NestedTypeGenericContext nestedTypeGeneric() throws RecognitionException {
		NestedTypeGenericContext _localctx = new NestedTypeGenericContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_nestedTypeGeneric);
		try {
			setState(315);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(313);
				typeIncludeGeneric();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(314);
				typeGeneric();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeGenericContext extends ParserRuleContext {
		public TerminalNode LessThan() { return getToken(TSASMParser.LessThan, 0); }
		public TypeArgumentListContext typeArgumentList() {
			return getRuleContext(TypeArgumentListContext.class,0);
		}
		public TerminalNode MoreThan() { return getToken(TSASMParser.MoreThan, 0); }
		public TypeGenericContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeGeneric; }
	}

	public final TypeGenericContext typeGeneric() throws RecognitionException {
		TypeGenericContext _localctx = new TypeGenericContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_typeGeneric);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			match(LessThan);
			setState(318);
			typeArgumentList();
			setState(319);
			match(MoreThan);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeIncludeGenericContext extends ParserRuleContext {
		public List<TerminalNode> LessThan() { return getTokens(TSASMParser.LessThan); }
		public TerminalNode LessThan(int i) {
			return getToken(TSASMParser.LessThan, i);
		}
		public List<TypeArgumentListContext> typeArgumentList() {
			return getRuleContexts(TypeArgumentListContext.class);
		}
		public TypeArgumentListContext typeArgumentList(int i) {
			return getRuleContext(TypeArgumentListContext.class,i);
		}
		public List<TerminalNode> MoreThan() { return getTokens(TSASMParser.MoreThan); }
		public TerminalNode MoreThan(int i) {
			return getToken(TSASMParser.MoreThan, i);
		}
		public BindingPatternContext bindingPattern() {
			return getRuleContext(BindingPatternContext.class,0);
		}
		public TerminalNode RightShiftArithmetic() { return getToken(TSASMParser.RightShiftArithmetic, 0); }
		public TypeIncludeGenericContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeIncludeGeneric; }
	}

	public final TypeIncludeGenericContext typeIncludeGeneric() throws RecognitionException {
		TypeIncludeGenericContext _localctx = new TypeIncludeGenericContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_typeIncludeGeneric);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(321);
			match(LessThan);
			setState(322);
			typeArgumentList();
			setState(323);
			match(LessThan);
			setState(324);
			typeArgumentList();
			setState(330);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MoreThan:
				{
				setState(325);
				match(MoreThan);
				setState(326);
				bindingPattern();
				setState(327);
				match(MoreThan);
				}
				break;
			case RightShiftArithmetic:
				{
				setState(329);
				match(RightShiftArithmetic);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeNameContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public NamespaceNameContext namespaceName() {
			return getRuleContext(NamespaceNameContext.class,0);
		}
		public TypeNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeName; }
	}

	public final TypeNameContext typeName() throws RecognitionException {
		TypeNameContext _localctx = new TypeNameContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_typeName);
		try {
			setState(334);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(332);
				match(Identifier);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(333);
				namespaceName();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectTypeContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(TSASMParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(TSASMParser.CloseBrace, 0); }
		public TypeBodyContext typeBody() {
			return getRuleContext(TypeBodyContext.class,0);
		}
		public ObjectTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectType; }
	}

	public final ObjectTypeContext objectType() throws RecognitionException {
		ObjectTypeContext _localctx = new ObjectTypeContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_objectType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(336);
			match(OpenBrace);
			setState(338);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral) | (1L << Break) | (1L << Typeof))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Case - 64)) | (1L << (Else - 64)) | (1L << (Catch - 64)) | (1L << (Finally - 64)) | (1L << (Return - 64)) | (1L << (Void - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Debugger - 64)) | (1L << (Default - 64)) | (1L << (If - 64)) | (1L << (Throw - 64)) | (1L << (Delete - 64)) | (1L << (In - 64)) | (1L << (Try - 64)) | (1L << (From - 64)) | (1L << (Enum - 64)) | (1L << (Extends - 64)) | (1L << (Const - 64)) | (1L << (Export - 64)) | (1L << (Import - 64)) | (1L << (Implements - 64)) | (1L << (Let - 64)) | (1L << (Interface - 64)) | (1L << (String - 64)) | (1L << (TypeAlias - 64)) | (1L << (Require - 64)) | (1L << (Identifier - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
				{
				setState(337);
				typeBody();
				}
			}

			setState(340);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeBodyContext extends ParserRuleContext {
		public TypeMemberListContext typeMemberList() {
			return getRuleContext(TypeMemberListContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(TSASMParser.SemiColon, 0); }
		public TerminalNode Comma() { return getToken(TSASMParser.Comma, 0); }
		public TypeBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeBody; }
	}

	public final TypeBodyContext typeBody() throws RecognitionException {
		TypeBodyContext _localctx = new TypeBodyContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_typeBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(342);
			typeMemberList();
			setState(344);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SemiColon || _la==Comma) {
				{
				setState(343);
				_la = _input.LA(1);
				if ( !(_la==SemiColon || _la==Comma) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeMemberListContext extends ParserRuleContext {
		public List<TypeMemberContext> typeMember() {
			return getRuleContexts(TypeMemberContext.class);
		}
		public TypeMemberContext typeMember(int i) {
			return getRuleContext(TypeMemberContext.class,i);
		}
		public List<TerminalNode> SemiColon() { return getTokens(TSASMParser.SemiColon); }
		public TerminalNode SemiColon(int i) {
			return getToken(TSASMParser.SemiColon, i);
		}
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public TypeMemberListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeMemberList; }
	}

	public final TypeMemberListContext typeMemberList() throws RecognitionException {
		TypeMemberListContext _localctx = new TypeMemberListContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_typeMemberList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(346);
			typeMember();
			setState(351);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(347);
					_la = _input.LA(1);
					if ( !(_la==SemiColon || _la==Comma) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(348);
					typeMember();
					}
					} 
				}
				setState(353);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeMemberContext extends ParserRuleContext {
		public PropertySignatureContext propertySignature() {
			return getRuleContext(PropertySignatureContext.class,0);
		}
		public IndexSignatureContext indexSignature() {
			return getRuleContext(IndexSignatureContext.class,0);
		}
		public TypeMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeMember; }
	}

	public final TypeMemberContext typeMember() throws RecognitionException {
		TypeMemberContext _localctx = new TypeMemberContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_typeMember);
		try {
			setState(356);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NullLiteral:
			case BooleanLiteral:
			case DecimalLiteral:
			case HexIntegerLiteral:
			case OctalIntegerLiteral:
			case OctalIntegerLiteral2:
			case BinaryIntegerLiteral:
			case Break:
			case Typeof:
			case Case:
			case Else:
			case Catch:
			case Finally:
			case Return:
			case Void:
			case Continue:
			case For:
			case Switch:
			case While:
			case Debugger:
			case Default:
			case If:
			case Throw:
			case Delete:
			case In:
			case Try:
			case From:
			case Enum:
			case Extends:
			case Const:
			case Export:
			case Import:
			case Implements:
			case Let:
			case Interface:
			case String:
			case TypeAlias:
			case Require:
			case Identifier:
			case StringLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(354);
				propertySignature();
				}
				break;
			case OpenBracket:
				enterOuterAlt(_localctx, 2);
				{
				setState(355);
				indexSignature();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayTypeContext extends ParserRuleContext {
		public PrimaryTypeContext primaryType() {
			return getRuleContext(PrimaryTypeContext.class,0);
		}
		public TerminalNode OpenBracket() { return getToken(TSASMParser.OpenBracket, 0); }
		public TerminalNode CloseBracket() { return getToken(TSASMParser.CloseBracket, 0); }
		public ArrayTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayType; }
	}

	public final ArrayTypeContext arrayType() throws RecognitionException {
		ArrayTypeContext _localctx = new ArrayTypeContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_arrayType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(358);
			primaryType(0);
			setState(359);
			if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
			setState(360);
			match(OpenBracket);
			setState(361);
			match(CloseBracket);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TupleTypeContext extends ParserRuleContext {
		public TerminalNode OpenBracket() { return getToken(TSASMParser.OpenBracket, 0); }
		public TupleElementTypesContext tupleElementTypes() {
			return getRuleContext(TupleElementTypesContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(TSASMParser.CloseBracket, 0); }
		public TupleTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleType; }
	}

	public final TupleTypeContext tupleType() throws RecognitionException {
		TupleTypeContext _localctx = new TupleTypeContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_tupleType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(363);
			match(OpenBracket);
			setState(364);
			tupleElementTypes();
			setState(365);
			match(CloseBracket);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TupleElementTypesContext extends ParserRuleContext {
		public List<Type_Context> type_() {
			return getRuleContexts(Type_Context.class);
		}
		public Type_Context type_(int i) {
			return getRuleContext(Type_Context.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public TupleElementTypesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleElementTypes; }
	}

	public final TupleElementTypesContext tupleElementTypes() throws RecognitionException {
		TupleElementTypesContext _localctx = new TupleElementTypesContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_tupleElementTypes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(367);
			type_();
			setState(372);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(368);
				match(Comma);
				setState(369);
				type_();
				}
				}
				setState(374);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionTypeContext extends ParserRuleContext {
		public TerminalNode OpenParen() { return getToken(TSASMParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(TSASMParser.CloseParen, 0); }
		public TerminalNode ARROW() { return getToken(TSASMParser.ARROW, 0); }
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public TypeParametersContext typeParameters() {
			return getRuleContext(TypeParametersContext.class,0);
		}
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public FunctionTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionType; }
	}

	public final FunctionTypeContext functionType() throws RecognitionException {
		FunctionTypeContext _localctx = new FunctionTypeContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_functionType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(376);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LessThan) {
				{
				setState(375);
				typeParameters();
				}
			}

			setState(378);
			match(OpenParen);
			setState(380);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenBrace) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << Break) | (1L << Typeof))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Case - 64)) | (1L << (Else - 64)) | (1L << (Catch - 64)) | (1L << (Finally - 64)) | (1L << (Return - 64)) | (1L << (Void - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Debugger - 64)) | (1L << (Default - 64)) | (1L << (If - 64)) | (1L << (Throw - 64)) | (1L << (Delete - 64)) | (1L << (In - 64)) | (1L << (Try - 64)) | (1L << (From - 64)) | (1L << (Enum - 64)) | (1L << (Extends - 64)) | (1L << (Const - 64)) | (1L << (Export - 64)) | (1L << (Import - 64)) | (1L << (Implements - 64)) | (1L << (Let - 64)) | (1L << (Interface - 64)) | (1L << (String - 64)) | (1L << (TypeAlias - 64)) | (1L << (Require - 64)) | (1L << (Identifier - 64)))) != 0)) {
				{
				setState(379);
				parameterList();
				}
			}

			setState(382);
			match(CloseParen);
			setState(383);
			match(ARROW);
			setState(384);
			type_();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeQueryContext extends ParserRuleContext {
		public TerminalNode Typeof() { return getToken(TSASMParser.Typeof, 0); }
		public TypeQueryExpressionContext typeQueryExpression() {
			return getRuleContext(TypeQueryExpressionContext.class,0);
		}
		public TypeQueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeQuery; }
	}

	public final TypeQueryContext typeQuery() throws RecognitionException {
		TypeQueryContext _localctx = new TypeQueryContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_typeQuery);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(386);
			match(Typeof);
			setState(387);
			typeQueryExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeQueryExpressionContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public List<IdentifierNameContext> identifierName() {
			return getRuleContexts(IdentifierNameContext.class);
		}
		public IdentifierNameContext identifierName(int i) {
			return getRuleContext(IdentifierNameContext.class,i);
		}
		public List<TerminalNode> Dot() { return getTokens(TSASMParser.Dot); }
		public TerminalNode Dot(int i) {
			return getToken(TSASMParser.Dot, i);
		}
		public TypeQueryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeQueryExpression; }
	}

	public final TypeQueryExpressionContext typeQueryExpression() throws RecognitionException {
		TypeQueryExpressionContext _localctx = new TypeQueryExpressionContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_typeQueryExpression);
		try {
			int _alt;
			setState(399);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(389);
				match(Identifier);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(393); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(390);
						identifierName();
						setState(391);
						match(Dot);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(395); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				setState(397);
				identifierName();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropertySignatureContext extends ParserRuleContext {
		public PropertyNameContext propertyName() {
			return getRuleContext(PropertyNameContext.class,0);
		}
		public TerminalNode QuestionMark() { return getToken(TSASMParser.QuestionMark, 0); }
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(TSASMParser.ARROW, 0); }
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public PropertySignatureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertySignature; }
	}

	public final PropertySignatureContext propertySignature() throws RecognitionException {
		PropertySignatureContext _localctx = new PropertySignatureContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_propertySignature);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(401);
			propertyName();
			setState(403);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QuestionMark) {
				{
				setState(402);
				match(QuestionMark);
				}
			}

			setState(406);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(405);
				typeAnnotation();
				}
			}

			setState(410);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(408);
				match(ARROW);
				setState(409);
				type_();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeAnnotationContext extends ParserRuleContext {
		public TerminalNode Colon() { return getToken(TSASMParser.Colon, 0); }
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public TypeAnnotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeAnnotation; }
	}

	public final TypeAnnotationContext typeAnnotation() throws RecognitionException {
		TypeAnnotationContext _localctx = new TypeAnnotationContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_typeAnnotation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(412);
			match(Colon);
			setState(413);
			type_();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallSignatureContext extends ParserRuleContext {
		public TerminalNode OpenParen() { return getToken(TSASMParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(TSASMParser.CloseParen, 0); }
		public TypeParametersContext typeParameters() {
			return getRuleContext(TypeParametersContext.class,0);
		}
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public CallSignatureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callSignature; }
	}

	public final CallSignatureContext callSignature() throws RecognitionException {
		CallSignatureContext _localctx = new CallSignatureContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_callSignature);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(416);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LessThan) {
				{
				setState(415);
				typeParameters();
				}
			}

			setState(418);
			match(OpenParen);
			setState(420);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenBrace) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << Break) | (1L << Typeof))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Case - 64)) | (1L << (Else - 64)) | (1L << (Catch - 64)) | (1L << (Finally - 64)) | (1L << (Return - 64)) | (1L << (Void - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Debugger - 64)) | (1L << (Default - 64)) | (1L << (If - 64)) | (1L << (Throw - 64)) | (1L << (Delete - 64)) | (1L << (In - 64)) | (1L << (Try - 64)) | (1L << (From - 64)) | (1L << (Enum - 64)) | (1L << (Extends - 64)) | (1L << (Const - 64)) | (1L << (Export - 64)) | (1L << (Import - 64)) | (1L << (Implements - 64)) | (1L << (Let - 64)) | (1L << (Interface - 64)) | (1L << (String - 64)) | (1L << (TypeAlias - 64)) | (1L << (Require - 64)) | (1L << (Identifier - 64)))) != 0)) {
				{
				setState(419);
				parameterList();
				}
			}

			setState(422);
			match(CloseParen);
			setState(424);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(423);
				typeAnnotation();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterListContext extends ParserRuleContext {
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public ParameterContext parameter(int i) {
			return getRuleContext(ParameterContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public ParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterList; }
	}

	public final ParameterListContext parameterList() throws RecognitionException {
		ParameterListContext _localctx = new ParameterListContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_parameterList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(426);
			parameter();
			setState(431);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(427);
					match(Comma);
					setState(428);
					parameter();
					}
					} 
				}
				setState(433);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RequiredParameterListContext extends ParserRuleContext {
		public List<RequiredParameterContext> requiredParameter() {
			return getRuleContexts(RequiredParameterContext.class);
		}
		public RequiredParameterContext requiredParameter(int i) {
			return getRuleContext(RequiredParameterContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public RequiredParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_requiredParameterList; }
	}

	public final RequiredParameterListContext requiredParameterList() throws RecognitionException {
		RequiredParameterListContext _localctx = new RequiredParameterListContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_requiredParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(434);
			requiredParameter();
			setState(439);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(435);
				match(Comma);
				setState(436);
				requiredParameter();
				}
				}
				setState(441);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterContext extends ParserRuleContext {
		public RequiredParameterContext requiredParameter() {
			return getRuleContext(RequiredParameterContext.class,0);
		}
		public OptionalParameterContext optionalParameter() {
			return getRuleContext(OptionalParameterContext.class,0);
		}
		public ParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter; }
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_parameter);
		try {
			setState(444);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(442);
				requiredParameter();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(443);
				optionalParameter();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionalParameterContext extends ParserRuleContext {
		public IdentifierOrPatternContext identifierOrPattern() {
			return getRuleContext(IdentifierOrPatternContext.class,0);
		}
		public TerminalNode QuestionMark() { return getToken(TSASMParser.QuestionMark, 0); }
		public InitializerContext initializer() {
			return getRuleContext(InitializerContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public OptionalParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionalParameter; }
	}

	public final OptionalParameterContext optionalParameter() throws RecognitionException {
		OptionalParameterContext _localctx = new OptionalParameterContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_optionalParameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(446);
			identifierOrPattern();
			setState(455);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case QuestionMark:
				{
				setState(447);
				match(QuestionMark);
				setState(449);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Colon) {
					{
					setState(448);
					typeAnnotation();
					}
				}

				}
				break;
			case Assign:
			case Colon:
				{
				setState(452);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Colon) {
					{
					setState(451);
					typeAnnotation();
					}
				}

				setState(454);
				initializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RequiredParameterContext extends ParserRuleContext {
		public IdentifierOrPatternContext identifierOrPattern() {
			return getRuleContext(IdentifierOrPatternContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public RequiredParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_requiredParameter; }
	}

	public final RequiredParameterContext requiredParameter() throws RecognitionException {
		RequiredParameterContext _localctx = new RequiredParameterContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_requiredParameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(457);
			identifierOrPattern();
			setState(459);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(458);
				typeAnnotation();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierOrPatternContext extends ParserRuleContext {
		public IdentifierNameContext identifierName() {
			return getRuleContext(IdentifierNameContext.class,0);
		}
		public BindingPatternContext bindingPattern() {
			return getRuleContext(BindingPatternContext.class,0);
		}
		public IdentifierOrPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierOrPattern; }
	}

	public final IdentifierOrPatternContext identifierOrPattern() throws RecognitionException {
		IdentifierOrPatternContext _localctx = new IdentifierOrPatternContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_identifierOrPattern);
		try {
			setState(463);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NullLiteral:
			case BooleanLiteral:
			case Break:
			case Typeof:
			case Case:
			case Else:
			case Catch:
			case Finally:
			case Return:
			case Void:
			case Continue:
			case For:
			case Switch:
			case While:
			case Debugger:
			case Default:
			case If:
			case Throw:
			case Delete:
			case In:
			case Try:
			case From:
			case Enum:
			case Extends:
			case Const:
			case Export:
			case Import:
			case Implements:
			case Let:
			case Interface:
			case String:
			case TypeAlias:
			case Require:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(461);
				identifierName();
				}
				break;
			case OpenBracket:
			case OpenBrace:
				enterOuterAlt(_localctx, 2);
				{
				setState(462);
				bindingPattern();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IndexSignatureContext extends ParserRuleContext {
		public TerminalNode OpenBracket() { return getToken(TSASMParser.OpenBracket, 0); }
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public TerminalNode Colon() { return getToken(TSASMParser.Colon, 0); }
		public TerminalNode CloseBracket() { return getToken(TSASMParser.CloseBracket, 0); }
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public TerminalNode Number() { return getToken(TSASMParser.Number, 0); }
		public TerminalNode String() { return getToken(TSASMParser.String, 0); }
		public IndexSignatureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexSignature; }
	}

	public final IndexSignatureContext indexSignature() throws RecognitionException {
		IndexSignatureContext _localctx = new IndexSignatureContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_indexSignature);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(465);
			match(OpenBracket);
			setState(466);
			match(Identifier);
			setState(467);
			match(Colon);
			setState(468);
			_la = _input.LA(1);
			if ( !(_la==Number || _la==String) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(469);
			match(CloseBracket);
			setState(470);
			typeAnnotation();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeAliasDeclarationContext extends ParserRuleContext {
		public TerminalNode TypeAlias() { return getToken(TSASMParser.TypeAlias, 0); }
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public TerminalNode Assign() { return getToken(TSASMParser.Assign, 0); }
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public TerminalNode SemiColon() { return getToken(TSASMParser.SemiColon, 0); }
		public TypeParametersContext typeParameters() {
			return getRuleContext(TypeParametersContext.class,0);
		}
		public TypeAliasDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeAliasDeclaration; }
	}

	public final TypeAliasDeclarationContext typeAliasDeclaration() throws RecognitionException {
		TypeAliasDeclarationContext _localctx = new TypeAliasDeclarationContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_typeAliasDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(472);
			match(TypeAlias);
			setState(473);
			match(Identifier);
			setState(475);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LessThan) {
				{
				setState(474);
				typeParameters();
				}
			}

			setState(477);
			match(Assign);
			setState(478);
			type_();
			setState(479);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceDeclarationContext extends ParserRuleContext {
		public TerminalNode Interface() { return getToken(TSASMParser.Interface, 0); }
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public ObjectTypeContext objectType() {
			return getRuleContext(ObjectTypeContext.class,0);
		}
		public TerminalNode Export() { return getToken(TSASMParser.Export, 0); }
		public TerminalNode Declare() { return getToken(TSASMParser.Declare, 0); }
		public TypeParametersContext typeParameters() {
			return getRuleContext(TypeParametersContext.class,0);
		}
		public InterfaceExtendsClauseContext interfaceExtendsClause() {
			return getRuleContext(InterfaceExtendsClauseContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(TSASMParser.SemiColon, 0); }
		public InterfaceDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceDeclaration; }
	}

	public final InterfaceDeclarationContext interfaceDeclaration() throws RecognitionException {
		InterfaceDeclarationContext _localctx = new InterfaceDeclarationContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_interfaceDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(482);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Export) {
				{
				setState(481);
				match(Export);
				}
			}

			setState(485);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Declare) {
				{
				setState(484);
				match(Declare);
				}
			}

			setState(487);
			match(Interface);
			setState(488);
			match(Identifier);
			setState(490);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LessThan) {
				{
				setState(489);
				typeParameters();
				}
			}

			setState(493);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Extends) {
				{
				setState(492);
				interfaceExtendsClause();
				}
			}

			setState(495);
			objectType();
			setState(497);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
			case 1:
				{
				setState(496);
				match(SemiColon);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceExtendsClauseContext extends ParserRuleContext {
		public TerminalNode Extends() { return getToken(TSASMParser.Extends, 0); }
		public ClassOrInterfaceTypeListContext classOrInterfaceTypeList() {
			return getRuleContext(ClassOrInterfaceTypeListContext.class,0);
		}
		public InterfaceExtendsClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceExtendsClause; }
	}

	public final InterfaceExtendsClauseContext interfaceExtendsClause() throws RecognitionException {
		InterfaceExtendsClauseContext _localctx = new InterfaceExtendsClauseContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_interfaceExtendsClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(499);
			match(Extends);
			setState(500);
			classOrInterfaceTypeList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassOrInterfaceTypeListContext extends ParserRuleContext {
		public List<TypeReferenceContext> typeReference() {
			return getRuleContexts(TypeReferenceContext.class);
		}
		public TypeReferenceContext typeReference(int i) {
			return getRuleContext(TypeReferenceContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public ClassOrInterfaceTypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classOrInterfaceTypeList; }
	}

	public final ClassOrInterfaceTypeListContext classOrInterfaceTypeList() throws RecognitionException {
		ClassOrInterfaceTypeListContext _localctx = new ClassOrInterfaceTypeListContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_classOrInterfaceTypeList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(502);
			typeReference();
			setState(507);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(503);
				match(Comma);
				setState(504);
				typeReference();
				}
				}
				setState(509);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumDeclarationContext extends ParserRuleContext {
		public TerminalNode Enum() { return getToken(TSASMParser.Enum, 0); }
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public TerminalNode OpenBrace() { return getToken(TSASMParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(TSASMParser.CloseBrace, 0); }
		public TerminalNode Const() { return getToken(TSASMParser.Const, 0); }
		public EnumBodyContext enumBody() {
			return getRuleContext(EnumBodyContext.class,0);
		}
		public EnumDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDeclaration; }
	}

	public final EnumDeclarationContext enumDeclaration() throws RecognitionException {
		EnumDeclarationContext _localctx = new EnumDeclarationContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_enumDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(511);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Const) {
				{
				setState(510);
				match(Const);
				}
			}

			setState(513);
			match(Enum);
			setState(514);
			match(Identifier);
			setState(515);
			match(OpenBrace);
			setState(517);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 54)) & ~0x3f) == 0 && ((1L << (_la - 54)) & ((1L << (NullLiteral - 54)) | (1L << (BooleanLiteral - 54)) | (1L << (DecimalLiteral - 54)) | (1L << (HexIntegerLiteral - 54)) | (1L << (OctalIntegerLiteral - 54)) | (1L << (OctalIntegerLiteral2 - 54)) | (1L << (BinaryIntegerLiteral - 54)) | (1L << (Break - 54)) | (1L << (Typeof - 54)) | (1L << (Case - 54)) | (1L << (Else - 54)) | (1L << (Catch - 54)) | (1L << (Finally - 54)) | (1L << (Return - 54)) | (1L << (Void - 54)) | (1L << (Continue - 54)) | (1L << (For - 54)) | (1L << (Switch - 54)) | (1L << (While - 54)) | (1L << (Debugger - 54)) | (1L << (Default - 54)) | (1L << (If - 54)) | (1L << (Throw - 54)) | (1L << (Delete - 54)) | (1L << (In - 54)) | (1L << (Try - 54)) | (1L << (From - 54)) | (1L << (Enum - 54)) | (1L << (Extends - 54)) | (1L << (Const - 54)) | (1L << (Export - 54)) | (1L << (Import - 54)) | (1L << (Implements - 54)) | (1L << (Let - 54)) | (1L << (Interface - 54)) | (1L << (String - 54)) | (1L << (TypeAlias - 54)) | (1L << (Require - 54)) | (1L << (Identifier - 54)) | (1L << (StringLiteral - 54)))) != 0)) {
				{
				setState(516);
				enumBody();
				}
			}

			setState(519);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumBodyContext extends ParserRuleContext {
		public EnumMemberListContext enumMemberList() {
			return getRuleContext(EnumMemberListContext.class,0);
		}
		public TerminalNode Comma() { return getToken(TSASMParser.Comma, 0); }
		public EnumBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumBody; }
	}

	public final EnumBodyContext enumBody() throws RecognitionException {
		EnumBodyContext _localctx = new EnumBodyContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_enumBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(521);
			enumMemberList();
			setState(523);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Comma) {
				{
				setState(522);
				match(Comma);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumMemberListContext extends ParserRuleContext {
		public List<EnumMemberContext> enumMember() {
			return getRuleContexts(EnumMemberContext.class);
		}
		public EnumMemberContext enumMember(int i) {
			return getRuleContext(EnumMemberContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public EnumMemberListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumMemberList; }
	}

	public final EnumMemberListContext enumMemberList() throws RecognitionException {
		EnumMemberListContext _localctx = new EnumMemberListContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_enumMemberList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(525);
			enumMember();
			setState(530);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(526);
					match(Comma);
					setState(527);
					enumMember();
					}
					} 
				}
				setState(532);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumMemberContext extends ParserRuleContext {
		public PropertyNameContext propertyName() {
			return getRuleContext(PropertyNameContext.class,0);
		}
		public TerminalNode Assign() { return getToken(TSASMParser.Assign, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public EnumMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumMember; }
	}

	public final EnumMemberContext enumMember() throws RecognitionException {
		EnumMemberContext _localctx = new EnumMemberContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_enumMember);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(533);
			propertyName();
			setState(536);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Assign) {
				{
				setState(534);
				match(Assign);
				setState(535);
				singleExpression(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespaceNameContext extends ParserRuleContext {
		public List<TerminalNode> Identifier() { return getTokens(TSASMParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(TSASMParser.Identifier, i);
		}
		public List<TerminalNode> Dot() { return getTokens(TSASMParser.Dot); }
		public TerminalNode Dot(int i) {
			return getToken(TSASMParser.Dot, i);
		}
		public NamespaceNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespaceName; }
	}

	public final NamespaceNameContext namespaceName() throws RecognitionException {
		NamespaceNameContext _localctx = new NamespaceNameContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_namespaceName);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(538);
			match(Identifier);
			setState(547);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,52,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(540); 
					_errHandler.sync(this);
					_la = _input.LA(1);
					do {
						{
						{
						setState(539);
						match(Dot);
						}
						}
						setState(542); 
						_errHandler.sync(this);
						_la = _input.LA(1);
					} while ( _la==Dot );
					setState(544);
					match(Identifier);
					}
					} 
				}
				setState(549);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,52,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportAliasDeclarationContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public TerminalNode Assign() { return getToken(TSASMParser.Assign, 0); }
		public NamespaceNameContext namespaceName() {
			return getRuleContext(NamespaceNameContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(TSASMParser.SemiColon, 0); }
		public ImportAliasDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importAliasDeclaration; }
	}

	public final ImportAliasDeclarationContext importAliasDeclaration() throws RecognitionException {
		ImportAliasDeclarationContext _localctx = new ImportAliasDeclarationContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_importAliasDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(550);
			match(Identifier);
			setState(551);
			match(Assign);
			setState(552);
			namespaceName();
			setState(553);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(TSASMParser.EOF, 0); }
		public SourceElementsContext sourceElements() {
			return getRuleContext(SourceElementsContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_program);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(556);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
			case 1:
				{
				setState(555);
				sourceElements();
				}
				break;
			}
			setState(558);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SourceElementContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode Export() { return getToken(TSASMParser.Export, 0); }
		public SourceElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sourceElement; }
	}

	public final SourceElementContext sourceElement() throws RecognitionException {
		SourceElementContext _localctx = new SourceElementContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_sourceElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(561);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,54,_ctx) ) {
			case 1:
				{
				setState(560);
				match(Export);
				}
				break;
			}
			setState(563);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ImportStatementContext importStatement() {
			return getRuleContext(ImportStatementContext.class,0);
		}
		public ExportStatementContext exportStatement() {
			return getRuleContext(ExportStatementContext.class,0);
		}
		public EmptyStatement_Context emptyStatement_() {
			return getRuleContext(EmptyStatement_Context.class,0);
		}
		public InterfaceDeclarationContext interfaceDeclaration() {
			return getRuleContext(InterfaceDeclarationContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public IterationStatementContext iterationStatement() {
			return getRuleContext(IterationStatementContext.class,0);
		}
		public ContinueStatementContext continueStatement() {
			return getRuleContext(ContinueStatementContext.class,0);
		}
		public BreakStatementContext breakStatement() {
			return getRuleContext(BreakStatementContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public SwitchStatementContext switchStatement() {
			return getRuleContext(SwitchStatementContext.class,0);
		}
		public ThrowStatementContext throwStatement() {
			return getRuleContext(ThrowStatementContext.class,0);
		}
		public TryStatementContext tryStatement() {
			return getRuleContext(TryStatementContext.class,0);
		}
		public DebuggerStatementContext debuggerStatement() {
			return getRuleContext(DebuggerStatementContext.class,0);
		}
		public ArrowFunctionDeclarationContext arrowFunctionDeclaration() {
			return getRuleContext(ArrowFunctionDeclarationContext.class,0);
		}
		public VariableStatementContext variableStatement() {
			return getRuleContext(VariableStatementContext.class,0);
		}
		public TypeAliasDeclarationContext typeAliasDeclaration() {
			return getRuleContext(TypeAliasDeclarationContext.class,0);
		}
		public EnumDeclarationContext enumDeclaration() {
			return getRuleContext(EnumDeclarationContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public TerminalNode Export() { return getToken(TSASMParser.Export, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_statement);
		try {
			setState(586);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,55,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(565);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(566);
				importStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(567);
				exportStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(568);
				emptyStatement_();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(569);
				interfaceDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(570);
				ifStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(571);
				iterationStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(572);
				continueStatement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(573);
				breakStatement();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(574);
				returnStatement();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(575);
				switchStatement();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(576);
				throwStatement();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(577);
				tryStatement();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(578);
				debuggerStatement();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(579);
				arrowFunctionDeclaration();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(580);
				variableStatement();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(581);
				typeAliasDeclaration();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(582);
				enumDeclaration();
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(583);
				expressionStatement();
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(584);
				match(Export);
				setState(585);
				statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(TSASMParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(TSASMParser.CloseBrace, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(588);
			match(OpenBrace);
			setState(590);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,56,_ctx) ) {
			case 1:
				{
				setState(589);
				statementList();
				}
				break;
			}
			setState(592);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementListContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public StatementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementList; }
	}

	public final StatementListContext statementList() throws RecognitionException {
		StatementListContext _localctx = new StatementListContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_statementList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(595); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(594);
					statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(597); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,57,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportStatementContext extends ParserRuleContext {
		public TerminalNode Import() { return getToken(TSASMParser.Import, 0); }
		public FromBlockContext fromBlock() {
			return getRuleContext(FromBlockContext.class,0);
		}
		public ImportAliasDeclarationContext importAliasDeclaration() {
			return getRuleContext(ImportAliasDeclarationContext.class,0);
		}
		public ImportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importStatement; }
	}

	public final ImportStatementContext importStatement() throws RecognitionException {
		ImportStatementContext _localctx = new ImportStatementContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_importStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(599);
			match(Import);
			setState(602);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,58,_ctx) ) {
			case 1:
				{
				setState(600);
				fromBlock();
				}
				break;
			case 2:
				{
				setState(601);
				importAliasDeclaration();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FromBlockContext extends ParserRuleContext {
		public TerminalNode From() { return getToken(TSASMParser.From, 0); }
		public TerminalNode StringLiteral() { return getToken(TSASMParser.StringLiteral, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public TerminalNode Multiply() { return getToken(TSASMParser.Multiply, 0); }
		public MultipleImportStatementContext multipleImportStatement() {
			return getRuleContext(MultipleImportStatementContext.class,0);
		}
		public TerminalNode As() { return getToken(TSASMParser.As, 0); }
		public IdentifierNameContext identifierName() {
			return getRuleContext(IdentifierNameContext.class,0);
		}
		public FromBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fromBlock; }
	}

	public final FromBlockContext fromBlock() throws RecognitionException {
		FromBlockContext _localctx = new FromBlockContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_fromBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(606);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Multiply:
				{
				setState(604);
				match(Multiply);
				}
				break;
			case OpenBrace:
			case NullLiteral:
			case BooleanLiteral:
			case Break:
			case Typeof:
			case Case:
			case Else:
			case Catch:
			case Finally:
			case Return:
			case Void:
			case Continue:
			case For:
			case Switch:
			case While:
			case Debugger:
			case Default:
			case If:
			case Throw:
			case Delete:
			case In:
			case Try:
			case From:
			case Enum:
			case Extends:
			case Const:
			case Export:
			case Import:
			case Implements:
			case Let:
			case Interface:
			case String:
			case TypeAlias:
			case Require:
			case Identifier:
				{
				setState(605);
				multipleImportStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(610);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==As) {
				{
				setState(608);
				match(As);
				setState(609);
				identifierName();
				}
			}

			setState(612);
			match(From);
			setState(613);
			match(StringLiteral);
			setState(614);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MultipleImportStatementContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(TSASMParser.OpenBrace, 0); }
		public List<IdentifierNameContext> identifierName() {
			return getRuleContexts(IdentifierNameContext.class);
		}
		public IdentifierNameContext identifierName(int i) {
			return getRuleContext(IdentifierNameContext.class,i);
		}
		public TerminalNode CloseBrace() { return getToken(TSASMParser.CloseBrace, 0); }
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public MultipleImportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multipleImportStatement; }
	}

	public final MultipleImportStatementContext multipleImportStatement() throws RecognitionException {
		MultipleImportStatementContext _localctx = new MultipleImportStatementContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_multipleImportStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(619);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 54)) & ~0x3f) == 0 && ((1L << (_la - 54)) & ((1L << (NullLiteral - 54)) | (1L << (BooleanLiteral - 54)) | (1L << (Break - 54)) | (1L << (Typeof - 54)) | (1L << (Case - 54)) | (1L << (Else - 54)) | (1L << (Catch - 54)) | (1L << (Finally - 54)) | (1L << (Return - 54)) | (1L << (Void - 54)) | (1L << (Continue - 54)) | (1L << (For - 54)) | (1L << (Switch - 54)) | (1L << (While - 54)) | (1L << (Debugger - 54)) | (1L << (Default - 54)) | (1L << (If - 54)) | (1L << (Throw - 54)) | (1L << (Delete - 54)) | (1L << (In - 54)) | (1L << (Try - 54)) | (1L << (From - 54)) | (1L << (Enum - 54)) | (1L << (Extends - 54)) | (1L << (Const - 54)) | (1L << (Export - 54)) | (1L << (Import - 54)) | (1L << (Implements - 54)) | (1L << (Let - 54)) | (1L << (Interface - 54)) | (1L << (String - 54)) | (1L << (TypeAlias - 54)) | (1L << (Require - 54)) | (1L << (Identifier - 54)))) != 0)) {
				{
				setState(616);
				identifierName();
				setState(617);
				match(Comma);
				}
			}

			setState(621);
			match(OpenBrace);
			setState(622);
			identifierName();
			setState(627);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(623);
				match(Comma);
				setState(624);
				identifierName();
				}
				}
				setState(629);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(630);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExportStatementContext extends ParserRuleContext {
		public TerminalNode Export() { return getToken(TSASMParser.Export, 0); }
		public FromBlockContext fromBlock() {
			return getRuleContext(FromBlockContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode Default() { return getToken(TSASMParser.Default, 0); }
		public ExportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exportStatement; }
	}

	public final ExportStatementContext exportStatement() throws RecognitionException {
		ExportStatementContext _localctx = new ExportStatementContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_exportStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(632);
			match(Export);
			setState(634);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,63,_ctx) ) {
			case 1:
				{
				setState(633);
				match(Default);
				}
				break;
			}
			setState(638);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,64,_ctx) ) {
			case 1:
				{
				setState(636);
				fromBlock();
				}
				break;
			case 2:
				{
				setState(637);
				statement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableStatementContext extends ParserRuleContext {
		public BindingPatternContext bindingPattern() {
			return getRuleContext(BindingPatternContext.class,0);
		}
		public InitializerContext initializer() {
			return getRuleContext(InitializerContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(TSASMParser.SemiColon, 0); }
		public VariableDeclarationListContext variableDeclarationList() {
			return getRuleContext(VariableDeclarationListContext.class,0);
		}
		public VarModifierContext varModifier() {
			return getRuleContext(VarModifierContext.class,0);
		}
		public TerminalNode Declare() { return getToken(TSASMParser.Declare, 0); }
		public VariableStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableStatement; }
	}

	public final VariableStatementContext variableStatement() throws RecognitionException {
		VariableStatementContext _localctx = new VariableStatementContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_variableStatement);
		int _la;
		try {
			setState(663);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OpenBracket:
			case OpenBrace:
				enterOuterAlt(_localctx, 1);
				{
				setState(640);
				bindingPattern();
				setState(642);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Colon) {
					{
					setState(641);
					typeAnnotation();
					}
				}

				setState(644);
				initializer();
				setState(646);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
				case 1:
					{
					setState(645);
					match(SemiColon);
					}
					break;
				}
				}
				break;
			case Const:
			case Let:
			case TypeAlias:
			case Require:
			case Identifier:
				enterOuterAlt(_localctx, 2);
				{
				setState(649);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Const || _la==Let) {
					{
					setState(648);
					varModifier();
					}
				}

				setState(651);
				variableDeclarationList();
				setState(653);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,68,_ctx) ) {
				case 1:
					{
					setState(652);
					match(SemiColon);
					}
					break;
				}
				}
				break;
			case Declare:
				enterOuterAlt(_localctx, 3);
				{
				setState(655);
				match(Declare);
				setState(657);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Const || _la==Let) {
					{
					setState(656);
					varModifier();
					}
				}

				setState(659);
				variableDeclarationList();
				setState(661);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,70,_ctx) ) {
				case 1:
					{
					setState(660);
					match(SemiColon);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationListContext extends ParserRuleContext {
		public List<VariableDeclarationContext> variableDeclaration() {
			return getRuleContexts(VariableDeclarationContext.class);
		}
		public VariableDeclarationContext variableDeclaration(int i) {
			return getRuleContext(VariableDeclarationContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public VariableDeclarationListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarationList; }
	}

	public final VariableDeclarationListContext variableDeclarationList() throws RecognitionException {
		VariableDeclarationListContext _localctx = new VariableDeclarationListContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_variableDeclarationList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(665);
			variableDeclaration();
			setState(670);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,72,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(666);
					match(Comma);
					setState(667);
					variableDeclaration();
					}
					} 
				}
				setState(672);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,72,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationContext extends ParserRuleContext {
		public IdentifierOrKeyWordContext identifierOrKeyWord() {
			return getRuleContext(IdentifierOrKeyWordContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Assign() { return getToken(TSASMParser.Assign, 0); }
		public TypeParametersContext typeParameters() {
			return getRuleContext(TypeParametersContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(673);
			identifierOrKeyWord();
			}
			setState(675);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,73,_ctx) ) {
			case 1:
				{
				setState(674);
				typeAnnotation();
				}
				break;
			}
			setState(678);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
			case 1:
				{
				setState(677);
				singleExpression(0);
				}
				break;
			}
			setState(685);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,76,_ctx) ) {
			case 1:
				{
				setState(680);
				match(Assign);
				setState(682);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,75,_ctx) ) {
				case 1:
					{
					setState(681);
					typeParameters();
					}
					break;
				}
				setState(684);
				singleExpression(0);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EmptyStatement_Context extends ParserRuleContext {
		public TerminalNode SemiColon() { return getToken(TSASMParser.SemiColon, 0); }
		public EmptyStatement_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptyStatement_; }
	}

	public final EmptyStatement_Context emptyStatement_() throws RecognitionException {
		EmptyStatement_Context _localctx = new EmptyStatement_Context(_ctx, getState());
		enterRule(_localctx, 120, RULE_emptyStatement_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(687);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionStatementContext extends ParserRuleContext {
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(TSASMParser.SemiColon, 0); }
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(689);
			if (!(this.notOpenBrace())) throw new FailedPredicateException(this, "this.notOpenBrace()");
			setState(690);
			expressionSequence();
			setState(692);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,77,_ctx) ) {
			case 1:
				{
				setState(691);
				match(SemiColon);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode If() { return getToken(TSASMParser.If, 0); }
		public TerminalNode OpenParen() { return getToken(TSASMParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(TSASMParser.CloseParen, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode Else() { return getToken(TSASMParser.Else, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(694);
			match(If);
			setState(695);
			match(OpenParen);
			setState(696);
			expressionSequence();
			setState(697);
			match(CloseParen);
			setState(698);
			statement();
			setState(701);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,78,_ctx) ) {
			case 1:
				{
				setState(699);
				match(Else);
				setState(700);
				statement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IterationStatementContext extends ParserRuleContext {
		public IterationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iterationStatement; }
	 
		public IterationStatementContext() { }
		public void copyFrom(IterationStatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class WhileStatementContext extends IterationStatementContext {
		public TerminalNode While() { return getToken(TSASMParser.While, 0); }
		public TerminalNode OpenParen() { return getToken(TSASMParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(TSASMParser.CloseParen, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WhileStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class ForStatementContext extends IterationStatementContext {
		public TerminalNode For() { return getToken(TSASMParser.For, 0); }
		public TerminalNode OpenParen() { return getToken(TSASMParser.OpenParen, 0); }
		public List<TerminalNode> SemiColon() { return getTokens(TSASMParser.SemiColon); }
		public TerminalNode SemiColon(int i) {
			return getToken(TSASMParser.SemiColon, i);
		}
		public TerminalNode CloseParen() { return getToken(TSASMParser.CloseParen, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public List<ExpressionSequenceContext> expressionSequence() {
			return getRuleContexts(ExpressionSequenceContext.class);
		}
		public ExpressionSequenceContext expressionSequence(int i) {
			return getRuleContext(ExpressionSequenceContext.class,i);
		}
		public ForStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}

	public final IterationStatementContext iterationStatement() throws RecognitionException {
		IterationStatementContext _localctx = new IterationStatementContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_iterationStatement);
		int _la;
		try {
			setState(724);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case While:
				_localctx = new WhileStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(703);
				match(While);
				setState(704);
				match(OpenParen);
				setState(705);
				expressionSequence();
				setState(706);
				match(CloseParen);
				setState(707);
				statement();
				}
				break;
			case For:
				_localctx = new ForStatementContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(709);
				match(For);
				setState(710);
				match(OpenParen);
				setState(712);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << RegularExpressionLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << LessThan) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral) | (1L << Break) | (1L << Typeof))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Case - 64)) | (1L << (Else - 64)) | (1L << (Catch - 64)) | (1L << (Finally - 64)) | (1L << (Return - 64)) | (1L << (Void - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Debugger - 64)) | (1L << (Default - 64)) | (1L << (If - 64)) | (1L << (Throw - 64)) | (1L << (Delete - 64)) | (1L << (In - 64)) | (1L << (Try - 64)) | (1L << (From - 64)) | (1L << (Enum - 64)) | (1L << (Extends - 64)) | (1L << (Const - 64)) | (1L << (Export - 64)) | (1L << (Import - 64)) | (1L << (Implements - 64)) | (1L << (Let - 64)) | (1L << (Interface - 64)) | (1L << (String - 64)) | (1L << (TypeAlias - 64)) | (1L << (Require - 64)) | (1L << (Identifier - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
					{
					setState(711);
					expressionSequence();
					}
				}

				setState(714);
				match(SemiColon);
				setState(716);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << RegularExpressionLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << LessThan) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral) | (1L << Break) | (1L << Typeof))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Case - 64)) | (1L << (Else - 64)) | (1L << (Catch - 64)) | (1L << (Finally - 64)) | (1L << (Return - 64)) | (1L << (Void - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Debugger - 64)) | (1L << (Default - 64)) | (1L << (If - 64)) | (1L << (Throw - 64)) | (1L << (Delete - 64)) | (1L << (In - 64)) | (1L << (Try - 64)) | (1L << (From - 64)) | (1L << (Enum - 64)) | (1L << (Extends - 64)) | (1L << (Const - 64)) | (1L << (Export - 64)) | (1L << (Import - 64)) | (1L << (Implements - 64)) | (1L << (Let - 64)) | (1L << (Interface - 64)) | (1L << (String - 64)) | (1L << (TypeAlias - 64)) | (1L << (Require - 64)) | (1L << (Identifier - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
					{
					setState(715);
					expressionSequence();
					}
				}

				setState(718);
				match(SemiColon);
				setState(720);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << RegularExpressionLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << LessThan) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral) | (1L << Break) | (1L << Typeof))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Case - 64)) | (1L << (Else - 64)) | (1L << (Catch - 64)) | (1L << (Finally - 64)) | (1L << (Return - 64)) | (1L << (Void - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Debugger - 64)) | (1L << (Default - 64)) | (1L << (If - 64)) | (1L << (Throw - 64)) | (1L << (Delete - 64)) | (1L << (In - 64)) | (1L << (Try - 64)) | (1L << (From - 64)) | (1L << (Enum - 64)) | (1L << (Extends - 64)) | (1L << (Const - 64)) | (1L << (Export - 64)) | (1L << (Import - 64)) | (1L << (Implements - 64)) | (1L << (Let - 64)) | (1L << (Interface - 64)) | (1L << (String - 64)) | (1L << (TypeAlias - 64)) | (1L << (Require - 64)) | (1L << (Identifier - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
					{
					setState(719);
					expressionSequence();
					}
				}

				setState(722);
				match(CloseParen);
				setState(723);
				statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarModifierContext extends ParserRuleContext {
		public TerminalNode Let() { return getToken(TSASMParser.Let, 0); }
		public TerminalNode Const() { return getToken(TSASMParser.Const, 0); }
		public VarModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varModifier; }
	}

	public final VarModifierContext varModifier() throws RecognitionException {
		VarModifierContext _localctx = new VarModifierContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_varModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(726);
			_la = _input.LA(1);
			if ( !(_la==Const || _la==Let) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContinueStatementContext extends ParserRuleContext {
		public TerminalNode Continue() { return getToken(TSASMParser.Continue, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public ContinueStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_continueStatement; }
	}

	public final ContinueStatementContext continueStatement() throws RecognitionException {
		ContinueStatementContext _localctx = new ContinueStatementContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_continueStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(728);
			match(Continue);
			setState(731);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,83,_ctx) ) {
			case 1:
				{
				setState(729);
				if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
				setState(730);
				match(Identifier);
				}
				break;
			}
			setState(733);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BreakStatementContext extends ParserRuleContext {
		public TerminalNode Break() { return getToken(TSASMParser.Break, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public BreakStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStatement; }
	}

	public final BreakStatementContext breakStatement() throws RecognitionException {
		BreakStatementContext _localctx = new BreakStatementContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_breakStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(735);
			match(Break);
			setState(738);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
			case 1:
				{
				setState(736);
				if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
				setState(737);
				match(Identifier);
				}
				break;
			}
			setState(740);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturnStatementContext extends ParserRuleContext {
		public TerminalNode Return() { return getToken(TSASMParser.Return, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(742);
			match(Return);
			setState(745);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,85,_ctx) ) {
			case 1:
				{
				setState(743);
				if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
				setState(744);
				expressionSequence();
				}
				break;
			}
			setState(747);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchStatementContext extends ParserRuleContext {
		public TerminalNode Switch() { return getToken(TSASMParser.Switch, 0); }
		public TerminalNode OpenParen() { return getToken(TSASMParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(TSASMParser.CloseParen, 0); }
		public CaseBlockContext caseBlock() {
			return getRuleContext(CaseBlockContext.class,0);
		}
		public SwitchStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchStatement; }
	}

	public final SwitchStatementContext switchStatement() throws RecognitionException {
		SwitchStatementContext _localctx = new SwitchStatementContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_switchStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(749);
			match(Switch);
			setState(750);
			match(OpenParen);
			setState(751);
			expressionSequence();
			setState(752);
			match(CloseParen);
			setState(753);
			caseBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseBlockContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(TSASMParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(TSASMParser.CloseBrace, 0); }
		public List<CaseClausesContext> caseClauses() {
			return getRuleContexts(CaseClausesContext.class);
		}
		public CaseClausesContext caseClauses(int i) {
			return getRuleContext(CaseClausesContext.class,i);
		}
		public DefaultClauseContext defaultClause() {
			return getRuleContext(DefaultClauseContext.class,0);
		}
		public CaseBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseBlock; }
	}

	public final CaseBlockContext caseBlock() throws RecognitionException {
		CaseBlockContext _localctx = new CaseBlockContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_caseBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(755);
			match(OpenBrace);
			setState(757);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Case) {
				{
				setState(756);
				caseClauses();
				}
			}

			setState(763);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Default) {
				{
				setState(759);
				defaultClause();
				setState(761);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Case) {
					{
					setState(760);
					caseClauses();
					}
				}

				}
			}

			setState(765);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseClausesContext extends ParserRuleContext {
		public List<CaseClauseContext> caseClause() {
			return getRuleContexts(CaseClauseContext.class);
		}
		public CaseClauseContext caseClause(int i) {
			return getRuleContext(CaseClauseContext.class,i);
		}
		public CaseClausesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseClauses; }
	}

	public final CaseClausesContext caseClauses() throws RecognitionException {
		CaseClausesContext _localctx = new CaseClausesContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_caseClauses);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(768); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(767);
				caseClause();
				}
				}
				setState(770); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Case );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseClauseContext extends ParserRuleContext {
		public TerminalNode Case() { return getToken(TSASMParser.Case, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode Colon() { return getToken(TSASMParser.Colon, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public CaseClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseClause; }
	}

	public final CaseClauseContext caseClause() throws RecognitionException {
		CaseClauseContext _localctx = new CaseClauseContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_caseClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(772);
			match(Case);
			setState(773);
			expressionSequence();
			setState(774);
			match(Colon);
			setState(776);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,90,_ctx) ) {
			case 1:
				{
				setState(775);
				statementList();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefaultClauseContext extends ParserRuleContext {
		public TerminalNode Default() { return getToken(TSASMParser.Default, 0); }
		public TerminalNode Colon() { return getToken(TSASMParser.Colon, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public DefaultClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defaultClause; }
	}

	public final DefaultClauseContext defaultClause() throws RecognitionException {
		DefaultClauseContext _localctx = new DefaultClauseContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_defaultClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(778);
			match(Default);
			setState(779);
			match(Colon);
			setState(781);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,91,_ctx) ) {
			case 1:
				{
				setState(780);
				statementList();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ThrowStatementContext extends ParserRuleContext {
		public TerminalNode Throw() { return getToken(TSASMParser.Throw, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ThrowStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_throwStatement; }
	}

	public final ThrowStatementContext throwStatement() throws RecognitionException {
		ThrowStatementContext _localctx = new ThrowStatementContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_throwStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(783);
			match(Throw);
			setState(784);
			if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
			setState(785);
			expressionSequence();
			setState(786);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TryStatementContext extends ParserRuleContext {
		public TerminalNode Try() { return getToken(TSASMParser.Try, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public CatchProductionContext catchProduction() {
			return getRuleContext(CatchProductionContext.class,0);
		}
		public FinallyProductionContext finallyProduction() {
			return getRuleContext(FinallyProductionContext.class,0);
		}
		public TryStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tryStatement; }
	}

	public final TryStatementContext tryStatement() throws RecognitionException {
		TryStatementContext _localctx = new TryStatementContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_tryStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(788);
			match(Try);
			setState(789);
			block();
			setState(795);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Catch:
				{
				setState(790);
				catchProduction();
				setState(792);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,92,_ctx) ) {
				case 1:
					{
					setState(791);
					finallyProduction();
					}
					break;
				}
				}
				break;
			case Finally:
				{
				setState(794);
				finallyProduction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CatchProductionContext extends ParserRuleContext {
		public TerminalNode Catch() { return getToken(TSASMParser.Catch, 0); }
		public TerminalNode OpenParen() { return getToken(TSASMParser.OpenParen, 0); }
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public TerminalNode CloseParen() { return getToken(TSASMParser.CloseParen, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public CatchProductionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchProduction; }
	}

	public final CatchProductionContext catchProduction() throws RecognitionException {
		CatchProductionContext _localctx = new CatchProductionContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_catchProduction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(797);
			match(Catch);
			setState(798);
			match(OpenParen);
			setState(799);
			match(Identifier);
			setState(800);
			match(CloseParen);
			setState(801);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FinallyProductionContext extends ParserRuleContext {
		public TerminalNode Finally() { return getToken(TSASMParser.Finally, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public FinallyProductionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_finallyProduction; }
	}

	public final FinallyProductionContext finallyProduction() throws RecognitionException {
		FinallyProductionContext _localctx = new FinallyProductionContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_finallyProduction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(803);
			match(Finally);
			setState(804);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DebuggerStatementContext extends ParserRuleContext {
		public TerminalNode Debugger() { return getToken(TSASMParser.Debugger, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public DebuggerStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_debuggerStatement; }
	}

	public final DebuggerStatementContext debuggerStatement() throws RecognitionException {
		DebuggerStatementContext _localctx = new DebuggerStatementContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_debuggerStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(806);
			match(Debugger);
			setState(807);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IndexMemberDeclarationContext extends ParserRuleContext {
		public IndexSignatureContext indexSignature() {
			return getRuleContext(IndexSignatureContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(TSASMParser.SemiColon, 0); }
		public IndexMemberDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexMemberDeclaration; }
	}

	public final IndexMemberDeclarationContext indexMemberDeclaration() throws RecognitionException {
		IndexMemberDeclarationContext _localctx = new IndexMemberDeclarationContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_indexMemberDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(809);
			indexSignature();
			setState(810);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterListContext extends ParserRuleContext {
		public List<FormalParameterArgContext> formalParameterArg() {
			return getRuleContexts(FormalParameterArgContext.class);
		}
		public FormalParameterArgContext formalParameterArg(int i) {
			return getRuleContext(FormalParameterArgContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public FormalParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterList; }
	}

	public final FormalParameterListContext formalParameterList() throws RecognitionException {
		FormalParameterListContext _localctx = new FormalParameterListContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_formalParameterList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(812);
			formalParameterArg();
			setState(817);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,94,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(813);
					match(Comma);
					setState(814);
					formalParameterArg();
					}
					} 
				}
				setState(819);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,94,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterArgContext extends ParserRuleContext {
		public IdentifierOrKeyWordContext identifierOrKeyWord() {
			return getRuleContext(IdentifierOrKeyWordContext.class,0);
		}
		public TerminalNode QuestionMark() { return getToken(TSASMParser.QuestionMark, 0); }
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public TerminalNode Assign() { return getToken(TSASMParser.Assign, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public FormalParameterArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterArg; }
	}

	public final FormalParameterArgContext formalParameterArg() throws RecognitionException {
		FormalParameterArgContext _localctx = new FormalParameterArgContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_formalParameterArg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(820);
			identifierOrKeyWord();
			setState(822);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QuestionMark) {
				{
				setState(821);
				match(QuestionMark);
				}
			}

			setState(825);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(824);
				typeAnnotation();
				}
			}

			setState(829);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Assign) {
				{
				setState(827);
				match(Assign);
				setState(828);
				singleExpression(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionBodyContext extends ParserRuleContext {
		public SourceElementsContext sourceElements() {
			return getRuleContext(SourceElementsContext.class,0);
		}
		public FunctionBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionBody; }
	}

	public final FunctionBodyContext functionBody() throws RecognitionException {
		FunctionBodyContext _localctx = new FunctionBodyContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_functionBody);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(832);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,98,_ctx) ) {
			case 1:
				{
				setState(831);
				sourceElements();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SourceElementsContext extends ParserRuleContext {
		public List<SourceElementContext> sourceElement() {
			return getRuleContexts(SourceElementContext.class);
		}
		public SourceElementContext sourceElement(int i) {
			return getRuleContext(SourceElementContext.class,i);
		}
		public SourceElementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sourceElements; }
	}

	public final SourceElementsContext sourceElements() throws RecognitionException {
		SourceElementsContext _localctx = new SourceElementsContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_sourceElements);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(835); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(834);
					sourceElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(837); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,99,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayLiteralContext extends ParserRuleContext {
		public TerminalNode OpenBracket() { return getToken(TSASMParser.OpenBracket, 0); }
		public TerminalNode CloseBracket() { return getToken(TSASMParser.CloseBracket, 0); }
		public ElementListContext elementList() {
			return getRuleContext(ElementListContext.class,0);
		}
		public ArrayLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayLiteral; }
	}

	public final ArrayLiteralContext arrayLiteral() throws RecognitionException {
		ArrayLiteralContext _localctx = new ArrayLiteralContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_arrayLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(839);
			match(OpenBracket);
			setState(841);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << RegularExpressionLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << LessThan) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral) | (1L << Break) | (1L << Typeof))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Case - 64)) | (1L << (Else - 64)) | (1L << (Catch - 64)) | (1L << (Finally - 64)) | (1L << (Return - 64)) | (1L << (Void - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Debugger - 64)) | (1L << (Default - 64)) | (1L << (If - 64)) | (1L << (Throw - 64)) | (1L << (Delete - 64)) | (1L << (In - 64)) | (1L << (Try - 64)) | (1L << (From - 64)) | (1L << (Enum - 64)) | (1L << (Extends - 64)) | (1L << (Const - 64)) | (1L << (Export - 64)) | (1L << (Import - 64)) | (1L << (Implements - 64)) | (1L << (Let - 64)) | (1L << (Interface - 64)) | (1L << (String - 64)) | (1L << (TypeAlias - 64)) | (1L << (Require - 64)) | (1L << (Identifier - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
				{
				setState(840);
				elementList();
				}
			}

			setState(843);
			match(CloseBracket);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementListContext extends ParserRuleContext {
		public List<ArrayElementContext> arrayElement() {
			return getRuleContexts(ArrayElementContext.class);
		}
		public ArrayElementContext arrayElement(int i) {
			return getRuleContext(ArrayElementContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public ElementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementList; }
	}

	public final ElementListContext elementList() throws RecognitionException {
		ElementListContext _localctx = new ElementListContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_elementList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(845);
			arrayElement();
			setState(854);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(847); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(846);
					match(Comma);
					}
					}
					setState(849); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==Comma );
				setState(851);
				arrayElement();
				}
				}
				setState(856);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayElementContext extends ParserRuleContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public TerminalNode Comma() { return getToken(TSASMParser.Comma, 0); }
		public ArrayElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayElement; }
	}

	public final ArrayElementContext arrayElement() throws RecognitionException {
		ArrayElementContext _localctx = new ArrayElementContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_arrayElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(859);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,103,_ctx) ) {
			case 1:
				{
				setState(857);
				singleExpression(0);
				}
				break;
			case 2:
				{
				setState(858);
				match(Identifier);
				}
				break;
			}
			setState(862);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,104,_ctx) ) {
			case 1:
				{
				setState(861);
				match(Comma);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectLiteralContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(TSASMParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(TSASMParser.CloseBrace, 0); }
		public List<PropertyAssignmentContext> propertyAssignment() {
			return getRuleContexts(PropertyAssignmentContext.class);
		}
		public PropertyAssignmentContext propertyAssignment(int i) {
			return getRuleContext(PropertyAssignmentContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public ObjectLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectLiteral; }
	}

	public final ObjectLiteralContext objectLiteral() throws RecognitionException {
		ObjectLiteralContext _localctx = new ObjectLiteralContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_objectLiteral);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(864);
			match(OpenBrace);
			setState(876);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral) | (1L << Break) | (1L << Typeof))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Case - 64)) | (1L << (Else - 64)) | (1L << (Catch - 64)) | (1L << (Finally - 64)) | (1L << (Return - 64)) | (1L << (Void - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Debugger - 64)) | (1L << (Default - 64)) | (1L << (If - 64)) | (1L << (Throw - 64)) | (1L << (Delete - 64)) | (1L << (In - 64)) | (1L << (Try - 64)) | (1L << (From - 64)) | (1L << (Enum - 64)) | (1L << (Extends - 64)) | (1L << (Const - 64)) | (1L << (Export - 64)) | (1L << (Import - 64)) | (1L << (Implements - 64)) | (1L << (Let - 64)) | (1L << (Interface - 64)) | (1L << (String - 64)) | (1L << (TypeAlias - 64)) | (1L << (Require - 64)) | (1L << (Identifier - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
				{
				setState(865);
				propertyAssignment();
				setState(870);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,105,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(866);
						match(Comma);
						setState(867);
						propertyAssignment();
						}
						} 
					}
					setState(872);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,105,_ctx);
				}
				setState(874);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(873);
					match(Comma);
					}
				}

				}
			}

			setState(878);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropertyAssignmentContext extends ParserRuleContext {
		public PropertyAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyAssignment; }
	 
		public PropertyAssignmentContext() { }
		public void copyFrom(PropertyAssignmentContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class PropertyExpressionAssignmentContext extends PropertyAssignmentContext {
		public PropertyNameContext propertyName() {
			return getRuleContext(PropertyNameContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode Colon() { return getToken(TSASMParser.Colon, 0); }
		public TerminalNode Assign() { return getToken(TSASMParser.Assign, 0); }
		public PropertyExpressionAssignmentContext(PropertyAssignmentContext ctx) { copyFrom(ctx); }
	}
	public static class ComputedPropertyExpressionAssignmentContext extends PropertyAssignmentContext {
		public TerminalNode OpenBracket() { return getToken(TSASMParser.OpenBracket, 0); }
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode CloseBracket() { return getToken(TSASMParser.CloseBracket, 0); }
		public TerminalNode Colon() { return getToken(TSASMParser.Colon, 0); }
		public ComputedPropertyExpressionAssignmentContext(PropertyAssignmentContext ctx) { copyFrom(ctx); }
	}
	public static class PropertyShorthandContext extends PropertyAssignmentContext {
		public IdentifierOrKeyWordContext identifierOrKeyWord() {
			return getRuleContext(IdentifierOrKeyWordContext.class,0);
		}
		public PropertyShorthandContext(PropertyAssignmentContext ctx) { copyFrom(ctx); }
	}

	public final PropertyAssignmentContext propertyAssignment() throws RecognitionException {
		PropertyAssignmentContext _localctx = new PropertyAssignmentContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_propertyAssignment);
		int _la;
		try {
			setState(891);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,108,_ctx) ) {
			case 1:
				_localctx = new PropertyExpressionAssignmentContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(880);
				propertyName();
				setState(881);
				_la = _input.LA(1);
				if ( !(_la==Assign || _la==Colon) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(882);
				singleExpression(0);
				}
				break;
			case 2:
				_localctx = new ComputedPropertyExpressionAssignmentContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(884);
				match(OpenBracket);
				setState(885);
				singleExpression(0);
				setState(886);
				match(CloseBracket);
				setState(887);
				match(Colon);
				setState(888);
				singleExpression(0);
				}
				break;
			case 3:
				_localctx = new PropertyShorthandContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(890);
				identifierOrKeyWord();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropertyNameContext extends ParserRuleContext {
		public IdentifierNameContext identifierName() {
			return getRuleContext(IdentifierNameContext.class,0);
		}
		public TerminalNode StringLiteral() { return getToken(TSASMParser.StringLiteral, 0); }
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public PropertyNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyName; }
	}

	public final PropertyNameContext propertyName() throws RecognitionException {
		PropertyNameContext _localctx = new PropertyNameContext(_ctx, getState());
		enterRule(_localctx, 176, RULE_propertyName);
		try {
			setState(896);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NullLiteral:
			case BooleanLiteral:
			case Break:
			case Typeof:
			case Case:
			case Else:
			case Catch:
			case Finally:
			case Return:
			case Void:
			case Continue:
			case For:
			case Switch:
			case While:
			case Debugger:
			case Default:
			case If:
			case Throw:
			case Delete:
			case In:
			case Try:
			case From:
			case Enum:
			case Extends:
			case Const:
			case Export:
			case Import:
			case Implements:
			case Let:
			case Interface:
			case String:
			case TypeAlias:
			case Require:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(893);
				identifierName();
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(894);
				match(StringLiteral);
				}
				break;
			case DecimalLiteral:
			case HexIntegerLiteral:
			case OctalIntegerLiteral:
			case OctalIntegerLiteral2:
			case BinaryIntegerLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(895);
				numericLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentsContext extends ParserRuleContext {
		public TerminalNode OpenParen() { return getToken(TSASMParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(TSASMParser.CloseParen, 0); }
		public ArgumentListContext argumentList() {
			return getRuleContext(ArgumentListContext.class,0);
		}
		public TerminalNode Comma() { return getToken(TSASMParser.Comma, 0); }
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 178, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(898);
			match(OpenParen);
			setState(903);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << RegularExpressionLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Plus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << LessThan) | (1L << NullLiteral) | (1L << BooleanLiteral) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral) | (1L << Break) | (1L << Typeof))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Case - 64)) | (1L << (Else - 64)) | (1L << (Catch - 64)) | (1L << (Finally - 64)) | (1L << (Return - 64)) | (1L << (Void - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Debugger - 64)) | (1L << (Default - 64)) | (1L << (If - 64)) | (1L << (Throw - 64)) | (1L << (Delete - 64)) | (1L << (In - 64)) | (1L << (Try - 64)) | (1L << (From - 64)) | (1L << (Enum - 64)) | (1L << (Extends - 64)) | (1L << (Const - 64)) | (1L << (Export - 64)) | (1L << (Import - 64)) | (1L << (Implements - 64)) | (1L << (Let - 64)) | (1L << (Interface - 64)) | (1L << (String - 64)) | (1L << (TypeAlias - 64)) | (1L << (Require - 64)) | (1L << (Identifier - 64)) | (1L << (StringLiteral - 64)))) != 0)) {
				{
				setState(899);
				argumentList();
				setState(901);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(900);
					match(Comma);
					}
				}

				}
			}

			setState(905);
			match(CloseParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentListContext extends ParserRuleContext {
		public List<ArgumentContext> argument() {
			return getRuleContexts(ArgumentContext.class);
		}
		public ArgumentContext argument(int i) {
			return getRuleContext(ArgumentContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public ArgumentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentList; }
	}

	public final ArgumentListContext argumentList() throws RecognitionException {
		ArgumentListContext _localctx = new ArgumentListContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_argumentList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(907);
			argument();
			setState(912);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,112,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(908);
					match(Comma);
					setState(909);
					argument();
					}
					} 
				}
				setState(914);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,112,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentContext extends ParserRuleContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public ArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argument; }
	}

	public final ArgumentContext argument() throws RecognitionException {
		ArgumentContext _localctx = new ArgumentContext(_ctx, getState());
		enterRule(_localctx, 182, RULE_argument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(917);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,113,_ctx) ) {
			case 1:
				{
				setState(915);
				singleExpression(0);
				}
				break;
			case 2:
				{
				setState(916);
				match(Identifier);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionSequenceContext extends ParserRuleContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(TSASMParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(TSASMParser.Comma, i);
		}
		public ExpressionSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionSequence; }
	}

	public final ExpressionSequenceContext expressionSequence() throws RecognitionException {
		ExpressionSequenceContext _localctx = new ExpressionSequenceContext(_ctx, getState());
		enterRule(_localctx, 184, RULE_expressionSequence);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(919);
			singleExpression(0);
			setState(924);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,114,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(920);
					match(Comma);
					setState(921);
					singleExpression(0);
					}
					} 
				}
				setState(926);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,114,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SingleExpressionContext extends ParserRuleContext {
		public SingleExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singleExpression; }
	 
		public SingleExpressionContext() { }
		public void copyFrom(SingleExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class TernaryExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode QuestionMark() { return getToken(TSASMParser.QuestionMark, 0); }
		public TerminalNode Colon() { return getToken(TSASMParser.Colon, 0); }
		public TernaryExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalAndExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode And() { return getToken(TSASMParser.And, 0); }
		public LogicalAndExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PreIncrementExpressionContext extends SingleExpressionContext {
		public TerminalNode PlusPlus() { return getToken(TSASMParser.PlusPlus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public PreIncrementExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ObjectLiteralExpressionContext extends SingleExpressionContext {
		public ObjectLiteralContext objectLiteral() {
			return getRuleContext(ObjectLiteralContext.class,0);
		}
		public ObjectLiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalOrExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Or() { return getToken(TSASMParser.Or, 0); }
		public LogicalOrExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class GenericTypesContext extends SingleExpressionContext {
		public TypeArgumentsContext typeArguments() {
			return getRuleContext(TypeArgumentsContext.class,0);
		}
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public GenericTypesContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NotExpressionContext extends SingleExpressionContext {
		public TerminalNode Not() { return getToken(TSASMParser.Not, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public NotExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PreDecreaseExpressionContext extends SingleExpressionContext {
		public TerminalNode MinusMinus() { return getToken(TSASMParser.MinusMinus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public PreDecreaseExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArgumentsExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ArgumentsExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class UnaryMinusExpressionContext extends SingleExpressionContext {
		public TerminalNode Minus() { return getToken(TSASMParser.Minus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public UnaryMinusExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AssignmentExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Assign() { return getToken(TSASMParser.Assign, 0); }
		public AssignmentExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PostDecreaseExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode MinusMinus() { return getToken(TSASMParser.MinusMinus, 0); }
		public PostDecreaseExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class TypeofExpressionContext extends SingleExpressionContext {
		public TerminalNode Typeof() { return getToken(TSASMParser.Typeof, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TypeofExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class UnaryPlusExpressionContext extends SingleExpressionContext {
		public TerminalNode Plus() { return getToken(TSASMParser.Plus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public UnaryPlusExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class DeleteExpressionContext extends SingleExpressionContext {
		public TerminalNode Delete() { return getToken(TSASMParser.Delete, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public DeleteExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArrowFunctionExpressionContext extends SingleExpressionContext {
		public ArrowFunctionDeclarationContext arrowFunctionDeclaration() {
			return getRuleContext(ArrowFunctionDeclarationContext.class,0);
		}
		public ArrowFunctionExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class EqualityExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Equals_() { return getToken(TSASMParser.Equals_, 0); }
		public TerminalNode NotEquals() { return getToken(TSASMParser.NotEquals, 0); }
		public TerminalNode IdentityEquals() { return getToken(TSASMParser.IdentityEquals, 0); }
		public TerminalNode IdentityNotEquals() { return getToken(TSASMParser.IdentityNotEquals, 0); }
		public EqualityExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitXOrExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode BitXOr() { return getToken(TSASMParser.BitXOr, 0); }
		public BitXOrExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CastAsExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode As() { return getToken(TSASMParser.As, 0); }
		public AsExpressionContext asExpression() {
			return getRuleContext(AsExpressionContext.class,0);
		}
		public CastAsExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MultiplicativeExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Multiply() { return getToken(TSASMParser.Multiply, 0); }
		public TerminalNode Divide() { return getToken(TSASMParser.Divide, 0); }
		public TerminalNode Modulus() { return getToken(TSASMParser.Modulus, 0); }
		public MultiplicativeExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitShiftExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode LeftShiftArithmetic() { return getToken(TSASMParser.LeftShiftArithmetic, 0); }
		public TerminalNode RightShiftArithmetic() { return getToken(TSASMParser.RightShiftArithmetic, 0); }
		public TerminalNode RightShiftLogical() { return getToken(TSASMParser.RightShiftLogical, 0); }
		public BitShiftExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesizedExpressionContext extends SingleExpressionContext {
		public TerminalNode OpenParen() { return getToken(TSASMParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(TSASMParser.CloseParen, 0); }
		public ParenthesizedExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AdditiveExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Plus() { return getToken(TSASMParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(TSASMParser.Minus, 0); }
		public AdditiveExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class RelationalExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode LessThan() { return getToken(TSASMParser.LessThan, 0); }
		public TerminalNode MoreThan() { return getToken(TSASMParser.MoreThan, 0); }
		public TerminalNode LessThanEquals() { return getToken(TSASMParser.LessThanEquals, 0); }
		public TerminalNode GreaterThanEquals() { return getToken(TSASMParser.GreaterThanEquals, 0); }
		public RelationalExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PostIncrementExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode PlusPlus() { return getToken(TSASMParser.PlusPlus, 0); }
		public PostIncrementExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitNotExpressionContext extends SingleExpressionContext {
		public TerminalNode BitNot() { return getToken(TSASMParser.BitNot, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public BitNotExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LiteralExpressionContext extends SingleExpressionContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public LiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArrayLiteralExpressionContext extends SingleExpressionContext {
		public ArrayLiteralContext arrayLiteral() {
			return getRuleContext(ArrayLiteralContext.class,0);
		}
		public ArrayLiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MemberDotExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode Dot() { return getToken(TSASMParser.Dot, 0); }
		public IdentifierNameContext identifierName() {
			return getRuleContext(IdentifierNameContext.class,0);
		}
		public NestedTypeGenericContext nestedTypeGeneric() {
			return getRuleContext(NestedTypeGenericContext.class,0);
		}
		public MemberDotExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MemberIndexExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode OpenBracket() { return getToken(TSASMParser.OpenBracket, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(TSASMParser.CloseBracket, 0); }
		public MemberIndexExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IdentifierExpressionContext extends SingleExpressionContext {
		public IdentifierNameContext identifierName() {
			return getRuleContext(IdentifierNameContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public IdentifierExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitAndExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode BitAnd() { return getToken(TSASMParser.BitAnd, 0); }
		public BitAndExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitOrExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode BitOr() { return getToken(TSASMParser.BitOr, 0); }
		public BitOrExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AssignmentOperatorExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public AssignmentOperatorContext assignmentOperator() {
			return getRuleContext(AssignmentOperatorContext.class,0);
		}
		public AssignmentOperatorExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class VoidExpressionContext extends SingleExpressionContext {
		public TerminalNode Void() { return getToken(TSASMParser.Void, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public VoidExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}

	public final SingleExpressionContext singleExpression() throws RecognitionException {
		return singleExpression(0);
	}

	private SingleExpressionContext singleExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SingleExpressionContext _localctx = new SingleExpressionContext(_ctx, _parentState);
		SingleExpressionContext _prevctx = _localctx;
		int _startState = 186;
		enterRecursionRule(_localctx, 186, RULE_singleExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(962);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,117,_ctx) ) {
			case 1:
				{
				_localctx = new ArrowFunctionExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(928);
				arrowFunctionDeclaration();
				}
				break;
			case 2:
				{
				_localctx = new DeleteExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(929);
				match(Delete);
				setState(930);
				singleExpression(29);
				}
				break;
			case 3:
				{
				_localctx = new VoidExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(931);
				match(Void);
				setState(932);
				singleExpression(28);
				}
				break;
			case 4:
				{
				_localctx = new TypeofExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(933);
				match(Typeof);
				setState(934);
				singleExpression(27);
				}
				break;
			case 5:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(935);
				match(PlusPlus);
				setState(936);
				singleExpression(26);
				}
				break;
			case 6:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(937);
				match(MinusMinus);
				setState(938);
				singleExpression(25);
				}
				break;
			case 7:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(939);
				match(Plus);
				setState(940);
				singleExpression(24);
				}
				break;
			case 8:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(941);
				match(Minus);
				setState(942);
				singleExpression(23);
				}
				break;
			case 9:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(943);
				match(BitNot);
				setState(944);
				singleExpression(22);
				}
				break;
			case 10:
				{
				_localctx = new NotExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(945);
				match(Not);
				setState(946);
				singleExpression(21);
				}
				break;
			case 11:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(947);
				identifierName();
				setState(949);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,115,_ctx) ) {
				case 1:
					{
					setState(948);
					singleExpression(0);
					}
					break;
				}
				}
				break;
			case 12:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(951);
				literal();
				}
				break;
			case 13:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(952);
				arrayLiteral();
				}
				break;
			case 14:
				{
				_localctx = new ObjectLiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(953);
				objectLiteral();
				}
				break;
			case 15:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(954);
				match(OpenParen);
				setState(955);
				expressionSequence();
				setState(956);
				match(CloseParen);
				}
				break;
			case 16:
				{
				_localctx = new GenericTypesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(958);
				typeArguments();
				setState(960);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,116,_ctx) ) {
				case 1:
					{
					setState(959);
					expressionSequence();
					}
					break;
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1031);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,120,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1029);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,119,_ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(964);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(965);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Multiply) | (1L << Divide) | (1L << Modulus))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(966);
						singleExpression(21);
						}
						break;
					case 2:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(967);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(968);
						_la = _input.LA(1);
						if ( !(_la==Plus || _la==Minus) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(969);
						singleExpression(20);
						}
						break;
					case 3:
						{
						_localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(970);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(971);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << RightShiftArithmetic) | (1L << LeftShiftArithmetic) | (1L << RightShiftLogical))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(972);
						singleExpression(19);
						}
						break;
					case 4:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(973);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(974);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LessThan) | (1L << MoreThan) | (1L << LessThanEquals) | (1L << GreaterThanEquals))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(975);
						singleExpression(18);
						}
						break;
					case 5:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(976);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(977);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Equals_) | (1L << NotEquals) | (1L << IdentityEquals) | (1L << IdentityNotEquals))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(978);
						singleExpression(17);
						}
						break;
					case 6:
						{
						_localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(979);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(980);
						match(BitAnd);
						setState(981);
						singleExpression(16);
						}
						break;
					case 7:
						{
						_localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(982);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(983);
						match(BitXOr);
						setState(984);
						singleExpression(15);
						}
						break;
					case 8:
						{
						_localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(985);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(986);
						match(BitOr);
						setState(987);
						singleExpression(14);
						}
						break;
					case 9:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(988);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(989);
						match(And);
						setState(990);
						singleExpression(13);
						}
						break;
					case 10:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(991);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(992);
						match(Or);
						setState(993);
						singleExpression(12);
						}
						break;
					case 11:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(994);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(995);
						match(QuestionMark);
						setState(996);
						singleExpression(0);
						setState(997);
						match(Colon);
						setState(998);
						singleExpression(11);
						}
						break;
					case 12:
						{
						_localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(1000);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(1001);
						match(Assign);
						setState(1002);
						singleExpression(10);
						}
						break;
					case 13:
						{
						_localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(1003);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(1004);
						assignmentOperator();
						setState(1005);
						singleExpression(9);
						}
						break;
					case 14:
						{
						_localctx = new MemberIndexExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(1007);
						if (!(precpred(_ctx, 34))) throw new FailedPredicateException(this, "precpred(_ctx, 34)");
						setState(1008);
						match(OpenBracket);
						setState(1009);
						expressionSequence();
						setState(1010);
						match(CloseBracket);
						}
						break;
					case 15:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(1012);
						if (!(precpred(_ctx, 33))) throw new FailedPredicateException(this, "precpred(_ctx, 33)");
						setState(1013);
						match(Dot);
						setState(1014);
						identifierName();
						setState(1016);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,118,_ctx) ) {
						case 1:
							{
							setState(1015);
							nestedTypeGeneric();
							}
							break;
						}
						}
						break;
					case 16:
						{
						_localctx = new ArgumentsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(1018);
						if (!(precpred(_ctx, 32))) throw new FailedPredicateException(this, "precpred(_ctx, 32)");
						setState(1019);
						arguments();
						}
						break;
					case 17:
						{
						_localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(1020);
						if (!(precpred(_ctx, 31))) throw new FailedPredicateException(this, "precpred(_ctx, 31)");
						setState(1021);
						if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
						setState(1022);
						match(PlusPlus);
						}
						break;
					case 18:
						{
						_localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(1023);
						if (!(precpred(_ctx, 30))) throw new FailedPredicateException(this, "precpred(_ctx, 30)");
						setState(1024);
						if (!(this.notLineTerminator())) throw new FailedPredicateException(this, "this.notLineTerminator()");
						setState(1025);
						match(MinusMinus);
						}
						break;
					case 19:
						{
						_localctx = new CastAsExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(1026);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1027);
						match(As);
						setState(1028);
						asExpression();
						}
						break;
					}
					} 
				}
				setState(1033);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,120,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class AsExpressionContext extends ParserRuleContext {
		public PredefinedTypeContext predefinedType() {
			return getRuleContext(PredefinedTypeContext.class,0);
		}
		public TerminalNode OpenBracket() { return getToken(TSASMParser.OpenBracket, 0); }
		public TerminalNode CloseBracket() { return getToken(TSASMParser.CloseBracket, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public AsExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asExpression; }
	}

	public final AsExpressionContext asExpression() throws RecognitionException {
		AsExpressionContext _localctx = new AsExpressionContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_asExpression);
		try {
			setState(1040);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,122,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1034);
				predefinedType();
				setState(1037);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,121,_ctx) ) {
				case 1:
					{
					setState(1035);
					match(OpenBracket);
					setState(1036);
					match(CloseBracket);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1039);
				singleExpression(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrowFunctionDeclarationContext extends ParserRuleContext {
		public ArrowFunctionParametersContext arrowFunctionParameters() {
			return getRuleContext(ArrowFunctionParametersContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(TSASMParser.ARROW, 0); }
		public ArrowFunctionBodyContext arrowFunctionBody() {
			return getRuleContext(ArrowFunctionBodyContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public ArrowFunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrowFunctionDeclaration; }
	}

	public final ArrowFunctionDeclarationContext arrowFunctionDeclaration() throws RecognitionException {
		ArrowFunctionDeclarationContext _localctx = new ArrowFunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 190, RULE_arrowFunctionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1042);
			arrowFunctionParameters();
			setState(1044);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(1043);
				typeAnnotation();
				}
			}

			setState(1046);
			match(ARROW);
			setState(1047);
			arrowFunctionBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrowFunctionParametersContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public TerminalNode OpenParen() { return getToken(TSASMParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(TSASMParser.CloseParen, 0); }
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public ArrowFunctionParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrowFunctionParameters; }
	}

	public final ArrowFunctionParametersContext arrowFunctionParameters() throws RecognitionException {
		ArrowFunctionParametersContext _localctx = new ArrowFunctionParametersContext(_ctx, getState());
		enterRule(_localctx, 192, RULE_arrowFunctionParameters);
		int _la;
		try {
			setState(1055);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(1049);
				match(Identifier);
				}
				break;
			case OpenParen:
				enterOuterAlt(_localctx, 2);
				{
				setState(1050);
				match(OpenParen);
				setState(1052);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & ((1L << (TypeAlias - 95)) | (1L << (Require - 95)) | (1L << (Identifier - 95)))) != 0)) {
					{
					setState(1051);
					formalParameterList();
					}
				}

				setState(1054);
				match(CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrowFunctionBodyContext extends ParserRuleContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode OpenBrace() { return getToken(TSASMParser.OpenBrace, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public TerminalNode CloseBrace() { return getToken(TSASMParser.CloseBrace, 0); }
		public ArrowFunctionBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrowFunctionBody; }
	}

	public final ArrowFunctionBodyContext arrowFunctionBody() throws RecognitionException {
		ArrowFunctionBodyContext _localctx = new ArrowFunctionBodyContext(_ctx, getState());
		enterRule(_localctx, 194, RULE_arrowFunctionBody);
		try {
			setState(1062);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,126,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1057);
				singleExpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1058);
				match(OpenBrace);
				setState(1059);
				functionBody();
				setState(1060);
				match(CloseBrace);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentOperatorContext extends ParserRuleContext {
		public TerminalNode MultiplyAssign() { return getToken(TSASMParser.MultiplyAssign, 0); }
		public TerminalNode DivideAssign() { return getToken(TSASMParser.DivideAssign, 0); }
		public TerminalNode ModulusAssign() { return getToken(TSASMParser.ModulusAssign, 0); }
		public TerminalNode PlusAssign() { return getToken(TSASMParser.PlusAssign, 0); }
		public TerminalNode MinusAssign() { return getToken(TSASMParser.MinusAssign, 0); }
		public TerminalNode LeftShiftArithmeticAssign() { return getToken(TSASMParser.LeftShiftArithmeticAssign, 0); }
		public TerminalNode RightShiftArithmeticAssign() { return getToken(TSASMParser.RightShiftArithmeticAssign, 0); }
		public TerminalNode RightShiftLogicalAssign() { return getToken(TSASMParser.RightShiftLogicalAssign, 0); }
		public TerminalNode BitAndAssign() { return getToken(TSASMParser.BitAndAssign, 0); }
		public TerminalNode BitXorAssign() { return getToken(TSASMParser.BitXorAssign, 0); }
		public TerminalNode BitOrAssign() { return getToken(TSASMParser.BitOrAssign, 0); }
		public AssignmentOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentOperator; }
	}

	public final AssignmentOperatorContext assignmentOperator() throws RecognitionException {
		AssignmentOperatorContext _localctx = new AssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 196, RULE_assignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1064);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MultiplyAssign) | (1L << DivideAssign) | (1L << ModulusAssign) | (1L << PlusAssign) | (1L << MinusAssign) | (1L << LeftShiftArithmeticAssign) | (1L << RightShiftArithmeticAssign) | (1L << RightShiftLogicalAssign) | (1L << BitAndAssign) | (1L << BitXorAssign) | (1L << BitOrAssign))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode NullLiteral() { return getToken(TSASMParser.NullLiteral, 0); }
		public TerminalNode BooleanLiteral() { return getToken(TSASMParser.BooleanLiteral, 0); }
		public TerminalNode StringLiteral() { return getToken(TSASMParser.StringLiteral, 0); }
		public TerminalNode RegularExpressionLiteral() { return getToken(TSASMParser.RegularExpressionLiteral, 0); }
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 198, RULE_literal);
		try {
			setState(1071);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NullLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(1066);
				match(NullLiteral);
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(1067);
				match(BooleanLiteral);
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(1068);
				match(StringLiteral);
				}
				break;
			case RegularExpressionLiteral:
				enterOuterAlt(_localctx, 4);
				{
				setState(1069);
				match(RegularExpressionLiteral);
				}
				break;
			case DecimalLiteral:
			case HexIntegerLiteral:
			case OctalIntegerLiteral:
			case OctalIntegerLiteral2:
			case BinaryIntegerLiteral:
				enterOuterAlt(_localctx, 5);
				{
				setState(1070);
				numericLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumericLiteralContext extends ParserRuleContext {
		public TerminalNode DecimalLiteral() { return getToken(TSASMParser.DecimalLiteral, 0); }
		public TerminalNode HexIntegerLiteral() { return getToken(TSASMParser.HexIntegerLiteral, 0); }
		public TerminalNode OctalIntegerLiteral() { return getToken(TSASMParser.OctalIntegerLiteral, 0); }
		public TerminalNode OctalIntegerLiteral2() { return getToken(TSASMParser.OctalIntegerLiteral2, 0); }
		public TerminalNode BinaryIntegerLiteral() { return getToken(TSASMParser.BinaryIntegerLiteral, 0); }
		public NumericLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numericLiteral; }
	}

	public final NumericLiteralContext numericLiteral() throws RecognitionException {
		NumericLiteralContext _localctx = new NumericLiteralContext(_ctx, getState());
		enterRule(_localctx, 200, RULE_numericLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1073);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OctalIntegerLiteral) | (1L << OctalIntegerLiteral2) | (1L << BinaryIntegerLiteral))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierNameContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public ReservedWordContext reservedWord() {
			return getRuleContext(ReservedWordContext.class,0);
		}
		public IdentifierNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierName; }
	}

	public final IdentifierNameContext identifierName() throws RecognitionException {
		IdentifierNameContext _localctx = new IdentifierNameContext(_ctx, getState());
		enterRule(_localctx, 202, RULE_identifierName);
		try {
			setState(1077);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(1075);
				match(Identifier);
				}
				break;
			case NullLiteral:
			case BooleanLiteral:
			case Break:
			case Typeof:
			case Case:
			case Else:
			case Catch:
			case Finally:
			case Return:
			case Void:
			case Continue:
			case For:
			case Switch:
			case While:
			case Debugger:
			case Default:
			case If:
			case Throw:
			case Delete:
			case In:
			case Try:
			case From:
			case Enum:
			case Extends:
			case Const:
			case Export:
			case Import:
			case Implements:
			case Let:
			case Interface:
			case String:
			case TypeAlias:
			case Require:
				enterOuterAlt(_localctx, 2);
				{
				setState(1076);
				reservedWord();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierOrKeyWordContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(TSASMParser.Identifier, 0); }
		public TerminalNode TypeAlias() { return getToken(TSASMParser.TypeAlias, 0); }
		public TerminalNode Require() { return getToken(TSASMParser.Require, 0); }
		public IdentifierOrKeyWordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierOrKeyWord; }
	}

	public final IdentifierOrKeyWordContext identifierOrKeyWord() throws RecognitionException {
		IdentifierOrKeyWordContext _localctx = new IdentifierOrKeyWordContext(_ctx, getState());
		enterRule(_localctx, 204, RULE_identifierOrKeyWord);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1079);
			_la = _input.LA(1);
			if ( !(((((_la - 95)) & ~0x3f) == 0 && ((1L << (_la - 95)) & ((1L << (TypeAlias - 95)) | (1L << (Require - 95)) | (1L << (Identifier - 95)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReservedWordContext extends ParserRuleContext {
		public KeywordContext keyword() {
			return getRuleContext(KeywordContext.class,0);
		}
		public TerminalNode NullLiteral() { return getToken(TSASMParser.NullLiteral, 0); }
		public TerminalNode BooleanLiteral() { return getToken(TSASMParser.BooleanLiteral, 0); }
		public ReservedWordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedWord; }
	}

	public final ReservedWordContext reservedWord() throws RecognitionException {
		ReservedWordContext _localctx = new ReservedWordContext(_ctx, getState());
		enterRule(_localctx, 206, RULE_reservedWord);
		try {
			setState(1084);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Break:
			case Typeof:
			case Case:
			case Else:
			case Catch:
			case Finally:
			case Return:
			case Void:
			case Continue:
			case For:
			case Switch:
			case While:
			case Debugger:
			case Default:
			case If:
			case Throw:
			case Delete:
			case In:
			case Try:
			case From:
			case Enum:
			case Extends:
			case Const:
			case Export:
			case Import:
			case Implements:
			case Let:
			case Interface:
			case String:
			case TypeAlias:
			case Require:
				enterOuterAlt(_localctx, 1);
				{
				setState(1081);
				keyword();
				}
				break;
			case NullLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(1082);
				match(NullLiteral);
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(1083);
				match(BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeywordContext extends ParserRuleContext {
		public TerminalNode Break() { return getToken(TSASMParser.Break, 0); }
		public TerminalNode Typeof() { return getToken(TSASMParser.Typeof, 0); }
		public TerminalNode Case() { return getToken(TSASMParser.Case, 0); }
		public TerminalNode Else() { return getToken(TSASMParser.Else, 0); }
		public TerminalNode Catch() { return getToken(TSASMParser.Catch, 0); }
		public TerminalNode Finally() { return getToken(TSASMParser.Finally, 0); }
		public TerminalNode Return() { return getToken(TSASMParser.Return, 0); }
		public TerminalNode Void() { return getToken(TSASMParser.Void, 0); }
		public TerminalNode Continue() { return getToken(TSASMParser.Continue, 0); }
		public TerminalNode For() { return getToken(TSASMParser.For, 0); }
		public TerminalNode Switch() { return getToken(TSASMParser.Switch, 0); }
		public TerminalNode While() { return getToken(TSASMParser.While, 0); }
		public TerminalNode Debugger() { return getToken(TSASMParser.Debugger, 0); }
		public TerminalNode Default() { return getToken(TSASMParser.Default, 0); }
		public TerminalNode If() { return getToken(TSASMParser.If, 0); }
		public TerminalNode Throw() { return getToken(TSASMParser.Throw, 0); }
		public TerminalNode Delete() { return getToken(TSASMParser.Delete, 0); }
		public TerminalNode In() { return getToken(TSASMParser.In, 0); }
		public TerminalNode Try() { return getToken(TSASMParser.Try, 0); }
		public TerminalNode From() { return getToken(TSASMParser.From, 0); }
		public TerminalNode Enum() { return getToken(TSASMParser.Enum, 0); }
		public TerminalNode Extends() { return getToken(TSASMParser.Extends, 0); }
		public TerminalNode Const() { return getToken(TSASMParser.Const, 0); }
		public TerminalNode Export() { return getToken(TSASMParser.Export, 0); }
		public TerminalNode Import() { return getToken(TSASMParser.Import, 0); }
		public TerminalNode Implements() { return getToken(TSASMParser.Implements, 0); }
		public TerminalNode Let() { return getToken(TSASMParser.Let, 0); }
		public TerminalNode Interface() { return getToken(TSASMParser.Interface, 0); }
		public TerminalNode Require() { return getToken(TSASMParser.Require, 0); }
		public TerminalNode TypeAlias() { return getToken(TSASMParser.TypeAlias, 0); }
		public TerminalNode String() { return getToken(TSASMParser.String, 0); }
		public KeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyword; }
	}

	public final KeywordContext keyword() throws RecognitionException {
		KeywordContext _localctx = new KeywordContext(_ctx, getState());
		enterRule(_localctx, 208, RULE_keyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1086);
			_la = _input.LA(1);
			if ( !(((((_la - 61)) & ~0x3f) == 0 && ((1L << (_la - 61)) & ((1L << (Break - 61)) | (1L << (Typeof - 61)) | (1L << (Case - 61)) | (1L << (Else - 61)) | (1L << (Catch - 61)) | (1L << (Finally - 61)) | (1L << (Return - 61)) | (1L << (Void - 61)) | (1L << (Continue - 61)) | (1L << (For - 61)) | (1L << (Switch - 61)) | (1L << (While - 61)) | (1L << (Debugger - 61)) | (1L << (Default - 61)) | (1L << (If - 61)) | (1L << (Throw - 61)) | (1L << (Delete - 61)) | (1L << (In - 61)) | (1L << (Try - 61)) | (1L << (From - 61)) | (1L << (Enum - 61)) | (1L << (Extends - 61)) | (1L << (Const - 61)) | (1L << (Export - 61)) | (1L << (Import - 61)) | (1L << (Implements - 61)) | (1L << (Let - 61)) | (1L << (Interface - 61)) | (1L << (String - 61)) | (1L << (TypeAlias - 61)) | (1L << (Require - 61)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EosContext extends ParserRuleContext {
		public TerminalNode SemiColon() { return getToken(TSASMParser.SemiColon, 0); }
		public TerminalNode EOF() { return getToken(TSASMParser.EOF, 0); }
		public EosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eos; }
	}

	public final EosContext eos() throws RecognitionException {
		EosContext _localctx = new EosContext(_ctx, getState());
		enterRule(_localctx, 210, RULE_eos);
		try {
			setState(1092);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,130,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1088);
				match(SemiColon);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1089);
				match(EOF);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1090);
				if (!(this.lineTerminatorAhead())) throw new FailedPredicateException(this, "this.lineTerminatorAhead()");
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1091);
				if (!(this.closeBrace())) throw new FailedPredicateException(this, "this.closeBrace()");
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 10:
			return unionOrIntersectionOrPrimaryType_sempred((UnionOrIntersectionOrPrimaryTypeContext)_localctx, predIndex);
		case 11:
			return primaryType_sempred((PrimaryTypeContext)_localctx, predIndex);
		case 22:
			return arrayType_sempred((ArrayTypeContext)_localctx, predIndex);
		case 61:
			return expressionStatement_sempred((ExpressionStatementContext)_localctx, predIndex);
		case 65:
			return continueStatement_sempred((ContinueStatementContext)_localctx, predIndex);
		case 66:
			return breakStatement_sempred((BreakStatementContext)_localctx, predIndex);
		case 67:
			return returnStatement_sempred((ReturnStatementContext)_localctx, predIndex);
		case 73:
			return throwStatement_sempred((ThrowStatementContext)_localctx, predIndex);
		case 93:
			return singleExpression_sempred((SingleExpressionContext)_localctx, predIndex);
		case 105:
			return eos_sempred((EosContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean unionOrIntersectionOrPrimaryType_sempred(UnionOrIntersectionOrPrimaryTypeContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		case 1:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean primaryType_sempred(PrimaryTypeContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 4);
		case 3:
			return this.notLineTerminator();
		}
		return true;
	}
	private boolean arrayType_sempred(ArrayTypeContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return this.notLineTerminator();
		}
		return true;
	}
	private boolean expressionStatement_sempred(ExpressionStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 5:
			return this.notOpenBrace();
		}
		return true;
	}
	private boolean continueStatement_sempred(ContinueStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 6:
			return this.notLineTerminator();
		}
		return true;
	}
	private boolean breakStatement_sempred(BreakStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 7:
			return this.notLineTerminator();
		}
		return true;
	}
	private boolean returnStatement_sempred(ReturnStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 8:
			return this.notLineTerminator();
		}
		return true;
	}
	private boolean throwStatement_sempred(ThrowStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 9:
			return this.notLineTerminator();
		}
		return true;
	}
	private boolean singleExpression_sempred(SingleExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 10:
			return precpred(_ctx, 20);
		case 11:
			return precpred(_ctx, 19);
		case 12:
			return precpred(_ctx, 18);
		case 13:
			return precpred(_ctx, 17);
		case 14:
			return precpred(_ctx, 16);
		case 15:
			return precpred(_ctx, 15);
		case 16:
			return precpred(_ctx, 14);
		case 17:
			return precpred(_ctx, 13);
		case 18:
			return precpred(_ctx, 12);
		case 19:
			return precpred(_ctx, 11);
		case 20:
			return precpred(_ctx, 10);
		case 21:
			return precpred(_ctx, 9);
		case 22:
			return precpred(_ctx, 8);
		case 23:
			return precpred(_ctx, 34);
		case 24:
			return precpred(_ctx, 33);
		case 25:
			return precpred(_ctx, 32);
		case 26:
			return precpred(_ctx, 31);
		case 27:
			return this.notLineTerminator();
		case 28:
			return precpred(_ctx, 30);
		case 29:
			return this.notLineTerminator();
		case 30:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean eos_sempred(EosContext _localctx, int predIndex) {
		switch (predIndex) {
		case 31:
			return this.lineTerminatorAhead();
		case 32:
			return this.closeBrace();
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3m\u0449\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4g\tg\4h\th\4i\ti\4j\tj\4k\t"+
		"k\3\2\3\2\3\2\3\3\3\3\5\3\u00dc\n\3\3\4\3\4\5\4\u00e0\n\4\3\4\3\4\3\5"+
		"\3\5\3\5\7\5\u00e7\n\5\f\5\16\5\u00ea\13\5\3\6\3\6\5\6\u00ee\n\6\3\6\5"+
		"\6\u00f1\n\6\3\7\3\7\3\7\3\b\3\b\5\b\u00f8\n\b\3\b\3\b\3\t\3\t\3\t\7\t"+
		"\u00ff\n\t\f\t\16\t\u0102\13\t\3\n\3\n\3\13\3\13\3\13\3\13\5\13\u010a"+
		"\n\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\7\f\u0115\n\f\f\f\16\f\u0118"+
		"\13\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r"+
		"\3\r\5\r\u012b\n\r\3\r\3\r\3\r\3\r\7\r\u0131\n\r\f\r\16\r\u0134\13\r\3"+
		"\16\3\16\3\17\3\17\5\17\u013a\n\17\3\20\3\20\5\20\u013e\n\20\3\21\3\21"+
		"\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\5\22\u014d\n\22"+
		"\3\23\3\23\5\23\u0151\n\23\3\24\3\24\5\24\u0155\n\24\3\24\3\24\3\25\3"+
		"\25\5\25\u015b\n\25\3\26\3\26\3\26\7\26\u0160\n\26\f\26\16\26\u0163\13"+
		"\26\3\27\3\27\5\27\u0167\n\27\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31"+
		"\3\31\3\32\3\32\3\32\7\32\u0175\n\32\f\32\16\32\u0178\13\32\3\33\5\33"+
		"\u017b\n\33\3\33\3\33\5\33\u017f\n\33\3\33\3\33\3\33\3\33\3\34\3\34\3"+
		"\34\3\35\3\35\3\35\3\35\6\35\u018c\n\35\r\35\16\35\u018d\3\35\3\35\5\35"+
		"\u0192\n\35\3\36\3\36\5\36\u0196\n\36\3\36\5\36\u0199\n\36\3\36\3\36\5"+
		"\36\u019d\n\36\3\37\3\37\3\37\3 \5 \u01a3\n \3 \3 \5 \u01a7\n \3 \3 \5"+
		" \u01ab\n \3!\3!\3!\7!\u01b0\n!\f!\16!\u01b3\13!\3\"\3\"\3\"\7\"\u01b8"+
		"\n\"\f\"\16\"\u01bb\13\"\3#\3#\5#\u01bf\n#\3$\3$\3$\5$\u01c4\n$\3$\5$"+
		"\u01c7\n$\3$\5$\u01ca\n$\3%\3%\5%\u01ce\n%\3&\3&\5&\u01d2\n&\3\'\3\'\3"+
		"\'\3\'\3\'\3\'\3\'\3(\3(\3(\5(\u01de\n(\3(\3(\3(\3(\3)\5)\u01e5\n)\3)"+
		"\5)\u01e8\n)\3)\3)\3)\5)\u01ed\n)\3)\5)\u01f0\n)\3)\3)\5)\u01f4\n)\3*"+
		"\3*\3*\3+\3+\3+\7+\u01fc\n+\f+\16+\u01ff\13+\3,\5,\u0202\n,\3,\3,\3,\3"+
		",\5,\u0208\n,\3,\3,\3-\3-\5-\u020e\n-\3.\3.\3.\7.\u0213\n.\f.\16.\u0216"+
		"\13.\3/\3/\3/\5/\u021b\n/\3\60\3\60\6\60\u021f\n\60\r\60\16\60\u0220\3"+
		"\60\7\60\u0224\n\60\f\60\16\60\u0227\13\60\3\61\3\61\3\61\3\61\3\61\3"+
		"\62\5\62\u022f\n\62\3\62\3\62\3\63\5\63\u0234\n\63\3\63\3\63\3\64\3\64"+
		"\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64"+
		"\3\64\3\64\3\64\3\64\3\64\5\64\u024d\n\64\3\65\3\65\5\65\u0251\n\65\3"+
		"\65\3\65\3\66\6\66\u0256\n\66\r\66\16\66\u0257\3\67\3\67\3\67\5\67\u025d"+
		"\n\67\38\38\58\u0261\n8\38\38\58\u0265\n8\38\38\38\38\39\39\39\59\u026e"+
		"\n9\39\39\39\39\79\u0274\n9\f9\169\u0277\139\39\39\3:\3:\5:\u027d\n:\3"+
		":\3:\5:\u0281\n:\3;\3;\5;\u0285\n;\3;\3;\5;\u0289\n;\3;\5;\u028c\n;\3"+
		";\3;\5;\u0290\n;\3;\3;\5;\u0294\n;\3;\3;\5;\u0298\n;\5;\u029a\n;\3<\3"+
		"<\3<\7<\u029f\n<\f<\16<\u02a2\13<\3=\3=\5=\u02a6\n=\3=\5=\u02a9\n=\3="+
		"\3=\5=\u02ad\n=\3=\5=\u02b0\n=\3>\3>\3?\3?\3?\5?\u02b7\n?\3@\3@\3@\3@"+
		"\3@\3@\3@\5@\u02c0\n@\3A\3A\3A\3A\3A\3A\3A\3A\3A\5A\u02cb\nA\3A\3A\5A"+
		"\u02cf\nA\3A\3A\5A\u02d3\nA\3A\3A\5A\u02d7\nA\3B\3B\3C\3C\3C\5C\u02de"+
		"\nC\3C\3C\3D\3D\3D\5D\u02e5\nD\3D\3D\3E\3E\3E\5E\u02ec\nE\3E\3E\3F\3F"+
		"\3F\3F\3F\3F\3G\3G\5G\u02f8\nG\3G\3G\5G\u02fc\nG\5G\u02fe\nG\3G\3G\3H"+
		"\6H\u0303\nH\rH\16H\u0304\3I\3I\3I\3I\5I\u030b\nI\3J\3J\3J\5J\u0310\n"+
		"J\3K\3K\3K\3K\3K\3L\3L\3L\3L\5L\u031b\nL\3L\5L\u031e\nL\3M\3M\3M\3M\3"+
		"M\3M\3N\3N\3N\3O\3O\3O\3P\3P\3P\3Q\3Q\3Q\7Q\u0332\nQ\fQ\16Q\u0335\13Q"+
		"\3R\3R\5R\u0339\nR\3R\5R\u033c\nR\3R\3R\5R\u0340\nR\3S\5S\u0343\nS\3T"+
		"\6T\u0346\nT\rT\16T\u0347\3U\3U\5U\u034c\nU\3U\3U\3V\3V\6V\u0352\nV\r"+
		"V\16V\u0353\3V\7V\u0357\nV\fV\16V\u035a\13V\3W\3W\5W\u035e\nW\3W\5W\u0361"+
		"\nW\3X\3X\3X\3X\7X\u0367\nX\fX\16X\u036a\13X\3X\5X\u036d\nX\5X\u036f\n"+
		"X\3X\3X\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\3Y\5Y\u037e\nY\3Z\3Z\3Z\5Z\u0383"+
		"\nZ\3[\3[\3[\5[\u0388\n[\5[\u038a\n[\3[\3[\3\\\3\\\3\\\7\\\u0391\n\\\f"+
		"\\\16\\\u0394\13\\\3]\3]\5]\u0398\n]\3^\3^\3^\7^\u039d\n^\f^\16^\u03a0"+
		"\13^\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3"+
		"_\5_\u03b8\n_\3_\3_\3_\3_\3_\3_\3_\3_\3_\5_\u03c3\n_\5_\u03c5\n_\3_\3"+
		"_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3"+
		"_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3"+
		"_\3_\3_\3_\3_\5_\u03fb\n_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\3_\7_\u0408\n"+
		"_\f_\16_\u040b\13_\3`\3`\3`\5`\u0410\n`\3`\5`\u0413\n`\3a\3a\5a\u0417"+
		"\na\3a\3a\3a\3b\3b\3b\5b\u041f\nb\3b\5b\u0422\nb\3c\3c\3c\3c\3c\5c\u0429"+
		"\nc\3d\3d\3e\3e\3e\3e\3e\5e\u0432\ne\3f\3f\3g\3g\5g\u0438\ng\3h\3h\3i"+
		"\3i\3i\5i\u043f\ni\3j\3j\3k\3k\3k\3k\5k\u0447\nk\3k\4\u01b1\u0333\5\26"+
		"\30\u00bcl\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\66"+
		"8:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a"+
		"\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e\u00a0\u00a2"+
		"\u00a4\u00a6\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4\u00b6\u00b8\u00ba"+
		"\u00bc\u00be\u00c0\u00c2\u00c4\u00c6\u00c8\u00ca\u00cc\u00ce\u00d0\u00d2"+
		"\u00d4\2\20\4\2GG]`\3\2\r\16\4\2^^``\4\2WW[[\4\2\17\17\21\21\3\2\31\33"+
		"\3\2\25\26\3\2\34\36\3\2\37\"\3\2#&\3\2,\66\3\2:>\4\2abgg\6\2??ART\\`"+
		"b\2\u04a2\2\u00d6\3\2\2\2\4\u00db\3\2\2\2\6\u00dd\3\2\2\2\b\u00e3\3\2"+
		"\2\2\n\u00f0\3\2\2\2\f\u00f2\3\2\2\2\16\u00f5\3\2\2\2\20\u00fb\3\2\2\2"+
		"\22\u0103\3\2\2\2\24\u0109\3\2\2\2\26\u010b\3\2\2\2\30\u012a\3\2\2\2\32"+
		"\u0135\3\2\2\2\34\u0137\3\2\2\2\36\u013d\3\2\2\2 \u013f\3\2\2\2\"\u0143"+
		"\3\2\2\2$\u0150\3\2\2\2&\u0152\3\2\2\2(\u0158\3\2\2\2*\u015c\3\2\2\2,"+
		"\u0166\3\2\2\2.\u0168\3\2\2\2\60\u016d\3\2\2\2\62\u0171\3\2\2\2\64\u017a"+
		"\3\2\2\2\66\u0184\3\2\2\28\u0191\3\2\2\2:\u0193\3\2\2\2<\u019e\3\2\2\2"+
		">\u01a2\3\2\2\2@\u01ac\3\2\2\2B\u01b4\3\2\2\2D\u01be\3\2\2\2F\u01c0\3"+
		"\2\2\2H\u01cb\3\2\2\2J\u01d1\3\2\2\2L\u01d3\3\2\2\2N\u01da\3\2\2\2P\u01e4"+
		"\3\2\2\2R\u01f5\3\2\2\2T\u01f8\3\2\2\2V\u0201\3\2\2\2X\u020b\3\2\2\2Z"+
		"\u020f\3\2\2\2\\\u0217\3\2\2\2^\u021c\3\2\2\2`\u0228\3\2\2\2b\u022e\3"+
		"\2\2\2d\u0233\3\2\2\2f\u024c\3\2\2\2h\u024e\3\2\2\2j\u0255\3\2\2\2l\u0259"+
		"\3\2\2\2n\u0260\3\2\2\2p\u026d\3\2\2\2r\u027a\3\2\2\2t\u0299\3\2\2\2v"+
		"\u029b\3\2\2\2x\u02a3\3\2\2\2z\u02b1\3\2\2\2|\u02b3\3\2\2\2~\u02b8\3\2"+
		"\2\2\u0080\u02d6\3\2\2\2\u0082\u02d8\3\2\2\2\u0084\u02da\3\2\2\2\u0086"+
		"\u02e1\3\2\2\2\u0088\u02e8\3\2\2\2\u008a\u02ef\3\2\2\2\u008c\u02f5\3\2"+
		"\2\2\u008e\u0302\3\2\2\2\u0090\u0306\3\2\2\2\u0092\u030c\3\2\2\2\u0094"+
		"\u0311\3\2\2\2\u0096\u0316\3\2\2\2\u0098\u031f\3\2\2\2\u009a\u0325\3\2"+
		"\2\2\u009c\u0328\3\2\2\2\u009e\u032b\3\2\2\2\u00a0\u032e\3\2\2\2\u00a2"+
		"\u0336\3\2\2\2\u00a4\u0342\3\2\2\2\u00a6\u0345\3\2\2\2\u00a8\u0349\3\2"+
		"\2\2\u00aa\u034f\3\2\2\2\u00ac\u035d\3\2\2\2\u00ae\u0362\3\2\2\2\u00b0"+
		"\u037d\3\2\2\2\u00b2\u0382\3\2\2\2\u00b4\u0384\3\2\2\2\u00b6\u038d\3\2"+
		"\2\2\u00b8\u0397\3\2\2\2\u00ba\u0399\3\2\2\2\u00bc\u03c4\3\2\2\2\u00be"+
		"\u0412\3\2\2\2\u00c0\u0414\3\2\2\2\u00c2\u0421\3\2\2\2\u00c4\u0428\3\2"+
		"\2\2\u00c6\u042a\3\2\2\2\u00c8\u0431\3\2\2\2\u00ca\u0433\3\2\2\2\u00cc"+
		"\u0437\3\2\2\2\u00ce\u0439\3\2\2\2\u00d0\u043e\3\2\2\2\u00d2\u0440\3\2"+
		"\2\2\u00d4\u0446\3\2\2\2\u00d6\u00d7\7\17\2\2\u00d7\u00d8\5\u00bc_\2\u00d8"+
		"\3\3\2\2\2\u00d9\u00dc\5\u00a8U\2\u00da\u00dc\5\u00aeX\2\u00db\u00d9\3"+
		"\2\2\2\u00db\u00da\3\2\2\2\u00dc\5\3\2\2\2\u00dd\u00df\7\37\2\2\u00de"+
		"\u00e0\5\b\5\2\u00df\u00de\3\2\2\2\u00df\u00e0\3\2\2\2\u00e0\u00e1\3\2"+
		"\2\2\u00e1\u00e2\7 \2\2\u00e2\7\3\2\2\2\u00e3\u00e8\5\n\6\2\u00e4\u00e5"+
		"\7\16\2\2\u00e5\u00e7\5\n\6\2\u00e6\u00e4\3\2\2\2\u00e7\u00ea\3\2\2\2"+
		"\u00e8\u00e6\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9\t\3\2\2\2\u00ea\u00e8\3"+
		"\2\2\2\u00eb\u00ed\7g\2\2\u00ec\u00ee\5\f\7\2\u00ed\u00ec\3\2\2\2\u00ed"+
		"\u00ee\3\2\2\2\u00ee\u00f1\3\2\2\2\u00ef\u00f1\5\6\4\2\u00f0\u00eb\3\2"+
		"\2\2\u00f0\u00ef\3\2\2\2\u00f1\13\3\2\2\2\u00f2\u00f3\7V\2\2\u00f3\u00f4"+
		"\5\24\13\2\u00f4\r\3\2\2\2\u00f5\u00f7\7\37\2\2\u00f6\u00f8\5\20\t\2\u00f7"+
		"\u00f6\3\2\2\2\u00f7\u00f8\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\u00fa\7 "+
		"\2\2\u00fa\17\3\2\2\2\u00fb\u0100\5\22\n\2\u00fc\u00fd\7\16\2\2\u00fd"+
		"\u00ff\5\22\n\2\u00fe\u00fc\3\2\2\2\u00ff\u0102\3\2\2\2\u0100\u00fe\3"+
		"\2\2\2\u0100\u0101\3\2\2\2\u0101\21\3\2\2\2\u0102\u0100\3\2\2\2\u0103"+
		"\u0104\5\24\13\2\u0104\23\3\2\2\2\u0105\u010a\5\26\f\2\u0106\u010a\5\64"+
		"\33\2\u0107\u010a\5 \21\2\u0108\u010a\7h\2\2\u0109\u0105\3\2\2\2\u0109"+
		"\u0106\3\2\2\2\u0109\u0107\3\2\2\2\u0109\u0108\3\2\2\2\u010a\25\3\2\2"+
		"\2\u010b\u010c\b\f\1\2\u010c\u010d\5\30\r\2\u010d\u0116\3\2\2\2\u010e"+
		"\u010f\f\5\2\2\u010f\u0110\7)\2\2\u0110\u0115\5\26\f\6\u0111\u0112\f\4"+
		"\2\2\u0112\u0113\7\'\2\2\u0113\u0115\5\26\f\5\u0114\u010e\3\2\2\2\u0114"+
		"\u0111\3\2\2\2\u0115\u0118\3\2\2\2\u0116\u0114\3\2\2\2\u0116\u0117\3\2"+
		"\2\2\u0117\27\3\2\2\2\u0118\u0116\3\2\2\2\u0119\u011a\b\r\1\2\u011a\u011b"+
		"\7\b\2\2\u011b\u011c\5\24\13\2\u011c\u011d\7\t\2\2\u011d\u012b\3\2\2\2"+
		"\u011e\u012b\5\32\16\2\u011f\u012b\5\34\17\2\u0120\u012b\5&\24\2\u0121"+
		"\u0122\7\6\2\2\u0122\u0123\5\62\32\2\u0123\u0124\7\7\2\2\u0124\u012b\3"+
		"\2\2\2\u0125\u012b\5\66\34\2\u0126\u0127\5\34\17\2\u0127\u0128\7e\2\2"+
		"\u0128\u0129\5\30\r\3\u0129\u012b\3\2\2\2\u012a\u0119\3\2\2\2\u012a\u011e"+
		"\3\2\2\2\u012a\u011f\3\2\2\2\u012a\u0120\3\2\2\2\u012a\u0121\3\2\2\2\u012a"+
		"\u0125\3\2\2\2\u012a\u0126\3\2\2\2\u012b\u0132\3\2\2\2\u012c\u012d\f\6"+
		"\2\2\u012d\u012e\6\r\5\2\u012e\u012f\7\6\2\2\u012f\u0131\7\7\2\2\u0130"+
		"\u012c\3\2\2\2\u0131\u0134\3\2\2\2\u0132\u0130\3\2\2\2\u0132\u0133\3\2"+
		"\2\2\u0133\31\3\2\2\2\u0134\u0132\3\2\2\2\u0135\u0136\t\2\2\2\u0136\33"+
		"\3\2\2\2\u0137\u0139\5$\23\2\u0138\u013a\5\36\20\2\u0139\u0138\3\2\2\2"+
		"\u0139\u013a\3\2\2\2\u013a\35\3\2\2\2\u013b\u013e\5\"\22\2\u013c\u013e"+
		"\5 \21\2\u013d\u013b\3\2\2\2\u013d\u013c\3\2\2\2\u013e\37\3\2\2\2\u013f"+
		"\u0140\7\37\2\2\u0140\u0141\5\20\t\2\u0141\u0142\7 \2\2\u0142!\3\2\2\2"+
		"\u0143\u0144\7\37\2\2\u0144\u0145\5\20\t\2\u0145\u0146\7\37\2\2\u0146"+
		"\u014c\5\20\t\2\u0147\u0148\7 \2\2\u0148\u0149\5\4\3\2\u0149\u014a\7 "+
		"\2\2\u014a\u014d\3\2\2\2\u014b\u014d\7\34\2\2\u014c\u0147\3\2\2\2\u014c"+
		"\u014b\3\2\2\2\u014d#\3\2\2\2\u014e\u0151\7g\2\2\u014f\u0151\5^\60\2\u0150"+
		"\u014e\3\2\2\2\u0150\u014f\3\2\2\2\u0151%\3\2\2\2\u0152\u0154\7\n\2\2"+
		"\u0153\u0155\5(\25\2\u0154\u0153\3\2\2\2\u0154\u0155\3\2\2\2\u0155\u0156"+
		"\3\2\2\2\u0156\u0157\7\f\2\2\u0157\'\3\2\2\2\u0158\u015a\5*\26\2\u0159"+
		"\u015b\t\3\2\2\u015a\u0159\3\2\2\2\u015a\u015b\3\2\2\2\u015b)\3\2\2\2"+
		"\u015c\u0161\5,\27\2\u015d\u015e\t\3\2\2\u015e\u0160\5,\27\2\u015f\u015d"+
		"\3\2\2\2\u0160\u0163\3\2\2\2\u0161\u015f\3\2\2\2\u0161\u0162\3\2\2\2\u0162"+
		"+\3\2\2\2\u0163\u0161\3\2\2\2\u0164\u0167\5:\36\2\u0165\u0167\5L\'\2\u0166"+
		"\u0164\3\2\2\2\u0166\u0165\3\2\2\2\u0167-\3\2\2\2\u0168\u0169\5\30\r\2"+
		"\u0169\u016a\6\30\6\2\u016a\u016b\7\6\2\2\u016b\u016c\7\7\2\2\u016c/\3"+
		"\2\2\2\u016d\u016e\7\6\2\2\u016e\u016f\5\62\32\2\u016f\u0170\7\7\2\2\u0170"+
		"\61\3\2\2\2\u0171\u0176\5\24\13\2\u0172\u0173\7\16\2\2\u0173\u0175\5\24"+
		"\13\2\u0174\u0172\3\2\2\2\u0175\u0178\3\2\2\2\u0176\u0174\3\2\2\2\u0176"+
		"\u0177\3\2\2\2\u0177\63\3\2\2\2\u0178\u0176\3\2\2\2\u0179\u017b\5\6\4"+
		"\2\u017a\u0179\3\2\2\2\u017a\u017b\3\2\2\2\u017b\u017c\3\2\2\2\u017c\u017e"+
		"\7\b\2\2\u017d\u017f\5@!\2\u017e\u017d\3\2\2\2\u017e\u017f\3\2\2\2\u017f"+
		"\u0180\3\2\2\2\u0180\u0181\7\t\2\2\u0181\u0182\7\67\2\2\u0182\u0183\5"+
		"\24\13\2\u0183\65\3\2\2\2\u0184\u0185\7A\2\2\u0185\u0186\58\35\2\u0186"+
		"\67\3\2\2\2\u0187\u0192\7g\2\2\u0188\u0189\5\u00ccg\2\u0189\u018a\7\22"+
		"\2\2\u018a\u018c\3\2\2\2\u018b\u0188\3\2\2\2\u018c\u018d\3\2\2\2\u018d"+
		"\u018b\3\2\2\2\u018d\u018e\3\2\2\2\u018e\u018f\3\2\2\2\u018f\u0190\5\u00cc"+
		"g\2\u0190\u0192\3\2\2\2\u0191\u0187\3\2\2\2\u0191\u018b\3\2\2\2\u0192"+
		"9\3\2\2\2\u0193\u0195\5\u00b2Z\2\u0194\u0196\7\20\2\2\u0195\u0194\3\2"+
		"\2\2\u0195\u0196\3\2\2\2\u0196\u0198\3\2\2\2\u0197\u0199\5<\37\2\u0198"+
		"\u0197\3\2\2\2\u0198\u0199\3\2\2\2\u0199\u019c\3\2\2\2\u019a\u019b\7\67"+
		"\2\2\u019b\u019d\5\24\13\2\u019c\u019a\3\2\2\2\u019c\u019d\3\2\2\2\u019d"+
		";\3\2\2\2\u019e\u019f\7\21\2\2\u019f\u01a0\5\24\13\2\u01a0=\3\2\2\2\u01a1"+
		"\u01a3\5\6\4\2\u01a2\u01a1\3\2\2\2\u01a2\u01a3\3\2\2\2\u01a3\u01a4\3\2"+
		"\2\2\u01a4\u01a6\7\b\2\2\u01a5\u01a7\5@!\2\u01a6\u01a5\3\2\2\2\u01a6\u01a7"+
		"\3\2\2\2\u01a7\u01a8\3\2\2\2\u01a8\u01aa\7\t\2\2\u01a9\u01ab\5<\37\2\u01aa"+
		"\u01a9\3\2\2\2\u01aa\u01ab\3\2\2\2\u01ab?\3\2\2\2\u01ac\u01b1\5D#\2\u01ad"+
		"\u01ae\7\16\2\2\u01ae\u01b0\5D#\2\u01af\u01ad\3\2\2\2\u01b0\u01b3\3\2"+
		"\2\2\u01b1\u01b2\3\2\2\2\u01b1\u01af\3\2\2\2\u01b2A\3\2\2\2\u01b3\u01b1"+
		"\3\2\2\2\u01b4\u01b9\5H%\2\u01b5\u01b6\7\16\2\2\u01b6\u01b8\5H%\2\u01b7"+
		"\u01b5\3\2\2\2\u01b8\u01bb\3\2\2\2\u01b9\u01b7\3\2\2\2\u01b9\u01ba\3\2"+
		"\2\2\u01baC\3\2\2\2\u01bb\u01b9\3\2\2\2\u01bc\u01bf\5H%\2\u01bd\u01bf"+
		"\5F$\2\u01be\u01bc\3\2\2\2\u01be\u01bd\3\2\2\2\u01bfE\3\2\2\2\u01c0\u01c9"+
		"\5J&\2\u01c1\u01c3\7\20\2\2\u01c2\u01c4\5<\37\2\u01c3\u01c2\3\2\2\2\u01c3"+
		"\u01c4\3\2\2\2\u01c4\u01ca\3\2\2\2\u01c5\u01c7\5<\37\2\u01c6\u01c5\3\2"+
		"\2\2\u01c6\u01c7\3\2\2\2\u01c7\u01c8\3\2\2\2\u01c8\u01ca\5\2\2\2\u01c9"+
		"\u01c1\3\2\2\2\u01c9\u01c6\3\2\2\2\u01caG\3\2\2\2\u01cb\u01cd\5J&\2\u01cc"+
		"\u01ce\5<\37\2\u01cd\u01cc\3\2\2\2\u01cd\u01ce\3\2\2\2\u01ceI\3\2\2\2"+
		"\u01cf\u01d2\5\u00ccg\2\u01d0\u01d2\5\4\3\2\u01d1\u01cf\3\2\2\2\u01d1"+
		"\u01d0\3\2\2\2\u01d2K\3\2\2\2\u01d3\u01d4\7\6\2\2\u01d4\u01d5\7g\2\2\u01d5"+
		"\u01d6\7\21\2\2\u01d6\u01d7\t\4\2\2\u01d7\u01d8\7\7\2\2\u01d8\u01d9\5"+
		"<\37\2\u01d9M\3\2\2\2\u01da\u01db\7a\2\2\u01db\u01dd\7g\2\2\u01dc\u01de"+
		"\5\6\4\2\u01dd\u01dc\3\2\2\2\u01dd\u01de\3\2\2\2\u01de\u01df\3\2\2\2\u01df"+
		"\u01e0\7\17\2\2\u01e0\u01e1\5\24\13\2\u01e1\u01e2\7\r\2\2\u01e2O\3\2\2"+
		"\2\u01e3\u01e5\7X\2\2\u01e4\u01e3\3\2\2\2\u01e4\u01e5\3\2\2\2\u01e5\u01e7"+
		"\3\2\2\2\u01e6\u01e8\7d\2\2\u01e7\u01e6\3\2\2\2\u01e7\u01e8\3\2\2\2\u01e8"+
		"\u01e9\3\2\2\2\u01e9\u01ea\7\\\2\2\u01ea\u01ec\7g\2\2\u01eb\u01ed\5\6"+
		"\4\2\u01ec\u01eb\3\2\2\2\u01ec\u01ed\3\2\2\2\u01ed\u01ef\3\2\2\2\u01ee"+
		"\u01f0\5R*\2\u01ef\u01ee\3\2\2\2\u01ef\u01f0\3\2\2\2\u01f0\u01f1\3\2\2"+
		"\2\u01f1\u01f3\5&\24\2\u01f2\u01f4\7\r\2\2\u01f3\u01f2\3\2\2\2\u01f3\u01f4"+
		"\3\2\2\2\u01f4Q\3\2\2\2\u01f5\u01f6\7V\2\2\u01f6\u01f7\5T+\2\u01f7S\3"+
		"\2\2\2\u01f8\u01fd\5\34\17\2\u01f9\u01fa\7\16\2\2\u01fa\u01fc\5\34\17"+
		"\2\u01fb\u01f9\3\2\2\2\u01fc\u01ff\3\2\2\2\u01fd\u01fb\3\2\2\2\u01fd\u01fe"+
		"\3\2\2\2\u01feU\3\2\2\2\u01ff\u01fd\3\2\2\2\u0200\u0202\7W\2\2\u0201\u0200"+
		"\3\2\2\2\u0201\u0202\3\2\2\2\u0202\u0203\3\2\2\2\u0203\u0204\7U\2\2\u0204"+
		"\u0205\7g\2\2\u0205\u0207\7\n\2\2\u0206\u0208\5X-\2\u0207\u0206\3\2\2"+
		"\2\u0207\u0208\3\2\2\2\u0208\u0209\3\2\2\2\u0209\u020a\7\f\2\2\u020aW"+
		"\3\2\2\2\u020b\u020d\5Z.\2\u020c\u020e\7\16\2\2\u020d\u020c\3\2\2\2\u020d"+
		"\u020e\3\2\2\2\u020eY\3\2\2\2\u020f\u0214\5\\/\2\u0210\u0211\7\16\2\2"+
		"\u0211\u0213\5\\/\2\u0212\u0210\3\2\2\2\u0213\u0216\3\2\2\2\u0214\u0212"+
		"\3\2\2\2\u0214\u0215\3\2\2\2\u0215[\3\2\2\2\u0216\u0214\3\2\2\2\u0217"+
		"\u021a\5\u00b2Z\2\u0218\u0219\7\17\2\2\u0219\u021b\5\u00bc_\2\u021a\u0218"+
		"\3\2\2\2\u021a\u021b\3\2\2\2\u021b]\3\2\2\2\u021c\u0225\7g\2\2\u021d\u021f"+
		"\7\22\2\2\u021e\u021d\3\2\2\2\u021f\u0220\3\2\2\2\u0220\u021e\3\2\2\2"+
		"\u0220\u0221\3\2\2\2\u0221\u0222\3\2\2\2\u0222\u0224\7g\2\2\u0223\u021e"+
		"\3\2\2\2\u0224\u0227\3\2\2\2\u0225\u0223\3\2\2\2\u0225\u0226\3\2\2\2\u0226"+
		"_\3\2\2\2\u0227\u0225\3\2\2\2\u0228\u0229\7g\2\2\u0229\u022a\7\17\2\2"+
		"\u022a\u022b\5^\60\2\u022b\u022c\7\r\2\2\u022ca\3\2\2\2\u022d\u022f\5"+
		"\u00a6T\2\u022e\u022d\3\2\2\2\u022e\u022f\3\2\2\2\u022f\u0230\3\2\2\2"+
		"\u0230\u0231\7\2\2\3\u0231c\3\2\2\2\u0232\u0234\7X\2\2\u0233\u0232\3\2"+
		"\2\2\u0233\u0234\3\2\2\2\u0234\u0235\3\2\2\2\u0235\u0236\5f\64\2\u0236"+
		"e\3\2\2\2\u0237\u024d\5h\65\2\u0238\u024d\5l\67\2\u0239\u024d\5r:\2\u023a"+
		"\u024d\5z>\2\u023b\u024d\5P)\2\u023c\u024d\5~@\2\u023d\u024d\5\u0080A"+
		"\2\u023e\u024d\5\u0084C\2\u023f\u024d\5\u0086D\2\u0240\u024d\5\u0088E"+
		"\2\u0241\u024d\5\u008aF\2\u0242\u024d\5\u0094K\2\u0243\u024d\5\u0096L"+
		"\2\u0244\u024d\5\u009cO\2\u0245\u024d\5\u00c0a\2\u0246\u024d\5t;\2\u0247"+
		"\u024d\5N(\2\u0248\u024d\5V,\2\u0249\u024d\5|?\2\u024a\u024b\7X\2\2\u024b"+
		"\u024d\5f\64\2\u024c\u0237\3\2\2\2\u024c\u0238\3\2\2\2\u024c\u0239\3\2"+
		"\2\2\u024c\u023a\3\2\2\2\u024c\u023b\3\2\2\2\u024c\u023c\3\2\2\2\u024c"+
		"\u023d\3\2\2\2\u024c\u023e\3\2\2\2\u024c\u023f\3\2\2\2\u024c\u0240\3\2"+
		"\2\2\u024c\u0241\3\2\2\2\u024c\u0242\3\2\2\2\u024c\u0243\3\2\2\2\u024c"+
		"\u0244\3\2\2\2\u024c\u0245\3\2\2\2\u024c\u0246\3\2\2\2\u024c\u0247\3\2"+
		"\2\2\u024c\u0248\3\2\2\2\u024c\u0249\3\2\2\2\u024c\u024a\3\2\2\2\u024d"+
		"g\3\2\2\2\u024e\u0250\7\n\2\2\u024f\u0251\5j\66\2\u0250\u024f\3\2\2\2"+
		"\u0250\u0251\3\2\2\2\u0251\u0252\3\2\2\2\u0252\u0253\7\f\2\2\u0253i\3"+
		"\2\2\2\u0254\u0256\5f\64\2\u0255\u0254\3\2\2\2\u0256\u0257\3\2\2\2\u0257"+
		"\u0255\3\2\2\2\u0257\u0258\3\2\2\2\u0258k\3\2\2\2\u0259\u025c\7Y\2\2\u025a"+
		"\u025d\5n8\2\u025b\u025d\5`\61\2\u025c\u025a\3\2\2\2\u025c\u025b\3\2\2"+
		"\2\u025dm\3\2\2\2\u025e\u0261\7\31\2\2\u025f\u0261\5p9\2\u0260\u025e\3"+
		"\2\2\2\u0260\u025f\3\2\2\2\u0261\u0264\3\2\2\2\u0262\u0263\7S\2\2\u0263"+
		"\u0265\5\u00ccg\2\u0264\u0262\3\2\2\2\u0264\u0265\3\2\2\2\u0265\u0266"+
		"\3\2\2\2\u0266\u0267\7T\2\2\u0267\u0268\7h\2\2\u0268\u0269\5\u00d4k\2"+
		"\u0269o\3\2\2\2\u026a\u026b\5\u00ccg\2\u026b\u026c\7\16\2\2\u026c\u026e"+
		"\3\2\2\2\u026d\u026a\3\2\2\2\u026d\u026e\3\2\2\2\u026e\u026f\3\2\2\2\u026f"+
		"\u0270\7\n\2\2\u0270\u0275\5\u00ccg\2\u0271\u0272\7\16\2\2\u0272\u0274"+
		"\5\u00ccg\2\u0273\u0271\3\2\2\2\u0274\u0277\3\2\2\2\u0275\u0273\3\2\2"+
		"\2\u0275\u0276\3\2\2\2\u0276\u0278\3\2\2\2\u0277\u0275\3\2\2\2\u0278\u0279"+
		"\7\f\2\2\u0279q\3\2\2\2\u027a\u027c\7X\2\2\u027b\u027d\7M\2\2\u027c\u027b"+
		"\3\2\2\2\u027c\u027d\3\2\2\2\u027d\u0280\3\2\2\2\u027e\u0281\5n8\2\u027f"+
		"\u0281\5f\64\2\u0280\u027e\3\2\2\2\u0280\u027f\3\2\2\2\u0281s\3\2\2\2"+
		"\u0282\u0284\5\4\3\2\u0283\u0285\5<\37\2\u0284\u0283\3\2\2\2\u0284\u0285"+
		"\3\2\2\2\u0285\u0286\3\2\2\2\u0286\u0288\5\2\2\2\u0287\u0289\7\r\2\2\u0288"+
		"\u0287\3\2\2\2\u0288\u0289\3\2\2\2\u0289\u029a\3\2\2\2\u028a\u028c\5\u0082"+
		"B\2\u028b\u028a\3\2\2\2\u028b\u028c\3\2\2\2\u028c\u028d\3\2\2\2\u028d"+
		"\u028f\5v<\2\u028e\u0290\7\r\2\2\u028f\u028e\3\2\2\2\u028f\u0290\3\2\2"+
		"\2\u0290\u029a\3\2\2\2\u0291\u0293\7d\2\2\u0292\u0294\5\u0082B\2\u0293"+
		"\u0292\3\2\2\2\u0293\u0294\3\2\2\2\u0294\u0295\3\2\2\2\u0295\u0297\5v"+
		"<\2\u0296\u0298\7\r\2\2\u0297\u0296\3\2\2\2\u0297\u0298\3\2\2\2\u0298"+
		"\u029a\3\2\2\2\u0299\u0282\3\2\2\2\u0299\u028b\3\2\2\2\u0299\u0291\3\2"+
		"\2\2\u029au\3\2\2\2\u029b\u02a0\5x=\2\u029c\u029d\7\16\2\2\u029d\u029f"+
		"\5x=\2\u029e\u029c\3\2\2\2\u029f\u02a2\3\2\2\2\u02a0\u029e\3\2\2\2\u02a0"+
		"\u02a1\3\2\2\2\u02a1w\3\2\2\2\u02a2\u02a0\3\2\2\2\u02a3\u02a5\5\u00ce"+
		"h\2\u02a4\u02a6\5<\37\2\u02a5\u02a4\3\2\2\2\u02a5\u02a6\3\2\2\2\u02a6"+
		"\u02a8\3\2\2\2\u02a7\u02a9\5\u00bc_\2\u02a8\u02a7\3\2\2\2\u02a8\u02a9"+
		"\3\2\2\2\u02a9\u02af\3\2\2\2\u02aa\u02ac\7\17\2\2\u02ab\u02ad\5\6\4\2"+
		"\u02ac\u02ab\3\2\2\2\u02ac\u02ad\3\2\2\2\u02ad\u02ae\3\2\2\2\u02ae\u02b0"+
		"\5\u00bc_\2\u02af\u02aa\3\2\2\2\u02af\u02b0\3\2\2\2\u02b0y\3\2\2\2\u02b1"+
		"\u02b2\7\r\2\2\u02b2{\3\2\2\2\u02b3\u02b4\6?\7\2\u02b4\u02b6\5\u00ba^"+
		"\2\u02b5\u02b7\7\r\2\2\u02b6\u02b5\3\2\2\2\u02b6\u02b7\3\2\2\2\u02b7}"+
		"\3\2\2\2\u02b8\u02b9\7N\2\2\u02b9\u02ba\7\b\2\2\u02ba\u02bb\5\u00ba^\2"+
		"\u02bb\u02bc\7\t\2\2\u02bc\u02bf\5f\64\2\u02bd\u02be\7C\2\2\u02be\u02c0"+
		"\5f\64\2\u02bf\u02bd\3\2\2\2\u02bf\u02c0\3\2\2\2\u02c0\177\3\2\2\2\u02c1"+
		"\u02c2\7K\2\2\u02c2\u02c3\7\b\2\2\u02c3\u02c4\5\u00ba^\2\u02c4\u02c5\7"+
		"\t\2\2\u02c5\u02c6\5f\64\2\u02c6\u02d7\3\2\2\2\u02c7\u02c8\7I\2\2\u02c8"+
		"\u02ca\7\b\2\2\u02c9\u02cb\5\u00ba^\2\u02ca\u02c9\3\2\2\2\u02ca\u02cb"+
		"\3\2\2\2\u02cb\u02cc\3\2\2\2\u02cc\u02ce\7\r\2\2\u02cd\u02cf\5\u00ba^"+
		"\2\u02ce\u02cd\3\2\2\2\u02ce\u02cf\3\2\2\2\u02cf\u02d0\3\2\2\2\u02d0\u02d2"+
		"\7\r\2\2\u02d1\u02d3\5\u00ba^\2\u02d2\u02d1\3\2\2\2\u02d2\u02d3\3\2\2"+
		"\2\u02d3\u02d4\3\2\2\2\u02d4\u02d5\7\t\2\2\u02d5\u02d7\5f\64\2\u02d6\u02c1"+
		"\3\2\2\2\u02d6\u02c7\3\2\2\2\u02d7\u0081\3\2\2\2\u02d8\u02d9\t\5\2\2\u02d9"+
		"\u0083\3\2\2\2\u02da\u02dd\7H\2\2\u02db\u02dc\6C\b\2\u02dc\u02de\7g\2"+
		"\2\u02dd\u02db\3\2\2\2\u02dd\u02de\3\2\2\2\u02de\u02df\3\2\2\2\u02df\u02e0"+
		"\5\u00d4k\2\u02e0\u0085\3\2\2\2\u02e1\u02e4\7?\2\2\u02e2\u02e3\6D\t\2"+
		"\u02e3\u02e5\7g\2\2\u02e4\u02e2\3\2\2\2\u02e4\u02e5\3\2\2\2\u02e5\u02e6"+
		"\3\2\2\2\u02e6\u02e7\5\u00d4k\2\u02e7\u0087\3\2\2\2\u02e8\u02eb\7F\2\2"+
		"\u02e9\u02ea\6E\n\2\u02ea\u02ec\5\u00ba^\2\u02eb\u02e9\3\2\2\2\u02eb\u02ec"+
		"\3\2\2\2\u02ec\u02ed\3\2\2\2\u02ed\u02ee\5\u00d4k\2\u02ee\u0089\3\2\2"+
		"\2\u02ef\u02f0\7J\2\2\u02f0\u02f1\7\b\2\2\u02f1\u02f2\5\u00ba^\2\u02f2"+
		"\u02f3\7\t\2\2\u02f3\u02f4\5\u008cG\2\u02f4\u008b\3\2\2\2\u02f5\u02f7"+
		"\7\n\2\2\u02f6\u02f8\5\u008eH\2\u02f7\u02f6\3\2\2\2\u02f7\u02f8\3\2\2"+
		"\2\u02f8\u02fd\3\2\2\2\u02f9\u02fb\5\u0092J\2\u02fa\u02fc\5\u008eH\2\u02fb"+
		"\u02fa\3\2\2\2\u02fb\u02fc\3\2\2\2\u02fc\u02fe\3\2\2\2\u02fd\u02f9\3\2"+
		"\2\2\u02fd\u02fe\3\2\2\2\u02fe\u02ff\3\2\2\2\u02ff\u0300\7\f\2\2\u0300"+
		"\u008d\3\2\2\2\u0301\u0303\5\u0090I\2\u0302\u0301\3\2\2\2\u0303\u0304"+
		"\3\2\2\2\u0304\u0302\3\2\2\2\u0304\u0305\3\2\2\2\u0305\u008f\3\2\2\2\u0306"+
		"\u0307\7B\2\2\u0307\u0308\5\u00ba^\2\u0308\u030a\7\21\2\2\u0309\u030b"+
		"\5j\66\2\u030a\u0309\3\2\2\2\u030a\u030b\3\2\2\2\u030b\u0091\3\2\2\2\u030c"+
		"\u030d\7M\2\2\u030d\u030f\7\21\2\2\u030e\u0310\5j\66\2\u030f\u030e\3\2"+
		"\2\2\u030f\u0310\3\2\2\2\u0310\u0093\3\2\2\2\u0311\u0312\7O\2\2\u0312"+
		"\u0313\6K\13\2\u0313\u0314\5\u00ba^\2\u0314\u0315\5\u00d4k\2\u0315\u0095"+
		"\3\2\2\2\u0316\u0317\7R\2\2\u0317\u031d\5h\65\2\u0318\u031a\5\u0098M\2"+
		"\u0319\u031b\5\u009aN\2\u031a\u0319\3\2\2\2\u031a\u031b\3\2\2\2\u031b"+
		"\u031e\3\2\2\2\u031c\u031e\5\u009aN\2\u031d\u0318\3\2\2\2\u031d\u031c"+
		"\3\2\2\2\u031e\u0097\3\2\2\2\u031f\u0320\7D\2\2\u0320\u0321\7\b\2\2\u0321"+
		"\u0322\7g\2\2\u0322\u0323\7\t\2\2\u0323\u0324\5h\65\2\u0324\u0099\3\2"+
		"\2\2\u0325\u0326\7E\2\2\u0326\u0327\5h\65\2\u0327\u009b\3\2\2\2\u0328"+
		"\u0329\7L\2\2\u0329\u032a\5\u00d4k\2\u032a\u009d\3\2\2\2\u032b\u032c\5"+
		"L\'\2\u032c\u032d\7\r\2\2\u032d\u009f\3\2\2\2\u032e\u0333\5\u00a2R\2\u032f"+
		"\u0330\7\16\2\2\u0330\u0332\5\u00a2R\2\u0331\u032f\3\2\2\2\u0332\u0335"+
		"\3\2\2\2\u0333\u0334\3\2\2\2\u0333\u0331\3\2\2\2\u0334\u00a1\3\2\2\2\u0335"+
		"\u0333\3\2\2\2\u0336\u0338\5\u00ceh\2\u0337\u0339\7\20\2\2\u0338\u0337"+
		"\3\2\2\2\u0338\u0339\3\2\2\2\u0339\u033b\3\2\2\2\u033a\u033c\5<\37\2\u033b"+
		"\u033a\3\2\2\2\u033b\u033c\3\2\2\2\u033c\u033f\3\2\2\2\u033d\u033e\7\17"+
		"\2\2\u033e\u0340\5\u00bc_\2\u033f\u033d\3\2\2\2\u033f\u0340\3\2\2\2\u0340"+
		"\u00a3\3\2\2\2\u0341\u0343\5\u00a6T\2\u0342\u0341\3\2\2\2\u0342\u0343"+
		"\3\2\2\2\u0343\u00a5\3\2\2\2\u0344\u0346\5d\63\2\u0345\u0344\3\2\2\2\u0346"+
		"\u0347\3\2\2\2\u0347\u0345\3\2\2\2\u0347\u0348\3\2\2\2\u0348\u00a7\3\2"+
		"\2\2\u0349\u034b\7\6\2\2\u034a\u034c\5\u00aaV\2\u034b\u034a\3\2\2\2\u034b"+
		"\u034c\3\2\2\2\u034c\u034d\3\2\2\2\u034d\u034e\7\7\2\2\u034e\u00a9\3\2"+
		"\2\2\u034f\u0358\5\u00acW\2\u0350\u0352\7\16\2\2\u0351\u0350\3\2\2\2\u0352"+
		"\u0353\3\2\2\2\u0353\u0351\3\2\2\2\u0353\u0354\3\2\2\2\u0354\u0355\3\2"+
		"\2\2\u0355\u0357\5\u00acW\2\u0356\u0351\3\2\2\2\u0357\u035a\3\2\2\2\u0358"+
		"\u0356\3\2\2\2\u0358\u0359\3\2\2\2\u0359\u00ab\3\2\2\2\u035a\u0358\3\2"+
		"\2\2\u035b\u035e\5\u00bc_\2\u035c\u035e\7g\2\2\u035d\u035b\3\2\2\2\u035d"+
		"\u035c\3\2\2\2\u035e\u0360\3\2\2\2\u035f\u0361\7\16\2\2\u0360\u035f\3"+
		"\2\2\2\u0360\u0361\3\2\2\2\u0361\u00ad\3\2\2\2\u0362\u036e\7\n\2\2\u0363"+
		"\u0368\5\u00b0Y\2\u0364\u0365\7\16\2\2\u0365\u0367\5\u00b0Y\2\u0366\u0364"+
		"\3\2\2\2\u0367\u036a\3\2\2\2\u0368\u0366\3\2\2\2\u0368\u0369\3\2\2\2\u0369"+
		"\u036c\3\2\2\2\u036a\u0368\3\2\2\2\u036b\u036d\7\16\2\2\u036c\u036b\3"+
		"\2\2\2\u036c\u036d\3\2\2\2\u036d\u036f\3\2\2\2\u036e\u0363\3\2\2\2\u036e"+
		"\u036f\3\2\2\2\u036f\u0370\3\2\2\2\u0370\u0371\7\f\2\2\u0371\u00af\3\2"+
		"\2\2\u0372\u0373\5\u00b2Z\2\u0373\u0374\t\6\2\2\u0374\u0375\5\u00bc_\2"+
		"\u0375\u037e\3\2\2\2\u0376\u0377\7\6\2\2\u0377\u0378\5\u00bc_\2\u0378"+
		"\u0379\7\7\2\2\u0379\u037a\7\21\2\2\u037a\u037b\5\u00bc_\2\u037b\u037e"+
		"\3\2\2\2\u037c\u037e\5\u00ceh\2\u037d\u0372\3\2\2\2\u037d\u0376\3\2\2"+
		"\2\u037d\u037c\3\2\2\2\u037e\u00b1\3\2\2\2\u037f\u0383\5\u00ccg\2\u0380"+
		"\u0383\7h\2\2\u0381\u0383\5\u00caf\2\u0382\u037f\3\2\2\2\u0382\u0380\3"+
		"\2\2\2\u0382\u0381\3\2\2\2\u0383\u00b3\3\2\2\2\u0384\u0389\7\b\2\2\u0385"+
		"\u0387\5\u00b6\\\2\u0386\u0388\7\16\2\2\u0387\u0386\3\2\2\2\u0387\u0388"+
		"\3\2\2\2\u0388\u038a\3\2\2\2\u0389\u0385\3\2\2\2\u0389\u038a\3\2\2\2\u038a"+
		"\u038b\3\2\2\2\u038b\u038c\7\t\2\2\u038c\u00b5\3\2\2\2\u038d\u0392\5\u00b8"+
		"]\2\u038e\u038f\7\16\2\2\u038f\u0391\5\u00b8]\2\u0390\u038e\3\2\2\2\u0391"+
		"\u0394\3\2\2\2\u0392\u0390\3\2\2\2\u0392\u0393\3\2\2\2\u0393\u00b7\3\2"+
		"\2\2\u0394\u0392\3\2\2\2\u0395\u0398\5\u00bc_\2\u0396\u0398\7g\2\2\u0397"+
		"\u0395\3\2\2\2\u0397\u0396\3\2\2\2\u0398\u00b9\3\2\2\2\u0399\u039e\5\u00bc"+
		"_\2\u039a\u039b\7\16\2\2\u039b\u039d\5\u00bc_\2\u039c\u039a\3\2\2\2\u039d"+
		"\u03a0\3\2\2\2\u039e\u039c\3\2\2\2\u039e\u039f\3\2\2\2\u039f\u00bb\3\2"+
		"\2\2\u03a0\u039e\3\2\2\2\u03a1\u03a2\b_\1\2\u03a2\u03c5\5\u00c0a\2\u03a3"+
		"\u03a4\7P\2\2\u03a4\u03c5\5\u00bc_\37\u03a5\u03a6\7G\2\2\u03a6\u03c5\5"+
		"\u00bc_\36\u03a7\u03a8\7A\2\2\u03a8\u03c5\5\u00bc_\35\u03a9\u03aa\7\23"+
		"\2\2\u03aa\u03c5\5\u00bc_\34\u03ab\u03ac\7\24\2\2\u03ac\u03c5\5\u00bc"+
		"_\33\u03ad\u03ae\7\25\2\2\u03ae\u03c5\5\u00bc_\32\u03af\u03b0\7\26\2\2"+
		"\u03b0\u03c5\5\u00bc_\31\u03b1\u03b2\7\27\2\2\u03b2\u03c5\5\u00bc_\30"+
		"\u03b3\u03b4\7\30\2\2\u03b4\u03c5\5\u00bc_\27\u03b5\u03b7\5\u00ccg\2\u03b6"+
		"\u03b8\5\u00bc_\2\u03b7\u03b6\3\2\2\2\u03b7\u03b8\3\2\2\2\u03b8\u03c5"+
		"\3\2\2\2\u03b9\u03c5\5\u00c8e\2\u03ba\u03c5\5\u00a8U\2\u03bb\u03c5\5\u00ae"+
		"X\2\u03bc\u03bd\7\b\2\2\u03bd\u03be\5\u00ba^\2\u03be\u03bf\7\t\2\2\u03bf"+
		"\u03c5\3\2\2\2\u03c0\u03c2\5\16\b\2\u03c1\u03c3\5\u00ba^\2\u03c2\u03c1"+
		"\3\2\2\2\u03c2\u03c3\3\2\2\2\u03c3\u03c5\3\2\2\2\u03c4\u03a1\3\2\2\2\u03c4"+
		"\u03a3\3\2\2\2\u03c4\u03a5\3\2\2\2\u03c4\u03a7\3\2\2\2\u03c4\u03a9\3\2"+
		"\2\2\u03c4\u03ab\3\2\2\2\u03c4\u03ad\3\2\2\2\u03c4\u03af\3\2\2\2\u03c4"+
		"\u03b1\3\2\2\2\u03c4\u03b3\3\2\2\2\u03c4\u03b5\3\2\2\2\u03c4\u03b9\3\2"+
		"\2\2\u03c4\u03ba\3\2\2\2\u03c4\u03bb\3\2\2\2\u03c4\u03bc\3\2\2\2\u03c4"+
		"\u03c0\3\2\2\2\u03c5\u0409\3\2\2\2\u03c6\u03c7\f\26\2\2\u03c7\u03c8\t"+
		"\7\2\2\u03c8\u0408\5\u00bc_\27\u03c9\u03ca\f\25\2\2\u03ca\u03cb\t\b\2"+
		"\2\u03cb\u0408\5\u00bc_\26\u03cc\u03cd\f\24\2\2\u03cd\u03ce\t\t\2\2\u03ce"+
		"\u0408\5\u00bc_\25\u03cf\u03d0\f\23\2\2\u03d0\u03d1\t\n\2\2\u03d1\u0408"+
		"\5\u00bc_\24\u03d2\u03d3\f\22\2\2\u03d3\u03d4\t\13\2\2\u03d4\u0408\5\u00bc"+
		"_\23\u03d5\u03d6\f\21\2\2\u03d6\u03d7\7\'\2\2\u03d7\u0408\5\u00bc_\22"+
		"\u03d8\u03d9\f\20\2\2\u03d9\u03da\7(\2\2\u03da\u0408\5\u00bc_\21\u03db"+
		"\u03dc\f\17\2\2\u03dc\u03dd\7)\2\2\u03dd\u0408\5\u00bc_\20\u03de\u03df"+
		"\f\16\2\2\u03df\u03e0\7*\2\2\u03e0\u0408\5\u00bc_\17\u03e1\u03e2\f\r\2"+
		"\2\u03e2\u03e3\7+\2\2\u03e3\u0408\5\u00bc_\16\u03e4\u03e5\f\f\2\2\u03e5"+
		"\u03e6\7\20\2\2\u03e6\u03e7\5\u00bc_\2\u03e7\u03e8\7\21\2\2\u03e8\u03e9"+
		"\5\u00bc_\r\u03e9\u0408\3\2\2\2\u03ea\u03eb\f\13\2\2\u03eb\u03ec\7\17"+
		"\2\2\u03ec\u0408\5\u00bc_\f\u03ed\u03ee\f\n\2\2\u03ee\u03ef\5\u00c6d\2"+
		"\u03ef\u03f0\5\u00bc_\13\u03f0\u0408\3\2\2\2\u03f1\u03f2\f$\2\2\u03f2"+
		"\u03f3\7\6\2\2\u03f3\u03f4\5\u00ba^\2\u03f4\u03f5\7\7\2\2\u03f5\u0408"+
		"\3\2\2\2\u03f6\u03f7\f#\2\2\u03f7\u03f8\7\22\2\2\u03f8\u03fa\5\u00ccg"+
		"\2\u03f9\u03fb\5\36\20\2\u03fa\u03f9\3\2\2\2\u03fa\u03fb\3\2\2\2\u03fb"+
		"\u0408\3\2\2\2\u03fc\u03fd\f\"\2\2\u03fd\u0408\5\u00b4[\2\u03fe\u03ff"+
		"\f!\2\2\u03ff\u0400\6_\35\2\u0400\u0408\7\23\2\2\u0401\u0402\f \2\2\u0402"+
		"\u0403\6_\37\2\u0403\u0408\7\24\2\2\u0404\u0405\f\3\2\2\u0405\u0406\7"+
		"S\2\2\u0406\u0408\5\u00be`\2\u0407\u03c6\3\2\2\2\u0407\u03c9\3\2\2\2\u0407"+
		"\u03cc\3\2\2\2\u0407\u03cf\3\2\2\2\u0407\u03d2\3\2\2\2\u0407\u03d5\3\2"+
		"\2\2\u0407\u03d8\3\2\2\2\u0407\u03db\3\2\2\2\u0407\u03de\3\2\2\2\u0407"+
		"\u03e1\3\2\2\2\u0407\u03e4\3\2\2\2\u0407\u03ea\3\2\2\2\u0407\u03ed\3\2"+
		"\2\2\u0407\u03f1\3\2\2\2\u0407\u03f6\3\2\2\2\u0407\u03fc\3\2\2\2\u0407"+
		"\u03fe\3\2\2\2\u0407\u0401\3\2\2\2\u0407\u0404\3\2\2\2\u0408\u040b\3\2"+
		"\2\2\u0409\u0407\3\2\2\2\u0409\u040a\3\2\2\2\u040a\u00bd\3\2\2\2\u040b"+
		"\u0409\3\2\2\2\u040c\u040f\5\32\16\2\u040d\u040e\7\6\2\2\u040e\u0410\7"+
		"\7\2\2\u040f\u040d\3\2\2\2\u040f\u0410\3\2\2\2\u0410\u0413\3\2\2\2\u0411"+
		"\u0413\5\u00bc_\2\u0412\u040c\3\2\2\2\u0412\u0411\3\2\2\2\u0413\u00bf"+
		"\3\2\2\2\u0414\u0416\5\u00c2b\2\u0415\u0417\5<\37\2\u0416\u0415\3\2\2"+
		"\2\u0416\u0417\3\2\2\2\u0417\u0418\3\2\2\2\u0418\u0419\7\67\2\2\u0419"+
		"\u041a\5\u00c4c\2\u041a\u00c1\3\2\2\2\u041b\u0422\7g\2\2\u041c\u041e\7"+
		"\b\2\2\u041d\u041f\5\u00a0Q\2\u041e\u041d\3\2\2\2\u041e\u041f\3\2\2\2"+
		"\u041f\u0420\3\2\2\2\u0420\u0422\7\t\2\2\u0421\u041b\3\2\2\2\u0421\u041c"+
		"\3\2\2\2\u0422\u00c3\3\2\2\2\u0423\u0429\5\u00bc_\2\u0424\u0425\7\n\2"+
		"\2\u0425\u0426\5\u00a4S\2\u0426\u0427\7\f\2\2\u0427\u0429\3\2\2\2\u0428"+
		"\u0423\3\2\2\2\u0428\u0424\3\2\2\2\u0429\u00c5\3\2\2\2\u042a\u042b\t\f"+
		"\2\2\u042b\u00c7\3\2\2\2\u042c\u0432\78\2\2\u042d\u0432\79\2\2\u042e\u0432"+
		"\7h\2\2\u042f\u0432\7\5\2\2\u0430\u0432\5\u00caf\2\u0431\u042c\3\2\2\2"+
		"\u0431\u042d\3\2\2\2\u0431\u042e\3\2\2\2\u0431\u042f\3\2\2\2\u0431\u0430"+
		"\3\2\2\2\u0432\u00c9\3\2\2\2\u0433\u0434\t\r\2\2\u0434\u00cb\3\2\2\2\u0435"+
		"\u0438\7g\2\2\u0436\u0438\5\u00d0i\2\u0437\u0435\3\2\2\2\u0437\u0436\3"+
		"\2\2\2\u0438\u00cd\3\2\2\2\u0439\u043a\t\16\2\2\u043a\u00cf\3\2\2\2\u043b"+
		"\u043f\5\u00d2j\2\u043c\u043f\78\2\2\u043d\u043f\79\2\2\u043e\u043b\3"+
		"\2\2\2\u043e\u043c\3\2\2\2\u043e\u043d\3\2\2\2\u043f\u00d1\3\2\2\2\u0440"+
		"\u0441\t\17\2\2\u0441\u00d3\3\2\2\2\u0442\u0447\7\r\2\2\u0443\u0447\7"+
		"\2\2\3\u0444\u0447\6k!\2\u0445\u0447\6k\"\2\u0446\u0442\3\2\2\2\u0446"+
		"\u0443\3\2\2\2\u0446\u0444\3\2\2\2\u0446\u0445\3\2\2\2\u0447\u00d5\3\2"+
		"\2\2\u0085\u00db\u00df\u00e8\u00ed\u00f0\u00f7\u0100\u0109\u0114\u0116"+
		"\u012a\u0132\u0139\u013d\u014c\u0150\u0154\u015a\u0161\u0166\u0176\u017a"+
		"\u017e\u018d\u0191\u0195\u0198\u019c\u01a2\u01a6\u01aa\u01b1\u01b9\u01be"+
		"\u01c3\u01c6\u01c9\u01cd\u01d1\u01dd\u01e4\u01e7\u01ec\u01ef\u01f3\u01fd"+
		"\u0201\u0207\u020d\u0214\u021a\u0220\u0225\u022e\u0233\u024c\u0250\u0257"+
		"\u025c\u0260\u0264\u026d\u0275\u027c\u0280\u0284\u0288\u028b\u028f\u0293"+
		"\u0297\u0299\u02a0\u02a5\u02a8\u02ac\u02af\u02b6\u02bf\u02ca\u02ce\u02d2"+
		"\u02d6\u02dd\u02e4\u02eb\u02f7\u02fb\u02fd\u0304\u030a\u030f\u031a\u031d"+
		"\u0333\u0338\u033b\u033f\u0342\u0347\u034b\u0353\u0358\u035d\u0360\u0368"+
		"\u036c\u036e\u037d\u0382\u0387\u0389\u0392\u0397\u039e\u03b7\u03c2\u03c4"+
		"\u03fa\u0407\u0409\u040f\u0412\u0416\u041e\u0421\u0428\u0431\u0437\u043e"+
		"\u0446";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}