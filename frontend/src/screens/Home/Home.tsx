import React from "react";
import { useEffect, useState, useRef } from "react";
import TrashIcon from "./assets/red-trash-can-icon.png";
import api from "../../services/api";
import { create } from "domain";

const Home: React.FC = () => {
  interface User {
    id: string;
    name: string;
    email: string;
    age: string;
  }
  const [users, setUsers] = useState<User[]>([]);

  const inputName = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);

  async function getUsers() {
    const usersFromAPI = await api.get("/usuarios");
    setUsers(usersFromAPI.data);
  }

  async function createUser() {
    if (inputName.current && inputAge.current && inputEmail.current) {
      await api.post("/usuarios", {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value,
      });
      getUsers();
    }
  }

  async function deleteUser(id: string) {
    await api.delete(`/usuarios/${id}`);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-slate-800 to-orange-200 h-screen w-screen">
        <div className="flex align-middle items-center flex-col">
          <form className="flex space-y-2 bg-slate-300 rounded-xl flex-col p-6 m-8 align-middle items-center max-w-80">
            <h1 className="font-bold text-xl">Cadastro</h1>
            <input
              name="name"
              type="text"
              placeholder="Nome"
              className="p-2 rounded-sm bg-slate-200"
              ref={inputName}
            />
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              className="p-2 rounded-sm bg-slate-200"
              ref={inputEmail}
            />
            <input
              name="age"
              type="number"
              placeholder="Idade"
              className="p-2 rounded-sm bg-slate-200"
              ref={inputAge}
            />
            <button
              onClick={createUser}
              className="bg-slate-700 p-4 text-white rounded-md"
            >
              Registrar
            </button>
          </form>

          {users.map((user) => (
            <div
              key={user.id}
              className="bg-slate-300 min-w-60 p-2 flex flex-row rounded-lg mb-3 "
            >
              <div>
                <p className="font-bold">
                  Nome: <span className="font-normal">{user.name}</span>
                </p>
                <p className="font-bold">
                  Idade: <span className="font-normal">{user.age}</span>
                </p>
                <p className="font-bold">
                  Email: <span className="font-normal">{user.email}</span>
                </p>
              </div>
              <button className="p-4" onClick={() => deleteUser(user.id)}>
                <img src={TrashIcon} alt="Delete" className="h-6 " />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
