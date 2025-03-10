import folium
import pandas

data = pandas.read_csv("locations.txt")
lat = list(data["LAT"])
lon = list(data["LON"])
Shop_name = list(data["Name"])

map = folium.Map(location=[lat[0], lon[0]], zoom_start=50)

fg = folium.FeatureGroup(name="My Area Map")

for lt, ln, nm in zip(lat, lon, Shop_name):
    fg.add_child(
        folium.Marker(location=[lt, ln], popup=nm, icon=folium.Icon(color="blue"))
    )


map.add_child(fg)
map.save("index.html")
