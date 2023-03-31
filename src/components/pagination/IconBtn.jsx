function IconBtn({ action, icon, isDisabled }) {
  return (
    <button
      type="button"
      onClick={action}
      class="rounded-full border border-[#14213d] p-2 text-[#14213d] enabled:hover:bg-[#14213d] enabled:hover:text-white disabled:opacity-75"
      disabled={isDisabled}
    >
      {icon}
    </button>
  );
}

export default IconBtn;
