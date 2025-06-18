import React from 'react'
import "../griditem/GridItem.css"


interface IGridImage {
  id: number;
  image?: string;
  title: string;
}

const GridImage: React.FC<IGridImage> = ({image, title}) => {


  return (
    <>
        {image && image && (
        <img src={image} alt={title} className="image" />
        )}
    </>
  )
}

export default GridImage