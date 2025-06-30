import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router/Router.jsx";
import { LanguageProvider } from './components/LanguageContext.jsx'
// TanStack Query
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LanguageProvider>
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
        </LanguageProvider>
    </React.StrictMode>
);