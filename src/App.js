import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import City from './City';


function App() {
  const key = "558fe0ec02aa0a59b24327ddedec7216";
  const [search, setSearch] = useState("");
  const [city, setCtiy] = useState();
  useEffect(() =>{
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCtiy(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[search]);
  console.log(search);
  return (
    <div className="App">
     <div>
      <input onChange={(e) => setSearch(e.target.value)} className="border-8  px-3 py-3 "  type='text'/>
      <City city={city} />
     
     </div>
     
   </div>
  );
}

export default App;
