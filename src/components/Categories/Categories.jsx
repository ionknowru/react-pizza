import React from 'react'
import { useState } from 'react';

function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li onClick={() => onSelectItem(null)} 
                    className={activeItem === null ? 'active' : ''}
                >
                    Все
                </li>

                {items && items.map((item, index) => (
                    <li onClick={() => onSelectItem(index)} 
                        className={activeItem === index ? 'active' : ''}
                        key={`${item}_${index}`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;