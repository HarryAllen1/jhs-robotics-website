<script>
  import '../app.scss';
</script>

<div class="top-0 mb-4 px-6 text-xl text-black w-full border-b z-20">
  <div class="py-4 pr-4 flex justify-between items-center">
    <div class="flex items-center space-x-4 md:space-x-0">
      <a href="/">
        <span class="text-red-600 font-bold">JHS</span>
        <span class="text-blue-700">Robotics Club</span>
      </a>
    </div>

    <div class="flex-grow" />

    <a class="mx-2" href="https://discord.gg/FdFkZFJa3H" target="_blank">Discord Server</a>
    <a class="mx-2" href="https://gofund.me/4048a9e8">Go Fund Me</a>
  </div>
</div>

<main class="prose py-4 px-8">
  <slot />
</main>
