function SearchBar({ handleFilteredNames, items = 0 }) {
  return (
    <form class="mt-10 flex flex-wrap items-center justify-center gap-8 bg-[#8d99ae]">
      <input
        type="text"
        class="h-12 w-96 rounded-lg border border-[#14213d] pl-10 pr-20 text-black focus:border-2 focus:outline-none"
        placeholder="Search anything..."
        onChange={handleFilteredNames}
      />
      <div class="h-13 text-sm text-[#14213d]">{items} items found</div>
    </form>
  );
}

export default SearchBar;
