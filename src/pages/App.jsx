import { Route, Routes } from "react-router-dom";
import { MoviePage } from "./MoviePage";
import { LandingPage } from "./LandingPage";
import { ProvideController } from "../Controller";
import AuthPage from "./AuthPage/AuthPage";

function App() {
  return (
<<<<<<< HEAD:src/pages/App.jsx
    <div className="App">
      {}
      <h1>DaMaFe movies</h1>
=======
    <div className="App w-full h-full ">
      <h1 className="text-4xl font-bold text-center p-8 mb-16">
        DaMaFe movies
      </h1>
>>>>>>> db7f2e4b8f6ba59fc7a6a574a5961cb757236741:src/App.jsx
      <ProvideController>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:id" element={<MoviePage />} />
        </Routes>
      </ProvideController>
      :
      <AuthPage />
    </div>
  );
}

export default App;
