import "./App.css";
import Body from "./components/Body";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
