import Config from 'react-native-config';

export const useUrls = () => {
  return {
    baseUrl: Config.PAROQUIA_SERVICE_URL,
  };
};
