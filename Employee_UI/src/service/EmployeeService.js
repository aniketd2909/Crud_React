import axios from "axios";

const REACT_APP_EMPLOYEE_API_BASE_URL = "https://localhost:7119/api/Employee";

class EmployeeService {
  addEmployee(employee) {
    return axios.post(REACT_APP_EMPLOYEE_API_BASE_URL, employee);
  }

  getEmployees() {
    return axios.get(REACT_APP_EMPLOYEE_API_BASE_URL);
  }

  deleteEmployee(id) {
    return axios.delete(REACT_APP_EMPLOYEE_API_BASE_URL + "/" + id);
  }

  getEmployeeById(id) {
    return axios.get(REACT_APP_EMPLOYEE_API_BASE_URL + "/" + id);
  }

  updateEmployee(employee, id) {
    return axios.put(REACT_APP_EMPLOYEE_API_BASE_URL + "/" + id, employee);
  }
}

export default new EmployeeService();
