function Error({ filteredName }) {
  return (
    <div className=" flex h-60 w-full content-center bg-[#EBEEF2] text-center text-3xl text-cyan-600">
      <span className="mx-auto w-full self-center text-center">
        Items cannot be found with: {filteredName}
      </span>
    </div>
  );
}

export default Error;
