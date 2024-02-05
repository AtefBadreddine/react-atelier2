/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Event(props) {
    
    const handlebookEvent = () => {
        props.book(props.id);
    }

    return (  
           <Card style={{ width: '18rem' }} className="p-1">
      <Card.Img variant="top" src={`images/${props.img}`} />
      <Card.Body>
            <Card.Title>{ props.title }</Card.Title>
        <Card.Text>
          Price : { props.price}
        </Card.Text>
                <Card.Text>nbTickets:  { props.nbTickets }</Card.Text>
                <Card.Text>nbParticipants: { props.nbParticipants} </Card.Text>
            </Card.Body>
            <Button onClick={handlebookEvent}>Book an event</Button>
    </Card>
    );
}

