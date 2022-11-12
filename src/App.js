import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import "./Styles/App.css";

function App() {
  return (
    <>
      <main style={{ maxWidth: "1440px" , margin:"0 auto" }}>
        <RouterProvider router={router}></RouterProvider>
      </main>
    </>
  );
}

export default App;
