import { StoreonModule } from 'storeon'

import { defaultClientConfigState } from '../states/defaultStates'
import { ClientConfigState, ClientConfigEvents } from '../@types/storeonModules'

export const clientConfig: StoreonModule<ClientConfigState, ClientConfigEvents> = store => {
  store.on('@init', () => ({
    clientConfig: defaultClientConfigState,
  }))
  store.on('changeClientConfig', ({ clientConfig }, newConfig) => ({
    clientConfig: clientConfig.update('info', value => ({ ...value, ...newConfig })),
  }))
}
