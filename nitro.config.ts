import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  routeRules: {
    '/**': {
      cors: true
    }
  }
})
