<script>
  
</script>

<style>
  .searchBarWrapper {
    display: flex;
    align-items: center;
    margin: 0 auto 12px auto;
  }

  .searchBar {
    max-width: 600px;
    width: 100%;
    height: 40px;
    line-height: 80px;
    font-size: 2rem;
    margin: 0 auto 12px auto;
    border: 2px solid #05386B;
    background: #edf5e1;
    align-content: stretch;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .searchBar:focus {
      box-shadow: none;
  }

</style>

<div class="search-bar-wrapper">
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <Input ref={ref}></Input>
      <input type="button" onsubmit={e => {
        e.preventDefault()
      }} clickHandler={clickHandler} />
    </div>