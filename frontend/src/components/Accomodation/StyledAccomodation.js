import styled from 'vue-styled-components';

export const AccomodationFilters = styled('div')`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: absolute;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.48);
  border-radius: 5px;
  width: 300px;
  padding: 1em;
  background-color: white;
  -webkit-transition: opacity, clip-path 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  right: -54%;
  clip-path: circle(10px at 160px 0px);
  opacity: 0;
  pointer-events: none;
`;

export default AccomodationFilters;
