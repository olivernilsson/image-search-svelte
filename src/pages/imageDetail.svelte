<script>
  import ImageFull from "../components/ImageFull.svelte";
  import { navigate } from "svelte-routing";
  import { storedImage } from "../stores.js";
</script>

<style>
  .container {
    margin: 2rem auto;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Catamaran", sans-serif;
    text-align: center;
  }
  .heading {
    font-size: 4rem;
    font-family: "Catamaran", sans-serif;
    font-weight: bold;
    color: #edf5e1;
    margin-bottom: 20px;
  }
  .undertext {
    font-size: 1.5rem;
    font-family: "Catamaran", sans-serif;
    font-weight: bold;
    color: #edf5e1;
    margin-top: 0;
    margin-bottom: 20px;
  }
</style>

<div class="container">

  <h1 class="heading">
    {#if $storedImage.description}
      {$storedImage.description}
    {:else}Untitled image{/if}
  </h1>
  {#if !$storedImage}
    {() => {
      navigate('/');
    }}
  {/if}
  <ImageFull img={$storedImage.urls.full} />
  <h2 class="undertext">{$storedImage.alt_description}</h2>
</div>
