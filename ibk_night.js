//Karte einbinden
let myMap = L.map("map");

// für fitBounds
const preshopsMarker = L.featureGroup().addTo(myMap);
const barMarker = L.featureGroup().addTo(myMap);
const beakfastMarker = L.featureGroup().addTo(myMap);

//Hintergrundkarten
let myLayers = {
    osmlayer: L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            subdomains: ["a", "b", "c"],
            attribution: "Datenquelle: <a href = 'https://www.openstreetmap.org'>openstreetmap.org</a>"
        }),
    geolandbasemap: L.tileLayer("https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
        subdomains: ["maps", "maps1", "maps2", "maps3", "maps4"],
        attribution: "Datenquelle: <a href = 'https://www.basemap.at'>basemap.at</a>"
    }
    ),
    bmapoverlay: L.tileLayer("https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png",{
        subdomains : ["maps","maps1","maps2","maps3","maps4"],
        attribution : "Datenquelle: <a href = 'https://www.basemap.at'>basemap.at</a>"
        }
    ),
    bmaporthofoto30cm: L.tileLayer("https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg",{
        subdomains : ["maps","maps1","maps2","maps3","maps4"],
        attribution : "Datenquelle: <a href = 'https://www.basemap.at'>basemap.at</a>"
        }
    ),
};

//Default Hintergrundkarte
myMap.addLayer(myLayers.geolandbasemap);

//Default Overlaykarte
//myMap.addLayer(biketourTrack);

//Kartenansichten schalten und zu Karte hinzufügen(aktivieren)
let myMapControl = L.control.layers({
    "OSM BaseMap": myLayers.osmlayer,
    "BaseMap.at": myLayers.geolandbasemap,
    "Orthofoto": bmaporthofoto30cm,
}, {
        //"biketourTrack Etappe 14": biketourTrack,
        "Overlay Beschriftung": bmapoverlay,
        "Shops": preshopsMarker,
        "Bars und Clubs": barMarker,
        "Frühstücken":breakfastMarker,
    }, {
        collapsed: true
    }).addTo(myMap);


//Maßstaß erstellen und hinzufügen
let myMapScale = L.control.scale(
    {
        position: "bottomleft",
        metric: true,
        imperial: false,
        maxWidth: 200
    }
).addTo(myMap);

/*
const SZ_Koordinaten = {
    start : [47.431846, 12.214388],
    ziel : [47.39918, 11.943173],
};*/

/* Icons erstellen, wenn nötig
const myIconStart = L.icon({
    iconUrl: 'images/cycling.png',
    iconAnchor: [16, 37]
});

const myIconZiel = L.icon({
    iconUrl: 'images/finish2.png',
    iconAnchor: [16, 37]
});

const markerOptionStart = {
    title: "Westendorf",
    draggable: false,
    opacity: 0.90,
    icon: myIconStart
};

const markerOptionZiel = {
    title: "Innsbrucker Umland",
    draggable: false,
    opacity: 0.90,
    icon: myIconZiel
}; */

/* PopUps
L.marker(SZ_Koordinaten.start, markerOptionStart).bindPopup("<p>Start: Westendorf</p><a href='https://de.wikipedia.org/wiki/Westendorf_(Tirol)'>Westendorf</a>").addTo(biketourMarker);
L.marker(SZ_Koordinaten.ziel, markerOptionZiel).bindPopup("<p>Ziel: Alpbach</p><a href='https://de.wikipedia.org/wiki/Alpbach'>Alpach</a>").addTo(biketourMarker);
*/


// Daten über lokales geojson wird eingebunden 

//const geojson = L.geoJSON(biketourTrackdata).addTo(biketourTrack);
/*
geojson.bindPopup(function(layer){
    const props = layer.feature.properties;
    const popupText = `<h2>${props.name}</h2>
    <p>Westendorf - Alpbach</p>`;
    return popupText;
});*/

//myMap.fitBounds(biketourTrack.getBounds()); 

//Plugin Fullscreen
myMap.addControl(new L.Control.Fullscreen());
