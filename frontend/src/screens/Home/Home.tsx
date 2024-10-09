import React from "react";
import TrashIcon from "./assets/red-trash-can-icon.png";
const Home: React.FC = () => {
  const users = [
    {
      id: "2312312",
      name: "Jnasd",
      age: "22",
      email: "jnasc@gmail.com",
    },
    {
      id: "3124124",
      name: "sdasss",
      age: "32",
      email: "gfdasd@gmail.com",
    },
    {
      id: "2312312",
      name: "Jnasd",
      age: "51",
      email: "sgaszx@gmail.com",
    },
  ];
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
            />
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              className="p-2 rounded-sm bg-slate-200"
            />
            <input
              name="age"
              type="number"
              placeholder="Idade"
              className="p-2 rounded-sm bg-slate-200"
            />
            <button className="bg-slate-700 p-4 text-white rounded-md">
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
              <button className="p-4">
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
