import { atom } from 'jotai';

interface UserLocationType {
  latitude: number;
  longitude: number;
}

export const userLocationAtom = atom<UserLocationType | undefined>(undefined);
