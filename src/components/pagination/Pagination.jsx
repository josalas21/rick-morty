import IconBtn from "./IconBtn";
import {
  FirstPageIcon,
  PrevPageIcon,
  NextPageIcon,
  LastPageIcon,
} from "../../assets";

function Pagination({ page, setPage, max }) {
  return (
    <div class="flex items-center justify-center gap-4 pb-10">
      <IconBtn
        icon={<FirstPageIcon />}
        action={() => setPage(1)}
        isDisabled={page == 1}
      />
      <IconBtn
        icon={<PrevPageIcon />}
        action={() => setPage(page - 1)}
        isDisabled={page == 1}
      />
      <div>
        {page} of {max}
      </div>
      <IconBtn
        icon={<NextPageIcon />}
        action={() => setPage(page + 1)}
        isDisabled={page == max}
      />
      <IconBtn
        icon={<LastPageIcon />}
        action={() => setPage(max)}
        isDisabled={page == max}
      />
    </div>
  );
}

export default Pagination;
