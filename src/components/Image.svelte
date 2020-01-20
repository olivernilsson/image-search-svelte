<script>

</script>

<style>
  .image-small {
    background-image: url(${props.image.urls.small});
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

<img class="image-small" alt="test" />
