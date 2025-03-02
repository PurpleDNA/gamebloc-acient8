import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Provider from "./Context/context.tsx";
import { Web3Provider } from "./components/Auth/Web3Provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Web3Provider>
      <Provider>
        <App />
      </Provider>
    </Web3Provider>
  </StrictMode>
);
