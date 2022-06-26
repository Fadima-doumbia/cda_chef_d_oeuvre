import Cards from "../cards/Cards";

const EventList = (props) => {
  return (
      <>
      {props.events.length > 0 ?(
        props.events.map((event) => (
          <>
          <Cards event = {event}/>
          </>
        ))

      ):(
        <h3>Aucun evènement</h3>
      )}
      </>
  );
};

export default EventList;
