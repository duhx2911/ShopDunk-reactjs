import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";

import store from "./stores";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#a000d5",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
