import React , {useEffect,useRef} from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  },[])
  return (
    <div className="App">
      <input
        placeholder={"Placeholder"}
        className={"input"} 
        ref={inputRef}
      />
    </div>
  );
}

export default App;
