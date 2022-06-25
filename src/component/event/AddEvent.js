import React, { useState } from "react";
import { Button, ButtonToolbar, Form } from "rsuite";

const AddEvent = () => {
//   const Textarea = React.forwardRef((props, ref) => (
//     <Input {...props} as="textarea" ref={ref} />
//   ));

//   const defaultFormValue = {
//     name: "",
//     detailsEvent: {
//       description: "",
//       address: "",
//       prix: 0,
//       places: 1,
//       date: null, //AAAAMMDD
//       child: false,
//       heureFin: "",
//       heureDebut: "",
//     },
//   };
  const initFormValue = {
    name: "n",
    detailsEvent: {
      description: "h",
      address: "iu",
      prix: 8,
      places: 1,
      date: new Date(), //AAAAMMDD
      child: false,
      heureFin: "12:45",
      heureDebut: "12:45",
    },
  };
  const [formValue, setFormValue] = useState(initFormValue);
console.log(new Date())
  const handleChange = (event) => {
      console.log("first")
    //   console.log(event.target.name)
    //   setFormValue((...value) => ({
    //       ...value,
    //       [event.target.name]:event.target.value,
    //   }))
    //   console.log(formValue)
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    console.log(form);
    // alert("inputs");
  };


  return (
    <Form layout="horizontal" 
    // formValue={formValue}
    onChange={handleChange }
    // defaultFormValue={defaultFormValue}
    >
      <Form.Group controlId="name-6">
        <Form.ControlLabel>Nom de L'évènement</Form.ControlLabel>
        <Form.Control name="name" value={formValue.name}  />
        {/* <Form.HelpText tooltip>Required</Form.HelpText> */}
      </Form.Group>
      <Form.Group controlId="description-6">
        <Form.ControlLabel>Description</Form.ControlLabel>
        <Form.Control name="description"  />
        {/* <Form.HelpText tooltip>Required</Form.HelpText> */}
      </Form.Group>
      <Form.Group controlId="address-6">
        <Form.ControlLabel>Adresse</Form.ControlLabel>
        <Form.Control name="address" />
        {/* <Form.HelpText tooltip>Required</Form.HelpText> */}
      </Form.Group>
      <Form.Group controlId="prix-6">
        <Form.ControlLabel>Prix</Form.ControlLabel>
        <Form.Control name="prix" type="number" />
        {/* <Form.HelpText tooltip>Required</Form.HelpText> */}
      </Form.Group>
      <Form.Group controlId="places-6">
        <Form.ControlLabel>Place</Form.ControlLabel>
        <Form.Control name="places" type="number" />
        {/* <Form.HelpText tooltip>Required</Form.HelpText> */}
      </Form.Group>
      <Form.Group controlId="child-6">
        <Form.ControlLabel>Enfant</Form.ControlLabel>
        <Form.Control name="child" type="bolean"  />
        <Form.HelpText tooltip>Required</Form.HelpText>
      </Form.Group>
      {/* <Form.Group controlId="date-6">
        <Form.ControlLabel>Date</Form.ControlLabel>
        <Form.Control name="date" type="date" value={formValue.detailsEvent.child} />
        <Form.HelpText tooltip>Required</Form.HelpText>
      </Form.Group> */}
      <Form.Group controlId="heureDebut-6">
        <Form.ControlLabel>Heure Debut</Form.ControlLabel>
        <Form.Control name="heureDebut" type="time" autoComplete="off" />
      </Form.Group>
      <Form.Group controlId="heureFin-6">
        <Form.ControlLabel>Heure Fin</Form.ControlLabel>
        <Form.Control name="heureFin" type="time" autoComplete="off" />
      </Form.Group>
      {/* <Form.Group controlId="textarea-6">
        <Form.ControlLabel>Textarea</Form.ControlLabel>
        <Form.Control name="textarea" rows={5} accepter={Textarea} />
      </Form.Group> */}
      <Form.Group>
        <ButtonToolbar>
          <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
          <Button appearance="default">Cancel</Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  );
};

export default AddEvent;
