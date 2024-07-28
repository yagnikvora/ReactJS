import { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Vehicledetails = () => {
    const [vehicles, setVehicle] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/vehicle/")
            .then(res => res.json())
            .then(res => setVehicle(res));
    }, [])

    

    const formattedVehicle = vehicles.map(vehicle => {
        return (<div className="card my-5 mx-3 col-4 border border-primary">
            <div className="card-body">
                <h5 className="card-title">{vehicle.VehicleModel}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{vehicle.VehicleMake}</h6>
                <Link to={"/vehicle/" + vehicle._id} className="btn btn-primary">View Details</Link>
                <button className="btn btn-danger mx-4" onClick={() => {
                    fetch("http://localhost:5000/vehicle/" + vehicle._id, {
                        method: "DELETE",
                    }).then(res => res.json())
                        .then(res => setVehicle(vehicles.filter(v => v._id !== vehicle._id)));
                }}>Delete</button>
            </div>
        </div>)
    })
    return (<>
        <div className="row justify-content-center ">
            <Link className="col-2 btn btn-success ms-3 mt-3 " to={"/vehicle/add"}>ADD VEHICLE</Link>

        </div>
        <div className="row justify-content-center">
            {formattedVehicle}

        </div>
    </>
    );
}

export default Vehicledetails;