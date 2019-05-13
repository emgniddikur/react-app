import React from 'react';

export const ItemList = ({items}) => {
  return (
    <ul>
      {
        items.map(item => {
          return <li key={item.id}>{item.title}</li>;
        })
      }
    </ul>
  );
};
