import { HomeCard } from "../../components";
import { HOME_CONTENT as data } from "../../constants";

function HomePage() {
  return (
    <div class="flex flex-row flex-wrap bg-stone-800 text-white">
      {data.map((item) => (
        <HomeCard
          subtitle={item.subtitle}
          content={item.content}
          position={item.position}
          img={item.img}
        />
      ))}
    </div>
  );
}

export default HomePage;
