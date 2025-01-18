import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  // server:{
  //   proxy:{
  //     'https://ipapi.co/json/':'http://localhost:5173'
  //   }

  // }
})
