
    function askForLocation() {
        let userLocation = prompt("Enter your location (address or lat,lng):", "");
        if (userLocation) {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${userLocation}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        let lat = data[0].lat;
                        let lon = data[0].lon;
                        let userMarker = L.marker([lat, lon]).addTo(map);
                        userMarker.bindPopup("Your Location: " + userLocation).openPopup();
                        map.setView([lat, lon], 12);
                    } else {
                        alert("Location not found. Try again.");
                    }
                })
                .catch(error => console.error("Error fetching location:", error));
        }
    }

    // Wait for map to load before adding the button
    document.addEventListener("DOMContentLoaded", function() {
        let btn = document.createElement("button");
        btn.innerHTML = "Enter Location";
        btn.style.position = "absolute";
        btn.style.top = "10px";
        btn.style.left = "10px";
        btn.style.zIndex = "1000";
        btn.style.backgroundColor = "white";
        btn.style.padding = "8px";
        btn.style.borderRadius = "5px";
        btn.onclick = askForLocation;
        document.body.appendChild(btn);
    });