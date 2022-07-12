import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employee';

class EmployeeService {
    
    getAllEmployees() {
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/all');
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
    }
}

export default new EmployeeService();