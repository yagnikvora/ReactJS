import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const VehicleById = () => {
    const [vehicle, setVehicle] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:5000/vehicle/" + id)
            .then(res => res.json()).then(res => setVehicle(res));
    }, []);

    var formattedVehicle = (
        <div className="card my-5 mx-3 border border-primary">
            <div className="card-body">
                <h5 className="card-title">{vehicle.VehicleModel}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{vehicle.VehicleMake}</h6>
                <p className="card-text">Vehicle Year :- {vehicle.VehicleYear}</p>
                <p className="card-text">Vehicle Last Service :- {vehicle.VehicleLastServiceDate}</p>
                <p className="card-text">Vehicle Mileage :- {vehicle.VehicleMileage}</p>
                <button className="btn btn-danger mx-4" onClick={() => {
                    fetch("http://localhost:5000/vehicle/" + vehicle._id, {
                        method: "DELETE",
                    }).then(() => { navigate("/vehicle") });
                }}>Delete</button>
                <button className="btn btn-warning" onClick={()=>{
                    navigate("/vehicle/edit/" + vehicle._id);
                }}>Edit</button>
            </div>
        </div>
    );
    return formattedVehicle;
}

export default VehicleById;