import { HomeCard } from "../../components";
import { HOME_CONTENT as data } from "../../constants";

function HomePage() {
  return (
    <div className="mx-auto flex flex-row flex-wrap justify-center gap-4 bg-[#EBEEF2] py-10">
      {data.map((item) => (
        <HomeCard
          subtitle={item.subtitle}
          content={item.content}
          position={item.position}
          img={item.img}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default HomePage;
