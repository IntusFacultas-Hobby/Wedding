import styled, { css } from 'vue-styled-components';
import Theme from '@IntusFacultas/design-system';

const props = {
  width: String,
  circleCustomization: Array,
  backgroundColor: String,
  logoColor: String,
  defaultTheme: {
    type: Object,
    default() {
      return Theme;
    },
  },
};

/* eslint-disable */
function lightenDarkenColor(col, amt) {
  col = parseInt(col, 16);
  return (((col & 0x0000ff) + amt) | ((((col >> 8) & 0x00ff) + amt) << 8) | (((col >> 16) + amt) << 16)).toString(16);
}

function addAlpha(color, opacity) {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}
/* eslint-enable */

export const TimelineContainer = styled('div', props)`
  box-sizing: border-box;
  // margin: 0 auto;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimelineSection = styled('div', props)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  margin-bottom: 1em;

  ${({ backgroundColor, logoColor, circleCustomization }) => css`
    background-color: ${addAlpha(backgroundColor ?? '#FFFFFF', 0.3)};
    border: 1px solid ${addAlpha(backgroundColor ?? '#FFFFFF', 0.3)};
    border-radius: 1em;
    &::after {
      content: '';
      position: absolute;
      width: 25px;
      height: 25px;
      left: -17px;
      background-color: ${logoColor};
      border-width: 4px;
      border-style: solid;
      border-color: ${logoColor};
      top: 15px;
      border-radius: 50%;
      z-index: 1;
      ${circleCustomization}
    }
  `}
`;
export const TimelineContent = styled('div', props)`
  padding: 20px 30px;
  position: relative;
`;
