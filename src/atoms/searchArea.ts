import { atom } from 'jotai';

import type { Church } from '../interfaces/church';

export const focusedChurchAtom = atom<Church | undefined>(undefined);
export const activeAreaAtom = atom<
  'search-form' | 'saved-churches' | undefined
>(undefined);
