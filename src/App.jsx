import "./App.css";
import { FaSistrix } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null)
  const searchHandler = (e) => {
    e.preventDefault();

    if(query.trim().length === 0){
      setError('Please enter a search query')
    }
    console.log(query);
  };
  return (
    <div className="app">
      <h1 style={{marginBottom: '2rem'}}>Temitayo's Search Bar</h1>
      <form onSubmit={searchHandler} className="search">
        <div style={{marginBottom: '2rem'}}>
          <input
            value={query}
            className="search-box form-control"
            type="text"
            placeholder="Enter seach query here"
            onChange={(e) => {setQuery(e.target.value); if(error) {setError(null)}}}
          />
          {error ? <p  style={{color: 'red'}}>{error}</p> : ''}
        </div>
        <button type='submit' className='submit-btn'>
          <FaSistrix />{" "}
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
