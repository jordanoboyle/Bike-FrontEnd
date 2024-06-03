import { BikesIndex } from "./BikesIndex";
import { BikesShow } from "./BikesShow";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import axios from "axios"


export function Content() {

  const [bikes, setBikes] = useState([]);
  const [isBikesShowVisible, setIsBikesShowVisible] = useState(false);
  const [currentBike, setCurrentBike] = useState({})
 
  const handleIndexBikes = () => {
    console.log("handling the bike index");
    axios.get("http://localhost:3000/bikes.json").then((response) => {
      console.log(response.data);
      setBikes(response.data);
    })
  }

  const handleShowBike = (bike) => {
    console.log("handling showing bike!", bike);
    setIsBikesShowVisible(true);
    setCurrentBike(bike);
  }
  const handleClose = () => {
    console.log("handling close")
    setIsBikesShowVisible(false)
  }

  useEffect(handleIndexBikes, []);

  return (
    <main>
      <h1>Welcome to React!</h1>
      <br/>
      <button id="BRB" title="Press" onClick={handleIndexBikes}>
        Big Red Button
      </button>
      <br/>
      <BikesIndex bikes={bikes} onShowBike={handleShowBike}/>
      <Modal show={isBikesShowVisible} onClose={handleClose}>
        <h1>SHOW ME THE MODAL</h1>
        <BikesShow bike={currentBike}/>
      </Modal>
    </main>
  )
}