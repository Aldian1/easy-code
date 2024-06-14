import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SupabaseAuthProvider } from "./integrations/supabase/auth.jsx";

const colors = {
  brand: {
    900: "#1a202c",
    800: "#2d3748",
    700: "#4a5568",
  },
  background: {
    900: "#171923",
    800: "#1a202c",
    700: "#2d3748",
  },
  text: {
    900: "#f7fafc",
    800: "#e2e8f0",
    700: "#cbd5e0",
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: "background.900",
        color: "text.900",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SupabaseAuthProvider>
        <App />
      </SupabaseAuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
