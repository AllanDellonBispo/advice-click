module.exports = {
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',  // Transforma arquivos .js, .jsx, .ts e .tsx com Babel
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],  // Correção aqui: não é necessário "/extend-expect"
    testEnvironment: 'jest-environment-jsdom',  // Ambiente para testes com React
  };
  