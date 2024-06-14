

export function BikeUpdate(props) {

  const handleSubmitUpdate = (event) => {
    console.log("handling the submit");
    event.preventDefault();

  }
  return(
    <div>
      <h1>Update Bike Information</h1>
      <form onSubmit={handleSubmitUpdate}>
        <div><input name="name" type="text"  /></div>
        <div><input name="brand" type="text"  /></div>
        <div><input name="price" type="integer"  /></div>
        <div><input name="image_url" type="text"  /></div>
        <button type="submit">Submit Updated Information</button>
      </form> 
    </div>
  )
}