import React from "react";
import RouterDom from "./router";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import Notification from "./components/notification";
import { toastSuccess, toastError } from "./redux/toastSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const successToast = () => {
    dispatch(toastError("hello word"));
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <RouterDom />
      <button onClick={successToast}>Notify</button>
      <Notification />
    </React.Fragment>
  );
}

export default App;
