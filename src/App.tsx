import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./_auth/AuthLayout";
import SignupForm from "./_auth/forms/SignupForm";
import SinginForm from "./_auth/forms/SinginForm";
import RootLayout from "./_root/RootLayout";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public route */}
        <Route element={<AuthLayout />}>
          <Route path="sign-in" element={<SinginForm />} />
          <Route path="sign-up" element={<SignupForm />} />
        </Route>

        {/* Private routes */}
        <Route element={<RootLayout />}>
          
        </Route>
      </Routes>
    </main>
  );
}

export default App;
