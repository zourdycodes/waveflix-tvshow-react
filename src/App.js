import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Detailspage from "./pages/Detailspage";
import Aboutpage from "./pages/Aboutpage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={Aboutpage} />
          <Route path="/details_view/:id" component={Detailspage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

// const Container = styled.div``;
