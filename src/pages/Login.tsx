import '@assets/scss/login.scss';
import React, { useEffect } from "react";
import { AuthService } from "@services/AuthService";
import type { LoginPayload } from "@model/LoginPayload";
import { ThemeProvider } from '@mui/material/styles';
import { themeLogin } from '@themes/themes';
import { CssBaseline, Grid } from '@mui/material';

const Login: React.FC = () => {

  useEffect(() => {

    const doLoginDummy = async () => {
      const payload: LoginPayload = {
        username: 'emilys',
        password: 'emilyspass',
      };
      try {
        const response = await AuthService.loginDummy(payload);
        console.log("Respuesta dummy:", response);
      } catch (error) {
        console.error("Error al iniciar sesión dummy:", error);
      }
    };

    doLoginDummy();

  }, []);


  return (
    <>

      <ThemeProvider theme={themeLogin}>

        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            size={{ xs: 0, sm: 9 }}
            sx={{ backgroundColor: 'black', display: { xs: 'none', sm: 'block' } }}
          >
            {/* Contenido visible solo en sm o superior */}
            <p>&nbsp;&nbsp;&nbsp;</p>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 3 }}
            sx={{ backgroundColor: 'red' }}
          >
            {/* Contenido visible en todos los tamaños */}
            <p>&nbsp;&nbsp;&nbsp;</p>
          </Grid>

        </Grid>

        <CssBaseline />

      </ThemeProvider>

    </>
  );

};

export default Login;      