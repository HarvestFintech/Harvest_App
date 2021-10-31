module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@screens': './src/screens',
          '@shared': './src/shared',
          '@redux': './src/redux',
          '@nav': './src/nav',
        },
      },
    ],
  ],
};
