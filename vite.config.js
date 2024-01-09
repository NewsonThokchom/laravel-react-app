import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    // server: {
    //     hmr: {
    //         host: "localhost",
    //     },
    // },
    server: {
        host: "0.0.0.0", // *** Added by me because of the
    },
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        react(),
    ],
});
