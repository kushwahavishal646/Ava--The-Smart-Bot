module.exports = {
  plugins: ['@babel/plugin-proposal-logical-assignment-operators'],
  presets: [
    '@babel/preset-react',
    '@babel/preset-flow',
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
