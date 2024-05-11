import React, { useMemo } from 'react';

export const columnsValue = (reload, setReload) => {
  const values = useMemo(
    () => [
      {
        accessorKey: 'dni',
        header: 'DNI',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'first_name',
        header: 'USUARIO',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'tipo_usuario',
        header: () => 'TIPO USUARIO',
      },
      {
        accessorKey: 'correo',
        header: 'CORREO',
        cell: (info) => info.getValue(),
      },
      {
        accessorFn: (row) => `${row.fecha_ult_ingreso} ${row.hora_ult_ingreso}`,
        id: 'ult_ingreso',
        header: 'ULTIMO INGRESO',
        cell: (info) => info.getValue(),
        meta: {
          filterVariant: 'dateTime',
        },
      },
    ],
    []
  );

  return values;
};
