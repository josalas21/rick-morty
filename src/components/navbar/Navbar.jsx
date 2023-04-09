import Button from "./Button";
import logo from "../../assets/svgs/rick_and_Morty.svg";

function Navbar() {
  return (
    <div
      class="container mx-auto flex flex-wrap gap-10 border-b-2 border-cyan-600 pb-6 pt-6 text-center text-cyan-600"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.23'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div class="flex basis-full justify-center">
        <img src={logo} alt="logo" className="w-72" />
      </div>
      <div class="flex basis-full justify-around text-lg font-bold sm:text-xl md:text-2xl ">
        <Button path="/" name="HOME" />
        <Button path="/characters" name="CHARACTERS" />
        <Button path="/locations" name="LOCATIONS" />
        <Button path="/episodes" name="EPISODES" />
      </div>
    </div>
  );
}

export default Navbar;

{
  /* <h1 class="bg-clip-text text-5xl font-black sm:text-6xl md:text-7xl ">
          Rick and Morty
        </h1> */
}
