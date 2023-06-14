import api from './api';

export const getHourly = async () => {
  try {
    const { data } = await api.get(`/test-2023?dataType=hourly`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDaily = async () => {
  try {
    const { data } = await api.get(`/test-2023?dataType=daily`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getMonthly = async () => {
  try {
    const { data } = await api.get(`/test-2023?dataType=monthly`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getYearly = async () => {
  try {
    const { data } = await api.get(`/test-2023?dataType=yearly`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

