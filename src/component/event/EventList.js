import Cards from "../cards/Cards";

const EventList = (props) => {
  return (
    <>
      {props.eventLength > 0 ? (
        props.EventList.map((event) => <Cards event={event} />)
      ) : (
        <p>kk</p>
      )}
    </>
  );
};

export default EventList;
