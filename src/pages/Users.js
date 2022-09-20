import axios from "axios";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
// import ConfirmModal from "../components/modal - card/ConfirmModal";
// import EditIcon from "@rsuite/icons/Edit";
import {
  Circle,
  CircleFill,
  PencilFill,
  TrashFill,
} from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import { AddCircle } from "@mui/icons-material";

const Users = () => {
  const [datas, setDatas] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [indexCol, setIndexCol] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [user, setUser] = useState({
    lastName: "",
    firstName: "",
    role: "",
    email: "",
    birthday: new Date(),
    phone: "",
    reservations: [],
  });
  const [userEdit, setUserEdit] = useState({
    lastName: 0,
    lastName: "",
    firstName: "",
    role: "",
    email: "",
    birthday: new Date(),
    phone: "",
    reservations: [],
  });

  useEffect(() => {
    getAllUseer();
  }, []);

  const getAllUseer = () => {
    axios
      .get("http://localhost:8080/api/events/all/reservations/user")
      .then((res) => {
        setDatas(res.data);
        console.log(res.data);
      });
  };

  const editCol = (indexCol, user) => {
    setIsEdit(true);
    setIndexCol(indexCol);
    setUserEdit(user);
    console.log(user, indexCol);
  };

  const handleChange = (event) => {
    setUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(user);
  };

  const handleCreate = () => {
    // console.log(user.phone.toString())
    axios.post(`http://localhost:8080/api/events/users`, user).then((res) => {
      console.log(res.data);
      setIsCreate(false);
      getAllUseer();
    });
  };
  const handleEdit = (event) => {
    setUserEdit((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(userEdit);
  };

  const handleEditSubmit = () => {
    // console.log(userEdit.phone.toString());
    axios.put(`http://localhost:8080/api/events/users/${userEdit.id}`, userEdit).then((res) => {
      console.log(res.data);
      setIsEdit(false);
      getAllUseer();
    });
  };

  return (
    <div>
      <Button variant="outline-danger" onClick={() => setIsCreate(true)}>
        Créer
      </Button>

      <Table striped>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Role</th>
            <th>Email</th>
            <th>Date de naissance</th>
            <th>Telephone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.length > 0
            ? datas.map((user, i) =>
                isEdit ? (
                  indexCol === i ? (
                    <tr key={i}>
                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Nom"
                            value={userEdit.lastName}
                            name="lastName"
                            onChange={handleEdit}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="text"
                            placeholder="prenom"
                            value={userEdit.firstName}
                            name="firstName"
                            onChange={handleEdit}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="text"
                            placeholder="role"
                            value={userEdit.role}
                            name="role"
                            onChange={handleEdit}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Email"
                            value={userEdit.email}
                            name="email"
                            onChange={handleEdit}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="date"
                            placeholder="Birthday"
                            value={userEdit.birthday}
                            name="birthday"
                            onChange={handleEdit}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Phone"
                            value={userEdit.phone}
                            name="phone"
                            onChange={handleEdit}
                          />
                          
                        </Form.Group>
                      </td>
                      <td>
                        <Button
                          variant="outline-danger"
                          onClick={() => setIsEdit(false)}
                        >
                          annuler
                          <TrashFill />
                        </Button>
                        <Button
                          variant="outline-secondary"
                          onClick={ handleEditSubmit}
                        >
                          edit
                          <PencilFill />
                        </Button>
                      </td>
                    </tr>
                  ) : (
                    <tr key={i}>
                      <td>{user.lastName}</td>
                      <td>{user.firstName}</td>
                      <td>{user.role}</td>
                      <td>{user.email}</td>
                      <td>{user.birthday}</td>
                      <td>{user.phone}</td>
                      <td>
                        <Button variant="outline-danger">
                          <TrashFill />
                        </Button>
                        <Button
                          variant="outline-secondary"
                          onClick={() => editCol(i, user)}
                        >
                          <PencilFill />
                        </Button>
                      </td>
                    </tr>
                  )
                ) : (
                  <tr key={i}>
                    <td>{user.lastName}</td>
                    <td>{user.firstName}</td>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                    <td>{user.birthday}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Button variant="outline-danger">
                        <TrashFill />
                      </Button>
                      <Button
                        variant="outline-secondary"
                        onClick={() => editCol(i, user)}
                      >
                        <PencilFill />
                      </Button>
                    </td>
                  </tr>
                )
              )
            : null}

          {isCreate ? (
            <tr>
              <td>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="Nom"
                    value={user.lastName}
                    name="lastName"
                    onChange={handleChange}
                  />
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="prenom"
                    value={user.firstName}
                    name="firstName"
                    onChange={handleChange}
                  />
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="role"
                    value={user.role}
                    name="role"
                    onChange={handleChange}
                  />
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="date"
                    placeholder="Birthday"
                    value={user.birthday}
                    name="birthday"
                    onChange={handleChange}
                  />
                </Form.Group>
              </td>
              <td>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="number"
                    placeholder="Phone"
                    value={user.phone}
                    name="phone"
                    onChange={handleChange}
                  />
                </Form.Group>
              </td>
              <td>
                <Button
                  variant="outline-danger"
                  onClick={() => setIsCreate(false)}
                >
                  annuler
                  <TrashFill />
                </Button>
                <Button variant="outline-secondary" onClick={handleCreate}>
                  Create
                  <AddCircle />
                </Button>
              </td>
            </tr>
          ) : null}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
