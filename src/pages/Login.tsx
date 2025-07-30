import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { themeLogin } from '@themes/themes';
import CardLogin from '@components/CardLogin';
import Clock from "@components/Clock";
const Login: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={themeLogin}>
        <div className="container-fluid position-relative">
          <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="col-sm-9 d-none d-sm-block login-bg"></div>
            <div className="col-sm-3 col-12 login-seal"></div>
          </div>
          <div className="row align-items-start justify-content-end position-absolute top-0 w-100" style={{ height: '100vh' }}>
            <div className="col-sm-7 d-none d-sm-block"></div>
            <div className="col-sm-5 col-12">
              <CardLogin />
            </div>
            <div className="container">
              <div className="row justify-content-center align-items-end">
                <Clock/>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
export default Login;      