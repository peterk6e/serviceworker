import "./App.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://api.github.com/users/" + name)
      .then((data) => data.json())
      .then((data) => setUserInfo(data));
  };

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
      {Object.keys(userInfo).length > 0 && (
        <table className="user-info">
          <tbody>
            <tr>
              <td>
                <img src={userInfo.avatar_url} width="50px" alt="" />
              </td>
              <td>
                <b> <h3>{userInfo.login}</h3></b>
              </td>
            </tr>
            {Object.entries(userInfo).map(([k, v], i) => {
              return (
                <tr key={i}>
                  <td>{k}</td>
                  <td>{v}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
