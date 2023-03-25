// todo: integrate search functionality and filters
function SearchBar() {
  return (
    <form class="flex items-center justify-center gap-8 mt-10">
      <input
        type="text"
        class="h-12 w-96 rounded-lg border-gray-400 pl-10 pr-20 text-black focus:border focus:outline-none"
        placeholder="Search anything..."
      />
      <button class="h-12 w-20 rounded-lg border border-white text-white hover:bg-white hover:text-stone-800">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
