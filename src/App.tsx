import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Route, Routes } from "react-router-dom";
import ContactMe from "./Pages/ContactMe";
import Details from "./Pages/Details";
import Hobbies from "./Pages/Hobbies";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import { HeaderSimple } from "./Components/HeaderSimple/HeaderSimple";
import { FooterCentered } from "./Components/FooterCentered/FooterCentered";

function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });
  return (
    <MantineProvider theme={theme}>
      <HeaderSimple />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="ContactMe" element={<ContactMe />} />
        <Route path="Hobbies" element={<Hobbies />} />
        <Route path="Details" element={<Details />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <FooterCentered />
    </MantineProvider>
  );
}

export default App;
