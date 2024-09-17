import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            {
                find: '@components',
                replacement: path.resolve(__dirname, 'src/components'),
            },
            {
                find: '@pages',
                replacement: path.resolve(__dirname, 'src/pages'),
            },
        ],
    },
    server: {
        fs: {
            // 개발 서버가 접근을 거부할 파일 및 디렉토리의 패턴 목록
            deny: ['**/.env', '**/.env.*'],
        },
    },
})
