import '@assets/scss/login.scss';
import React, { useEffect, useState } from 'react';

const semana = ["Lun,", "Mar,", "Mie,", "Jue,", "Vie,", "Sab,", "Dom,"];
const mes = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"];

const Clock: React.FC = () => {
  const [dia, setDia] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => {
    const calcularReloj = () => {
      const fecha = new Date();
      const diaTmp = `${semana[fecha.getDay() - 1]} ${fecha.getDate()} ${mes[fecha.getMonth()]}`;
      setDia(diaTmp);
      setHora(fecha.toLocaleTimeString());
    };

    const intervalId = setInterval(calcularReloj, 1000);
    return () => clearInterval(intervalId);

  }, []);

  return (
    <div className="clock">
      <h3>{dia}</h3>
      <h2>{hora}</h2>
    </div>
  );
};

export default Clock;