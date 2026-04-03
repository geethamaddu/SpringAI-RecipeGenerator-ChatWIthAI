import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Chat from './components/Chat';
import RecipeGenerator from './components/RecipeGenerator';

function App() {

const [activeTab, setActiveTab]=useState('chat-bot');

const handleTabChange=(tab)=>{
  //alert(tab)
  setActiveTab(tab)
}

  return (
    <div className="App">
        <button className={activeTab==='chat-bot'? 'active':''}  
        onClick={()=>handleTabChange('chat-bot')}>Chat with Bot</button>
        <button className={activeTab==='recipe-generator'? 'active':''}  onClick={()=>handleTabChange('recipe-generator')}>Recipe Generator</button>

        <div>
          {activeTab==='chat-bot' && <Chat/>}
          {activeTab==='recipe-generator' && <RecipeGenerator/>}
        </div>

    </div>
  );
}

export default App;
