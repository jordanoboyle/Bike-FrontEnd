export function BikesShow(props) {
  return (
    <div>
      <h1>Extra Details</h1>
      <p>Name: {props.bike.name}</p>
      <p>Image_URL: {props.bike.image_url}</p>
      <p>Brand: {props.bike.brand}</p>
      <p>Price: {props.bike.price}</p>
    </div>
  )
}