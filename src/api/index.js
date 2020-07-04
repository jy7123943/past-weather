import axios from 'axios';

const KAKAO_BASE_URL = 'https://dapi.kakao.com';
const headers = {
  'Authorization': `KakaoAK ${process.env.KAKAO_API_KEY}`
};

export const getAddressByGeolocation = async (latitude, longitude) => {
  try {
    const data = await axios.get(`${KAKAO_BASE_URL}/v2/local/geo/coord2regioncode.json`, {
      headers,
      params: {
        x: longitude,
        y: latitude
      }
    });
    console.log('getAddressByGeolocation -> data', data);
  } catch (error) {
    console.dir(error);
  }
};
