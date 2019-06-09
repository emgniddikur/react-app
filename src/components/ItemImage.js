import React, {Fragment} from 'react';
import no_image from '../images/no_image.jpeg'

export const ItemImage = ({imageSrc}) => {
  return (
    <Fragment>
      {
        imageSrc ? (
          <img src={imageSrc}/>
        ) : (
          <img src={no_image}/>
        )
      }
    </Fragment>
  );
};
