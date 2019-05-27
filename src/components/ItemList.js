import React from 'react';

export const ItemList = ({items, showRequest}) => {
  const handleClick = id => {
    showRequest(id);
  };

  return (
    <ul>
      {
        items.map(item => {
          return (
            <li key={item.id} onClick={() => handleClick(item.id)}>
              {item.title}
            </li>
          );
        })
      }
    </ul>
  );
};
