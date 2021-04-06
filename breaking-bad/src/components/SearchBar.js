import React, {useState, useEffect} from 'react'
import Characters from './Characters'



function SearchBar() {

 const [data, setData ] = useState([])
 const [search, setSearch] = useState('')

 const URL_API = `https://www.breakingbadapi.com/api/characters?name=${search}`
 const API = 'https://www.breakingbadapi.com/api/characters'



 const getMyData = async (ifCalledFromGetResult) => {
     

    const dynamicUrl = ifCalledFromGetResult ? URL_API : API

    const response = await fetch(dynamicUrl);
    const data = await response.json();
    setData(data);
 }


 const getSearch = (e) => {
     setSearch(e.target.value)
 }

 const getResult = (e) => {
     e.preventDefault()
     getMyData(true)     
 }

 

useEffect((e) => {
    getMyData()
  }, [] );
  

    return (

        <div>
            <form onSubmit={getResult}>
                <input  onChange={getSearch}  type='text' placeholder='Search characters...' className='styling-search'>
                </input>
            </form>
            <Characters data={data} setData={setData} />
        </div>
    )
    }

export default SearchBar