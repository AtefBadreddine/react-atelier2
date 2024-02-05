import  { useEffect, useState } from "react";
import Event from "./Event";
import Stack from 'react-bootstrap/Stack';


function Events(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
           fetch('src/data/events.json')
    .then((response) => response.json())
    .then((json) => setData(json) );
    } ,[])
    
    const handleBooking = (id) => {
        console.log(id)
        const updatedData = data.map((item, i) => {
           if (i === id) {
                item.nbParticipants = item.nbParticipants + 1;
                item.nbTickets = item.nbTickets - 1;
            }
            return item; 
         
        })
        setData(updatedData)
      
   }

    return (  
        <>
     <Stack direction="horizontal" gap={3} className="d-flex justify-content-center p-4  ">
         {data.map((item,i) => (
         <Event key={i} book={handleBooking} id={i}  title={item.name} price={item.price} nbParticipants={item.nbParticipants} nbTickets={item.nbTickets} img={item.img}></Event>
            ) 
             )}
    </Stack>
        
        </>
    );
}

export default Events;

