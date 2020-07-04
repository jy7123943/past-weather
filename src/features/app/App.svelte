<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Navigator from './Navigator.svelte';

  export let url = '';
</script>

<main>
  <Router url='{ url }'>
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
    <Navigator />
  </Router>
</main>

<style>
  
</style>
