import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UpdateStyle.css";
function Update() {
  const [daynum, setDaynum] = useState("");
  const [day, setDay] = useState("");
  const [notes, setNotes] = useState("");
 
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      day,
      notes
    };
    console.log(order);
    fetch("http://localhost:8081/diary/put/" + daynum, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    }).then(r=>{console.log(order)
    alert("Successfully Submitted")
    navigate("/get")
  });

  };

  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <form>
        <center>
         <h1><span>U</span>PDATE THE DIARY</h1>
        <input
          type="text"
          placeholder="Day Number"
          value={daynum}
          onChange={(e) => {
            setDaynum(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Which Day"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Content "
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        ></input>
        
        <br></br>
        <input type="button" id="swamy" onClick={handleSubmit} value="Submit"></input>
        </center>
      </form>
    </>
  );
}

export default Update;