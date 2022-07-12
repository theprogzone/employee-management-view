import React, {useEffect, useState} from 'react'

export const AddEmployeeQualificationComponent = () => {

    const [qualification, setQualification] = useState('')
    const [institute, setInstitute] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const saveQualifications = (e) => {
        e.preventDefault();
    
        const academicQualification = {qualification, institute, description, startDate, endDate}
        console.log(academicQualification)
    }

  return (
    <div>
        <br/><br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h1 className='text-center'>Professional Qualifications</h1>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Degree/Diploma : </label>
                                <input 
                                    type='text'
                                    placeholder='Enter degree/diploma'
                                    name='qualification'
                                    className='form-control'
                                    value={qualification}
                                    onChange={(e) => setQualification(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Institute : </label>
                                <input 
                                    type='text'
                                    placeholder='Enter last name'
                                    name='institute'
                                    className='form-control'
                                    value={institute}
                                    onChange={(e) => setInstitute(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Description : </label>
                                <textarea value={description}
                                    onChange={(e) => setDescription(e.target.value)} 
                                    class="form-control" 
                                    rows="3"></textarea>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Start date : </label>
                                <input 
                                    type='text'
                                    name='startDate'
                                    className='form-control'
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>End date : </label>
                                <input 
                                    type='text'
                                    name='endDate'
                                    className='form-control'
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}></input>
                            </div>
                        
                            <button className='btn btn-success' onClick={(e) => saveQualifications(e)}>Next</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
