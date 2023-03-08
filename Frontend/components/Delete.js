import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeleteStyle.css";
function Delete(){
    const [daynum, setDaynum] = useState("");
    const navigate=useNavigate();
    const handleClick = () => {
        fetch("http://localhost:8081/diary/delete/" + daynum,{
            method:"DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "appliction/json",
            },
        }).then((response) => {
            console.log(response)
            alert("deleted")
            navigate("/get")
    });
    };
    return(
        <div className="id">
        <br/>
        <br/>
        <br/>
        <center>
        
        <h1>DELETE THE CONTENT USING ID</h1>
        <input type="text"
                value={daynum}
                onChange={(e)=> setDaynum(e.target.value)}>
                </input>
        <input type="button" id="delete" onClick={handleClick} value="Delete"></input>
        </center>
        </div>
    );
}
export default Delete;