import React, {useEffect, useState} from 'react'

function Information( {name, occupation}) {

    const API = 'https://www.breakingbadapi.com/api/characters'
    const [data, setData ] = useState([])

  useEffect(() => {
        getInformation()
    }, [])

 const getInformation = async (search) => {
        const response = await fetch(API);
        const data = await response.json();
        setData(data);
        console.log(data)
      }; 

    return (

        <div>
            <h1 className='info'>{data.name}</h1>
            
        </div>
    )
}

export default Information