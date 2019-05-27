import React from 'react';

export const ItemList = ({items, showRequest}) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    showRequest(id);
  };

  return (
    <ul>
      {
        items.map(item => {
          return (
            <li key={item.id} onClick={(e) => handleClick(e, item.id)}>
              {item.title}
            </li>
          );
        })
      }
    </ul>
  );
};
