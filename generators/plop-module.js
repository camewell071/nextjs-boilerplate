module.exports = function (plop) {
  plop.setGenerator('modules', {
    description: 'application module logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'module name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/modules/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/modules/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
    ],
  })
}
