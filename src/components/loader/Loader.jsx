import { Spinner } from "../../assets";

const Loader = () => {
  return (
    <div
      role="status"
      className="flex h-80 w-screen items-center justify-center bg-[#EBEEF2]"
    >
      <Spinner />
    </div>
  );
};

export default Loader;
