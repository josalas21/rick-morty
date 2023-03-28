function EpisodeCard({ episode }) {
  return (
    <div class="flex h-[190px] w-[350px] rounded-md bg-zinc-700 hover:bg-gray-800">
      <div class="container flex flex-wrap p-4">
        <span class="flex basis-full text-xl font-extrabold">
          {episode.name}
        </span>
        <span class="flex basis-full text-gray-400">Episode</span>
        <br />
        <span class="flex basis-full ">{episode.episode}</span>
        <br />
        <span class="flex basis-full text-gray-400">Air date:</span>
        <br />
        <span>{episode.air_date}</span> <br />
      </div>
    </div>
  );
}

export default EpisodeCard;
