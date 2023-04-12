function EpisodeCard({ episode }) {
  return (
    <div className="flex h-[190px] w-[350px] rounded-md bg-cyan-800">
      <div className="container flex flex-wrap p-4 text-[#EBEEF2]">
        <span className="flex basis-full text-xl font-extrabold ">
          {episode.name}
        </span>
        <span className="flex basis-full font-thin">Episode</span>
        <br />
        <span className="flex basis-full ">{episode.episode}</span>
        <br />
        <span className="flex basis-full font-thin">Air date:</span>
        <br />
        <span>{episode.air_date}</span> <br />
      </div>
    </div>
  );
}

export default EpisodeCard;
