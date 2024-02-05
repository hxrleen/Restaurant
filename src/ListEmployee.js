import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function ListEmployee() {
  const [employees, setEmployee] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7065/api/Employee")
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  }, []);
  return (
    <div>
      <h4>
        <Link to="/create">Create</Link>
        <h2>Employees Data...</h2>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Department</td>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <select>
          {employees.map((emp) => (
            <option>{emp.email}</option>
          ))}
        </select>
      </h4>
    </div>
  );
}
