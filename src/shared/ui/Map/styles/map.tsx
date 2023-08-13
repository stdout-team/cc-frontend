import {load} from '@2gis/mapgl';
import React, {Dispatch, ReactDOM, ReactElement, useEffect, useState} from "react";
import {HtmlMarker, Map} from "@2gis/mapgl/types";
import dynamic from "next/dynamic";

// eslint-disable-next-line react/no-deprecated
import {render} from "react-dom";

interface Popup {
    position: number[];
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

interface InnerMapProps extends MapProps {
    onMapLoad: (map: Map) => void
}

const MapContext = React.createContext<[Map | undefined, Dispatch<React.SetStateAction<Map | undefined>>]>([undefined, () => {
}]);


export const MapProvider = dynamic(() => Promise.resolve((props: MapProps) => {
    const [mapInstance, setMapInstance] = React.useState<Map | undefined>();
    const instance = useMap({...props, onMapLoad: setMapInstance})
    const [popups, setPopups] = useState<HtmlMarker[]>([])
    useEffect(() => {
        if (mapInstance) {
            load().then((mapAPI) => {
                popups.map(p => p.destroy())
                const popupElements: HtmlMarker[] = []
                props.popups.map((popup) => {
                    const container = document.createElement('div');
                    render(popup.component, container)
                    console.log(container.innerHTML)
                    popupElements.push(new mapAPI.HtmlMarker(mapInstance, {
                        coordinates: popup.position,
                        html: container.innerHTML,
                    }));
                })
                setPopups(popupElements)
            })
        }
    }, [props.popups])
    return (
        <MapContext.Provider value={[mapInstance, setMapInstance]}>
            <div id='map-container' style={{width: props.width, height: props.height}}/>
        </MapContext.Provider>
    );
}), {ssr: false})


export const useMap = ({center, zoom, popups, gisKey, onMapLoad}: InnerMapProps) => {
    const [mapInstance, setMapInstance] = React.useContext(MapContext);
    useEffect(() => {
        if (typeof window === 'undefined') return
        if (mapInstance) return
        let map: Map;
        load().then((mapAPI) => {
            setTimeout(() => {
                if (map) map.destroy()
                map = new mapAPI.Map('map-container', {
                    center: center,
                    zoom: zoom,
                    key: gisKey,
                });


                onMapLoad(map)
            }, 0)
        });

        return () => {
            map && map.destroy();
        }
    }, []);
    return mapInstance
}