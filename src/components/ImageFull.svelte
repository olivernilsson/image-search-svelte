<script>
  export let img;
</script>

<style>
  .image-full {
    width: 800px;
    height: 600px;
    margin: 30px;
    display: inline-block;
    background-size: cover;
  }
</style>

<img src={img} class="image-full" alt="img" />
