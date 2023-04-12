function LocationCard({ location }) {
  return (
    <div className="flex h-[170px] w-[300px] rounded-md bg-cyan-800">
      <div className="container flex flex-wrap p-4 text-[#EBEEF2]">
        <span className="flex basis-full text-xl font-extrabold">
          {location.name}
        </span>
        <span className="flex basis-full font-thin ">Type</span>
        <br />
        <span className="flex basis-full ">{location.type}</span>
        <br />
        <span className="flex basis-full font-thin ">Created:</span>
        <br />
        <span>{location.created}</span> <br />
      </div>
    </div>
  );
}

export default LocationCard;
