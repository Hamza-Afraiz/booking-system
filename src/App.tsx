import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//src
import { Header, HomePage, Tours,TourDetails ,BookingDetails} from "./pages";
import { theme } from "../src/theme/Theme";

//styles
import "./App.css";
import { useBookedTours } from "./hooks/useBookedTours";

function App() {
const { showBookedTours, isBookedTours } = useBookedTours();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header showBookedTours={showBookedTours} />
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Tours" element={<Tours isBookedTours={isBookedTours} />} />
              <Route path="/TourDetails" element={<TourDetails />} />
              <Route path="/BookingDetails" element={<BookingDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
