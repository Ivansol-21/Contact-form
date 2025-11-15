import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: 'https://ivansol-21.github.io/Contact-form',
    plugins: [
        tailwindcss(),
    ],
});