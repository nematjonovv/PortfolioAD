import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import global_en from "./Translations/en.json";
import global_uz from "./Translations/uz.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { MyProvider } from "./Context/Context.jsx";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    uz: {
      global: global_uz,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <MyProvider>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </MyProvider>
);
