function EpisodeCard({ episode }) {
  return (
    <div class="flex h-[190px] w-[350px] rounded-md bg-cyan-800">
      <div class="container flex flex-wrap p-4 text-[#EBEEF2]">
        <span class="flex basis-full text-xl font-extrabold ">
          {episode.name}
        </span>
        <span class="flex basis-full font-thin">Episode</span>
        <br />
        <span class="flex basis-full ">{episode.episode}</span>
        <br />
        <span class="flex basis-full font-thin">Air date:</span>
        <br />
        <span>{episode.air_date}</span> <br />
      </div>
    </div>
  );
}

export default EpisodeCard;
