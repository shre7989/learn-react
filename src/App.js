import "./App.css";
import List from "./List";
import SearchBar from "./SearchBar";
import { useState } from "react";
import jsonData from "./publicAPIList.json";

function App() {
  const [apiList, setApiList] = useState(jsonData.entries);

  return (
    <div className="App">
      <SearchBar changeList={setApiList} data={jsonData.entries} />
      <List data={apiList} />
    </div>
  );
}

export default App;
