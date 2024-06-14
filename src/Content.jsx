import { BikesIndex } from "./BikesIndex";
import { BikesShow } from "./BikesShow";
import { BikeNew } from "./BikeNew";
import { BikeUpdate } from "./BikeUpdate";
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

  const handCreateBike = (theParams, successCallback) => {
    console.log(theParams, "creating the bike");
    axios.post("http://localhost:3000/bikes.json", theParams).then((response) => {
      console.log(response.data);
      setBikes([...bikes, response.data])
      successCallback();
    })
  }

  useEffect(handleIndexBikes, []);

  return (
    <main>
      <h1>Welcome to React!</h1>
      <br/>
      <BikeNew onNewBike={handCreateBike} />
      <br/>
      <button id="BRB" title="Press" onClick={handleIndexBikes}>
        Big Red Button
      </button>
      <br/>
      <BikesIndex bikes={bikes} onShowBike={handleShowBike}/>
      <Modal show={isBikesShowVisible} onClose={handleClose}>
        <h1>Detailed Information</h1>
        <BikesShow bike={currentBike}/>
        <BikeUpdate />
      </Modal>
    </main>
  )
}