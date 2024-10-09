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
      <div className="bg-gradient-to-b from-slate-900 to-orange-200 h-screen w-screen">
        <div className="flex align-middle items-center flex-col">
          <form className="flex space-y-2 bg-red-300 rounded-xl flex-col p-6 m-8 align-middle items-center max-w-80">
            <h1 className="font-bold text-xl">Cadastro</h1>
            <input
              name="name"
              type="text"
              placeholder="Nome"
              className="p-2 rounded-sm"
            />
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              className="p-2 rounded-sm"
            />
            <input
              name="age"
              type="number"
              placeholder="Idade"
              className="p-2 rounded-sm"
            />
          </form>

          {users.map((user) => (
            <div
              key={user.id}
              className="bg-slate-400 min-w-60 p-2 flex flex-row rounded-lg mb-3 "
            >
              <div>
                <p>Nome: {user.name} </p>
                <p>Idade: {user.age}</p>
                <p>Email: {user.email} </p>
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
