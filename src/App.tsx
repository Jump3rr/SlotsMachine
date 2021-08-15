import "./styles.css";
import { Machine } from "./components/Machine/machine";
import { Provider } from "react-redux";
import store from "./tools/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Machine />
      </div>
    </Provider>
  );
}
