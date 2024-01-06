import {Link} from "react-router-dom";


function DeleteStudent() {
    

    return (
        <div className={"centered-element"}>
            <img className="student-img" src={"https://cdn-icons-png.flaticon.com/512/5349/5349022.png"} width={"120px"} alt={"user-logo"}/>
            <div className="student-container">
                <h1>Delete Student</h1>
                <br/>
                <form>
                    <input type="text" id="nic" name="nic" placeholder="Enter NIC Number"/>
                    
                    <br/>
                    <button type={"submit"}>Delete Student</button>
                    <Link className={"back-link"} to='/dashboard'>Back</Link>
                </form>
                
            </div>
        </div>
    );
}

export default DeleteStudent;