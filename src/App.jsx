import React from "react";
import RouterDom from "./router";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import Notification from "./components/notification";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RouterDom />
        <Notification />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
