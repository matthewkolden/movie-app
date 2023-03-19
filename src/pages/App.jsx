import { Route, Routes } from "react-router-dom";
import { MoviePage } from "./MoviePage";
import { LandingPage } from "./LandingPage";
import { ProvideController } from "../Controller";
import AuthPage from "./AuthPage/AuthPage";

function App() {
  return (
    <div className="App">
      {}
      <h1>DaMaFe movies</h1>

      <div className="App w-full h-full ">
        <h1 className="text-4xl font-bold text-center p-8 mb-16">
          DaMaFe movies
        </h1>
        <ProvideController>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/:id" element={<MoviePage />} />
          </Routes>
        </ProvideController>
        :
        <AuthPage />
      </div>
    </div>
  );
}

export default App;
