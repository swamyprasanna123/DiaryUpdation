import { useState, useEffect } from "react";
import "./GetStyle.css";
import axios from "axios";

const Dis = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    useEffect(() => {
        axios.get("http://localhost:8081/diary/get")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            .catch((error) => setIsError(error.message));
    }, []);

    return (
        <>
            <h1> <span>E</span>VERDAY CONTENT</h1>
            {isError !== "" && <h2>{isError}</h2>}
              
            <div className="grid">
                        <table className="table caption-top">
                            
                                <tr>
                                    <td scope="col">DAY</td>

                                    <td scope="col">DATE</td>
                                
                                    <td scope="col">NOTES</td>
                                    
                                    
                                </tr>

                                {myData.map((e)=>
                                    <tr key={e.daynum}>

                                        <td>{e.daynum}</td>
                                        <td>{e.day}</td>
                                        <td>{e.notes}</td>


                                    </tr>
                                )}
                        </table>
            </div>
           
        </>
    );
};

export default Dis;