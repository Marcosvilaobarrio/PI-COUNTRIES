import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createActivity, getCountries } from '../../actions'
import './CreateActivity.css'



export default function CreateActivity() {
    const history = useHistory()
    const country = useSelector((state)=> state.countries)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCountries())
    }, [dispatch])

    
    const [input, setInput] = useState({
        name : '',
        season : '',
        difficulty : '',
        duration : '',
        countries : []
    })

    const handleSeason = (e) => {
        setInput({
            ...input, season : e.target.value
        })
    }

    const handleChange = (e) => {
        setInput({
            ...input, [e.target.name] : e.target.value
        })
        
        
    }
    


    const countries = country.sort((a, b)=>{
        if(a.name > b.name){
           return  1
        }
        if (b.name > a.name){
            return -1
        }
        return 0
    })

    const handleDifficulty = (e) => {
        setInput({
            ...input, difficulty : e.target.value
        })
    }

    const handleDuration = (e) => {
        setInput({
            ...input, duration : e.target.value
        })
    }

    const handleCountries = (e) =>{
        setInput({
            ...input,
            countries : [...input.countries, e.target.value]
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(createActivity(input))
        setInput({
            name : '',
            season : '',
            difficulty : '',
            duration : '',
            countries : []
        })
        history.push('/home')
    }

    const handleCancel = (e)=>{
        e.preventDefault();
        setInput({
            name : '',
            season : '',
            difficulty : '',
            duration : '',
            countries : []
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        history.push('/home')
    }

    
    
    const countryList = countries.map((country)=>country.name)
    const season = ['Winter', 'Spring', 'Autumn', 'Summer']
    const difficulty = [1, 2, 3, 4 , 5]
    const duration = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  return (
    <div className='box'>

        <div className='container1'>
            <button onClick={handleClick}>Back</button>
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <label>Activity: </label>
                <input type="text" value={input.name} name='name' onChange={handleChange}/> 
            </div>
            {input.name === '' ? <p>This field must be completed</p> : null}
            <div>
                <label>Season: </label>
                <select onChange={handleSeason}>
                    <option value="" hidden>Select season</option>
                    {season.map((s)=>(
                        <option value={s} name='season' key={s}>{s}</option>
                    )
                    )}
                </select>
                {input.season === '' ? <p>This field must be completed</p> : null}
            </div>
            <div>
                <label>Difficulty: </label>
                <select onChange={handleDifficulty}>
                    <option value="" hidden>Select difficulty</option>
                    {
                        difficulty.map((d)=>(
                            <option value={d} name='difficulty' key={d}>{d}</option>
                        ))
                    }
                </select>
                {input.name === '' ? <p>This field must be completed</p> : null}
            </div>
            <div>
                <label>Duration: </label>
                <select onChange={handleDuration}>
                    <option value="" hidden>Select duration</option>
                    {
                    duration.map((d)=>(
                        <option value={d} name='duration' key={d}>{d}</option>
                    ))}
                </select> 
            </div>
            {input.name === '' ? <p>This field must be completed</p> : null}
            <div>
                <label>Countries: </label>
                <select onChange={handleCountries}>
                    <option value="" hidden>Select countries</option>
                    {
                        countryList.map((c)=>(
                            <option value={c} name='countries' key={c}>{c}</option>
                        ))
                    }
                </select>
                {input.countries.length === 0 ? <p>This field must be completed</p> : null}
                <p>{input.countries}</p>
            </div>
            
            <button className='button' onClick={handleSubmit}>Create activity</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
        </div>       
    </div>
  )
}
