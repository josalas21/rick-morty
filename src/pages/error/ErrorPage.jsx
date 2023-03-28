import { Button } from "../../components";

function ErrorPage() {
  return (
    <main class="flex h-screen w-full flex-col items-center justify-center bg-gray-800">
      <h1 class="text-9xl font-extrabold tracking-widest text-white">404</h1>
      <div class="absolute rotate-12 rounded bg-[#FF6A3D] px-2 text-sm">
        Page Not Found
      </div>
      <button class="mt-5">
        <a class="group relative inline-block text-sm font-medium text-[#FF6A3D] focus:outline-none focus:ring active:text-orange-500">
          <span class="relative block border border-current bg-[#1A2238] px-8 py-3">
            <Button path="/" name="HOME" />
          </span>
        </a>
      </button>
    </main>
  );
}

export default ErrorPage;
