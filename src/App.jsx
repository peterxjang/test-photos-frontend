import axios from "axios";
import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { PhotosPage } from "./PhotosPage";
import { Footer } from "./Footer";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://test-photos-api.onrender.com";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <SignupPage />
      <LoginPage />
      <PhotosPage />
      <Footer />
    </div>
  );
}

export default App;
