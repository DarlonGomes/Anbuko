import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        width: 100vw;
        height: 100vh;
        font-family: 'Inter';

        /* font-family: 'Lato', sans-serif;
        font-family: 'Oswald', sans-serif;
        font-family: 'Passion One', cursive; */
    }
    
    button {
        cursor: pointer;
    }
    
    :root{

        --white-100: #dfdfdf;
        --white-200: #b9bbbe;
        --white-400: #7BA2D7;
        --white-900: #ffffff;

        --gray-100: #b9bbbe;
        --gray-200-10: rgba(131,131,131, 0.1);
        --gray-300: #879090;
        --gray-400: #757474;
        --gray-500: #898a8c;
        --gray-900-80: rgba(54,57,63, 0.8);
        --gray-900: #4B4B4B;

        --black-300: rgba(32,34,37,0.8);
        --black-400: #2e2e2e;
        --black-600: #292b2f;
        --black-800: #131313;
        --black-900-90: rgba(0,0,0, 0.9);
        --black-900: #000000;

        --indigo-300: #A5B4FC;

        --purple-100: #4752C4;
        --purple-500: #5865F2;
        

        --green-600: #3BA55C;
        --green-600-10: rgba(59, 165, 92, 0.8);

        --bg-blue-900: #3a4252;
        --bg-gray-400: #676869;
        --bg-gray-800: rgba(130, 132, 135, 0.5);

        --border-black: rgba(0, 0, 0, 0.11);

        --trans-white: rgba(255, 255, 255, 0.2);
        --trans-white-2: rgba(255,255,255, 0.4);
    }
`;

export default GlobalStyles;
