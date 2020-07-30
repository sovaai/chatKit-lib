import { store } from '../store'

export const resizeListener = () => {
  const mobileEnabled = store.get().managment.getIn(['common', 'mobileEnbled'])
  mobileEnabled &&
    window.addEventListener('resize', () => {
      if (document.documentElement.clientWidth <= 798) console.log('mobile')
    })
}
