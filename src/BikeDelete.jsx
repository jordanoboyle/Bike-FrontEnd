import axios from "axios";
import { BikesShow } from "./BikesShow";

export function BikeDelete(props) {

  const submitDelete = () => {
    console.log("submitting delete");
    axios.delete(`http://localhost:3000/bikes/11.json`).then((response) => {
      console.log("Deleted Bike Confirm", response.data)
    })
  }

  return(
    <div>
      <button onClick={submitDelete}>Delete Bike (Admin Only)</button>
    </div>
  )
}

