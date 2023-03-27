import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from 'leaflet'

function MapLegend({ position }) {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: position });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const grades = ['Azul', 'Verde', 'Vermelho'];
      let labels = []

      const blueStyle = "background-color: #3594ff; display: inline-block; height: 1em; width: 1em; margin-right: 0.5em;";
      const greenStyle = "background-color: #0bfc5a; display: inline-block; height: 1em; width: 1em; margin-right: 0.5em;";
      const redStyle = "background-color: #c92a2a; display: inline-block; height: 1em; width: 1em; margin-right: 0.5em;";

      for (let i = 0; i < grades.length; i++) {
        let colorStyle;
        if (grades[i] === 'Azul') {
          colorStyle = blueStyle;
        } else if (grades[i] === 'Verde') {
          colorStyle = greenStyle;
        } else if (grades[i] === 'Vermelho') {
          colorStyle = redStyle;
        }
        labels.push(
          '<span style="' + colorStyle + '"></span>' +
          grades[i]
        );
      }
      div.style = "color: black; border: 1px solid black; border-radius: 10px; background-color: white; padding-inline: 10px; opacity: 0.8;"
      div.innerHTML =
        "<h4>Equipamento</h4>" +
        "<p>" + labels[0] + ": Garra traçadeira</p>" +
        "<p>" + labels[1] + ": Harverster</p>" +
        "<p>" + labels[2] + ": Caminhão de carga</p>" ;
      return div;
    };

    legend.addTo(map);

    return () => {
      map.removeControl(legend);
    };
  }, [position, map]);

  return null;
}

export default MapLegend;