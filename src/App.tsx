import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <GlobalStyle />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
