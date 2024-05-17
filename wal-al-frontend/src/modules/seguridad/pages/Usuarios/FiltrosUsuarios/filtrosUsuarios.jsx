import React from 'react';
import CallFilter from '@/components/Listas/CallFilter';
import InputFiltros from '@/components/Listas/Filtros/InputFiltros';
import ButtonAnt from '@/components/ButtonAnt';
import { gender } from '@/data/options';
import { Link } from 'react-router-dom';
import { seguridadRutas } from '@/utils/paths';

export const filtrosUsuarios = (
  table,
  classNameFiltros,
  setFilteringSearch,
  filteringSearch
) => {
  return (
    <div className={`${classNameFiltros}__caja gap-3`}>
      <div className={`${classNameFiltros}__caja-filtros gap-3`}>
        {table.getHeaderGroups().map((headerGroup) => (
          <div
            className={`${classNameFiltros}__caja-filtros__selects gap-3 items-center`}
            key={headerGroup.id}
          >
            <CallFilter
              headerGroup={headerGroup}
              num={3}
              title="TIPO USUARIO:"
              options={gender}
            />
            <CallFilter
              headerGroup={headerGroup}
              num={5}
              title="ULT. INGRESO:"
              options={gender}
            />
          </div>
        ))}
        <div className={`${classNameFiltros}__caja-filtros__search gap-3 items-center`}>
          <InputFiltros
            filteringSearch={filteringSearch}
            setFilteringSearch={setFilteringSearch}
          />
        </div>
      </div>
      <div className={`${classNameFiltros}__caja-boton flex justify-end items-center`}>
        <Link to={seguridadRutas[4].unionPath}>
          <ButtonAnt />
        </Link>
      </div>
    </div>
  );
};
