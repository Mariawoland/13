import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app";
import Mtavari from "./mtavari";
import Kontaqti from "./kontaqti";
import Shesaxeb from "./shesaxeb";
import "./index.css";

export default function File() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Mtavari />} />
          <Route path="kontaqti" element={<Kontaqti />} />
          <Route path="shesaxeb" element={<Shesaxeb />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<File />);