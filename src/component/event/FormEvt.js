import { FormControlUnstyled } from "@mui/base";
import { Label } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";

const FormEvt = () => {
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
    name: "name",
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
    setFormValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(formValue);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    console.log(form);
    alert("inputs");
  };
  return (
    <>
      {/* <FormControl sx={{ width: "25ch" }}>
        <OutlinedInput placeholder="Please enter text" />
      </FormControl> */}
      <FormControl sx={{ width: "25ch" }}>
        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
        {/* <OutlinedInput placeholder="Please enter text" /> */}
        {/* <MyFormHelperText /> */}
      </FormControl>
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="Name"
      />
      <TextField id="demo-helper-text-misaligned-no-helper" label="Name" />
      {/* <FormControlUnstyled defaultValue="" required>
        <Label>Name</Label>
        <Input value={formValue.name} />
      </FormControlUnstyled> */}
      {/* <FormControlUnstyled defaultValue="" required>
        <Label>Description</Label>
        <Input value={formValue.description} />
      </FormControlUnstyled> */}
      {/* <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl> */}
      {/* <TextField label="Outlined secondary" color="secondary" focused />
      <TextField
        label="Filled success"
        variant="filled"
        color="success"
        focused
      /> */}
      {/*       
      <TextField
        label="Standard success"
        variant="standard"
        color="success"
        focused
      /><br/>
      <TextField
        label="Standard success"
        variant="standard"
        color="success"
        focused
      /><br/>
      <TextField
        label="Standard success"
        variant="standard"
        color="success"
        focused
      /><br/>
      <TextField
        label="Standard success"
        variant="standard"
        color="success"
        focused
      /><br/>
      <TextField
        label="Standard success"
        variant="standard"
        color="success"
        focused
      /><br/>
      <TextField
        label="Standard success"
        variant="standard"
        color="success"
        focused
      /><br/>
      <TextField
        label="Standard success"
        variant="standard"
        color="success"
        focused
      /> */}
    </>
  );
};
export default FormEvt;
