function HomeCard({ subtitle, content, img }) {
  return (
    <div
      className="flex h-[34rem] w-[20rem] flex-wrap rounded-[3rem] border border-cyan-600 shadow-sm shadow-cyan-500 md:h-[38rem] md:w-[23rem]"
      // background pattern
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.23'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <img
        className="h-[13rem] w-[20rem] rounded-t-[3rem] md:h-[15rem] md:w-[23rem] "
        src={img}
        alt="image"
      />
      <div className="p-5 text-justify text-sm md:text-base">
        <h3 className="pb-4 text-center text-xl font-bold tracking-tight text-cyan-800 md:mb-2 md:text-2xl ">
          {subtitle}
        </h3>
        <p className="mb-3 font-normal text-gray-500">{content}</p>
      </div>
    </div>
  );
}

export default HomeCard;
