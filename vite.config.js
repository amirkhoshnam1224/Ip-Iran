// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { viteStaticCopy } from 'vite-plugin-static-copy'; // پلاگین برای کپی کردن فایل‌ها

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     viteStaticCopy({
//       targets: [
//         {
//           src: '_redirects', // مسیر فایل _redirects
//           dest: '.'          // مقصد در پوشه dist
//         }
//       ]
//     })
//   ],
//   server: {
//     host: '0.0.0.0', 
//     port: 5173,      
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy'; // پلاگین برای کپی کردن فایل‌ها

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '_redirects', // مسیر فایل _redirects
          dest: '.'          // مقصد در پوشه dist
        }
      ]
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://37.152.181.119:45716', // آدرس سرور مقصد
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // حذف /api از مسیر
      },
    },
  },
});

