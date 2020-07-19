<script>
  import { get } from 'svelte/store';
  import { onDestroy } from 'svelte';
  import geolocationStore from '../../store/geolocation.js';
  import HeaderTop from '../../components/HeaderTop.svelte';
  import { getAddressByGeolocation } from '../../api';

  const geolocationOptions = {
    timeout: 5000,
    enableHighAccuracy: true,
    maximumAge: 100000
  };

  const DEFAULT_ADDRESS = {
    region_1depth_name: '서울',
    region_2depth_name: '중구',
    region_3depth_name: '태평로1가',
  };

  const handleSuccess = async ({ coords }) => {
    let { location } = get(geolocationStore);

    if (!location) return;

    const isSameLocation = coords.latitude === location.latitude
      && coords.longitude === location.longitude;

    if (isSameLocation) return;

    const {
      documents,
      meta: { total_count }
    } = await getAddressByGeolocation(
      coords.latitude,
      coords.longitude
    );

    const address = total_count > 0
      ? (documents[0].road_address || documents[0].address)
      : DEFAULT_ADDRESS;

    geolocationStore.update(prevStore => ({
      fetchState: 'DONE',
      location: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        address,
      }
    }));
  };

  const handleError = (error) => {
    console.log('handleError -> error', error);
    geolocationStore.update(prevStore => ({
      ...prevStore,
      fetchState: 'ERROR',
      location: {
        latitude: 37.5665,
        longitude: 126.9780,
        address: DEFAULT_ADDRESS
      }
    }));
  };

  if (!navigator.geolocation) {
    handleError();
  }

  const watchID = navigator.geolocation.watchPosition(handleSuccess, handleError, geolocationOptions);

  onDestroy(() => {
    navigator.geolocation.clearWatch(watchID);
  });
</script>

<header>
  {#if $geolocationStore.fetchState === 'LOADING'}
    <h1>로딩중</h1>
  {:else}
    <HeaderTop
      title={$geolocationStore.location.address.region_1depth_name}
      subtitle={`
        ${$geolocationStore.location.address.region_2depth_name} 
        ${$geolocationStore.location.address.region_3depth_name}
      `}
    />
  {/if}
</header>

<style>
  header {
    padding: 30px 0 15px;
  }
</style>
