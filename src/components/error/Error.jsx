function Error({ filteredName }) {
  return (
    <div class=" flex h-60 w-full content-center bg-[#8d99ae] text-center text-3xl">
      <span class="mx-auto w-full self-center text-center">
        Items cannot be found with: {filteredName}
      </span>
    </div>
  );
}

export default Error;
