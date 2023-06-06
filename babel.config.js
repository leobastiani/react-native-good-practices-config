module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'codegen',
    'preval',
    [
      'inline-dotenv',
      {
        path: '.env',
        unsafe: true,
      },
    ],
  ],
};
