function HomeCard({ subtitle, content, img }) {
  return (
    <div class="flex h-[620px] w-[380px] flex-wrap bg-zinc-700 hover:bg-gray-800">
      <a href="#">
        <img class="h-[240px] w-[380px]" src={img} alt="" />
      </a>
      <div class="p-5 text-justify">
        <a href="#">
          <h5 class="mb-2 pb-4 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {subtitle}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {content}{" "}
        </p>
      </div>
    </div>
  );
}

export default HomeCard;
