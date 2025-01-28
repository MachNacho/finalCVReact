import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { NotFoundTitle } from "./Components/FourOFour/NotFoundTitle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderSimple } from "./Components/HeaderSimple/HeaderSimple";
import ContactMe from "./Pages/ContactMe";
import Details from "./Pages/Details";
import Hobbies from "./Pages/Hobbies";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";

function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="ContactMe" element={<ContactMe />} />
          <Route path="Hobbies" element={<Hobbies />} />
          <Route path="Details" element={<Details />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
