import store from 'store'

export const getTheme = () => {
  const theme = store.get('theme')
  if (!theme) {
    store.set('theme', {
      dark: '#000000',
      light: '#ffffff'
    })
  }
  return store.get('theme')
}

export const setTheme = (theme) => {
  store.set('theme', theme)
}