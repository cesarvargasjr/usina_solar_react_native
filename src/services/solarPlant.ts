import api from './api';

export const getSolarPlant = async (filter: string) => {
  try {
    const { data } = await api.get(`/test-2023?dataType=${filter}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
