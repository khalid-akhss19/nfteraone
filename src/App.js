import "./App.css";
import Routers from "./Routers";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} />
      <Routers />
      <ThemeProvider />
    </div>
  );
}

export default App;
