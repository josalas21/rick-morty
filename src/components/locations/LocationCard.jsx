function LocationCard({ location }) {
  return (
    <div class="flex h-[170px] w-[300px] rounded-md bg-cyan-800">
      <div class="container flex flex-wrap p-4 text-[#EBEEF2]">
        <span class="flex basis-full text-xl font-extrabold">
          {location.name}
        </span>
        <span class="flex basis-full font-thin ">Type</span>
        <br />
        <span class="flex basis-full ">{location.type}</span>
        <br />
        <span class="flex basis-full font-thin ">Created:</span>
        <br />
        <span>{location.created}</span> <br />
      </div>
    </div>
  );
}

export default LocationCard;
