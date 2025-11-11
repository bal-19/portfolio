import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss({
            theme: {
                extend: {
                    keyframes: {
                        shine: {
                            "0%": { "background-position": "100%" },
                            "100%": { "background-position": "-100%" },
                        },
                    },
                    animation: {
                        shine: "shine 5s linear infinite",
                    },
                },
            },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
