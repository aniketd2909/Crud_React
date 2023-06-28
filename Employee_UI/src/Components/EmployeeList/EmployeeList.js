import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import EmployeeService from "../../service/EmployeeService";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const getEmployeesData = async () => {
      try {
        await EmployeeService.getEmployees().then((response) => {
          setEmployees(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getEmployeesData();
  }, []);

  const updateEmployee = (event, id) => {
    event.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  const deleteEmployee = async (event, id) => {
    try {
      await EmployeeService.deleteEmployee(id).then((response) => {
        const fetchData = async () => {
          try {
            const response = await EmployeeService.getEmployees();
            setEmployees(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      });
    } catch (error) {
      console.log(error);
    }
  };
  const addEmployeePage = () => {
    navigate("/addEmployee");
  };

  return (
    <div>
      <br />
      &nbsp; &nbsp;
      <Button onClick={addEmployeePage} variant="primary">
        Add Employee
      </Button>
      <br />
      <br />{" "}
      <div className="employee__table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees?.map((employee, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <th>{employee.department}</th>
                <th>
                  <Button
                    onClick={(event) => updateEmployee(event, employee.id)}
                    variant="primary">
                    Update
                  </Button>
                  &nbsp; &nbsp;
                  <Button
                    onClick={(event) => deleteEmployee(event, employee.id)}
                    variant="danger">
                    Delete
                  </Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default EmployeeList;
