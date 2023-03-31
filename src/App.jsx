import { useState, useEffect } from 'react'
import Box from './components/Box'

function App() {
    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState(null)

    useEffect(()=>{
        fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((json)=> {setQuotes(json), setQuote(json[0])})
    },[])

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }
    console.log(quote)
    function handleClick(){
        setQuote(getRandomQuote)
    }
    return (
        <div className="App">
            <h1>Project 3: Quote Generator</h1>
            <Box 
                quote={quote} 
                handleClick={handleClick}
            />
        </div>
    )
}

export default App
