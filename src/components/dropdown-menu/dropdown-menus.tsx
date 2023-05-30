import React from "react";

import './styles.scss';


export interface MenuItem {
    name: string;
    key: number;
}

interface DropdownMenuProps {
    menuItems: MenuItem[];
    onMenuItemClick(key: number): void;
}

const DropdownMenu = (Props: DropdownMenuProps) => {
    const {
        menuItems,
        onMenuItemClick
    } = Props;

    const renderOpenedMenu = () => {
        return menuItems.map(item => {
            return <option key={`${item.name}-${item.key}`} value={item.key}>{item.name}</option>
        })    
    }

    const selectClick = (event: React.FormEvent<HTMLSelectElement>) => {
        onMenuItemClick(parseInt(event.currentTarget.value));
    }

    return(
        <select className='dropdown-menu' onChange={event => selectClick(event)}>
            {renderOpenedMenu()}
        </select> 
    )
}

export default DropdownMenu;
