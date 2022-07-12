import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'
import JobDepartmentService from '../services/JobDepartmentService';

export const CreateEmployeeComponent = () => {

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [jobDepartment, setJobDepartment] = useState(0)
const [jobs, setJobs] = useState([])
const navigate = useNavigate ();

const saveEmployee = (e) => {
    e.preventDefault();

    const employee = {firstName, lastName, email, phone, jobDepartment}
    EmployeeService.createEmployee(employee).then((response) => {
        console.log(response.data);
        navigate('/employees')
    }).catch(error => {
        console.log(error);
    })
}

useEffect(() => {
    JobDepartmentService.getAllJobDepartments().then((response) => {
        setJobs(response.data)
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    })
}, [])


  return (
    <div>
        <br/><br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h1 className='text-center'>Create Employee</h1>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name : </label>
                                <input 
                                    type='text'
                                    placeholder='Enter first name'
                                    name='firstName'
                                    className='form-control'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name : </label>
                                <input 
                                    type='text'
                                    placeholder='Enter last name'
                                    name='lastName'
                                    className='form-control'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email : </label>
                                <input 
                                    type='email'
                                    placeholder='Enter Email'
                                    name='email'
                                    className='form-control'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Phone : </label>
                                <input 
                                    type='text'
                                    placeholder='Enter Phone'
                                    name='phone'
                                    className='form-control'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Job Department : </label>
                                <select className="form-select" name='jobDepartment' onChange={(e) => setJobDepartment(e.target.value)}>
                                    <option value="0" selected={jobDepartment === 0}>Select job department</option>
                                    {
                                        jobs.map(
                                            job => 
                                            <option value={job.id} selected={jobDepartment === job.id}>{job.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveEmployee(e)}>Next</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateEmployeeComponent
