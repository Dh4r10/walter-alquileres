import React, { useState, useContext, useEffect } from 'react';

import Tabla from './Tabla';

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
// import AuthContext from "@/contexts/AuthContext";
// import { getAxios } from "@/functions/methods";
import data_mock from './MOCK_DATA.json';

import './Listas.scss';

const ListaUsuarios = (props) => {
  // let { authTokens } = useContext(AuthContext);

  const { api, columnsValue, classNameTable, filtrosLista, classNameFiltros } =
    props;

  const [reload, setReload] = useState(true);
  // const [dataApi, setDataApi] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const headers = {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer " + String(authTokens?.access),
  // };

  // useEffect(() => {
  //     getAxios(api, headers, setDataApi, setLoading, setError);
  // }, [reload]);

  const data = data_mock;

  const columns = columnsValue(reload, setReload);

  const [sorting, setSorting] = useState([]);
  const [filteringSearch, setFilteringSearch] = useState('');
  const [filteringTipo, setFilteringTipo] = useState([
    {
      id: 'tipo',
      value: '', // Valor inicial del filtro de la columna "tipo"
    },
  ]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filteringSearch,
      columnFilters: filteringTipo,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setFilteringTipo,
    onGlobalFilterChange: setFilteringSearch,
  });

  const filtros = filtrosLista(
    setFilteringTipo,
    setFilteringSearch,
    filteringSearch
  );

  const numItemsForPage = table.getRowModel().rows.length;
  const totalItems = data.length;

  return (
    <>
      <div className={`${classNameFiltros} border-[1px] bg-white`}>
        {filtros}
      </div>
      <div className="listas gap-2">
        <div className="border-[1px] max-h-[71vh] min-h-[400px] overflow-y-auto bg-white">
          <Tabla
            classNameTable={classNameTable}
            table={table}
            numItemsForPage={numItemsForPage}
            totalItems={totalItems}
          />
        </div>
        <div>PAGINACION</div>
      </div>
    </>
  );
};

export default ListaUsuarios;
