
import {Link} from "react-router-dom";



function GetStudent() {
    
    return (
        <div className={"centered-element"}>
            <img className="student-img" src={"https://cdn-icons-png.flaticon.com/512/5349/5349022.png"} width={"100px"} alt={"student-logo"}/>
            <div className="student-container">
                <h1>Get Student Details</h1>
                <br/>
                <form>
                    <input type="text"  id="nic" name="nic" placeholder="Enter NIC Number"/>
                    
                    <br/>
                    <button type={"submit"}>Get Student Details</button>
                    <Link className={"back-link"} to='/dashboard'>Back</Link>
                </form>
                
            </div>
        </div>
    );
}

export default GetStudent;