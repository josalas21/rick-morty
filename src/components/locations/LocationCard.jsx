function LocationCard({ location }) {
  return (
    <div class="flex h-[170px] w-[300px] rounded-md bg-[#14213d]">
      <div class="container flex flex-wrap p-4">
        <span class="flex basis-full text-xl font-extrabold">
          {location.name}
        </span>
        <span class="flex basis-full text-gray-400">Type</span>
        <br />
        <span class="flex basis-full ">{location.type}</span>
        <br />
        <span class="flex basis-full text-gray-400">Created:</span>
        <br />
        <span>{location.created}</span> <br />
      </div>
    </div>
  );
}

export default LocationCard;
