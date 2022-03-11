// file: src/config/config-files-map.ts

// import a reference to our Config interface:
import { ConfigInterface } from './models/Config.interface'

// individual environments configs:
import configMock from './config-files/mock.json'
import configLocal from './config-files/localapis.json'
import configBeta from './config-files/beta.json'
import configProduction from './config-files/production.json'

// example using strategy pattern:
// const configFilesMap: { [key: string]: ConfigInterface } = {
//   mock: configMock,
//   local: configLocal,
//   beta: configBeta,
//   production: configProduction,
// }
// if (!configFilesMap[env]) {
//   throw Error(`Could not find config for VITE_APP_CONFIG key "${ env }"`)
// }
// export const config: ConfigInterface = configFilesMap[env]

// example with javascript Map()
export const configFilesMap: Map<string, ConfigInterface> = new Map<string, ConfigInterface>([
  ['mock', configMock],
  ['localapis', configLocal],
  ['beta', configBeta],
  ['production', configProduction]
])
