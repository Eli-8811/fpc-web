import '@assets/scss/login.scss';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Center from '@components/Center';
import LockIcon from '@mui/icons-material/Lock';
import HSBC_logo from '@assets/img/logo_hsbc.png';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CustomSnackbar from '@components/CustomSnackbar';

import { useForm } from 'react-hook-form';
import { useAppDispatch } from "@store/Hooks";
import { useNavigate } from 'react-router-dom';
import { loginUser } from "@store/login/Thunks";
import { loginSchema } from '@utils/Validators';
import { PaddingTop } from '@components/PaddingTop';
import { AuthService } from '@services/AuthService';
import { yupResolver } from '@hookform/resolvers/yup';
import type { LoginPayload } from '@model/LoginPayload';
import { PaddingBottom } from '@components/PaddingBottom';
import { Button, CardMedia, InputAdornment, TextField, Typography } from '@mui/material';

import type { SnackbarSeverity as SnackbarSeverityType } from '@model/SnackbarSeverity';
import { SnackbarSeverity } from '@model/SnackbarSeverity';


const CardLogin: React.FC = () => {

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

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });


  const onSubmit = async ({ user, sensible }: { user: string; sensible: string }) => {
    const payload: LoginPayload = {
      username: user,
      password: sensible,
      expiresInMins: 43200,
    };

    try {
      const response = await AuthService.loginDummy(payload);
      console.log('Respuesta dummy:', response);

      if (response.accessToken !== undefined) {
        setSnackbar({
          open: true,
          message: 'Acceso concedido...',
          severity: SnackbarSeverity.Success,
          autoHideDuration: 1000,
        });

        await dispatch(loginUser(payload)).unwrap();

        setTimeout(() => {
          navigate('/home');
        }, 3000);
      } else {
        setSnackbar({
          open: true,
          message: 'Usuario y/o contraseña incorrectos',
          severity: SnackbarSeverity.Warning,
          autoHideDuration: 3000,
        });
      }
    } catch (error: any) {
      const message = error?.response?.data?.message || 'Error inesperado al iniciar sesión';
      setSnackbar({
        open: true,
        message,
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