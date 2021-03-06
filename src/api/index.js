import axios from 'axios';

const KAKAO_BASE_URL = 'https://dapi.kakao.com';
const headers = {
  'Authorization': `KakaoAK ${process.env.KAKAO_API_KEY}`
};

export const getAddressByGeolocation = async (latitude, longitude) => {
  try {
    const { data } = await axios.get(`${KAKAO_BASE_URL}/v2/local/geo/coord2address.json`, {
      headers,
      params: {
        x: longitude,
        y: latitude
      }
    });

    return data;
  } catch (error) {
    throw error;
  }
};

const WEATHER_BASE_URL = 'https://api.openweathermap.org';

export const getWeatherData = async (lat, lon, exclude = 'minutely') => {
  try {
    const { data } = await axios.get(`${WEATHER_BASE_URL}/data/2.5/onecall`, {
      params: {
        units: 'metric',
        lang: 'kr',
        lat,
        lon,
        exclude,
        appid: process.env.WEATHER_API_KEY
      }
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export const getHistoricalWeatherData = async (lat, lon, dt) => {
  try {
    const { data } = await axios.get(`${WEATHER_BASE_URL}/data/2.5/onecall/timemachine`, {
      params: {
        units: 'metric',
        lang: 'kr',
        lat,
        lon,
        dt,
        appid: process.env.WEATHER_API_KEY
      }
    });

    return data;
  } catch (error) {
    throw error;
  }
};
