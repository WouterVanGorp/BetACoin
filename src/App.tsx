import "./styles/App.css";
import { Header } from "./components";
import { Router } from "./Router";

export default function App() {
  return (
    <div>
      <Header />
      <div>
        <Router />
      </div>
    </div>
  );
}
