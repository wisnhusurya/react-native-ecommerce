import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default async () => {
  await axios.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem('device-token')
      const deviceId = await AsyncStorage.getItem('device-id')
      
      if (token) {
        config.headers = {token};
        config.headers = {deviceId};
      }
      // console.log('INTERCEPTOR', token)
      return config;
    },
    (error) => Promise.reject(error),
  );
};
