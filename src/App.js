
import React ,{useState} from 'react';

function App() {
  const [email,setEmail] = useState();
  const [name,setName] = useState();

  function handlerEmail(e){
      setEmail(e.target.value)
  }
  function handlerName (e){
    setName(e.target.value)
  }
  return (
    <div className="main">
      <input value={email} onChange={handlerEmail}>
        
      </input>
      <input value={name} onChange={handlerName}>

      </input>

      <p>Email: {email}</p>
      <p>Name : {name}</p>
    </div>
  );
}

export default App;
