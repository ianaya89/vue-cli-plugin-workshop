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
      const logo = 'src/assets/logo.svg'
      const helloWorld = 'src/components/HelloWorld.vue'

      if (fs.existsSync(logo)) {
        fs.unlinkSync(api.resolve(logo))
      }

      if (fs.existsSync(helloWorld)) {
        fs.unlinkSync(api.resolve(helloWorld))
      }
    })
  }
}