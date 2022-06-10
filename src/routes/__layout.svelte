<script>
  import logo from '$lib/images/logo.png';
  import '../app.scss';
  import { onMount } from 'svelte';
  import { darkMode } from '$lib/darkMode';
  import DarkModeToggle from '$lib/DarkModeToggle.svelte';

  onMount(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem(
        'theme',
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
      );
    }
    $darkMode = localStorage.getItem('theme') === 'dark';
    darkMode.subscribe(() => {
      if (!$darkMode) document.documentElement.classList.remove('dark');
      else document.documentElement.classList.add('dark');
    });
  });
</script>

<nav
  class="top-0 mb-4 px-6 text-lg sm:text-xl md:text-2xl text-black dark:text-white w-full border-b z-20 dark:border-b-[#3c4043]"
>
  <div class="py-4 pr-4 flex justify-between items-center">
    <div class="flex items-center space-x-4 md:space-x-0">
      <a href="/" class="flex flex-row items-center">
        <img src={logo} alt="JHS Robotics Logo" class="h-16 mr-4 hidden md:block" />
        <span class="text-red-600 dark:text-red-500 font-bold">JHS</span>
        &nbsp;
        <span class="text-blue-800 dark:text-blue-400">Robotics Club</span>
      </a>
    </div>

    <div class="flex-grow" />

    <a class="ml-1 sm:ml-3 md:ml-6" href="https://discord.gg/FdFkZFJa3H" target="_blank"
      >Discord Server</a
    >
    <a class="ml-1 sm:ml-3 md:ml-6" href="/donate">Donate</a>
    <DarkModeToggle />
  </div>
</nav>

<main class="prose py-4 px-8 text-[#bdc1c6]">
  <slot />
</main>

<footer
  class="bottom-0 mt-4 px-6 text-xl text-black dark:text-white w-full border-t dark:border-t-[#3c4043] z-20"
>
  <div class="py-4 pr-4 flex justify-between items-center">
    <a
      href="https://github.com/MajesticString/jhs-robotics-website"
      class="active:border-none active:outline-none !text-black dark:!text-white"
      target="_blank"
    >
      <svg
        aria-hidden="true"
        height="24"
        viewBox="0 0 16 16"
        fill="currentColor"
        version="1.1"
        width="24"
        data-view-component="true"
        class="octicon octicon-mark-github d-block mr-2 float-left"
      >
        <path
          fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
    </a>
  </div>
</footer>
