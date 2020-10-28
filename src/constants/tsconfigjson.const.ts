const tsconfigjson = {
    compilerOptions: {
        module: 'CommonJS',
        esModuleInterop: true,
        target: 'ES2019',
        moduleResolution: 'node',
        sourceMap: true,
        outDir: 'lib',
    },
    lib: ['ES2020'],
};

export { tsconfigjson };