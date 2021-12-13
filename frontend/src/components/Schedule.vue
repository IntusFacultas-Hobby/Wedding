<template>
  <div class="detailssection travellsection">
    <SectionTitle id="schedule" class="detailssection__title">Schedule</SectionTitle>
    <Paragraph>(Still not finalized, be sure to check back!)</Paragraph>
    <Timeline width="1200px" :items="items"></Timeline>
  </div>
</template>

<script>
import { css } from 'vue-styled-components';
import {
  WebLink, Paragraph, SectionTitle, SubSectionTitle,
} from '@IntusFacultas/typography';
import { FlexColumn, FlexRow } from '@IntusFacultas/layout';
import VueRawTable from '@IntusFacultas/raw-table';
import {
  TableCarat, TableRow, TableHeader, TableCell,
} from '@IntusFacultas/table';
import camera from '../assets/camera.svg';
import cocktail from '../assets/cocktail.svg';
import wedding from '../assets/wedding.svg';
import dinner from '../assets/dinner.svg';
import Timeline from './Timeline.vue';

export const Schedule = {
  data() {
    return {
      camera,
      cocktail,
      wedding,
      dinner,
      items: [
        {
          backgroundColor: '#F3EAF4',
          logoColor: '#da8fe3',
          content: `
                <h3 class="travelsection__timelinesection__header">4:00 PM - 4:30 PM</h3>
                <p>First Look <span class="fancyampersand">&</span> Photos</p>
              `,
          circleCustomization: css`
            background-image: url(${process.env.VUE_APP_STATIC_URL}${camera});
            background-size: 22px 25px;
            height: 32px;
            width: 32px;
            background-position: center 2px;
            background-repeat: no-repeat;
          `,
        },
        {
          backgroundColor: '#EADDE1',
          logoColor: '#e37093',
          content: `
                <h3 class="travelsection__timelinesection__header">4:30 PM - 4:40 PM</h3>
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
                <h3 class="travelsection__timelinesection__header">4:40 PM - 6:00 PM</h3>
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
                <h3 class="travelsection__timelinesection__header">6:15 PM - 10:00 PM</h3>
                <p>Dinner and Party!</p>
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
  font-family: 'Vladimir Script' !important;
  font-size: 26px;
}
.travelsection__timelinesection__paragraph {
  text-align: left;
}
</style>
