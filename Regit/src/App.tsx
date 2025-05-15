import "./index.css";
import Header from "./Components/Project_BodyPages/Header.tsx";
import Account from "./Components/Project_BodyPages/Account.tsx";
import useAuth from "./Components/Component_Elements/useAuth.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const isLoggedIn = useAuth();

  return (
    <>
      {!isLoggedIn ? <Account /> : <Header title="Regit"></Header>}
    </>
  );
}

export default App;
