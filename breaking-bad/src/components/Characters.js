import React, { useState, useEffect } from 'react'


function Characters() {

    const API = 'https://www.breakingbadapi.com/api/characters'
    const [data, setData ] = useState([])

  useEffect(() => {
        getCharacters()
    }, [])

 const getCharacters = async (search) => {
        const response = await fetch(API);
        const data = await response.json();
        setData(data);
        console.log(data)
      }; 

    return (

        <div className='map-container'>
                     
                {data.map((character) => (      
                                
                   <span className='style-map' 
                   style={{backgroundImage: `url(${character.img})`}}> 
                 
                   
                    <span className='information-container'> 
                            <span className='name'>{character.name} </span> <br/>
                            <div className='information'>
                            Actor name: {character.portrayed} <br/>
                            Nickname: {character.nickname} <br/>
                            Birthday: {character.birthday} <br/>
                            Status: {character.status} 
                            </div>
                     </span>
                     </span>
                   
                ))}
            
        </div>
    )
}

export default Characters