<script>
  import SearchButton from "./SearchButton.svelte";

  let term = "";

  const clickHandler = async () => {
    console.log("running");
    const raw = await fetch(
      "https://api.unsplash.com/search/photos?" +
        "client_id=65f622264cdd351d875fb557cdefbee529978cbe2e748d6df31ef0d1636d1971&" +
        "query=" +
        encodeURIComponent(term)
    );
    const response = await raw.json();
    console.log(response);
  };
</script>

<style>
  .search-bar-wrapper {
    display: flex;
    align-items: center;
    margin: 0 auto 12px auto;
  }

  .search-bar {
    max-width: 600px;
    width: 100%;
    height: 46px;
    line-height: 80px;
    font-size: 2rem;
    margin: 0 auto 12px auto;
    border: 2px solid #05386b;
    background: #edf5e1;
    align-content: stretch;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .search-bar:focus {
    box-shadow: none;
  }
</style>

<div class="search-bar-wrapper">
  <input class="search-bar" bind:value={term} />
  <SearchButton on:runSearch={clickHandler} />
</div>
