import React, {useEffect, useState} from 'react'

export const AddEmployeeProfessionalQualificationComponent = () => {

    const [company, setCompany] = useState('')
    const [positionHeld, setPositionHeld] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const saveQualifications = (e) => {
        e.preventDefault();
    
        const professionalQualification = {company, positionHeld, description, startDate, endDate}
        console.log(professionalQualification)
    }

  return (
    <div>
        <br/><br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h1 className='text-center'>Academic Qualifications</h1>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Company : </label>
                                <input 
                                    type='text'
                                    placeholder='Enter company name'
                                    name='company'
                                    className='form-control'
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Institute : </label>
                                <input 
                                    type='text'
                                    placeholder='Enter position'
                                    name='positionHeld'
                                    className='form-control'
                                    value={positionHeld}
                                    onChange={(e) => setPositionHeld(e.target.value)}></input>
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
                        
                            <button className='btn btn-success' onClick={(e) => saveQualifications(e)}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
