import { useContext, useState } from "react";
import { ImageContext } from "../App";


 const SearchField = () => {
  const [SearchValue, setSearchValue] = useState('')
  const { fetchData ,setImagename }=useContext(ImageContext)

  const handleOnChange=(e)=>{
    setSearchValue(e.target.value)
  }
  const handleOnClick=()=>{
    fetchData (`search/photos?page=1&query=${SearchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    setSearchValue('')
    setImagename(SearchValue)

  }
  const handleEnterKey=(e)=>{
    if(e.key==='Enter'){

      fetchData (`search/photos?page=1&query=${SearchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      setSearchValue('')
      setImagename(SearchValue)
    }

  }
  return (
    <div className="flex mx-2">
        <input className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl "
        type="search"  placeholder="Search Something..." value={SearchValue} onChange={handleOnChange} onKeyDown={handleEnterKey}/>
        <button className="bg-neutral-950 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring blue-300 disabled:bg-gray-400" onClick={handleOnClick} disabled ={!SearchValue}>Search</button>
    </div>
  )
}

export default SearchField;