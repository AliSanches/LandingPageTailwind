import movie1 from "../assets/video1.mp4";
import movie2 from "../assets/video2.mp4";

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Ferramentas Virtuais
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Para Todos Os Gamers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, fugit
        vel. Laudantium culpa, nemo corrupti soluta eaque ullam cupiditate earum
        expedita? Omnis quaerat libero deleniti ipsa officiis, consequatur
        veniam esse?
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Começar gratis
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentação
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={movie1} type="video/mp4" />
          Seu navegador não suporta o video
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={movie2} type="video/mp4" />
          Seu navegador não suporta o video
        </video>
      </div>
    </div>
  );
};
