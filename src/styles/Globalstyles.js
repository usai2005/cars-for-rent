import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import ManropeMedium from '../fonts/Manrope-Medium.ttf';
import ManropeRegular from '../fonts/Manrope-Regular.ttf';
import ManropeSemiBold from '../fonts/Manrope-SemiBold.ttf';
import MontserratRegular from '../fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from '../fonts/Montserrat-SemiBold.ttf';

const GlobalStyle = createGlobalStyle`

 @font-face {
        font-family: 'ManropeMedium';
        src: local('Manrope-Medium'),
        url(${ManropeMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'ManropeRegular';
        src: local('Manrope-Regular'),
        url(${ManropeRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'ManropeSemiBold';
        src: local('Manrope-SemiBold'),
        url(${ManropeSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'MontserratRegular';
        src: local('Montserrat-Regular'),
        url(${MontserratRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'MontserratSemiBold';
        src: local('Montserrat-SemiBold'),
        url(${MontserratSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    body {
        padding: 0;

        font-family: 'Manrope', sans-serif;

        background-color: #FFFFFF;
    }

    p,
    ul,
    h1,
    h2,
    h3 {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: currentColor;
    }

    ul {
        list-style: none;
    }

    img {
        display: block;
    }

button {
    cursor: pointer;
    border: none;

    padding: 0;
}

`;

export default GlobalStyle;
