
export function BikesIndex(props) {
  return (
    <div className="Cards">
      <h1>All Bikes</h1>
      <div id="Cards2">
      {props.bikes.map((bike) => (
        <div key={bike.id}>
          <h2>{bike.name}</h2>
          <img src={bike.image_url} />
          <p>{bike.brand}</p>
          <p>{bike.price}</p>
          <button onClick={() => props.onShowBike(bike)}>DETAILS</button>
        </div>
      ))}
      </div>
    </div>
  );
}