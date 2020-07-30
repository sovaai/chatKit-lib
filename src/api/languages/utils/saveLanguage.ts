import { store } from '../../../store'

export const saveLanguage = (data: any) => {
  const languageInf = {
    [data.language]: data.packet,
  }
  store.dispatch('initLanguage', languageInf)
}
export const changeComponent = (componentName: string, data: { language: string; data: any }) =>
  store.dispatch('changeComponentsTitles', { componentName, ...data })
