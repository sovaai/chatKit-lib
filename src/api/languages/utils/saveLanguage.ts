import ckStore from '../../../store'

export const saveLanguage = (data: any, store?: any) => {
  const languageInf = {
    [data.language]: data.packet,
  }
  store ? store.dispatch('initLanguage', languageInf) : ckStore.dispatch('initLanguage', languageInf)
}
export const changeComponent = (componentName: string, data: { language: string; data: any }, store?: any) =>
  store
    ? store.dispatch('changeComponentsTitles', { componentName, ...data })
    : ckStore.dispatch('changeComponentsTitles', { componentName, ...data })
