import { useState } from "react";

const Form = () => {
    const [faculty, setFaculty] = useState(["yagnik", "raj"]);
    const [data, setData] = useState("");
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
                                e.preventDefault();
                                setFaculty([...faculty, data]);
                                setData("");
                            }
                            }></input>
                        </td>
                    </tr>
                </table>
            </form>
            <ul>
                {faculty.map((fac) => { return <li>{fac}</li> })}
            </ul>
        </>);
}

export default Form;