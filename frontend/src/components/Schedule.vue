<template>
  <div class="detailssection travellsection">
    <section-title id="schedule" class="detailssection__title">Schedule</section-title>
    <timeline
      width="1200px"
      :items="items"
      default-item-flavor="TimelineItem"
      default-circle-color="#707070"
      default-timeline-flavor="Secondary"
      timeline-flavor="Secondary"
    ></timeline>
  </div>
</template>

<script>
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
import Timeline from './Timeline';

export const Schedule = {
  data() {
    return {
      camera,
      cocktail,
      wedding,
      dinner,
      items: [
        {
          content: `
                <h3 class="travelsection__timelinesection__header">1:00 PM - 1:30 PM</h3>
                <p>Arrive at the Carnegie Center</p>
                <p class="travelsection__timelinesection__paragraph">Street level parking is available around the Carnegie Center</p>
              `,
        },
        {
          content: `
                <h3 class="travelsection__timelinesection__header">
                1:30 PM - 3:30 PM</h3>
                
                <p>Photos</p>
              `,
          circleCustomization: `
                background-image: url(${process.env.VUE_APP_STATIC_URL}${camera});
                background-size: 25px 25px;
                height:32px;
                width: 32px;
                right: -15px;
                left: -20px;
                background-position: center 2px;
                background-repeat: no-repeat;
                @media screen and (max-width: 600px) {
                    left: 11px;
                }
                @media screen and (max-height: 450px) {
                    left: 11px;
                }
              `,
        },
        {
          content: `
                <h3 class="travelsection__timelinesection__header">3:30 PM - 4:30 PM</h3>
                <p>
                  Cocktails
                  <span class="fancyampersand">&</span> Ceremony Setup
                </p>
              `,
          circleCustomization: `
                background-image: url(${process.env.VUE_APP_STATIC_URL}${cocktail});
                background-size: 25px 25px;
                height:32px;
                width: 32px;
                right: -20px;
                background-position: 5px 3px;
                background-repeat: no-repeat;
                @media screen and (max-width: 600px) {
                    left: 11px;
                }
                @media screen and (max-height: 450px) {
                    left: 11px;
                }
            `,
        },
        {
          content: `
                <h3 class="travelsection__timelinesection__header">4:30 PM - 5:00 PM</h3>
                <p>Ceremony</p>
            `,
          circleCustomization: `
                background-image: url(${process.env.VUE_APP_STATIC_URL}${wedding});
                background-size: 25px 25px;
                height:32px;
                width: 32px;
                right: -15px;
                left: -20px;
                background-position: center 3px;
                background-repeat: no-repeat;
                @media screen and (max-width: 600px) {
                    left: 11px;
                }
                @media screen and (max-height: 450px) {
                    left: 11px;
                }
            `,
        },
        {
          content: `
                <h3 class="travelsection__timelinesection__header">5:00 PM - 11:00 PM</h3>
                <p>
                  Dinner
                  <span class="fancyampersand">&</span> Party
                </p>
            `,
          circleCustomization: `
                background-image: url(${process.env.VUE_APP_STATIC_URL}${dinner});
                background-size: 32px 32px;
                height:32px;
                width: 32px;
                right: -20px;
                background-position: 0px 0px;
                background-repeat: no-repeat;
                @media screen and (max-width: 600px) {
                    left: 11px;
                }
                @media screen and (max-height: 450px) {
                    left: 11px;
                }
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
  font-family: "Vladimir Script" !important;
  font-size: 26px;
}
.travelsection__timelinesection__paragraph {
  text-align: left;
}
</style>
