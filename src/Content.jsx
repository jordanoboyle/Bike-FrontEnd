import { BikesIndex } from "./BikesIndex";
import { useState, useEffect } from "react";
import axios from "axios"


export function Content() {

  const [bikes, setBikes] = useState([]);
 
  const handleIndexBikes = () => {
    console.log("handling the bike index");
    axios.get("http://localhost:3000/bikes.json").then((response) => {
      console.log(response.data);
      setBikes(response.data);
    })
  }

  useEffect(handleIndexBikes, []);

  return (
    <main>
      <h1>Welcome to React!</h1>
      <button id="BRB" title="Press" onClick={handleIndexBikes}>
        Big Red Button
      </button>
      <BikesIndex bikes={bikes}/>
    </main>
  )
}