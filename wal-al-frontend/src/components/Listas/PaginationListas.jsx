import React, { useState } from 'react';
import { Pagination } from 'antd';
const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};
const Paginationlistas = (props) => {
  const { table, totalItems, pageSizeOptions } = props;

  const handleChangePage = (page, pageSize) => {
    const newPage = page ? Number(page) - 1 : 0;

    table.setPageIndex(newPage);
    table.setPageSize(Number(pageSize));
    console.log(pageSize);
    console.log(page);
  };

  return (
    <Pagination
      total={totalItems}
      pageSizeOptions={pageSizeOptions}
      itemRender={itemRender}
      showLessItems={true}
      responsive={false}
      className="p-1"
      onChange={handleChangePage}
    />
  );
};
export default Paginationlistas;
