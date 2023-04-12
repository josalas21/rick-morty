function CharacterCard({ character }) {
  return (
    <div className="flex h-[9rem] w-[21rem] rounded-md border-2 border-cyan-600 bg-[#EBEEF2] text-xs font-light md:h-[14rem] md:w-[34rem] md:text-base">
      <img
        className="rounded-l-md"
        src={character.image}
        alt={character.name}
        loading="lazy"
      />
      <div className="container flex flex-wrap p-1 md:p-4">
        <span className="flex basis-full text-sm font-extrabold text-cyan-800 md:text-2xl">
          {character.name}
        </span>
        <br />
        <span className="flex basis-full ">
          {character.status} - {character.species}
        </span>
        <br />
        <span className="flex basis-full font-semibold">
          Last know location:
        </span>
        <br />
        <span>{character.location?.name}</span> <br />
        <span className="flex basis-full font-semibold">First seen in:</span>
        <br />
        <span className="flex basis-full ">{character.origin?.name}</span>
        <br />
      </div>
    </div>
  );
}

export default CharacterCard;
