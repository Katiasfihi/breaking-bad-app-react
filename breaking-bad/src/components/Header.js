import React from 'react'



function Header( {getMyData} ) {
    


    return (

        <div>
         <header onClick={() => getMyData()}>
            <img  src='/breaking-bad-logo.png' className="App-logo" alt="logo" />
         </header>
        </div>
    )
}

export default Header