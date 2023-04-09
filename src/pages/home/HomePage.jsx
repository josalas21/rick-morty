import { HomeCard } from "../../components";
import { HOME_CONTENT as data } from "../../constants";

function HomePage() {
  return (
    <div class=" mx-auto flex flex-row flex-wrap justify-center gap-4 bg-[#EBEEF2] py-10 ">
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
