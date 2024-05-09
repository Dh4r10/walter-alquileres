import Listas from '@/components/Listas';
import MenuLateral from '@/components/MenuLateral';
import React from 'react';

const ListaInquilinos = () => {
  return (
    <MenuLateral>
      <div className="h-full">
        <Listas />
      </div>
    </MenuLateral>
  );
};

export default ListaInquilinos;
