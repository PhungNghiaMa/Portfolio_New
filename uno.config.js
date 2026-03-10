// uno.config.js
import { defineConfig, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetWebFonts({
      provider: 'google', 
      fonts: {
        // This maps 'font-zilla' to the Google Font
        zilla: 'Zilla Slab',
        vietnam: 'Be Vietnam Pro',
      },
    }),
  ],
})