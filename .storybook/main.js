const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
        },
        include: [path.resolve(__dirname)],
      },
    },
    '@storybook/addon-knobs/register',
  ],
}
