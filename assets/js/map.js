/* ============================================
   TransiAI Map Integration
   Real interactive maps using Leaflet.js
   ============================================ */

// South African coordinates
const SA_COORDINATES = {
  johannesburg: { lat: -26.2041, lng: 28.0473, name: 'Johannesburg' },
  soweto: { lat: -26.2678, lng: 27.8585, name: 'Soweto' },
  sandton: { lat: -26.1076, lng: 28.0567, name: 'Sandton' },
  pretoria: { lat: -25.7479, lng: 28.2293, name: 'Pretoria' },
  capeTown: { lat: -33.9249, lng: 18.4241, name: 'Cape Town' },
  stellenbosch: { lat: -33.9321, lng: 18.8602, name: 'Stellenbosch' },
  durban: { lat: -29.8587, lng: 31.0218, name: 'Durban' },
  umhlanga: { lat: -29.7277, lng: 31.0822, name: 'Umhlanga' },
  parkStation: { lat: -26.1956, lng: 28.0419, name: 'Park Station' }
};

// Vehicle icons
const VEHICLE_ICONS = {
  bus: '🚌',
  taxi: '🚕',
  van: '🚐',
  shuttle: '🚙'
};

// Initialize map
function initializeMap(containerId, centerLocation = 'johannesburg', zoom = 12) {
  const center = SA_COORDINATES[centerLocation];
  
  // Create map
  const map = L.map(containerId).setView([center.lat, center.lng], zoom);
  
  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);
  
  return map;
}

// Add vehicle marker
function addVehicleMarker(map, vehicle, onClick) {
  const icon = L.divIcon({
    html: `
      <div style="
        background: linear-gradient(135deg, #1BA39C 0%, #24315E 100%);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        border: 3px solid white;
        cursor: pointer;
        animation: pulse 2s ease-in-out infinite;
      ">
        ${VEHICLE_ICONS[vehicle.type] || '🚌'}
      </div>
    `,
    className: 'vehicle-marker',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });
  
  const marker = L.marker([vehicle.location.lat, vehicle.location.lng], { icon })
    .addTo(map)
    .bindPopup(`
      <div style="font-family: sans-serif;">
        <strong>${vehicle.registration}</strong><br>
        ${vehicle.route}<br>
        <small>Passengers: ${vehicle.currentPassengers}/${vehicle.capacity}</small><br>
        <small>Driver: ${vehicle.driver}</small>
      </div>
    `);
  
  if (onClick) {
    marker.on('click', () => onClick(vehicle));
  }
  
  return marker;
}

// Add route line
function addRouteLine(map, start, end, color = '#CC5A1A') {
  const startCoord = SA_COORDINATES[start];
  const endCoord = SA_COORDINATES[end];
  
  if (!startCoord || !endCoord) return null;
  
  const line = L.polyline(
    [[startCoord.lat, startCoord.lng], [endCoord.lat, endCoord.lng]],
    {
      color: color,
      weight: 4,
      opacity: 0.7,
      dashArray: '10, 10'
    }
  ).addTo(map);
  
  return line;
}

// Add location marker
function addLocationMarker(map, location, label, color = '#CC5A1A') {
  const coord = SA_COORDINATES[location];
  if (!coord) return null;
  
  const icon = L.divIcon({
    html: `
      <div style="
        background: ${color};
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      "></div>
    `,
    className: 'location-marker',
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });
  
  const marker = L.marker([coord.lat, coord.lng], { icon })
    .addTo(map)
    .bindPopup(`<strong>${label || coord.name}</strong>`);
  
  return marker;
}

// Animate vehicle movement
function animateVehicle(marker, newLat, newLng, duration = 2000) {
  const startLatLng = marker.getLatLng();
  const endLatLng = L.latLng(newLat, newLng);
  
  const startTime = Date.now();
  
  function animate() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const lat = startLatLng.lat + (endLatLng.lat - startLatLng.lat) * progress;
    const lng = startLatLng.lng + (endLatLng.lng - startLatLng.lng) * progress;
    
    marker.setLatLng([lat, lng]);
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  
  animate();
}

// Get random nearby coordinates (for simulation)
function getRandomNearbyCoords(lat, lng, radiusKm = 0.5) {
  const radiusInDegrees = radiusKm / 111; // Rough conversion
  const u = Math.random();
  const v = Math.random();
  const w = radiusInDegrees * Math.sqrt(u);
  const t = 2 * Math.PI * v;
  const x = w * Math.cos(t);
  const y = w * Math.sin(t);
  
  return {
    lat: lat + x,
    lng: lng + y
  };
}

// Export functions
window.MapUtils = {
  SA_COORDINATES,
  VEHICLE_ICONS,
  initializeMap,
  addVehicleMarker,
  addRouteLine,
  addLocationMarker,
  animateVehicle,
  getRandomNearbyCoords
};
