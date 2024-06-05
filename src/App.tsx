import { FC, Suspense } from "react";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.ts";

const App: FC = () => {
  return (
    <Suspense>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
};

export default App;
