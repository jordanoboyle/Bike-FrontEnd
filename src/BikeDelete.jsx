import axios from "axios";
import { BikesShow } from "./BikesShow";

export function BikeDelete(props) {

  const submitDelete = () => {
    console.log("submitting delete");
    axios.delete(`http://localhost:3000/bikes/${props.bike.id}.json`).then((response) => {
      console.log("Deleted Bike Confirm", response.data);
    })
    window.location.href = "/"
  }

  return(
    <div>
      <button onClick={submitDelete}>Delete Bike (Admin Only)</button>
    </div>
  )
}

