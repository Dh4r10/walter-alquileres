import React from 'react';
import CallFilter from '@/components/Listas/CallFilter';
import InputFiltros from '@/components/Listas/Filtros/InputFiltros';
import { gender } from '@/data/options';

export const filtrosUsuarios = (
  table,
  classNameFiltros,
  setFilteringSearch,
  filteringSearch
) => {
  return (
    <>
      {table.getHeaderGroups().map((headerGroup) => (
        <div
          className={`${classNameFiltros}__columns gap-3 items-center`}
          key={headerGroup.id}
        >
          <CallFilter
            headerGroup={headerGroup}
            num={2}
            title="TIPO USUARIO:"
            options={gender}
          />
          <CallFilter
            headerGroup={headerGroup}
            num={4}
            title="ULT. INGRESO:"
            options={gender}
          />
        </div>
      ))}
      <div className={`${classNameFiltros}__general gap-3 items-center`}>
        <InputFiltros
          filteringSearch={filteringSearch}
          setFilteringSearch={setFilteringSearch}
        />
      </div>
    </>
  );
};
