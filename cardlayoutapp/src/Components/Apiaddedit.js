import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Vehicleadd = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        if (id) {
            fetch("https://65c33697f7e6ea59682c25c9.mockapi.io/Faculty/" + id)
                .then(res => res.json()).then(res => setData(res));
        }
    }, []);
    return (<>
        <table className="fs-4 m-3">
            <tr>
                <td className="">FacultyName</td>
                <td>:</td>
                <td><input type="text" value={data.FacultyName} onChange={(e) => {
                    setData({ ...data, FacultyName: e.target.value });
                }} /></td>
            </tr>
            <tr>
                <td className="">FacultyAge</td>
                <td>:</td>
                <td><input type="text" value={data.FacultyAge} onChange={(e) => {
                    setData({ ...data, FacultyAge: e.target.value });
                }} /></td>
            </tr><tr>
                <td className="">FacultyDescription</td>
                <td>:</td>
                <td><input type="text" value={data.FacultyDescription} onChange={(e) => {
                    setData({ ...data, FacultyDescription: e.target.value });
                }} /></td>
            </tr><tr>
                <td className="">FacultyImage</td>
                <td>:</td>
                <td><input type="text" value={data.FacultyImage} onChange={(e) => {
                    setData({ ...data, FacultyImage: e.target.value });
                }} /></td>
            </tr><tr>
                <td className="">FacultyDesignation</td>
                <td>:</td>
                <td><input type="text" value={data.FacultyDesignation} onChange={(e) => {
                    setData({ ...data, FacultyDesignation: e.target.value });
                }} /></td>
            </tr>
            <tr>
                <td colSpan="3"><button className={id ? "btn btn-warning px-5" : "btn btn-success px-5"} onClick={() => {
                    if (id) {
                        fetch("https://65c33697f7e6ea59682c25c9.mockapi.io/Faculty/" + id, {
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            },
                            method: "PUT"
                        }).then(() => { navigate("/api") });
                    } else {
                        fetch("https://65c33697f7e6ea59682c25c9.mockapi.io/Faculty/", {
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            },
                            method: "POST"
                        }).then(() => { navigate("/api") });
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