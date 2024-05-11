
import React from 'react'
import CallFilter from '@/components/Listas/CallFilter';
import InputFiltros from '@/components/Listas/Filtros/InputFiltros';
import { gender } from '@/data/options';

export const filtrosViviendas = (table, classNameFiltros) => {

  return (
    <>
      {table.getHeaderGroups().map(headerGroup => (
        <div className={`${classNameFiltros}__columns gap-3 items-center`} key={headerGroup.id}>
          <CallFilter headerGroup={headerGroup} num={0} title="ID:" options={gender} />
          <CallFilter headerGroup={headerGroup} num={1} title="LAST:" options={gender} />
          <CallFilter headerGroup={headerGroup} num={2} title="NAME:" options={gender} />
          <CallFilter headerGroup={headerGroup} num={3} title="EMAIL:" options={gender} />
          <CallFilter headerGroup={headerGroup} num={4} title="GENDER:" options={gender} />
        </div>
      ))}
      <div className={`${classNameFiltros}__general gap-3 items-center`}>
        <InputFiltros />
      </div>
    </>
  )
}
