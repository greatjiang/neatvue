module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 75,
      unitPrecision: 6,
      replace: true,
      mediaQuery: false,
      minPixelValue: 2,
      propList: ["*"],
      selectorBlackList: ["no-rem-"]
    },
    autoprefixer: {}
  }
};
