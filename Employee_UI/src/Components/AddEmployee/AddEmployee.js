import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import EmployeeService from "../../service/EmployeeService";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddEmployee.css";

function AddEmployee() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });
  const handleChange = (event) => {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };
  const addEmployee = async () => {
    try {
      await EmployeeService.addEmployee(employee).then(() => {
        console.log("added");
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add__form">
      {" "}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            placeholder="Enter First Name "
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email </Form.Label>
          <Form.Control
            name="email"
            value={employee.email}
            type="email"
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phone"
            value={employee.phone}
            type="number"
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Control
            name="department"
            value={employee.department}
            type="text"
            onChange={handleChange}
            placeholder="Enter department"
          />
        </Form.Group>
        <Button onClick={addEmployee} variant="success">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddEmployee;
