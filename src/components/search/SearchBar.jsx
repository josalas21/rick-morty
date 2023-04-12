function SearchBar({ handleFilteredNames, items = 0 }) {
  return (
    <form class="flex flex-wrap items-center justify-center gap-4 bg-[#EBEEF2] pt-5 md:gap-8 md:pt-10">
      <input
        type="text"
        class="h-10 w-72 rounded-lg border border-cyan-600 pl-10 pr-20 text-black focus:border-2 focus:outline-none md:h-12 md:w-96"
        placeholder="Search anything..."
        onChange={handleFilteredNames}
      />
      <div class="h-13 text-sm text-cyan-800">{items} items found</div>
    </form>
  );
}

export default SearchBar;
