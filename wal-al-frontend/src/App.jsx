import { useState } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import IniciarSesion from './modules/seguridad/pages/IniciarSesion';
import ReestablecerContrasenia from './modules/seguridad/pages/ReestablecerContrasenia';
import ActualizarContrasenia from './modules/seguridad/pages/ActualizarContrasenia';
import ListaInquilinos from './modules/arrendamiento/pages/ListaInquilinos';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-slate-100">
      <Routes>
        <Route element={<IniciarSesion />} path="/login" />
        <Route
          element={<ReestablecerContrasenia />}
          path="/login/restore-password"
        />
        <Route
          element={<ActualizarContrasenia />}
          path="/login/update-password"
        />
        <Route path="/" element={<Navigate to="/lista-inquilinos" />} />
        <Route element={<ListaInquilinos />} path="/lista-inquilinos" />
      </Routes>
    </div>
  );
}

export default App;
