import "./styles/App.css";
import { Header } from "./shared/components";
import { Router } from "./Router";

export default function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}
