<script>
  export let imageName = '01d';
  const IMAGE_URL = `images/${imageName}.jpg`;
</script>

<div class='image' style='background-image: url({IMAGE_URL})' />

<style>
  .image {
    width: 100%;
    height: 210px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
  }
</style>
