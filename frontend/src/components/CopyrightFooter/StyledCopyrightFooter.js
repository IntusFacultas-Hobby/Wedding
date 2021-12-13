import styled from 'vue-styled-components';

export const FooterContainer = styled('footer')`
  background-color: white;
  height: 130px;
  bottom: 0;
  left: 0;
  border-top: 1px solid #707070;
  right: 0;
  padding: 0.5em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FooterLine = styled('section')`
  display: block;
  & > span {
    display: inline-block;
  }
  & > span:nth-of-type(2) {
    margin-left: 0.5em;
  }
  @media screen and (max-width: 500px) {
    & > span:first-child {
      width: 200px;
    }
  }
`;

export const FooterText = styled('div')`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 350px;
  max-width: 840px;
`;
