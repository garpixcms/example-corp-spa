import {Route, Switch} from "react-router-dom";
import Combine from "./pages/Combine";
import {PATHS} from "./const";
import './bootstrap.min.css';
import './bootstrap.rtl.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './footer.css';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path={PATHS.ALL.path} render={(props) => <Combine {...props} {...PATHS.ALL} />} />
    </Switch>
  );
}

export default App;
