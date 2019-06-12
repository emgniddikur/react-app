import React, {Fragment} from 'react';
import no_image from '../images/no_image.jpeg'
import "../css/ItemImage.css";

export const ItemImage = ({imageSrc}) => {
  return (
    <Fragment>
      {
        imageSrc ? (
          <img src={imageSrc} alt="商品画像" className="image"/>
        ) : (
          <img src={no_image} alt="商品画像" className="image"/>
        )
      }
    </Fragment>
  );
};
