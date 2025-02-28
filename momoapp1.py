import folium

my_area_map = folium.Map(location=[5.5403889, -0.2707222], zoom_start=6)

my_area_map.save("index.html")
