import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSavedChurches = () => {
  const [savedChurches, setSavedChurches] = useState<string[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('saved-churches').then(list => {
      if (!!list) setSavedChurches(JSON.parse(list));
    });
  }, []);

  const saveChurch = (churchId: string) => {
    const newList = [...savedChurches, churchId];
    AsyncStorage.setItem('saved-churches', JSON.stringify(newList));
    setSavedChurches(newList);
  };

  const unsaveChurch = (churchId: string) => {
    const newList = [
      ...savedChurches.filter((church: string) => church !== churchId),
    ];
    AsyncStorage.setItem('saved-churches', JSON.stringify(newList));
    setSavedChurches(newList);
  };

  const isChurchSaved = (churchId: string) => {
    return savedChurches.some((church: string) => church === churchId);
  };

  const updateChurch = (churchId: string) => {
    if (!isChurchSaved(churchId)) {
      saveChurch(churchId);
      return;
    }

    unsaveChurch(churchId);
  };

  return {
    savedChurches,
    saveChurch,
    unsaveChurch,
    updateChurch,
    isChurchSaved,
  };
};
