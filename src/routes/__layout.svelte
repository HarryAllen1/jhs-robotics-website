<script>
  import logo from '$lib/images/logo.png';
  import GithubIcon from '$lib/githubIcon.svelte';
  import '../app.scss';
</script>

<nav class="top-0 mb-4 px-6 text-2xl text-black w-full border-b z-20">
  <div class="py-4 pr-4 flex justify-between items-center">
    <div class="flex items-center space-x-4 md:space-x-0">
      <a href="/" class="flex flex-row text-2xl items-center">
        <img src={logo} alt="JHS Robotics Logo" class="h-16 mr-4" />
        <span class="text-red-600 font-bold">JHS</span>
        &nbsp;
        <span class="text-blue-800">Robotics Club</span>
      </a>
    </div>

    <div class="flex-grow" />

    <a class="mx-2" href="https://discord.gg/FdFkZFJa3H" target="_blank">Discord Server</a>
    <a class="mx-2" href="/donate">Donate</a>
  </div>
</nav>

<main class="prose py-4 px-8">
  <slot />
</main>

<footer class="bottom-0 mt-4 px-6 text-xl text-black w-full border-t z-20">
  <div class="py-4 pr-4 flex justify-between items-center">
    <a
      href="https://github.com/MajesticString/jhs-robotics-website"
      class="active:border-none active:outline-none"
      target="_blank"
    >
      <GithubIcon />
    </a>
  </div>
</footer>
