import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'


/*const API = 'https://www.breakingbadapi.com/api/characters'*/


class Characters extends Component {

    
   
    //const [data, setData ] = useState([])

    
  /* state = {
       data: []
     }*/



 /* useEffect(() => {
        getCharacters()
    }, [])*/

/* const getCharacters = async (search) => {
        const response = await fetch(API);
        const data = await response.json();
        setData(data);
        console.log(data)
      }; */

  
   /* componentDidMount() {
      fetch('https://www.breakingbadapi.com/api/characters')
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }*/

    /*return (

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
    ) */

    render() {

      const data  = this.props.data


      return (
        <div className='map-container'>
        { data && data.map((character) => (

            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => this.flippy = r} 
            >

            <FrontSide>
              <div className='style-map' style={{backgroundImage: `url(${character.img})`}}> 
              </div>
            </FrontSide>
            <BackSide>
                <div className='information-container'> 
                  <span className='name'>{character.name} </span> <br/>
                  <div className='information'>
                          Actor name: {character.portrayed} <br/>
                          Nickname:   {character.nickname} <br/>
                          Birthday:   {character.birthday} <br/>
                          Status:     {character.status} 
                  </div>
                </div>
            </BackSide>
            </Flippy>
        ))}
        </div>
      )
    }
  }

export default Characters;