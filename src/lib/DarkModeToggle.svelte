<script>
  import { darkMode } from './darkMode';

  const switchThemes = () => {
    $darkMode = !$darkMode;
  };
</script>

<button class="pt-2 ml-4" on:click={switchThemes}>
  <span class="material-symbols-outlined">{$darkMode ? 'light_mode' : 'dark_mode'}</span>
</button>
