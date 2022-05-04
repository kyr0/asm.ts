# asm.ts

Parses a TypeScript dialect and compiles to native code
via generating assembly code via ts.asm (TSASM).

## Motivation

Learning to design a native programming language,
compiling to assembly code, and having fun doing so!
Your PR's are welcome here! :)

I'd like to use this language to build AOS, a new
operating system for the x86_64 architecture that
is completely built using web technology, in-browser.

## Status

Early research phase. Looking into the best way how to write the
tokenizer, lexer and parser. AssemblyScript dialect variant looks
most promising. Probably fork the AssemblyScript parser and AST codebase,
remove anything OOP and go with a limited feature-set, then adapt.

A C-like feature set would be very desirable. I don't see much value
in implementing OOP features here. Dynamic memory allocation and GC
via assembly is a big deal that I'd like to postpone for a later version.

## POC (Proof of Concept) using ANTLR4

TypeScript dialect grammar / parser implemented via ANTLR4:
https://github.com/tunnelvisionlabs/antlr4ts

See: `poc.ts`, `grammar`, `src/lexer` and `src/parser`
Run: `yarn test`

## POC (Proof of Concept) using AssemblyScript

Using the parser of AssemblyScript (comes with native types out of the box):
https://github.com/AssemblyScript/assemblyscript/blob/main/src/parser.ts

See: `src/as` and `poc-as.ts`
Run: `yarn test-as`

## Course on implementing compilers

Stanford online:
https://www.edx.org/course/compilers?index=product&queryID=391ec738fb7f2f945420730ab93e1471&position=1
