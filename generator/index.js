const fs = require('fs')

module.exports = (api, options, rootOptions) => {
  if (options.confirm) {
    api.render('./template', {
      ...options,
    })

    api.extendPackage({
      dependencies: {
        'whatwg-fetch': '3.0.0'
      }
    })

    api.onCreateComplete(() => {
      fs.unlinkSync(api.resolve('src/assets/logo.svg'));
      fs.unlinkSync(api.resolve('src/components/HelloWorld.vue'));
    })
  }
}