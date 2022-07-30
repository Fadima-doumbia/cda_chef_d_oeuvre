import axios from "axios";
import { useEffect, useState } from "react";
import AdminCardEvent from "../components/AdminCardEvent";

const AdminEventPage = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/events").then((res) => {
          setDatas(res.data);
          console.log(res.data)
        });
      }, []);

      const editEvent = () =>{
        
      }

    const style = {
        display: "flex",
        flexWrap: "wrap",
        // justifyContent: "space-between",
        // width: "40%",
        // height: "250px",
    }
      
    return(
        <div style={style}>
            {datas.length>0?(
                datas.map((data)=>(
                    <div style={{width: "40%", margin: "1rem auto"}}>
                    <AdminCardEvent data={data} edit={editEvent} datas={datas} setDatas={setDatas} />
                    </div>
                ))
            ):(
                <h2>Aucun evènement a venir</h2>
                )}
        </div>
    )
}
export default AdminEventPage;