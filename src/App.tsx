import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default App;
