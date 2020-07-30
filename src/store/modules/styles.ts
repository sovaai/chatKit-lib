import { StoreonModule } from 'storeon'
import { StylesState, StylesEvents } from '../@types/storeonModules'
import { defaultStylesState } from '../states/defaultStates'

export const styles: StoreonModule<StylesState, StylesEvents> = store => {
  store.on('@init', () => ({
    styles: defaultStylesState,
  }))
  store.on('switchTheme', ({ styles }, themeName) => ({
    styles: styles.update('active', () => themeName),
  }))
  store.on('initTheme', ({ styles }, { themeName, data }) => ({
    styles: styles.update('stack', value => ({ ...value, [themeName]: data })),
  }))
  store.on('changeStyles', ({ styles }, { themeName, data }) => ({
    styles: styles.updateIn(['stack', themeName], value => ({ ...value, ...data })),
  }))
  store.on('changeComponentsStyles', ({ styles }, { themeName, componentName, data }) => ({
    styles: styles.updateIn(['stack', themeName, componentName], value => ({ ...value, ...data })),
  }))
}
