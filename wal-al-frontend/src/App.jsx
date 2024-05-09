import { useState } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import IniciarSesion from './modules/seguridad/pages/IniciarSesion';
import ReestablecerContrasenia from './modules/seguridad/pages/ReestablecerContrasenia';
import ActualizarContrasenia from './modules/seguridad/pages/ActualizarContrasenia';
import ListaInquilinos from './modules/arrendamiento/pages/ListaInquilinos';

import { arrendamientoRutas, seguridadRutas } from './utils/paths';
import InfoInquilinos from './modules/arrendamiento/pages/InfoInquilinos';
import Viviendas from './modules/arrendamiento/pages/Viviendas';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-slate-100">
      <Routes>
        <Route element={<IniciarSesion />} path={seguridadRutas[0].path} />
        <Route
          element={<ReestablecerContrasenia />}
          path={seguridadRutas[0].path + seguridadRutas[1].path}
        />
        <Route
          element={<ActualizarContrasenia />}
          path={seguridadRutas[0].path + seguridadRutas[2].path}
        />
        <Route
          path="/"
          element={<Navigate to={arrendamientoRutas[2].path} />}
        />
        <Route
          element={<ListaInquilinos />}
          path={arrendamientoRutas[0].path}
        />
        <Route
          element={<InfoInquilinos />}
          path={arrendamientoRutas[0].path + arrendamientoRutas[1].path}
        />
        <Route element={<Viviendas />} path={arrendamientoRutas[2].path} />
      </Routes>
    </div>
  );
}

export default App;
