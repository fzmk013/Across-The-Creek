/** @format */
// DOM represents the entire UI of application
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import USers from "./pages/USers";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

import AppLayout from "./ui/AppLayout";
import { ToastBar, Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";

//set up the cache behind the sensce
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // the time that the data in the cache will stay fresh
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        {/* FIGURES OUT WICH ROUTE MATCHS THE URL */}
        <Routes>
          {/* FOR EACH ROUTEs WE HAVE ONE ROUTE ELEMENT */}
           <Route
            // all of these different Routes can only be accessed if protected layout component determines that there is a curremtly logged in user
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          > 
            {/* THIS IS WHAT WE WANT TO SEE AS SOON AS WE OPEN UP THE APP AND GIVE IT THE INDEX ROUTE */}
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
           <Route path="settings" element={<Settings />} />
           </Route> 
           
            <Route path="users" element={<USers />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* pop up nofication */}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
