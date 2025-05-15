import "./index.css";
import Header from "./Components/Project_BodyPages/Header.tsx";
import DatabaseOperations from "./Components/Class/DatabaseOperations";
import Login from "./Components/Project_BodyPages/Login.tsx"
import useAuth from "./Components/Component_Elements/useAuth.tsx"

function App() {
  const database = DatabaseOperations.getInstance();
  const isLoggedIn = useAuth();

  return (
    <>
      {!isLoggedIn ? <Login/> : <Header title="Regit"></Header>}
    </>
  );
}

export default App;
