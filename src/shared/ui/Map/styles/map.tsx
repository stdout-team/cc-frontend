import {load} from '@2gis/mapgl';
import React, {Dispatch, ReactElement, useEffect} from "react";
import {renderToStaticMarkup} from "react-dom/server";
import {Map} from "@2gis/mapgl/types";

interface Popup {
    position: [number, number];
    component: ReactElement
}

interface MapProps {
    id: string;
    center: [number, number];
    gisKey: string;
    zoom: number;
    popups: Popup[];
    width: string;
    height: string;
}

const MapContext = React.createContext<[Map | undefined, Dispatch<React.SetStateAction<Map | undefined>>]>([undefined, () => {
}]);


export const MapProvider = (props: MapProps) => {
    const [mapInstance, setMapInstance] = React.useState<Map | undefined>();
    useMap(props)
    return (
        <MapContext.Provider value={[mapInstance, setMapInstance]}>
            <div id='map-container' style={{width: props.width, height: props.height}}/>
        </MapContext.Provider>
    );
};


export const useMap = ({center, zoom, popups, gisKey}: MapProps) => {
    const [_, setMapInstance] = React.useContext(MapContext);
    useEffect(() => {
        if (typeof window === 'undefined') return
        let map: Map;
        load().then((mapAPI) => {
            setTimeout(() => {
                if (map) map.destroy()
                map = new mapAPI.Map('map-container', {
                    center: center,
                    zoom: zoom,
                    key: gisKey,
                });

                popups.map((popup) => {
                    new mapAPI.HtmlMarker(map, {
                        coordinates: popup.position,
                        html: renderToStaticMarkup(popup.component),
                    });
                })
                setMapInstance(map)
            }, 0)
        });

        return () => {
            map && map.destroy();
        }
    }, []);

};