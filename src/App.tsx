import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new" component={New} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
