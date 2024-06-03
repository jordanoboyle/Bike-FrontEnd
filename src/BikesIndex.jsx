
export function BikesIndex(props) {
  return (
    <div>
      <h1>All Bikes</h1>
      {props.bikes.map((bike) => (
        <div key={bike.id}>
          <h2>{bike.name}</h2>
          <img src={bike.image_url} />
          <p>{bike.brand}</p>
          <p>{bike.price}</p>
        </div>
      ))}
    </div>
  );
}