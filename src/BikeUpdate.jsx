import axios from "axios";

export function BikeUpdate(props) {

  const handleSubmitUpdate = (event) => {
    console.log("handling the submit");
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/bikes/${props.bike.id}.json`, params).then((response) => {
      console.log(response.data)
      
      window.location.href = "/"
    })

  }
  return(
    <div>
      <h1>Update Bike Information</h1>
      <form onSubmit={handleSubmitUpdate}>
        <div><input name="name" type="text" defaultValue={props.bike.name} /></div>
        <div><input name="brand" type="text" defaultValue={props.bike.brand} /></div>
        <div><input name="price" type="integer" defaultValue={props.bike.price} /></div>
        <div><input name="image_url" type="text" defaultValue={props.bike.image_url} /></div>
        <button type="submit">Submit Updated Information</button>
      </form> 
    </div>
  )
}