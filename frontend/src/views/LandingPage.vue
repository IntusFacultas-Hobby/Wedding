<template>
  <LandingPageBackground :svg="svg">
    <n-card class="landing-modal-container">
      <template v-slot:body>
        <div class="landing-modal">
          <img class="wedding-logo" :src="`${STATIC_URL}${logo}`" alt="April and Pedro's initials" />
          <page-title class="landing-modal-title">SAVE THE DATE</page-title>
          <custom-announcement class="secondary-title">We're getting married!</custom-announcement>
          <custom-announcement>June 12th 2021</custom-announcement>
          <custom-announcement>
            <web-link
              class="custom-link"
              href="https://www.thecarnegiecenter.org/"
            >The Carnegie Center of Columbia Tusculum</web-link>
            <br />Cincinnati, Ohio
          </custom-announcement>
          <small-text class="patience-line">(Check back later, Website being built)</small-text>
        </div>
      </template>
    </n-card>
  </LandingPageBackground>
</template>

<script>
import styled from 'vue-styled-components';
import NCard from '@IntusFacultas/card';
import { PageTitle, WebLink, SmallText } from '@IntusFacultas/typography';
import background from '../assets/Wedding Background Optimized.svg';
import Logo from '../assets/Wedding Logo.svg';

const props = {
  svg: String,
};
const CustomAnnouncement = styled('p')`
  font-family: "Montserrat";
  color: #444;
  // margin-block-start: 16px;
  // margin-block-end: 0;
  font-size: 20px;
`;
const LandingPageBackground = styled('div', props)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
  background-image: url("${process.env.VUE_APP_STATIC_URL}${(props) => props.svg}");
  background-size: 3000px;
  background-position: center;
  background-repeat: repeat;
  height: 100vh;
  width: 100%;
  overflow: auto;
`;
export const LandingPage = {
  components: {
    LandingPageBackground,
    NCard,
    PageTitle,
    CustomAnnouncement,
    WebLink,
    SmallText,
  },
  data() {
    return {
      svg: background,
      logo: Logo,
      STATIC_URL: process.env.VUE_APP_STATIC_URL,
    };
  },
  mounted() {},
};
export default LandingPage;
</script>

<style>
.wedding-logo {
  /* margin-bottom: 25px; */
}
.landing-modal-title {
  font-size: 50px;
}
.secondary-title {
  font-size: 25px;
}
.patience-line {
  /* margin-top: 16px !important; */
}
.landing-modal-container {
  min-width: 350px;
  width: 50%;
  max-width: 840px;
}
.landing-modal-container > div {
  box-shadow: 0px 5px 5px #aeaeae;
}
.landing-modal {
  padding: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.custom-link {
  color: #5374a2;
  text-decoration: none;
  font-family: "Montserrat";
  font-size: 20px !important;
}
.custom-link:visited {
  color: #344966;
}
@media screen and (max-width: 490px) {
  .landing-modal {
    padding: 25px;
  }
  .wedding-logo {
    width: 200px;
  }
}
</style>
