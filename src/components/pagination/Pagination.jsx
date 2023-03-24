import IconBtn from "./IconBtn";

import {
  FirstPageIcon,
  PrevPageIcon,
  NextPageIcon,
  LastPageIcon,
} from "../icons";

function Pagination({ page, setPage }) {
  return (
    <div class="container mx-auto flex items-center justify-center gap-4 pt-10">
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
      <div>{page} of 42</div>
      <IconBtn
        icon={<NextPageIcon />}
        action={() => setPage(page + 1)}
        isDisabled={page == 42}
      />
      <IconBtn
        icon={<LastPageIcon />}
        action={() => setPage(42)}
        isDisabled={page == 42}
      />
    </div>
  );
}

export default Pagination;
