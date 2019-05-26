import React from 'react';
import {Link} from "react-router-dom";

export const ItemList = ({items}) => {
  return (
    <ul>
      {
        items.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/items/${item.id}`}>
                {item.title}
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
};
