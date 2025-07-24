import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const data=async()=>{
    fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);
  }
  useEffect(()=>{
    data();
  })
  return (
      <div>
        
      </div>
  );
}

export default App;
