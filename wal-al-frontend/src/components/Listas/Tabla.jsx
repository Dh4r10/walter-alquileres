import React from 'react';
import { flexRender } from '@tanstack/react-table'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong, faDownLong } from "@fortawesome/free-solid-svg-icons";

const Tabla = (props) => {

  const { numItemsForPage, totalItems, table, classNameTable } = props;

  return (
    <>
      <div className="grid">
        <div className="flex items-center bg-blue-500 h-10 border-b-2  border-b-white-cabecera">
          <h1 className="mx-5 text-white font-inter text-sm">
            MOSTRANDO {numItemsForPage} DE {totalItems}° REGISTROS
          </h1>
        </div>
        <table className={`${classNameTable} max-w-full`}>
          <thead className=" bg-blue-500 sticky top-0">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="w-full">
                {headerGroup.headers.map((header) => (
                  <th
                    className="text-center text-sm px-5 font-inter text-slate-200 h-10 cursor-pointer"
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}

                        {
                          {
                            asc: <FontAwesomeIcon icon={faUpLong} />,
                            desc: <FontAwesomeIcon icon={faDownLong} />,
                          }[header.column.getIsSorted() ?? null]
                        }
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="max-w-lista-maxWidth py-4 text-justify px-5 font-inter font-light text-listas-size"
                    key={cell.id}
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
// <Table responsive>
//   <thead>
//     <tr>
//       <th>#</th>
//       {Array.from({ length: 12 }).map((_, index) => (
//         <th key={index}>Table heading</th>
//       ))}
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       {Array.from({ length: 12 }).map((_, index) => (
//         <td key={index}>Table cell {index}</td>
//       ))}
//     </tr>
//     <tr>
//       <td>2</td>
//       {Array.from({ length: 12 }).map((_, index) => (
//         <td key={index}>Table cell {index}</td>
//       ))}
//     </tr>
//     <tr>
//       <td>3</td>
//       {Array.from({ length: 12 }).map((_, index) => (
//         <td key={index}>Table cell {index}</td>
//       ))}
//     </tr>
//   </tbody>
// </Table>



export default Tabla;
