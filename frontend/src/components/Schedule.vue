<template>
  <div class="detailssection travellsection">
    <SectionTitle id="schedule" class="detailssection__title"
      >Schedule</SectionTitle
    >
    <Timeline width="1200px" :items="items"></Timeline>
    <Padder>
      <SectionTitle id="registry" class="detailssection__title"
        >Registry</SectionTitle
      >
      <Paragraph bold>
        Your love and well-wishes are gift enough, but if you do wish to gift us
        something, our registry is with Zola!
      </Paragraph>
      <RegistryButton
        href="https://www.zola.com/registry/pedroandapril2022"
        target="_blank"
      >
        See our registry</RegistryButton
      >
    </Padder>
  </div>
</template>

<script>
import styled, { css } from 'vue-styled-components';
import {
  WebLink,
  Paragraph,
  SectionTitle,
  SubSectionTitle,
} from '@IntusFacultas/typography';
import { FlexColumn, FlexRow } from '@IntusFacultas/layout';
import VueRawTable from '@IntusFacultas/raw-table';
import {
  TableCarat,
  TableRow,
  TableHeader,
  TableCell,
} from '@IntusFacultas/table';
import camera from '../assets/camera.svg';
import cocktail from '../assets/cocktail.svg';
import wedding from '../assets/wedding.svg';
import dinner from '../assets/dinner.svg';
import dance from '../assets/dance.svg';
import Timeline from './Timeline.vue';

const Padder = styled.div`
  margin-top: 3em;
`;

const RegistryButton = styled.a`
  border: 1px solid #e7a6c2;
  padding: 1em;
  display: block;
  max-width: 50%;
  text-decoration: none;
  color: black;
  margin: 0 auto;
  font-weight: bold;
  margin-top: 1em;
  border-radius: 5px;
  transition: color 0.15s ease-out, background-color 0.15s ease-out;
  &:visited {
    color: black;
  }
  &:hover {
    background-color: #e7a6c2;
  }
`;

export const Schedule = {
  data() {
    return {
      camera,
      cocktail,
      wedding,
      dinner,
      items: [
        {
          backgroundColor: '#EADDE1',
          logoColor: '#e37093',
          content: `
                <h3 class="travelsection__timelinesection__header">4:30 PM</h3>
                <p>Ceremony</p>
                <p>
                  Our ceremony will be secular and brief, so we have as much time to celebrate with everyone as
                  possible!
                </p>
              `,
          circleCustomization: css`
            background-image: url(${process.env.VUE_APP_STATIC_URL}${wedding});
            background-size: 25px 25px;
            height: 32px;
            width: 32px;
            background-position: center 3px;
            background-repeat: no-repeat;
          `,
        },
        {
          backgroundColor: '#E5CEDC',
          logoColor: '#db7fb7',
          content: `
                <h3 class="travelsection__timelinesection__header">5:00 PM - 6:00 PM</h3>
                <p>
                  Cocktails
                  <span class="fancyampersand">&</span> Dinner Setup
                </p>
                <p>
                  At this time we will change rooms so that our hosts can set up the hall for dinner.
                </p>
                <p> 
                  We will be trying to get photos with everyone at this time so that everyone has time to eat.
                </p>
              `,
          circleCustomization: css`
            background-image: url(${process.env.VUE_APP_STATIC_URL}${cocktail});
            background-size: 25px 25px;
            height: 32px;
            width: 32px;
            background-position: 5px 3px;
            background-repeat: no-repeat;
          `,
        },
        {
          backgroundColor: '#8F9491',
          logoColor: '#779e87',
          content: `
                <h3 class="travelsection__timelinesection__header">6:00 PM - 7:30 PM</h3>
                <p>Dinner & First Dance</p>
                <p>
                  Toasts and welcomes will be given at this time.
                </p>
            `,
          circleCustomization: css`
            background-image: url(${process.env.VUE_APP_STATIC_URL}${dinner});
            background-size: 32px 32px;
            height: 32px;
            width: 32px;
            background-position: 0px 0px;
            background-repeat: no-repeat;
          `,
        },
        {
          backgroundColor: '#d3c1ed',
          logoColor: '#777b9e',
          content: `
                <h3 class="travelsection__timelinesection__header">7:30 PM - 10:00 PM</h3>
                <p>Party!</p>
                <p>Get your happy feet going!</p>
            `,
          circleCustomization: css`
            background-image: url(${process.env.VUE_APP_STATIC_URL}${dance});
            background-size: 32px 32px;
            height: 32px;
            width: 32px;
            background-position: 0px 0px;
            background-repeat: no-repeat;
          `,
        },
      ],
    };
  },
  components: {
    WebLink,
    Paragraph,
    SectionTitle,
    FlexColumn,
    FlexRow,
    Timeline,
    VueRawTable,
    TableCarat,
    TableRow,
    TableHeader,
    TableCell,
    SubSectionTitle,
    Padder,
    RegistryButton,
  },
};
export default Schedule;
</script>

<style>
.travelsection__cell__img {
  height: 24px;
  width: 24px;
  /* margin-left: auto;
  margin-right: auto; */
  display: inline-block;
}
.travelsection__timelinesection__header {
  /* margin-block-start: 0;
  margin-bottom: 1em !important; */
}
.travelsection__cell__largeimg {
  height: 32px;
  width: 32px;
}
.detailssection__table {
  max-width: 840px;
  /* margin-left: auto;
  margin-right: auto; */
}
.travelsection__cell {
  width: 50%;
  text-align: center;
  padding: 1.5em;
}
.fancyampersand {
  font-family: "Vladimir Script" !important;
  font-size: 26px;
}
.travelsection__timelinesection__paragraph {
  text-align: left;
}
</style>
