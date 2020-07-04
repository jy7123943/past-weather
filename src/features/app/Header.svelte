<script>
  import { get } from 'svelte/store';
  import { onDestroy } from 'svelte';
  import geolocationStore from '../../store/geolocation.js';

  const geolocationOptions = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 600000
  };

  const handleSuccess = ({ coords }) => {
    let { location } = get(geolocationStore);

    const isSameLocation = coords.latitude === location.latitude
      && coords.longitude === location.longitude;

    if (isSameLocation) {
      return;
    }

    geolocationStore.update(prevStore => ({
      fetchState: 'DONE',
      location: {
        latitude: coords.latitude,
        longitude: coords.longitude
      }
    }));
  };

  const handleError = (error) => {
    geolocationStore.update(prevStore => ({
      ...prevStore,
      fetchState: 'ERROR'
    }));
  };

  const watchID = navigator.geolocation.watchPosition(handleSuccess, handleError, geolocationOptions);

  onDestroy(() => {
    navigator.geolocation.clearWatch(watchID);
	});
</script>

<header>
  {#if $geolocationStore.fetchState === 'DONE'}
    <h1>날씨</h1>
  {:else}
    <h1>로딩중</h1>
  {/if}
</header>
