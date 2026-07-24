import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { id } from './id'
import { en } from './en'
import type { Dictionary } from './types'

export type Lang = 'id' | 'en'

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: Dictionary
}

// eslint-disable-next-line react-refresh/only-export-components
export const LangContext = createContext<LangContextValue | null>(null)

interface LangProviderProps {
  children: ReactNode
}

export function LangProvider({ children }: LangProviderProps) {
  const [lang, setLang] = useState<Lang>('id')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'id' ? 'en' : 'id')),
      t: lang === 'id' ? id : en,
    }),
    [lang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
