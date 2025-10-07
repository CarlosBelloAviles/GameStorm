import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";
import FirebaseServices from "./config/firebase-services.jsx";
import { firebaseConfig } from "./config/firebase.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Provider store={store}>
        <FirebaseServices>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FirebaseServices>
      </Provider>
    </FirebaseAppProvider>
  </StrictMode>
);
