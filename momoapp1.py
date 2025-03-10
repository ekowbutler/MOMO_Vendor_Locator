import folium
import pandas

data = pandas.read_csv("locations.txt")
lat = list(data["LAT"])
lon = list(data["LAT"])
Shop_name = list(data["NAMe"])

my_area_map = folium.Map(location=[5.5403889, -0.2707222], zoom_start=6)
my_area_map.add_child(
    folium.Marker(
        location=[5.54, -0.27], popup="A&C Ventures", icon=folium.Icon(color="blue")
    )
)
my_area_map.save("index.html")
