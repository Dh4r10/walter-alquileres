import React, { useMemo } from 'react'

export const columnsValue = (reload, setReload) => {
  const values = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: info => info.getValue()
      },
      {
        accessorFn: row => row.last_name,
        id: "last_name",
        cell: info => info.getValue(),
        header: "LAST"
      },
      {
        accessorFn: row => `${row.first_name} ${row.last_name}`,
        id: "fullName",
        header: "NAME",
        cell: info => info.getValue()
      },
      {
        accessorKey: "email",
        header: () => "EMAIL",
        // meta: {
        //   filterVariant: "select"
        // }
      },
      {
        accessorKey: "gender",
        header: () => <span>GENDER</span>,
        // meta: {
        //   filterVariant: "select"
        // }
      },
      {
        accessorKey: "ip_address",
        header: "IP ADDRESS",
      }
    ],
    []
  );

  return values;
};
