<script>
  import SearchBar from "../components/SearchBar.svelte";
</script>

<style>
  :global(body) {
    background: #5cdb95;
    padding-left: calc(100vw - 100%);
  }

  .container {
    margin: 6rem auto;
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
    font-size: 5rem;
    font-family: "Catamaran", sans-serif;
    font-weight: bold;
    color: #edf5e1;
    margin-top: 0.67em;
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

  .image-wrapper {
    width: 100%;
  }
</style>

<div class="container">
  <div class="heading">IMAGE SEARCH</div>
  <div class="undertext">TYPE SOMETHING IN</div>
  <SearchBar />
</div>
