import { ReactNode } from 'react';
export interface ActionsType {
  [key: string]: Function
}

export interface ShortcutProps {
  actions: ActionsType
  children: ReactNode
}
