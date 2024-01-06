
import {Link} from "react-router-dom";



function SubmitStudent() {
    
    return (
        <div className={"centered-element"}>
            <img className="student-img" src={"https://cdn-icons-png.flaticon.com/512/5349/5349022.png"} width={"120px"} alt={"user-logo"}/>
            <div className="student-container">
                <h1>Submit Student</h1>
                <br/>
                <form>
                    <input type="text"  id="nic" name="nic" placeholder="Enter NIC Number" />
                    <input type="text"  id="name" name="name" placeholder="Enter Name" />
                    <input type="text"  id="address" name="address" placeholder="Enter Address" />
                    <input type="text"  id="contact" name="contact" placeholder="Enter Contact" />
                    
                    <br/>
                    <button  type={"button"}>Check Out</button>
                    <button type={"submit"}>Submit Student</button>
                    <Link className={"back-link"} to='/dashboard'>Back</Link>
                </form>
               
            </div>
        </div>
    );
}

export default SubmitStudent;