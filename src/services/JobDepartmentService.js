import axios from "axios";

const JOB_DEPARTMENT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/job';

class JobDepartmentService {
    getAllJobDepartments() {
        return axios.get(JOB_DEPARTMENT_BASE_REST_API_URL + '/all');
    }

    createJobDepartment(jobDepartment) {
        return axios.post(JOB_DEPARTMENT_BASE_REST_API_URL, jobDepartment)
    }
}

export default new JobDepartmentService();