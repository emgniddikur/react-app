import React, {Fragment} from 'react';
import no_image from '../images/no_image.jpeg'
import "../css/Item.css";

export const ItemImage = ({imageSrc}) => {
  return (
    <Fragment>
      {
        imageSrc ? (
          <img src={imageSrc} className="image"/>
        ) : (
          <img src={no_image} className="image"/>
        )
      }
    </Fragment>
  );
};
