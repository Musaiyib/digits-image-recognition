import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="App">
      <h2>Image recognition system using ai</h2>
      <div className="image">
        <input type="file" onChange={handleImageChange} accept="image/*" />
        <br />
        <br />
        {image && <img src={image} alt="Uploaded-pic" />}
      </div>
      <div className="recognise-text">{text && <p>{text}</p>}</div>
    </div>
  );
}

export default App;
