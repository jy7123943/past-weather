<script>
  import { Router, Link, Route } from 'svelte-routing';
  import geolocationStore from '../../store/geolocation.js';
  import Navigator from './Navigator.svelte';
  import Header from './Header.svelte';
  import Weather from '../weather/Weather.svelte';

  export let url = '';
</script>

<main>
  <Header />
  {#if $geolocationStore.fetchState !== 'LOADING'}
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
        <Route path='/' component={ Weather } />
      </div>
      <Navigator />
    </Router>
  {/if}
</main>

<style>
  
</style>
