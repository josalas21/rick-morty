import Button from "./Button";

function Navbar() {
  return (
    <div class="flex flex-row flex-wrap gap-10 bg-[#14213d] pb-6 pt-6 text-center ">
      <div class="basis-full">
        <h1 class="bg-clip-text text-5xl font-black text-[#e5e5e5] text-transparent sm:text-6xl md:text-7xl">
          Rick and Morty
        </h1>
      </div>
      <div class="flex basis-full justify-around text-lg font-bold text-[#e5e5e5] sm:text-xl md:text-2xl">
        <Button path="/" name="HOME" />
        <Button path="/characters" name="CHARACTERS" />
        <Button path="/locations" name="LOCATIONS" />
        <Button path="/episodes" name="EPISODES" />
      </div>
    </div>
  );
}

export default Navbar;
