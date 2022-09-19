import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ReservationTable from "../components/form - table/ReservationTable";

const ReservationPage = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/events/allReservations")
      .then((res) => {
        setDatas(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <div style={{ width: "90%", margin: "auto", color: "#3C6DA6" }}>
        <ReservationTable datas={datas} setDatas={setDatas} />
      </div>
    </div>
  );
};

export default ReservationPage;
