    import React, { useState } from "react";
    import { Link } from "react-router-dom";

    function Read() {
    const [formData, setFormData] = useState(
        JSON.parse(localStorage.getItem("formData"))
    );
    const [editingIndex, setEditingIndex] = useState();

    const handleEdit = (index) => {
        setEditingIndex(index);
    };

    const handleSave = (index) => {
        setEditingIndex();
        localStorage.setItem("formData", JSON.stringify(formData));
    };

    const handleDelete = (index) => {
        const newData = formData.filter((_, i) => i !== index);
        setFormData(newData);
        localStorage.setItem("formData", JSON.stringify(newData));
    };

    return (
        <div className="border rounded p-3 shadow-sm mt-3">
        <div className="d-flex justify-content-between mt-3">
            <h2>Read Data</h2>
            <Link to="/">
            <button className="btn btn-warning">Create</button>
            </Link>
        </div>
        <div >
            <table className="table">
            <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {formData.map((data, index) => (
                <tr key={index}>
                    <td>
                    {editingIndex === index ? (
                        <input
                        type="text"
                        value={data.firstName}
                        onChange={(e) => {
                            const updatedData = [...formData];
                            updatedData[index].firstName = e.target.value;
                            setFormData(updatedData);
                        }}
                        />
                    ) : (
                        data.firstName
                    )}
                    </td>
                    <td>
                    {editingIndex === index ? (
                        <input
                        type="text"
                        value={data.lastName}
                        onChange={(e) => {
                            const updatedData = [...formData];
                            updatedData[index].lastName = e.target.value;
                            setFormData(updatedData);
                        }}
                        />
                    ) : (
                        data.lastName
                    )}
                    </td>
                    <td>
                    {editingIndex === index ? (
                        <input
                        type="text"
                        value={data.email}
                        onChange={(e) => {
                            const updatedData = [...formData];
                            updatedData[index].email = e.target.value;
                            setFormData(updatedData);
                        }}
                        />
                    ) : (
                        data.email
                    )}
                    </td>
                    <td>
                    {editingIndex === index ? (
                        <input
                        type="text"
                        value={data.phone}
                        onChange={(e) => {
                            const updatedData = [...formData];
                            updatedData[index].phone = e.target.value;
                            setFormData(updatedData);
                        }}
                        />
                    ) : (
                        data.phone
                    )}
                    </td>
                    <td>
                    {editingIndex === index ? (
                        <button
                        className="btn btn-success"
                        onClick={() => handleSave(index)}
                        >
                        Save
                        </button>
                    ) : (
                        <>
                        <button
                            className="btn btn-primary"
                            onClick={() => handleEdit(index)}
                        >
                            Edit
                        </button>
                        </>
                    )}
                    </td>
                    <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(index)}
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
    }
    export default Read;
