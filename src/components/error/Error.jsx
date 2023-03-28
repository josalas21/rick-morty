function Error({ filteredName }) {
  return (
    <div class="container mx-auto flex h-60 content-center text-center text-3xl">
      <span class="mx-auto self-center text-center">
        Characters cannot be found with: {filteredName}
      </span>
    </div>
  );
}

export default Error;
