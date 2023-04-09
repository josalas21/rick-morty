import { Button } from "../../components";

function ErrorPage() {
  return (
    <main class="flex h-screen w-full flex-col items-center justify-center bg-[#EBEEF2]">
      <h1 class="text-9xl font-extrabold tracking-widest text-cyan-600">404</h1>
      <div class="absolute rotate-12 rounded bg-lime-600 px-2 text-sm text-white">
        Page Not Found
      </div>
      <button class="mt-5">
        <a class="group relative inline-block text-sm font-medium text-cyan-600">
          <span class="relative block border border-current bg-[#EBEEF2] px-8 py-3">
            <Button path="/" name="HOME" />
          </span>
        </a>
      </button>
    </main>
  );
}

export default ErrorPage;
