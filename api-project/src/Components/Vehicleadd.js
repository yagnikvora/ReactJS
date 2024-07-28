import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Vehicleadd = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        if (id) {
            fetch("http://localhost:5000/vehicle/" + id)
                .then(res => res.json()).then(res => setData(res));
        }
    }, []);
    return (<>
        <table className="fs-4 m-3">
            <tr>
                <td className="">VehicleMake</td>
                <td>:</td>
                <td><input type="text" value={data.VehicleMake} onChange={(e) => {
                    setData({ ...data, VehicleMake: e.target.value });
                }} /></td>
            </tr>
            <tr>
                <td className="">VehicleModel</td>
                <td>:</td>
                <td><input type="text" value={data.VehicleModel} onChange={(e) => {
                    setData({ ...data, VehicleModel: e.target.value });
                }} /></td>
            </tr><tr>
                <td className="">VehicleYear</td>
                <td>:</td>
                <td><input type="text" value={data.VehicleYear} onChange={(e) => {
                    setData({ ...data, VehicleYear: e.target.value });
                }} /></td>
            </tr><tr>
                <td className="">VehicleLastServiceDate</td>
                <td>:</td>
                <td><input type="text" value={data.VehicleLastServiceDate} onChange={(e) => {
                    setData({ ...data, VehicleLastServiceDate: e.target.value });
                }} /></td>
            </tr><tr>
                <td className="">VehicleMileage</td>
                <td>:</td>
                <td><input type="text" value={data.VehicleMileage} onChange={(e) => {
                    setData({ ...data, VehicleMileage: e.target.value });
                }} /></td>
            </tr>
            <tr>
                <td colSpan="3"><button className={id ? "btn btn-warning px-5" : "btn btn-success px-5"} onClick={() => {
                    if (id) {
                        fetch("http://localhost:5000/vehicle/" + id, {
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            },
                            method: "PUT"
                        }).then(() => { navigate("/vehicle") });
                    } else {
                        fetch("http://localhost:5000/vehicle/", {
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            },
                            method: "POST"
                        }).then(() => { navigate("/vehicle") });
                    }
                }}>
                    {id && "Edit"}
                    {!(id) && "Add"}
                </button></td>
            </tr>
        </table>
    </>)
}

export default Vehicleadd;