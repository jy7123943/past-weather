<div class='full-container'>
  <p>Error</p>
  <button on:click={() => location.reload()}>TRY AGAIN!</button>
</div>

<style>
  .full-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Helvetica, 'Helvetica Neue', sans-serif;
  }
  p {
    font-weight: 600;
    font-size: 50px;
    color: #0091ce;
    margin-bottom: 15px;
  }
  button {
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    background: #0091ce;
    color: #fff;
    font-size: 19px;
  }
</style>
