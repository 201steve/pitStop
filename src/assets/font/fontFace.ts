import { css } from 'styled-components'
import PretendardBold from './Pretendard-Bold.subset.woff2'
import PretendardSemiBold from './Pretendard-SemiBold.subset.woff2'
import PretendardRegular from './Pretendard-Regular.subset.woff2'

export const fontFace = css`
    @font-face {
        font-family: Pretendard;
        src: url(${PretendardBold}) format('woff2');
        font-weight: 700;
    }

    @font-face {
        font-family: Pretendard;
        src: url(${PretendardSemiBold}) format('woff2');
        font-weight: 600;
    }

    @font-face {
        font-family: Pretendard;
        src: url(${PretendardRegular}) format('woff2');
        font-weight: 400;
    }
`
