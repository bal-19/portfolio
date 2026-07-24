import { useContext } from 'react'
import { LangContext } from '@/i18n/LangContext'

export function useLang() {
  const context = useContext(LangContext)
  if (!context) {
    throw new Error('useLang must be used within a LangProvider')
  }
  return context
}
