import "./App.css";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import Api from "./components/Api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await Api(term);
    setImages(result);
  };

  return (
    <div className="app">
      <SearchBar search={handleSubmit} />
      <ImageList imageHolder={images} />
    </div>
  );
}

export default App;
