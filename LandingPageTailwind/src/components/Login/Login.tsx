import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="max-w-7xl min-h-screen mx-auto pt-20 px-6 flex justify-center items-center ">
      <div className="lg:min-w-96 h-96 bg-blue-400 rounded-md text-slate-950 flex flex-col items-center">
        <div className="w-full text-right h-28">
          <button
            className="w-5 h-5 mx-1 my-1 exit"
            onClick={handleExit}
          ></button>
        </div>
        <div className="flex flex-col w-60 mx-auto gap-3">
          <div>
            <label htmlFor="">Usuário</label>
            <input
              className=" bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out shadow-sm"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input
              className=" bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out shadow-sm"
              type="password"
            />
          </div>
          <div>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 shadow-lg">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
