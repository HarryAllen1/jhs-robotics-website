<script>
  import logo from '$lib/images/logo.png';
  import GithubIcon from '$lib/GithubIcon.svelte';
  import '../app.scss';
  import { onMount } from 'svelte';
  import { darkMode } from '$lib/darkMode';
  import DarkModeToggle from '$lib/darkModeToggle.svelte';

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
      <GithubIcon />
    </a>
  </div>
</footer>
