import styled, { css } from 'vue-styled-components';
import Theme from '@IntusFacultas/design-system';

const props = {
  width: String,
  timelineColor: String,
  timelineFlavor: String,
  circleColor: String,
  circleFlavor: String,
  itemColor: String,
  itemFlavor: String,
  circleCustomization: String,
  left: Boolean,
  defaultTheme: {
    type: Object,
    default() {
      return Theme;
    },
  },
};

const backgroundColorRetriever = (theme, defaultTheme, flavor, defaultColor = '#d7d7d7') =>
  theme?.[flavor]?.background.color ?? defaultTheme?.[flavor]?.background?.color ?? defaultColor;

const borderColorRetriever = (theme, defaultTheme, flavor, defaultColor = '#d7d7d7') =>
  theme?.[flavor]?.background.color ?? defaultTheme?.[flavor]?.border?.color ?? defaultColor;

export const TimelineContainer = styled('div', props)`
  box-sizing: border-box;
  // margin: 0 auto;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  ${({
    width, timelineColor, timelineFlavor, theme, defaultTheme,
  }) => css`
    max-width: ${width};
    &::after {
      content: '';
      position: absolute;
      width: 6px;
      background-color: ${timelineColor || backgroundColorRetriever(theme, defaultTheme, timelineFlavor)};
      top: 0;
      bottom: 0;
      left: 50%;
      // margin-left: -3px;
    }
  `}
  & * {
    box-sizing: border-box;
  }
  @media screen and (max-width: 600px) {
    &::after {
      left: 31px;
    }
  }
  @media screen and (max-height: 450px) {
    &::after {
      left: 31px;
    }
  }
`;

const leftStyling = (itemColor, itemFlavor, theme, defaultTheme) => css`
  left: 0;
  &::before {
    content: ' ';
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid ${itemColor || borderColorRetriever(theme, defaultTheme, itemFlavor, 'white')};
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent
      ${itemColor || borderColorRetriever(theme, defaultTheme, itemFlavor, 'white')};
  }
`;

const rightStyling = (itemColor, itemFlavor, theme, defaultTheme) => css`
  &::after {
    left: -16px;
  }
  left: 50%;
  &::before {
    content: ' ';
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid ${itemColor || borderColorRetriever(theme, defaultTheme, itemFlavor, 'white')};
    border-width: 10px 10px 10px 0;
    border-color: transparent ${itemColor || borderColorRetriever(theme, defaultTheme, itemFlavor, 'white')} transparent
      transparent;
  }
`;

export const TimelineSection = styled('div', props)`
  padding: 10px 40px;
  position: relative;
  background-color: white;
  width: 50%;

  ${({
    circleColor, theme, defaultTheme, circleFlavor, left, itemColor, itemFlavor, circleCustomization,
  }) => css`
    &::after {
      content: '';
      position: absolute;
      width: 25px;
      height: 25px;
      right: -17px;
      background-color: ${circleColor || backgroundColorRetriever(theme, defaultTheme, circleFlavor)};
      border-width: 4px;
      border-style: solid;
      border-color: ${circleColor || borderColorRetriever(theme, defaultTheme, circleFlavor)};
      top: 15px;
      border-radius: 50%;
      z-index: 1;
    }

    ${left
    ? leftStyling(itemColor, itemFlavor, theme, defaultTheme)
    : rightStyling(itemColor, itemFlavor, theme, defaultTheme)};

    @media screen and (max-width: 600px) {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;

      &::before {
        left: 60px;
        border-style: solid;
        border-width: 10px 10px 10px 0;
        border-color: transparent ${borderColorRetriever(theme, defaultTheme, itemFlavor, 'white')} transparent
          transparent;
      }
      &::after {
        left: 15px;
      }
      ${left
        && css`
          left: 0%;
        `}
    }

    @media screen and (max-height: 450px) {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;

      &::before {
        left: 60px;
        border-style: solid;
        border-width: 10px 10px 10px 0;
        border-color: transparent ${borderColorRetriever(theme, defaultTheme, itemFlavor, 'white')} transparent
          transparent;
      }
      &::after {
        left: 15px;
      }
      ${left
        && css`
          left: 0%;
        `}
    }
    &::after {
      ${circleCustomization}
    }
  `}
`;
export const TimelineContent = styled('div', props)`
  padding: 20px 30px;
  ${({
    theme, defaultTheme, itemColor, itemFlavor,
  }) => css`
    background-color: ${itemColor || backgroundColorRetriever(theme, defaultTheme, itemFlavor)};
    border: 1px solid ${itemColor || borderColorRetriever(theme, defaultTheme, itemFlavor)};
  `}
  position: relative;
  border-radius: 5px;
`;
