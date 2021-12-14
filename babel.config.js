module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@screens': './src/screens',
          '@shared': './src/shared',
          '@redux': './src/redux',
          '@nav': './src/nav',
          '@util': './src/util',
        },
      },
    ],
  ],
};
