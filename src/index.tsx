import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import He from "./pages/Translate/he.json"
import Ru from "./pages/Translate/ru.json"
import En from "./pages/Translate/en.json"
import i18next from "i18next";
import { I18nextProvider } from 'react-i18next'

i18next.init({
    interpolation: {escapeValue: false},
    lng: "ru",
    resources:{
        ru:{
            global:Ru,
        },
        en:{
            global:En,
        },
        he:{
            global: He,
        },
    },
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
        <App />
        </I18nextProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

reportWebVitals();