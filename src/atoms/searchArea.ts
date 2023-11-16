import { atom } from 'jotai';

import type { Church } from '../interfaces/church';

export const isSearchOpenAtom = atom<boolean>(false);
export const focusedChurchAtom = atom<Church | undefined>(undefined);
