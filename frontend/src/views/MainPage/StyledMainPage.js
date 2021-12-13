import styled, { css } from 'vue-styled-components';
import VSWoff from '../../assets/VladimirScript.woff';
import VSWoff2 from '../../assets/VladimirScript.woff2';
import Background from '../../assets/Wedding Background Optimized.svg';

const props = {
  img: String,
  height: String,
  positioning: Array,
};
export const BackgroundImage = styled('div', props)`
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  position:relative;
  background-color: #444;
  display: flex;
  padding: 0 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @font-face {
    font-family: "Vladimir Script";
    src: url("${process.env.VUE_APP_STATIC_URL}${VSWoff}") format("woff2"),
      url("${process.env.VUE_APP_STATIC_URL}${VSWoff2}") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  ${({ img, height, positioning }) => css`
    background-image: url("${process.env.VUE_APP_STATIC_URL}${img}");
    height: ${height};
    ${positioning};
  `}
`;
export const ContentSection = styled.div`
  &::before {
    background: linear-gradient(
        to top,
        rgba(255, 255, 255, 0) -65%,
        rgba(255, 255, 255, 1)
      ),
      url("${process.env.VUE_APP_STATIC_URL}${Background}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0.1;
  }

  position: relative;
  padding: 3em 0em;
  @media screen and (max-width: 450px) {
    text-align: center;
    & * {
      text-align: center;
    }
  }
`;
