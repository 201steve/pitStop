import { createRoot } from 'react-dom/client'
import Router from './Router/Router.tsx'
import { StrictMode } from 'react'
import { GlobalStyle } from './styles/globalStyles.ts'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router />
        </ThemeProvider>
    </StrictMode>
)
