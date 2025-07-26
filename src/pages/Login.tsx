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
            sx={{
              backgroundColor: 'black',
              display: { xs: 'none', sm: 'block' }
            }}
          >
            <p>&nbsp;&nbsp;&nbsp;</p>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 3 }}
            sx={{ backgroundColor: 'red' }}
          >
            <p>&nbsp;&nbsp;&nbsp;</p>
          </Grid>
        </Grid>

        <CssBaseline />

        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          sx={{
            position: 'absolute',
            top: 0,
            height: '100vh'
          }}
        >
          
          <Grid size={{ xs: 0, sm: 7 }}>
            {/* Aquí va el contenido */}
          </Grid>

          <Grid
            container
            size={{ xs: 12, sm: 5 }}
            rowSpacing={0}
            columnSpacing={0}
          >
            {/* Aquí va el contenido */}
          </Grid>

        </Grid>

      </ThemeProvider>

    </>
  );

};

export default Login;      