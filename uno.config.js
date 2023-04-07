import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
    ],
    filesystem: ['./resources/views/**/*.blade.php'],
})
