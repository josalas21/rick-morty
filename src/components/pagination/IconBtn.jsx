function IconBtn({ action, icon, isDisabled }) {
  return (
    <button
      type="button"
      onClick={action}
      class="rounded-full border p-2 enabled:hover:bg-white enabled:hover:text-black disabled:opacity-75"
      disabled={isDisabled}
    >
      {icon}
    </button>
  );
}

export default IconBtn;
