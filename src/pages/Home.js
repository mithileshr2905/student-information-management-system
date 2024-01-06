import {Link} from "react-router-dom";

function Home() {
    return (
        <div className={"centered-element"}>
            <div className={"student-container"}>
                <header>
                <Link className={"back-link"} to='/dashboard/submit'>Submit Student</Link>
                <Link className={"back-link"} to='/dashboard/get'>Get Student Details</Link>
                <Link className={"back-link"} to='/dashboard/update'>Update Student Details</Link>
                <Link className={"back-link"} to='/dashboard/delete'>Delete Student</Link>
                </header>
                <h1>Student Management System Dashboard</h1>
                <br/><br/>
                <img src={"./images/dashboard-logo.png"} width={"400px"} alt={"dashboard-logo"}/>
                <br/><br/>
            </div>
            <footer>
                <p>"Empowering Futures, Connecting Knowledge: SIMS - Your Partner in Student Information Management. Transforming data into insights, fostering academic excellence, and simplifying the student experience."</p>
                <br></br>
                
                <p>© 2023 SIMS</p>
            </footer>
        </div>
    );
}

export default Home;