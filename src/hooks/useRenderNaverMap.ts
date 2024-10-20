import { useEffect, useRef } from 'react'
import MapOptions = naver.maps.MapOptions
import LatLngObjectLiteral = naver.maps.LatLngObjectLiteral

export const useRenderNaverMap = ({
    zoom,
    lat,
    lng,
}: MapOptions & LatLngObjectLiteral) => {
    const mapRef = useRef(null)

    const initializeMap = () => {
        if (!window.naver || !mapRef.current) return

        const mapOptions = {
            center: new window.naver.maps.LatLng(lat, lng),
            zoom,
        }

        const map = new window.naver.maps.Map(mapRef.current, mapOptions)

        // 창 크기 변경 시 지도 크기 조정
        window.addEventListener('resize', () => {
            map.setSize(
                new window.naver.maps.Size(
                    window.innerWidth,
                    window.innerHeight
                )
            )
        })

        // 자동 리사이즈 설정 (선택사항)
        map.autoResize()
    }

    useEffect(() => {
        const script = document.createElement('script')
        script.src =
            'https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=xzu7zglzbh'
        script.async = true
        script.onload = () => {
            // 스크립트가 로드된 후의 처리를 여기에 작성합니다
            console.log('Naver Maps 스크립트가 로드되었습니다')
            initializeMap()
            // 여기서 지도 초기화 등을 수행합니다
        }
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])
    return mapRef
}
