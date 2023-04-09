function IconBtn({ action, icon, isDisabled }) {
  return (
    <button
      type="button"
      onClick={action}
      class="rounded-full border border-cyan-800 p-2 text-cyan-700 enabled:hover:bg-cyan-600 enabled:hover:text-white disabled:opacity-75"
      disabled={isDisabled}
    >
      {icon}
    </button>
  );
}

export default IconBtn;
