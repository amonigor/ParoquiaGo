import { atom } from 'jotai';

interface UserLocationType {
  latitude: number;
  longitude: number;
}

interface MapCoordinates {
  latitude: number;
  longitude: number;
}

export const userLocationAtom = atom<UserLocationType | undefined>(undefined);
export const recenterMapAtom = atom({
  fn: (_hasOffSet?: boolean, _coordinates?: MapCoordinates) => {},
});
