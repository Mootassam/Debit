import Debit from "./components/Debit/Debit";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Debit />
    </Provider>
  );
}

export default App;
