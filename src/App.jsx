import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ErrorScreen from "./components/Error/ErrorScreen";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<ErrorScreen type={"404"} />} />
      </Routes>
    </>
  );
}
