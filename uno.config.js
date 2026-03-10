// uno.config.js
import { defineConfig, presetUno, presetWebFonts } from "unocss";
import { presetWind3 } from "unocss";


export default defineConfig({
  presets: [
    presetWind3(), // Add this to enable UnoCSS utility classes
    presetWebFonts({
      provider: "google",
      fonts: {
        // This maps 'font-zilla' to the Google Font
        zilla: "Zilla Slab",
        vietnam: "Be Vietnam Pro",
      },
    }),
  ],
});
