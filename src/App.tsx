import { useRenderNaverMap } from './hooks/useRenderNaverMap.ts'

function App() {
    const mapRef = useRenderNaverMap({
        zoom: 15,
        lat: 37.3595704,
        lng: 127.105399,
    })

    return (
        <div id="map" ref={mapRef} style={{ width: '100%', height: '100%' }} />
    )
}

export default App
