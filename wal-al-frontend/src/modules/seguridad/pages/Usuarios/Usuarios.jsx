import React from 'react';
import MenuLateral from '@/components/MenuLateral';
import Listas from '@/components/Listas';
import { columnsValue } from './columnsUsuarios';
import { filtrosUsuarios } from './FiltrosUsuarios/filtrosUsuarios';

import './Usuarios.scss';
import './FiltrosUsuarios/FiltrosUsuarios.scss';

const Usuarios = () => {
  return (
    <MenuLateral>
      <div className="usuarios h-full gap-2 min-w-[600px]">
        <Listas
          columnsValue={columnsValue}
          classNameTable="usuarios-table"
          filtrosLista={filtrosUsuarios}
          classNameFiltros="usuarios-filtros"
        />
      </div>
    </MenuLateral>
  );
};

export default Usuarios;
