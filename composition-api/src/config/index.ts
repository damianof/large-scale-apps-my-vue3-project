import { ConfigInterface } from './Config.interface'

// individual environments configs:
import configMock from './config-files/mock.json'
import configLocal from './config-files/local.json'
import configBeta from './config-files/beta.json'
import configLive from './config-files/live.json'

// return appropriate config based on env VUE_APP_CONFIG
let env: string = 'mock' /* by default we return the mock configuration */

// if our env VUE_APP_CONFIG variable is set, get its value
if (process.env && process.env.VUE_APP_CONFIG) {
  env = process.env.VUE_APP_CONFIG.trim().toLowerCase()
}

// example using strategy pattern:
// const configsMap: { [key: string]: ConfigInterface } = {
//   mock: configMock,
//   local: configLocal,
//   beta: configBeta,
//   live: configLive,
// }
// if (!configsMap[env]) {
//   throw Error(`Could not find config for VUE_APP_CONFIG key "${ env }"`)
// }
// export const config: ConfigInterface = configsMap[env]

// example with javascript Map()
export const configsMap: Map<string, ConfigInterface> = new Map<string, ConfigInterface>([
  ['mock', configMock],
  ['local', configLocal],
  ['beta', configBeta],
  ['live', configLive]
])

if (!configsMap.has(env)) {
  throw Error(`Could not find config for VUE_APP_CONFIG key "${env}"`)
}

export const config: ConfigInterface = configsMap.get(env) as ConfigInterface
