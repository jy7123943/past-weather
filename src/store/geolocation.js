import { writable } from 'svelte/store';

const geolocationStore = writable({
  fetchState: 'LOADING',
  location: null
});

export default geolocationStore;
