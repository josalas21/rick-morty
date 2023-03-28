import Button from "../navbar/Button";

function Footer() {
  return (
    <footer class=" bg-white shadow dark:bg-zinc-700">
      <div class="container mx-auto flex w-full flex-wrap p-4 md:flex-nowrap items-center justify-center md:justify-start md:p-6">
        <span class="w-full text-sm text-gray-500 dark:text-gray-400 text-center md:text-left order-last md:order-first">
          © 2023 <span>Rick and Morty</span>
        </span>
        <ul class="mt-3 flex container mx-auto w-full justify-center md:justify-end items-center just gap-4 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Button path="/" name="HOME" />
          </li>
          <li>
            <Button path="/characters" name="CHARACTERS" />
          </li>
          <li>
            <Button path="/locations" name="LOCATIONS" />
          </li>
          <li>
            <Button path="/episodes" name="EPISODES" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
