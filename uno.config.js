import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
    ],
    extraContent: {
        filesystem: ['resources/views/**/*.blade.php'],
    }
})
