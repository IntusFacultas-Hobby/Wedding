<template>
  <WarningContainer>
    <WarningTape />
    <WarningTape />
    <DelayedSign>
      <DelayedAnnouncement>Delayed until 2022 due to the pandemic. Sorry guys! Stay tuned.</DelayedAnnouncement>
    </DelayedSign>
  </WarningContainer>
</template>

<script>
  import styled from 'vue-styled-components';
  const WarningContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const DelayedAnnouncement = styled("p")`
  font-family: "Montserrat";
  color: #444;
  font-size: 20px;
`;
  const DelayedSign = styled.div`
    padding: 2em;
    box-shadow: 0px 2px 2px rgba(0,0,0, 0.2);
    background-color: white;
    border-radius: 3px;
    border: 1px solid #444;
    z-index: 3;
    max-width: 350px;
    text-align: center;
  `
  const WarningTape = styled.div`
    height: 30px;
    color: white;
    padding: 5px;
    background-image: repeating-linear-gradient(
      -55deg,
      #000,
      #000 20px,
      #ffb101 20px,
      #ffb101 40px
    );
    position: absolute;
    width: 200%;
    top: 50%;
    left: -50%;
    right: 150%;
    &:first-of-type {
      transform: rotate(.10turn);
      transform-origin: center center;
    }
    &:nth-of-type(2) {
      transform: rotate(-.10turn);
      transform-origin: center center;
    }
  `
  export const Delayed = {
  components: {
    WarningTape,
    WarningContainer,
    DelayedAnnouncement,
    DelayedSign
  },
  data() {
    return {
      STATIC_URL: process.env.VUE_APP_STATIC_URL,
    };
  },
  mounted() {},
};
export default Delayed;
</script>