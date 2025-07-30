import '@assets/scss/login.scss';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Center from '@components/Center';
import LockIcon from '@mui/icons-material/Lock';
import HSBC_logo from '@assets/img/logo_hsbc.png';
import CustomSnackbar from '@components/CustomSnackbar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { useForm } from 'react-hook-form';
import { useAppDispatch } from "@hooks/Redux";
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '@utils/Validators';
import { PaddingTop } from '@components/PaddingTop';
import { yupResolver } from '@hookform/resolvers/yup';
import type { LoginPayload } from '@model/LoginPayload';
import { useLoading } from '@providers/LoadingProvider';
import { PaddingBottom } from '@components/PaddingBottom';
import { SnackbarSeverity } from '@model/enum/SnackbarSeverity';
import { Button, CardMedia, InputAdornment, TextField, Typography } from '@mui/material';
import type { SnackbarSeverity as SnackbarSeverityType } from '@model/enum/SnackbarSeverity';
import { thunkLogin } from '@store/login/loginThunks';
import { thunkCheckSession } from '@store/session/sessionThunks';

const CardLogin: React.FC = () => {

  const _version = '3.14.0';
  const _url = 'https://fpc.techhub.mx:9443/fpc';
  const _urlApi = 'https://fpc.techhub.mx:9543/fpc-api';
  const _apiTimeout = 130000;
  const _contextPath = '/fpc';

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showLoading, hideLoading } = useLoading();

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: SnackbarSeverityType;
    autoHideDuration: number;
  }>({
    open: false,
    message: '',
    severity: SnackbarSeverity.Success,
    autoHideDuration: 0,
  });

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      user: 'dsfpcadmin',
      sensible: 'b1Nar.4',
    }
  });

  const onSubmit = async ({ user, sensible }: { user: string; sensible: string }) => {

    const payload: LoginPayload = {
      username: user,
      password: sensible,
    };

    try {

      showLoading();

      const responseCheck = await dispatch(thunkCheckSession(payload.username)).unwrap();
      console.log(responseCheck.resultado);

      if (responseCheck.resultado === false) {

      } else {

      }

      const responseLogin = await dispatch(thunkLogin(payload)).unwrap();
      console.log(responseLogin);
      
      if (responseLogin.token) {
        
        setSnackbar({
          open: true,
          message: 'Acceso concedido...',
          severity: SnackbarSeverity.Success,
          autoHideDuration: 1000,
        });

        setTimeout(() => {
          hideLoading();
          navigate('/home');
        }, 1000);

      } else {
        setSnackbar({
          open: true,
          message: 'Usuario y/o contraseña incorrectos',
          severity: SnackbarSeverity.Warning,
          autoHideDuration: 3000,
        });
      }

    } catch (error: any) {

      setSnackbar({
        open: true,
        message: error?.message || 'Error inesperado al iniciar sesión',
        severity: SnackbarSeverity.Error,
        autoHideDuration: 3000,
      });

    }
  
  };


  return (
    <>

      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        autoHideDuration={snackbar.autoHideDuration}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      />

      <Box className="responsive-box">

        <Card
          sx={{
            width: {
              xs: '100%',// móviles pequeños
              sm: '100%',// tablets chicas
              md: '70%', // tablets estándar
              lg: '52%', // laptops
              xl: '52%', // pantallas grandes (1920+)
            }
          }}
        >
          <PaddingTop size={1.5} />

          <Box className="caja-central">
            <CardMedia
              component="img"
              image={HSBC_logo}
              title="HSBC"
              className="logo-hsbc"
            />
          </Box>

          <PaddingBottom size={3} />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-login"
            autoComplete="off"
            noValidate
          >

            <TextField
              label="Usuario"
              {...register('user')}
              error={!!errors.user}
              helperText={errors.user?.message}
              variant="outlined"
              placeholder="Máximo 50 caracteres"
              slotProps={{
                htmlInput: { maxLength: 50 },
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountBoxIcon className="custom-icon" />
                    </InputAdornment>
                  ),
                },
              }}
              className="custom-textfield custom-label w-100"
              fullWidth
            />

            <PaddingBottom size={1.5} />

            <TextField
              label="Contraseña"
              type="password"
              {...register('sensible')}
              error={!!errors.sensible}
              helperText={errors.sensible?.message}
              variant="outlined"
              placeholder="Máximo 50 caracteres"
              slotProps={{
                htmlInput: { maxLength: 50 },
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon className="custom-icon" />
                    </InputAdornment>
                  ),
                },
              }}
              className="custom-textfield custom-label w-100"
              fullWidth
            />

            <PaddingBottom size={2} />

            <Button
              className="button-login"
              variant="contained"
              type='submit'
              size="large"
              fullWidth
              disabled={!isValid}
            >
              INGRESAR
            </Button>

          </form>

          <Center>
            <Typography
              variant="caption"
              color="inherit"
              title="anBhdmxv"
              className="bar-text"
            >
              FingerPrint Capture Ver. 4.0.0
            </Typography>
          </Center>

          <PaddingBottom size={0.5} />

        </Card>

      </Box>

    </>

  );
};

export default CardLogin;
