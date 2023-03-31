function CharacterCard({ character }) {
  return (
    <div class="flex h-[220px] w-[550px] rounded-md border border-[#14213d] bg-[#14213d] shadow-md">
      <img class="rounded-l-md" src={character.image} alt={character.name} />
      <div class="container flex flex-wrap p-4">
        <span class="flex basis-full text-2xl font-extrabold">
          {character.name}
        </span>
        <br />
        <span class="flex basis-full ">
          {character.status} - {character.species}
        </span>
        <br />
        <span class="flex basis-full text-gray-400">Last know location:</span>
        <br />
        <span>{character.location?.name}</span> <br />
        <span class="flex basis-full text-gray-400">First seen in:</span>
        <br />
        <span class="flex basis-full ">{character.origin?.name}</span>
        <br />
      </div>
    </div>
  );
}

export default CharacterCard;
