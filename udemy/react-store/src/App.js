import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import "./App.css";
import "./main.styles.scss";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/signin/signin";

// const Navigation = () => {
//   return (
//     <div>
//       <div>
//         <h1>I am the Navigation bar</h1>
//       </div>
//      <Outlet />
//     </div>
//   );
// };

const Shop = () => {
  return <h1>I am shop Page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
