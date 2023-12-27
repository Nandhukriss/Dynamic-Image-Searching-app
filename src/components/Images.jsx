import React, { useContext} from 'react';
import { ImageContext } from '../App'
import { Image } from './Image'
import Skeleton from './Skeleton';

 const Images = () => {
const {response,isLoading,Imagename}=useContext(ImageContext)
  return (
    <div>
        <h1 className='text-center mt-6  text-2xl'>Search Results For <span className="text-neutral-950 dark:text-neutral-950 capitalize font-bold">{Imagename ||"nature"}</span></h1>
      {response.length === 0 ? (
        <div className='flex justify-center items-center flex-col'>
          <img src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif" alt="noresult" />
        </div>
      ) : (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10 max-w-7xl mx-auto px-4 '>
        {isLoading ? <Skeleton item={10}/>:response.map((data,key)=><Image key={key} data={data}/>)}
        </div>
        )}
    </div>
  )
}


export default Images
