import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { fontFace } from '../assets/font/fontFace.ts'

export const GlobalStyle = createGlobalStyle`
    ${reset}
    ${fontFace}
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 10px;
    }
    body {
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        font-weight: 400;
    }
    #root {
        display: flex;
        flex-direction: column;
    }
    .ant-input, .ant-checkbox-wrapper, .ant-btn {
        font-family: inherit;box-shadow: none;
        border-radius: 0;
    }
`
