import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import New from "./pages/New";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new" component={New} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
