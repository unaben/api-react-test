import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { IUserData } from "./models/IUserDataModel";
import CreateUser from "./components/CreateUser/CreateUser";
import UsersComponents from "./components/UserComponent/UsersComponent";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [usersData, setUsersData] = useLocalStorage<IUserData[]>("DATA", []);
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <Container
      className="container-fluid"
      style={{ fontFamily: "Courgette, cursive" }}
    >
      <header>
        <Header />
      </header>
      <main className="d-flex " style={{ width: "100%" }}>
        <section className="mb-2" style={{ width: "30%" }}>
          <CreateUser
            users={usersData}
            setUsers={setUsersData}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </section>
        <section style={{ width: "70%" }}>
          <UsersComponents
            searchTerm={searchTerm}
            usersData={usersData}
            setUsersData={setUsersData}
          />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
};

export default App;
