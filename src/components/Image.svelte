<script>
  export let img;
</script>

<style>
  .image-small {
    width: 250px;
    height: 250px;
    margin: 30px;
    display: inline-block;
    background-size: cover;
    transition: 200ms ease-in-out;
    cursor: pointer;
  }
  .image-small:hover {
    transform: scale(1.05);
  }
</style>

<img src={img.urls.small} class="image-small" alt="test" />
