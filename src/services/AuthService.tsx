import type { LoginPayload } from "@model/LoginPayload";
import type { LoginResponse } from "@model/LoginResponse";

export class AuthService {

  private static baseUrl = import.meta.env.VITE_API_BASE_URL;
  //private static baseUrlTechhub = import.meta.env.VITE_API_TECHHUB_URL;
  
  private static defaultHeaders = {
    'Content-Type': 'application/json; charset=utf-8'
  };

  static async loginDummy(payload: LoginPayload): Promise<LoginResponse> {
    const response = await fetch(`${this.baseUrl}/auth/login`, {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify(payload)
    });
    return response.json();
  }

  /*
  static async loginTechHub(payload: LoginPayload2): Promise<LoginResponse> {
    const response = await fetch(`${this.baseUrlTechhub}/fpc-api/auth/token`, {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify({
        username: payload.username,
        password: payload.password,
        ipCliente: payload.ipCliente ?? "127.0.0.1"
      })
    });
    return response.json();
  }
  */
}