import Button from "../navbar/Button";

function Footer() {
  return (
    <footer class="bg-cyan-700">
      <div class="container mx-auto flex w-full flex-wrap items-center justify-center p-4 text-[#EBEEF2] md:flex-nowrap md:justify-start md:p-6 ">
        <span class="order-last w-full text-center text-sm md:order-first md:text-left">
          © 2023 <span>Rick and Morty</span>
        </span>
        <ul class="just container mx-auto mt-3 flex w-full items-center justify-center gap-4 text-sm font-medium sm:mt-0 md:justify-end">
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
