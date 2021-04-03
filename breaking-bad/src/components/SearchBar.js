import React, {useState, useEffect} from 'react'



function SearchBar() {

 const [data, setData ] = useState([])
 const [search, setSearch] = useState('')

 const URL_API = `https://www.breakingbadapi.com//api/characters?name=${search}`

 const fetch = async (search) => {
    const response = await fetch(URL_API);
    const data = await response.json();
    setData(data);
 }

 

 const getSearch = (e) => {
     setSearch(e.target.value)
 }
 console.log(search, 'katia')

 const getResult = (e) => {
     e.preventDefault()
     fetch(search)     
     console.log(e, 'hello')
 }



/* useEffect((e) => {
    getResult();
  }, [] );*/
 
  

    return (

        <div>
            <form >
                <input onSubmit={(e) => getResult(e) } onChange={getSearch}  type='text' placeholder='Search characters...' className='styling-search'>
                </input>
            </form>
        </div>
    )
    }

export default SearchBar