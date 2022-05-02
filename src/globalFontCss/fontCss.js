import { createGlobalStyle } from "styled-components";
import ApercuProRegular from "../fonts/ApercuProRegular.otf";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'ApercuProRegular';
  src: url(${ApercuProRegular}) format('opentype'),
       url(${ApercuProRegular}) format('opentype');
}
`;

export default FontStyles;
