import React from 'react';
import { flexRender } from '@tanstack/react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpLong,
  faDownLong,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import IndeterminateCheckbox from './IndeterminateCheckbox';
const Tabla = (props) => {
  const { numItemsForPage, totalItems, table, classNameTable, rowSelection } =
    props;

  const rowsSelect = Object.keys(rowSelection);

  return (
    <div className="grid ">
      <div className="flex items-center bg-blue-500 h-10 border-b-2">
        <h1 className="mx-5 text-white font-inter text-sm">
          MOSTRANDO {numItemsForPage} DE {totalItems}° REGISTROS
        </h1>
      </div>
      <table className={`${classNameTable} max-w-full`}>
        <thead className=" bg-blue-500 sticky top-0">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="w-full">
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="text-center text-sm px-5 font-inter text-slate-200 h-10 cursor-pointer"
                  >
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}{' '}
                          {{
                            asc: <FontAwesomeIcon icon={faUpLong} />,
                            desc: <FontAwesomeIcon icon={faDownLong} />,
                          }[header.column.getIsSorted()] ?? null}
                        </div>
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  className="py-4 text-justify px-5 font-inter font-light text-sm"
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

        <tfoot className="h-14">
          <tr>
            <td className="p-1">
              <IndeterminateCheckbox
                {...{
                  checked: table.getIsAllPageRowsSelected(),
                  indeterminate: table.getIsSomePageRowsSelected(),
                  onChange: table.getToggleAllPageRowsSelectedHandler(),
                }}
              />
            </td>
            <td colSpan={20}>
              <button
                className="border p-2 text-sm text-gray-600 hover:bg-red-400 hover:border-white hover:text-white"
                onClick={() => {
                  for (let key in rowsSelect) {
                    console.log(
                      table.getRowModel().rows[rowsSelect[key]].original.dni
                    );
                  }
                }}
              >
                {<FontAwesomeIcon icon={faTrashCan} />} Eliminar{' '}
                {rowsSelect.length} elemento(s)
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Tabla;
