<script>
  import { Link } from 'svelte-routing';
  import ArrowLeft from '../../resources/arrow-left.svg';
  import ArrowRight from '../../resources/arrow-right.svg';
  import Calendar from '../../resources/calendar.svg';
</script>

<nav class='tabs'>
  <Link to='/yesterday'><ArrowLeft /></Link>
  <Link to='/'>TODAY</Link>
  <Link to='/tomorrow'><ArrowRight /></Link>
  <Link to='/week'><Calendar /></Link>
</nav>

<style>
  .tabs {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background: #fff;
  }

  .tabs :global(a) {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 12px 0;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #222;
  }

  .tabs :global(a:last-child) {
    flex: 0.8;
  }
</style>
