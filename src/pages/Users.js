import axios from "axios";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ConfirmModal from "../components/modal - card/ConfirmModal";
import EditIcon from "@rsuite/icons/Edit";
import { PencilFill, TrashFill } from "react-bootstrap-icons";

const Users = () => {
  const [datas, setDatas] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [indexCol, setIndexCol] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [user, setUser] = useState({
    lastName: "",
    firstName: "",
    email: "",
    birthday: "",
    phone: "",
    reservations: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/events/all/reservations/user")
      .then((res) => {
        setDatas(res.data);
        console.log(res.data);
      });
  }, []);

  const editCol = (indexCol, user) => {
    setIsEdit(true);
    setIndexCol(indexCol);
    setUser(user);
    console.log(user, indexCol);
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
                      <td>a</td>
                      <td>b</td>
                      <td>c</td>
                      <td>d</td>
                      <td>b</td>
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
                          onClick={() => setIsEdit(true)}
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
              <td>ah</td>
              <td>bn</td>
              <td>ch</td>
              <td>hd</td>
              <td>bb</td>
              <td>
                <Button
                  variant="outline-danger"
                  onClick={() => setIsCreate(false)}
                >
                  annuler
                  <TrashFill />
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => setIsEdit(true)}
                >
                  Create
                  <PencilFill />
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
