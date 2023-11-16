import { getPins } from "../components/Pins.js";
import Image from 'next/image'

export default async function PinsList() {
  let pins = await getPins();
  {pins && pins.data.map((pin) => (
   console.log(pin.attributes.media.data[0].attributes.url)
))}

  return (
    <>
    <h1>Pins</h1>
    {pins && pins.data.map((pin) => (
        <div key={pin.id} className="card my-5">
          
          <p>Image URL: {pin.attributes.media.data[0].attributes.url}</p>
            <h3>{pin.attributes.title} </h3>
            
           <Image src={`http://127.0.0.1:1337${pin.attributes.media.data[0].attributes.url}`}  width={pin.attributes.media.data[0].attributes.formats.medium.width}
            height={pin.attributes.media.data[0].attributes.formats.medium.height}/>
           
           
           
      
        </div>
  ))}
  </>

  );
}