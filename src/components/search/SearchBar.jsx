function SearchBar({ handleFilteredNames, items = 0 }) {
  return (
    <form class="mt-10 flex flex-wrap items-center justify-center gap-8">
      <input
        type="text"
        class="h-12 w-96 rounded-lg border-gray-400 pl-10 pr-20 text-black focus:border focus:outline-none"
        placeholder="Search anything..."
        onChange={handleFilteredNames}
      />
      <div class="h-13 text-sm text-gray-300">{items} items found</div>
    </form>
  );
}

export default SearchBar;
