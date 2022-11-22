import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getNameCountry } from '../../actions'
import styles from './SearchBar.module.css'


export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleChange = (e)=>{
        setName(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(getNameCountry(name))
    }

    


  return (
    <form className={styles.container}>
        <input onChange={handleChange} onSubmit={handleSubmit} className={styles.searchBar} type="text" placeholder='SEARCH...'/>
        <button  onClick={handleSubmit} className={styles.btn}></button>
    </form>
  )
}
