
export function BikeNew(props) {

  const handleBikeNew = (event) => {
    console.log("getting bike params from form")
    event.preventDefault;
    const params = new FormData(event.target);
    props.onNewBike(params, () => event.target.reset());
    console.log(params, "sending params to content")
  }
  return (
    <div>
      <h1>Add New Bike for Purchase</h1>
      <form onSubmit={handleBikeNew}>
        <div>
          Bike Type: <input name="name" type="text" />
        </div>
        <div>
          Brand: <input name="brand" type="text" />
        </div>      
        <div>
          Price:  <input name="price" type="integer" /> 
        </div>      
        <div>
          Image_url: <input name="image_url" type="text" />  
        </div>
        <button type="submit"> ADD Bike</button>      
      </form>
    </div>
  )
}