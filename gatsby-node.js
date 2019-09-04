exports.onCreateWebpackConfig = ({
  actions,
  stage
}) => {
  if (stage === `build-javascript`) {
    actions.setWebpackConfig({
        optimization: {
            runtimeChunk: {
                name: `webpack-runtime`,
            },
            splitChunks: {
                name: false,
                cacheGroups: {
                    styles: {
                        name: `styles`,
                        test: /\.(css|scss)$/,
                        chunks: `initial`,
                        enforce: true,
                    },
                },
            }
        }
    });
  }
}
