import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Main />
      <Footer />
    </div>
  );
}
