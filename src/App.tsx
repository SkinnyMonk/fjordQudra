import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "@/components/layout/layout";
import Home from "./pages/home";
import FinancialReport from "./pages/financialReport";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="financial-report" element={<FinancialReport />} />
          <Route
            path="*"
            element={<Navigate to="/financial-report" replace />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
