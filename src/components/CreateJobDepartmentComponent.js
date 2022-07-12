import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import JobDepartmentService from '../services/JobDepartmentService'

export const CreateJobDepartmentComponent = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate ()

    const saveJobDepartment = (e) => {
        e.preventDefault();
    
        const jobDepartment = {name, description}
        JobDepartmentService.createJobDepartment(jobDepartment).then((response) => {
            console.log(response.data)
            navigate('/job-departments')
        }).catch(error => {
            console.log(error)
        })
    }

  return (
    <div>
        <br/><br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h1 className='text-center'>Create Job Department</h1>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Name : </label>
                                <input 
                                    type='text'
                                    placeholder='Enter Name'
                                    name='name'
                                    className='form-control'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Description : </label>
                                <input 
                                    type='text'
                                    placeholder='Enter Description'
                                    name='description'
                                    className='form-control'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}></input>
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveJobDepartment(e)}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
