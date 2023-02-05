import React from 'react'
import Header from './components/Header'
import data from './data'
import Main from './components/Main'

function App() {
    const viajes = data.map(item => {
        return (
            <Main
                key={item.id}
                item={item}/>
        )
    })
    
    return (
        <div> 
            <Header/>
            <section className="main">
                {viajes}
            </section>
           
        </div>  
    )
}

export default App;