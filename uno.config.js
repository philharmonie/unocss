import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
    ],
    include: ['./resources/views/**/*.blade.php'],
})