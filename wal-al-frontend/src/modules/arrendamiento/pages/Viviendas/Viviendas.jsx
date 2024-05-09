import React from 'react';
import MenuLateral from '@/components/MenuLateral';
import Listas from '@/components/Listas';
import { columnsValue } from './columnsViviendas';
import { filtrosViviendas } from './FiltrosViviendas/filtrosViviendas.jsx';

import './Viviendas.scss';
import './FiltrosViviendas/FiltrosViviendas.scss';

const Viviendas = () => {
  return (
    <MenuLateral>
      <div className="viviendas h-full gap-4">
        <Listas
          columnsValue={columnsValue}
          classNameTable="viviendas-table"
          filtrosLista={filtrosViviendas}
          classNameFiltros="viviendas-filtros"
        />
      </div>
    </MenuLateral>
  );
};

export default Viviendas;
