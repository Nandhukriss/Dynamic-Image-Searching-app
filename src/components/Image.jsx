
import ModalImage from "react-modal-image";
export const Image = ({data}) => {


  return (
<div  rel="noreferrer" className="cursor-pointer">

  <ModalImage 
    small={data.urls.small}
    large={data.urls.regular}
    alt={data.alt_description}
    className="h-72 w-full object-cover rounded-md shadow-md capitalize"

  />
  <figcaption class="px-5 py-3 text-center text-lg text-black  font-semibold capitalize">{data.alt_description}</figcaption>

   



</div>


  )
}
