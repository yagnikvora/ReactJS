
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Apigetbyid = () => {
    const [faculty, setFaculty] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetch("https://65c33697f7e6ea59682c25c9.mockapi.io/Faculty/" + id)
            .then(res => res.json()).then(res => setFaculty(res));
    }, [])

    var FormattedFaculty = (
        <div class="card col-md-3 p-1">
            <img src={faculty.FacultyImage} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{faculty.FacultyName}</h5>
                <p class="card-text">{faculty.FacultyDescription}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <button className="btn btn-warning mx-4" onClick={() => {
                        navigate("/api/edit/" + faculty.id);
                    }}>Edit</button>
                    <button className="btn btn-danger mx-4" onClick={() => {
                        fetch("https://65c33697f7e6ea59682c25c9.mockapi.io/Faculty/" + id, {
                            method: "DELETE",
                        }).then(res => res.json()).then(()=>navigate(-1));

                    }}>Delete</button>
                </li>
            </ul>
        </div>
    );
    return (
        <div className="row">
            {FormattedFaculty}
        </div>
    );
}
export default Apigetbyid;
