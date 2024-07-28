import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Apidemo = () => {
    const [faculty, setFaculty] = useState([]);

    useEffect(() => {
        fetch("https://65c33697f7e6ea59682c25c9.mockapi.io/Faculty")
            .then(res => res.json()).then(res => setFaculty(res));
    }, [])

    
    var FormattedFaculty = faculty.map((fac) => {

        return (
            <div class="card col-md-3 p-1">
                <img src={fac.FacultyImage} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{fac.FacultyName}</h5>
                    <p class="card-text">{fac.FacultyDescription}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <Link className="btn btn-primary mx-4" to={"/api/" + fac.id}>View More</Link>
                        <button className="btn btn-danger mx-4" onClick={() => {
                            fetch("https://65c33697f7e6ea59682c25c9.mockapi.io/Faculty/" + fac.id, {
                                method: "DELETE",
                            }).then(res => res.json())
                                .then(res => setFaculty(faculty.filter(f => f.id !== fac.id)));
                        }}>Delete</button>
                    </li>
                </ul>
            </div>
        )
    });
    return (
        <div className="row">
            <div className="row"><Link className="btn btn-success m-3 col-3" to={"/vehicle/add"}>ADD FACULTY</Link></div>
            {FormattedFaculty}
        </div>
    );
}

export default Apidemo;