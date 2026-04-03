import React,{ useState }  from "react";
import '../App.css';
function Chat(){
    const [prompt,setPrompt]=useState('')
    const [answer,setAnswer]=useState('Here is the answer')
    
        const generateAnswer=async()=>{
            try{
    
                const response=await fetch(`http://localhost:8080/ask-ai?prompt=${prompt}`)
                console.log(response)
                const ans=await response.text()
                setAnswer(ans)
    
            }catch(error){
                console.log('Error generating the answer: ',error)
            }
        };
    
        return (
            <div className="tab-content"> 
                <h2>Talk to AI </h2>
                <input 
                    type="text"
                    value={prompt}
                    onChange={(e)=>setPrompt(e.target.value)}
                    placeholder="Enter Prompt"
                />
                
                    <button onClick={generateAnswer}>Generate Answer</button>
                    <div className="output">{answer}</div>
                
            </div>
    
    
        )
}

export default Chat;