import { Form, ButtonToolbar, Button, Input } from 'rsuite';


const FormInput = (props) => {
    return(
        <Form.Group controlId={props.name}>
        <Form.ControlLabel>{props.label}</Form.ControlLabel>
        <Form.Control onChange={props.handleChange} value={props.value} />
        {/* {props.isRequired ? (
        <Form.HelpText>{props.label} is required</Form.HelpText>
        ) : null} */}
        </Form.Group>
    )
}
export default FormInput;