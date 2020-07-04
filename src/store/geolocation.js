import { writable } from 'svelte/store';

const geolocationStore = writable({
  fetchState: 'LOADING',
  location: {}
});

export default geolocationStore;
