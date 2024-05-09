import React, { useState, useContext, useEffect } from "react";

import Tabla from "./Tabla";

import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from "@tanstack/react-table";
// import AuthContext from "@/contexts/AuthContext";
// import { getAxios } from "@/functions/methods";
import data_mock from './MOCK_DATA.json'

const ListaUsuarios = (props) => {
    // let { authTokens } = useContext(AuthContext);

    const { api, columnsValue, classNameTable, classNameFiltros, filtrosLista } =
        props;

    // const [reload, setReload] = useState(true);
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

    const columns = [
        { header: "ID", accessorKey: "id" },
        { header: "FIRST NAME", accessorKey: "first_name" },
        { header: "LAST NAME", accessorKey: "last_name" },
        { header: "EMAIL", accessorKey: "email" },
        { header: "GENDER", accessorKey: "gender" },
        { header: "IP V4", accessorKey: "ip_address" },
    ];

    const [sorting, setSorting] = useState([]);
    const [filteringSearch, setFilteringSearch] = useState("");
    const [filteringTipo, setFilteringTipo] = useState([
        {
            id: "tipo",
            value: "", // Valor inicial del filtro de la columna "tipo"
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

    const numItemsForPage = table.getRowModel().rows.length;
    const totalItems = data.length;

    return (
        <>
            <div className="border-[1px] bg-gray-300 border-gray-400">FILTROS</div>
            <div className="max-h-[63.5vh] overflow-y-auto border-[1px] border-blue-500">
                <Tabla
                    classNameTable={classNameTable}
                    table={table}
                    numItemsForPage={numItemsForPage}
                    totalItems={totalItems}
                />
            </div>
            <div className="bg-red-400">PAGINACION</div>
        </>
    );
};

export default ListaUsuarios;