// fonts/calsans.js

import { Global } from '@emotion/react'; // or styled-components, depending on your setup

export const calsans = (
  <Global
    styles={`
      @font-face {
        font-family: 'Calsans';
        src: url('/fonts/Calsans.woff2') format('woff2'),
             url('/fonts/Calsans.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }

      body {
        font-family: 'Calsans', sans-serif;
      }
    `}
  />
);
