import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import JobDepartmentService from '../services/JobDepartmentService'

export const ListJobDepartmentComponent = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        JobDepartmentService.getAllJobDepartments().then((response) => {
            setJobs(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

  return (
    <div className='container'>
        
        <h2 className='text-center'>List Job Departments</h2>
        <Link to = "/create-job-department" className = 'btn btn-primary mb-2'>Create Job Department</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
            </thead>
            <tbody>
                {
                    jobs.map(
                        job => 
                        <tr key = {job.id}>
                            <td>{job.id}</td>
                            <td>{job.name}</td>
                            <td>{job.description}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
