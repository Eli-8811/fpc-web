import axios from 'axios';
import type { LoginPayload } from '@model/LoginPayload';
import type { LoginResponse } from '@model/LoginResponse';

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const baseUrlTechhub = import.meta.env.VITE_API_TECHHUB_URL;

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export const loginDummy = async (payload: LoginPayload): Promise<LoginResponse> => {
  try {
    const { data } = await axiosInstance.post<LoginResponse>(
      `${baseUrl}/fpc-api/auth/login`,
      payload
    );
    return data;
  } catch (error) {
    console.error('Error en loginDummy:', error);
    throw error;
  }
};

export const loginTechHub = async (payload: LoginPayload): Promise<LoginResponse> => {
  try {
    const body = {
      username: payload.username,
      password: payload.password,
      ipCliente: '127.0.0.1',
    };
    const { data } = await axiosInstance.post<LoginResponse>(
      `${baseUrlTechhub}/fpc-api/auth/token`,
      body
    );
    return data;
  } catch (error) {
    console.error('Error en loginTechHub:', error);
    throw error;
  }
};

export const checkSession = async (username: string): Promise<boolean> => {
  try {
    const { data } = await axiosInstance.get<boolean>(
      `${baseUrlTechhub}/fpc-api/logon/checkSession/${username}`
    );
    return data;
  } catch (error) {
    console.error('Error en checkSession:', error);
    throw error;
  }
};
