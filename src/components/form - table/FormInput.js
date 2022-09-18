import { Form } from 'rsuite';

const FormInput = (props) => {
  return (
    <>
      <Form.Group controlId="email-6">
        <Form.ControlLabel>{props.label}</Form.ControlLabel>
        <Form.Control name={props.name} type={props.type} onChange={props.onChange}/>
        {props.required? (
            <Form.HelpText tooltip> {props.requiredText ? props.requiredText : "Required"} Required</Form.HelpText>
        ) : null}

      </Form.Group>
    </>
  );
};

export default FormInput;