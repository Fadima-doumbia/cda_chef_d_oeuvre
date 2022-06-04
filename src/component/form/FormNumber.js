import { Form, ButtonToolbar, Button, Input, InputNumber } from 'rsuite';


const FormNumber = (props) => {
    return(

                <div style={{ width: 160 }}>
                <hr />
                <label>{props.label}</label>
                <InputNumber postfix={props.postfix} prefix={props.prefix} />
                {props.isRequired ? (
        <Form.HelpText>{props.label} is required</Form.HelpText>
        ) : null}
                <hr />
              </div>
    )
}
export default FormNumber;