import { lazy } from 'react';

export type { MarkdownProps } from './Markdown';
export const Markdown = lazy(() => import('./Markdown'));

