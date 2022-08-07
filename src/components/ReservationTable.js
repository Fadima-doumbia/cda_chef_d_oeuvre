import { Trash, TrashFill } from "react-bootstrap-icons";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import PlusIcon from "@rsuite/icons/Plus";
import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

const ReservationTable = (props) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  return (
    <Table striped bordered hover variant="ligth" className="mt-3">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Description</th>
          <th>Date</th>
          <th>Adresse</th>
          <th>Heure</th>
          <th>Pour enfant</th>
          <th>Prix</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.datas.length > 0 ? (
          props.datas.map((data, index) => (
            <tr key={index}>
              <th>
                <p>{data.name}</p>
              </th>
              <th>
                <div ref={ref}>
                  <Button variant="outline-secondary" onClick={handleClick}>Voir la description</Button>

                  <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref}
                    containerPadding={20}
                    style={{backgroundColor:"#3C6DA6"}}
                  >
                    <Popover id="popover-contained">
                      <Popover.Header as="h3" style={{backgroundColor:"#3C6DA6"}}>Popover bottom</Popover.Header>
                      <Popover.Body style={{backgroundColor:"#3C6DA6"}}>
                        {/* <strong>Holy guacamole!</strong>  */}
                        {data.description}
                      </Popover.Body>
                    </Popover>
                  </Overlay>
                </div>
              </th>
              <th>
                <p>{data.date}</p>
              </th>
              <th>
                <p>{data.address}</p>
              </th>
              <th>
                <p>
                  {data.heureDebut} - {data.heureFin}
                </p>
              </th>
              <th>
                <p>{data.child ? "OUI" : "NON"}</p>
              </th>
              <th>
                <p>{data.prix}</p>
              </th>
              <th>
                <Button variant="outline-danger">
                  <TrashFill />
                </Button>
              </th>
            </tr>
          ))
        ) : (
          <tr>Pas de reservations </tr>
        )}
      </tbody>
    </Table>
  );
};

export default ReservationTable;
