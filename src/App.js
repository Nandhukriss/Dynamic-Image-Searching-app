
import './App.css';
import {Jumbutron} from "./components/Jumbutron";
import SearchField from './components/SearchField';
import Images from './components/Images';
import  useAxios  from './hooks/useAxios';
import { createContext, useState } from 'react';

//create context

export  const ImageContext=createContext();
function App() {
  const [Imagename, setImagename] = useState('')
  const{response,isLoading,error,fetchData }=useAxios(`search/photos?page=1&per_page=28&query=nature&client_id=${process.env.REACT_APP_ACCESS_KEY}`)

const value={
  response,
  isLoading,
  error,
  fetchData 
  ,Imagename,
  setImagename
}
  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
        <SearchField/>
      </Jumbutron>
        <Images/>
    </ImageContext.Provider>

  );
}

export default App;
