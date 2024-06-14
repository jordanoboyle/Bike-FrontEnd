

export function BikeUpdate() {

  const handleSubmitUpdate = (event) => {
    console.log("handling the submit")
  }
  return(
    <div>
      <h1>Update Bike Information</h1>
      <form onSubmit={handleSubmitUpdate}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <button type="submit">Submit Updated Information</button>
      </form> 
    </div>
  )
}