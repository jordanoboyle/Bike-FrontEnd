import { BikesIndex } from "./BikesIndex";



export function Content() {

  const bikes = [
    {id: 1, name: "First Bike", brand: "Trek", price: 5500, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEvlWiH9AaWOFbRkGZx56uYJ68xYBmWByRQ&s"},
    {id: 2, name: "Second Bike", brand: "Cannondale", price: 7500, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqycvdlfXUmUPE6ok-7-najC881fvnrA0Yw&s"},
  ]

  return (
    <main>
      <h1>Welcome to React!</h1>
      <BikesIndex bikes={bikes}/>
    </main>
  )
}