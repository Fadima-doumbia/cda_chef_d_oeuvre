import { useState } from "react";
import {
  Form,
  ButtonToolbar,
  Button,
  Input,
  SelectPicker,
  TagPicker,
  InputPicker,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Slider,
  DatePicker,
  DateRangePicker,
  CheckPicker,
  Uploader,
  Rate,
  MultiCascader,
  Cascader,
  Panel,
  InputNumber,
  InputGroup,
} from "rsuite";
import FormInput from "./form/FormInput";
const FormStep1 = () => {
  const defaultFormValue = {
    name: "",
    description: "",
    address: "",
    prix: 0.0,
    date: null,
    enfant: false,
    heureFin: "",
    heureDebut: "",
  };
  const initFormValue = {
    name: "",
    description: "",
    address: "",
    prix: 0.0,
    date: new Date(),
    enfant: false,
    heureFin: new Date(),
    heureDebut: new Date(),
  };
  const [formValue, setFormValue] = useState(initFormValue);

  const handleChange = (formValue, event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    // setFormValue(values => ({...values, [name]: value}))v
    // console.log(event)
    setFormValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    // console.log(formValue);
  };
  console.log(formValue);
const onChangeCalendarDate = (event) => {
  console.log("calander onOk onSelect")
}
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   event.preventDefault();
  //   console.log(form);
  //   alert("inputs");
  // }
  return (
    <Panel>
      <Form onChange={handleChange} formValue={formValue}>
        <Form.Group controlId="name">
          <Form.ControlLabel>Nom evenement:</Form.ControlLabel>
          <Form.Control
            onChange={handleChange}
            value={formValue.name}
            name={"name"}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.ControlLabel>Description:</Form.ControlLabel>
          <Form.Control
            onChange={handleChange}
            value={formValue.description}
            name={"description"}
          />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.ControlLabel>Adresse:</Form.ControlLabel>
          <Form.Control
            onChange={handleChange}
            value={formValue.address}
            name={"address"}
          />
        </Form.Group>

        <Form.Group controlId="prix">
          <Form.ControlLabel>Prix :</Form.ControlLabel>
          <InputNumber
            value={formValue.prix}
            onChange={handleChange}
            postfix=" €"
            name= {"prix"}
          />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.ControlLabel>Date :</Form.ControlLabel>
          <DatePicker
            appearance="default"
            placeholder="Default"
            style={{ width: 200 }}
            placement={"rightEnd"}
            value={formValue.date}
            name= {"date"}
            onChange={handleChange}
            isoWeek={true}
          />
        </Form.Group>

        <Form.Group controlId="heureDebut">
          <Form.ControlLabel>Heure Début :</Form.ControlLabel>
          <DatePicker
            format="HH:mm"
            ranges={[]}
            value={formValue.heureDebut}
            // name= "heureDebut"
            style={{ width: 260 }}
            onChange={handleChange}
            defaultValue={new Date("2017-12-12 09:15:30")}
            // hideHours={hour => hour < 8 || hour > 18}
            // hideMinutes={minute => minute % 15 !== 0}
            // hideSeconds={second => second % 30 !== 0}
          />
        </Form.Group>

        <Form.Group controlId="heureFin">
          <Form.ControlLabel>Heure Fin :</Form.ControlLabel>
          <DatePicker
            format="HH:mm"
            ranges={[]}
            value={formValue.heureFin}
            // name="heureFin"
            style={{ width: 260 }}
            onChange={handleChange}
            defaultValue={new Date()}
            // hideHours={hour => hour < 8 || hour > 18}
            // hideMinutes={minute => minute % 15 !== 0}
            // hideSeconds={second => second % 30 !== 0}
          />
        </Form.Group>

        {/* 
        <FormInput label={"Nom evenement"} name={"input"} handleChange={handleChange}  value={formValue.name}/> 
        <FormInput label={"Description"} name={"inputNumber"} handleChange={handleChange}  value={formValue.description}/>
        <FormInput label={"Adresse"} name={"number"} handleChange={handleChange}  value={formValue.address}/>
        <ButtonToolbar>
          <Button onClick={() => setFormValue(defaultFormValue)}>
            Clear form data
          </Button>
          <Button onClick={() => setFormValue(initFormValue)}>Reset</Button>
        </ButtonToolbar>
        <Form.Group controlId="datePicker">
          <Form.ControlLabel>HeureFin :</Form.ControlLabel>
          <Input type="date"           
          style={{ width: 260 }} 
          value={formValue.date}
        />
        </Form.Group>
        <Form.Group controlId="datePicker">
          <Form.ControlLabel>Debut :</Form.ControlLabel>
          <Input 
          type="time" 
          ranges={[]} 
          value={formValue.heureFin} 
          style={{ width: 260 }} 
          onChange={handleChange}
          />     
        </Form.Group>
        <Form.Group controlId="datePicker">
          <Form.ControlLabel>Fin :</Form.ControlLabel>
          <Input 
          type="time" 
          ranges={[]} 
          value={formValue.heureFin} 
          style={{ width: 260 }} 
          onChange={handleChange}
          />     
        </Form.Group>  
        <Form.Group controlId="rate">
          <Form.ControlLabel>Rate:</Form.ControlLabel>
          <Form.Control name="rate" accepter={Rate} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="uploader">
          <Form.ControlLabel>Uploader:</Form.ControlLabel>
          <Form.Control name="uploader" accepter={Uploader} onChange={handleChange} />
        </Form.Group> 
        
        <Form.Group controlId="radio">
          <Form.ControlLabel>Pour Enfant :</Form.ControlLabel>
          <Form.Control name="radio" accepter={RadioGroup} onChange={handleChange}>
            <Checkbox value="true">Oui</Checkbox>
            <Checkbox value="false">Non</Checkbox>
          </Form.Control>
        </Form.Group> 
         <DatePicker
          appearance="default"
          placeholder="Default"
          style={{ width: 200 }}
          placement={"rightEnd"}
        /> 
        
        <Form.Group controlId="datePicker">
          <Form.ControlLabel>DatePicker:</Form.ControlLabel>
          <Form.Control
            name="datePicker"
            accepter={DatePicker}
            placement={"rightEnd"}
          />
        </Form.Group>

        <div className="field">
          <p>Heure Début</p>
          <DatePicker format="HH:mm" ranges={[]} style={{ width: 260 }} onChange={handleChange} />
          <p>Heure Fin</p>
          <DatePicker format="HH:mm" ranges={[]} style={{ width: 260 }} onChange={handleChange} />
        </div>

        <div style={{ width: 160 }}>
          <hr />
          <label></label>
          <InputNumber value={value} onChange={handleChange} step={0.00} postfix="€" />

          <hr />
        </div>
        <p>Date</p> 
                <InputGroup>
            <InputNumber
              className={"custom-input-number"}
              value={formValue.prix}
              onChange={handleChange}
            />
            <InputGroup.Button onClick={handleChange}>+</InputGroup.Button>
          </InputGroup>
        */}
      </Form>
    </Panel>
  );
};
export default FormStep1;
