import "./App.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [userInfo, setUserInfo] = useState([{name: "JohnDoe"}]);

  const handleSubmit = () => {};

  return (
    <div className="App">
      <h2>Github User Information</h2>
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a name..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit">Go</button>
        </form>
      </header>
      {userInfo.length>0 && (
        <div className="user-info">
          {userInfo.map((k, i) => {
            return (
              <div key={i}>
                <div>Name: {k.name}</div>
                <div>Other: other info</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
