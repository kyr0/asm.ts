import pkg from 'assemblyscript';
const { Program, Options } = pkg;

export const testAs = () => {
    // https://github.com/AssemblyScript/assemblyscript/blob/a7c87e67a00a73907b1171910983a2a73c4d333f/tests/parser.js
    const program = new Program(new Options())
    const parser = program.parser
    const filename = 'test.ts'

    const sourceText = 'const i: i32 = 42;'
    parser.parseFile(sourceText, filename, true);

    console.log('stmt', program.nativeFile, program.filesByName)
}
testAs();