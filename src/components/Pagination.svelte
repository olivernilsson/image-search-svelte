<script>
  import {
    images,
    searchTerm,
    pageNumber,
    totalPageNumber
  } from "../stores.js";
  import { afterUpdate } from "svelte";

  const clickHandler = async page => {
    if (page === "minus" && $pageNumber > 1) {
      await pageNumber.update(e => $pageNumber - 1);
    } else if (page === "plus" && $pageNumber < $totalPageNumber) {
      await pageNumber.update(e => $pageNumber + 1);
    }
  };

  afterUpdate(async () => {
    const raw = await fetch(
      `https://api.unsplash.com/search/photos?page=${$pageNumber};` +
        "client_id=65f622264cdd351d875fb557cdefbee529978cbe2e748d6df31ef0d1636d1971&" +
        "query=" +
        encodeURIComponent($searchTerm)
    );
    const response = await raw.json();
    await images.update(e => response);
  });
</script>

<style>
  .pagination-wrapper {
    height: 30px;
    line-height: 30px;
    vertical-align: baseline;
    font-size: 2rem;
  }
  .chevron {
    display: inline-block;
    cursor: pointer;
  }
</style>

{#if $images.total}
  <div class="pagination-wrapper">
    <div class="chevron" on:click={() => clickHandler('minus')}>&lt</div>
    {$pageNumber + '/' + $totalPageNumber}
    <div class="chevron" on:click={() => clickHandler('plus')}>&gt</div>
  </div>
{/if}
