import {useState, useEffect} from 'react';

function App2() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');
  useEffect(() => {
    console.log('call the api');
  },[]);
  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5){
      console.log("i run when 'keyword' changes");
    }
  }, [keyword]);
  useEffect(()=>{
    if(counter !== 0){
      console.log("i run when 'counter' changes");
    }
  }, [counter]);
  return (
    <div className="App">
      <input
      value={keyword} 
      onChange={onChange} 
      type="text" 
      placeholder="Search here...."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App2;
