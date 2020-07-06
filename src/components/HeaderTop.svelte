<script>
  export let title = '';
  export let subtitle = '';
</script>

<h1>
  <span class='title'>
    {title}
  </span>
  <span>
    {subtitle}
  </span>
</h1>

<style>
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
  }
  .title:after {
    content: ',';
    margin-right: 5px;
  }
</style>
