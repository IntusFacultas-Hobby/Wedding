import styled, { css } from 'vue-styled-components';

export const IFRAME_WIDTH = 400;
export const IFRAME_HEIGHT = 300;

const OverlayStyling = css`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  font-size: 24px;
  cursor: pointer;
  font-family: Montserrat;
`;

export const StyledImage = styled.img`
  max-width: ${IFRAME_WIDTH + 50}px;
  height: ${IFRAME_HEIGHT}px;
  @media screen and (max-width: 400px) {
    max-width: ${IFRAME_WIDTH - 100}px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  @media screen and (max-width: 400px) {
    &::before {
      content: 'Tap to load map';
      ${OverlayStyling};
    }
  }
  @media screen and (min-width: 401px) {
    &::after {
      opacity: 0;
      transition: opacity 0.3s ease-out;
      ${OverlayStyling};
      content: 'Click to load map.';
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }
`;
