import React, { useState, useContext, useEffect } from 'react';

import Tabla from './Tabla';

import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
// import AuthContext from "@/contexts/AuthContext";
// import { getAxios } from "@/functions/methods";
import data_mock from './MOCK_DATA.json';
import data_mock2 from './MOCK_DATA2.json';

import './Listas.scss';
import PaginationListas from './PaginationListas';

const Listas = (props) => {
  // let { authTokens } = useContext(AuthContext);

  const { api, columnsValue, classNameTable, filtrosLista, classNameFiltros } =
    props;

  const [reload, setReload] = useState(true);
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [filteringSearch, setFilteringSearch] = useState('');
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

  const data = data_mock2;

  const columns = columnsValue(reload, setReload);

  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    state: {
      sorting,
      globalFilter: filteringSearch,
      columnFilters,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilteringSearch,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  const filtros = filtrosLista(
    table,
    classNameFiltros,
    setFilteringSearch,
    filteringSearch
  );

  const numItemsForPage = table.getRowModel().rows.length;
  const totalItems = data.length;

  const pageSizeOptions = [10, 20, 50, 100];

  return (
    <>
      <div
        className={`${classNameFiltros} border-[1px] bg-white px-3 gap-2 py-2`}
      >
        {filtros}
      </div>
      <div className="listas">
        <div className="border-[1px] overflow-y-auto bg-white">
          <Tabla
            classNameTable={classNameTable}
            table={table}
            numItemsForPage={numItemsForPage}
            totalItems={totalItems}
            rowSelection={rowSelection}
          />
        </div>
      </div>
      <div className="flex pb-2 items-start justify-end">
        <PaginationListas
          table={table}
          totalItems={totalItems}
          pageSizeOptions={pageSizeOptions}
        />
      </div>
    </>
  );
};

export default Listas;
