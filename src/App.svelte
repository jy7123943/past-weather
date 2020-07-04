<script>
  import { Router, Link, Route } from 'svelte-routing';

  export let url = '';
</script>

<main>
  <Router url='{ url }'>
    <nav>
      <Link to='/yesterday'>어제</Link>
      <Link to='/'>오늘</Link>
      <Link to='/tomorrow'>내일</Link>
      <Link to='/week'>일주일</Link>
    </nav>
    <div>
      <Route path='/yesterday'>
        <div>어제</div>
      </Route>
      <Route path='/tomorrow'>
        <div>내일</div>
      </Route>
      <Route path='/week'>
        <div>일주일</div>
      </Route>
      <Route path='/'>
        <div>오늘</div>
      </Route>
    </div>
  </Router>
</main>

<style>
</style>
