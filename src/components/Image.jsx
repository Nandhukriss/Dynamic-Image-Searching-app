
import { useState } from "react";
import { Lightbox } from "react-modal-image";
export const Image = ({data}) => {

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };



  return (
<div  rel="noreferrer" className="relative group cursor-pointer" onClick={openLightbox}>
  
  <img className="h-72 w-full object-cover rounded-md shadow-md" src={data.urls.small} alt={data.alt_description} />
  
  {lightboxOpen && (
  <Lightbox 
    medium={data.urls.small}
    large={data.urls.regular}
    alt={data.alt_description}
    onClose={closeLightbox}

   
  />
)}

  <div className="absolute inset-0 bg-gray-800 bg-opacity-0 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center ">
    <a href className="bg-gray-300  hover:bg-gray-400 text-gray-800 font-bold py-2 px-2  rounded inline-flex items-center justify-center w-full">
      <span className="capitalize ">{data.alt_description}</span>
    </a>
  </div>
</div>


  )
}

