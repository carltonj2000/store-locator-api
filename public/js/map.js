mapboxgl.accessToken =
  "pk.eyJ1IjoiY2FybHRvbmoyMDAwIiwiYSI6ImNrNHcwc3dkODRyZTEzbGxiYzE5OGR6b2cifQ.AExW_OWPmq9fiBPfFlc8bA";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 9,
  center: [-71.157895, 42.707741]
});

/*
features: [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-71.157895, 42.707741]
    },
    properties: {
      storeId: "0001",
      icon: "shop"
    }
  }
]
*/
async function getStores() {
  const res = await fetch("/api/v1/stores");
  const data = await res.json();
  const stores = data.data.map(store => {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: store.location.coordinates
      },
      properties: {
        storeId: store.storeId,
        icon: "shop"
      }
    };
  });
  loadMap(stores);
}

function loadMap(stores) {
  map.on("load", function() {
    map.addLayer({
      id: "points",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: stores
        }
      },
      layout: {
        "icon-image": "{icon}-15",
        "icon-size": 1.5,
        "text-field": "{storeId}",
        "text-offset": [0, 0.9],
        "text-anchor": "top"
      }
    });
  });
}

getStores();
