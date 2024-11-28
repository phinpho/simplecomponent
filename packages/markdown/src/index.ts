import { lazy } from 'react'

export type {
  AllowElement,
  Components,
  ExtraProps,
  Options,
  UrlTransform,
} from 'react-markdown'

export type { MarkdownProps } from './Markdown'
export const Markdown = lazy(() => import('./Markdown'))
