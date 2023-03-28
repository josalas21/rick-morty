import Button from "./Button";

function Navbar() {
  return (
    <div class="flex flex-row flex-wrap gap-10 bg-white pb-6 pt-6 text-center text-stone-800">
      <div class="basis-full">
        <h1 class="text-5xl font-black sm:text-6xl md:text-7xl">
          Rick and Morty
        </h1>
      </div>
      <div class="flex basis-full justify-around text-lg font-bold sm:text-xl md:text-2xl">
        <Button path="/" name="HOME" />
        <Button path="/characters" name="CHARACTERS" />
        <Button path="/locations" name="LOCATIONS" />
        <Button path="/episodes" name="EPISODES" />
      </div>
    </div>
  );
}

export default Navbar;
