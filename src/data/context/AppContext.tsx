import { createContext, useEffect } from 'react';
import { useState } from 'react'

type Theme = 'dark' | '' | string
interface AppContextProps {
  theme: Theme
  changeTheme?: () => void
}

const AppContext = createContext<AppContextProps>({
  theme: null
})

export function AppProvider(props) {

  let localStorageTheme = ''
  if (typeof window !== 'undefined') {
    localStorageTheme = localStorage.getItem('theme');
  }
  const [theme, setTheme] = useState<Theme>(localStorageTheme)

  function changeTheme() {
    const novoTema = theme === '' ? 'dark' : ''
    setTheme(novoTema)
    localStorage.setItem('theme', novoTema)
  }

  return (
    <AppContext.Provider value={{
      theme: theme,
      changeTheme
    }}>
      {props.children}
    </AppContext.Provider>
  )
}
export default AppContext