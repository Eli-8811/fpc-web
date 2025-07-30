import type { LoginPayload } from '@model/LoginPayload';
import type { LoginResponseTech } from '@model/LoginResponse';
import type { CheckSessionResponse } from '@model/CheckSessionResponse';

export const loginFpcApiMock = async (payload: LoginPayload): Promise<LoginResponseTech> => {
  try {
    console.log('Payload recibido:', payload);
    const mockResponse: LoginResponseTech = {
      estatus: 'OK',
      mensaje: 'Operación realizada correctamente',
      mensajeCore: 'Operación realizada correctamente',
      codigo: 'FPCAPI-REQ000',
      resultado: null,
      token: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJ1c2VySWRlbnRpdHkiOnsibm9tYnJlIjoiRlBDIFN1cHBvcnQgVXNlciIsInVzZXJuYW1lIjoiZHNmcGNhZG1pbiIsInNpbmdsZVNlc3Npb24iOnRydWUsImxvZ29uTGFzdERhdGUiOjE3NTM4OTA4MDMzMzgsImdydXBvcyI6W3sibm9tYnJlIjoiSW5mb0Rpci1CSUZQQy1NWC1SX0gtVXNlciJ9LHsibm9tYnJlIjoiSW5mb0Rpci1CSUZQQy1NWC1GcmF1ZC1TdXBlcnZpc29yIn0seyJub21icmUiOiJJbmZvRGlyLUJJRlBDLU1YLUZyYXVkLVVzZXIifSx7Im5vbWJyZSI6IkluZm9EaXItQklGUEMtTVgtRlBDX0lULVVzZXIifSx7Im5vbWJyZSI6IkluZm9EaXItQklGUEMtTVgtUmVwb3J0cyJ9XX0sImV4cCI6MTc1Mzg5MzQ2OH0.jvBaqG8sMOfYboOHe2ylWQshpVO3uHDY_D9SgK7c8ZdUkS8Wp0SalVVfD5JzROnmoc6120RgP2H_TwznlX95tofMXtvRQyMiGBDLfwIirn92EYP89W54DEaX7uvZ7Cx_E3-IeXx558ed3s2BCNO4aW_Kgbvt8qCby3IKnFA-t9_GkGj4HerxmZ9Q5QPrfaF-iXqcX1qFmj9Sv7eRs5xSrlh33rZxyfcJcut1GFCcqQzV9tadsc3YLWVAW5WFfQpqbm-4DJyUWEnDzk9lZO4yvIc25VWxki0bQfCg2JkVNsXCen08yTrp9mTx8wZ9bgVDn0VvOF7QSKOhY9d1CimzDw',
    };
    return mockResponse;
  } catch (error) {
    console.error('Error en loginTechHub:', error);
    throw error;
  }
};

export const checkFpcApiMock = async (username: string): Promise<CheckSessionResponse> => {
  try {
    console.log('Verificando sesión para:', username);
    const mockResponse: CheckSessionResponse = {
      estatus: 'OK',
      mensaje: 'Operación realizada correctamente',
      mensajeCore: 'Operación realizada correctamente',
      codigo: 'FPCAPI-REQ000',
      resultado: true,
    };
    return mockResponse;
  } catch (error) {
    console.error('Error en checkSession:', error);
    throw error;
  }
};

