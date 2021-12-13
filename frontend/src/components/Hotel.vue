<template>
  <FlexRow>
    <FlexColumn :md="12" :col="6" class="accomodation__mapcontainer">
      <iframe v-if="show" :src="hotel.src" v-bind="iframeProps" />
      <div class="maploading" v-else></div>
    </FlexColumn>
    <FlexColumn :md="12" :col="6" class="accomodation__details">
      <CategoryTitle class="accomodation__hoteltitle">{{ hotel.title }}</CategoryTitle>
      <Paragraph class="accomodation__hotel">
        <TextContent :bold="true">Address:</TextContent>
        {{ hotel.address }}
      </Paragraph>
      <Paragraph>
        <TextContent :bold="true">Distance to Carnegie Center:</TextContent>
        {{ hotel.distanceToEvent }} miles
      </Paragraph>
      <Paragraph>
        <TextContent :bold="true">Distance to Pedro's Family:</TextContent>
        {{ hotel.distanceToFamily }} miles
      </Paragraph>
      <Paragraph class="accomodation__stars">
        <svg
          class="accomodation__stars__star"
          v-for="n in hotel.stars"
          :key="`star-${n}`"
          enable-background="new 0 0 50 50"
          height="50px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 50 50"
          width="50px"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect fill="none" height="50" width="50" />
          <polygon
            fill="gold"
            points="
              25,3.553 30.695,18.321 46.5,19.173 34.214,29.152 38.287,44.447 25,35.848
              11.712,44.447 15.786,29.152 3.5,19.173 19.305,18.321 "
            stroke="gold"
            stroke-miterlimit="10"
            stroke-width="2"
          />
        </svg>
      </Paragraph>
    </FlexColumn>
  </FlexRow>
</template>

<script>
import { FlexColumn, FlexRow } from '@IntusFacultas/layout';

import { CategoryTitle, Paragraph, TextContent } from '@IntusFacultas/typography';

const IFRAME_WIDTH = 400;
const IFRAME_HEIGHT = 300;
const iframeProps = {
  class: 'detailssection__map',
  width: IFRAME_WIDTH,
  height: IFRAME_HEIGHT,
  frameborder: '0',
  style: 'border:0;',
  allowfullscreen: '',
  'aria-hidden': 'false',
  tabindex: 0,
};
export const Hotel = {
  components: {
    CategoryTitle,
    Paragraph,
    TextContent,
    FlexColumn,
    FlexRow,
  },
  data() {
    return {
      show: false,
      iframeProps,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 1000);
  },
  props: {
    hotel: Object,
  },
};
export default Hotel;
</script>

<style>
.accomodation__hoteltitle {
  font-size: 20px;
  text-align: left;
}

.accomodation__mapcontainer {
  justify-content: center;
  align-items: center;
}
.accomodation__details {
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
@media screen and (max-width: 400px) {
  .accomodation__hoteltitle {
    text-align: center;
  }
  .accomodation__details {
    align-items: center;
  }
}
@media screen and (max-height: 400px) {
  .accomodation__hoteltitle {
    text-align: center;
  }
  .accomodation__details {
    align-items: center;
  }
}
.accomodation__stars__star {
  height: 30px;
  width: 30px;
}
.maploading {
  width: 400px;
  height: 300px;
  position: relative;
  background-color: #444;
  color: white;
}
.maploading::after {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  content: 'Loading';
  font-size: 24px;
}
</style>
