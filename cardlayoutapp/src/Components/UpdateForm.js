import { useState } from "react";

const Updateform = () => {
    const [faculty, setFaculty] = useState(["yagnik", "raj"]);
    const [data, setData] = useState("");
    const [index, setIndex] = useState(-1);
    const submitHandler = (e) => {
        e.preventDefault();
        if (index === -1) {
            setFaculty([...faculty, data]);
        } else {
            const updateFaculty = [...faculty];
            updateFaculty[index] = data;
            setFaculty(updateFaculty);
        }
        setIndex(-1)
        setData("");
    }
    const handleEdit = (i) => {
        setData(faculty[i]);
        setIndex(i);
    }
    const handleDelete = (index) => {
        const newfaculty = faculty.filter((_, i) => index !== i)
        setFaculty(newfaculty)
    }
    return (
        <>
            <form>
                <table>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            <label>:</label>
                        </td>
                        <td>
                            <input type="text" value={data} onChange={(e) => {
                                setData(e.target.value)
                            }
                            } />
                        </td>
                        <td>
                            <input className="btn btn-info p-1" type="submit" onClick={(e) => {
                                submitHandler(e);
                            }
                            }></input>
                        </td>
                    </tr>
                </table>
            </form>
            <ul>
                {faculty.map((fac, i) => {
                    return (
                        <li>{fac}
                            <span><button onClick={() => { handleEdit(i) }} className="btn btn-warning p-1 m-1">Edit</button></span>
                            <span><button onClick={() => { handleDelete(i) }} className="btn btn-danger p-1 m-1">Delete</button></span>
                        </li>)
                })}
            </ul>
        </>);
}

export default Updateform;