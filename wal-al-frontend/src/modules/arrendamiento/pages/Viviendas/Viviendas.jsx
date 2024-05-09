import React from 'react'
import MenuLateral from '@/components/MenuLateral'
import Listas from '@/components/Listas'

import './Viviendas.scss'

const Viviendas = () => {
    return (
        <MenuLateral>
            <div className="viviendas h-full gap-4">
                <Listas />
            </div>
        </MenuLateral>
    )
}

export default Viviendas