import { StoreonModule } from 'storeon'

import { LanguagesState, LanguagesEvents } from '../@types/storeonModules'
import { defaultLanguagesState } from '../states/defaultStates'

export const languages: StoreonModule<LanguagesState, LanguagesEvents> = store => {
  store.on('@init', () => ({
    languages: defaultLanguagesState,
  }))
  store.on('initLanguage', ({ languages }, language) => ({
    languages: languages.update('stack', value => ({ ...value, ...language })),
  }))
  store.on('changeLanguage', ({ languages }, language) => ({
    languages: languages.update('active', () => language),
  }))
  store.on('changeLanguagePacket', ({ languages }, { language, packet }) => ({
    languages: languages.updateIn(['stack', language], value => ({ ...value, ...packet })),
  }))
  store.on('changeComponentsTitles', ({ languages }, { language, componentName, data }) => ({
    languages: languages.updateIn(['stack', language, componentName], value => ({ ...value, ...data })),
  }))
}
