<template>
  <div class="detailssection">
    <SectionTitle id="accomodation" class="detailssection__title">Accomodation</SectionTitle>
    <ul class="detailsnavigation accomodation__navigation">
      <li>
        <a href="#accomodationNearCarnegie">Near the Carnegie Center</a>
      </li>
      <li>
        <a href="#accomodationNearPedro">Near Pedro's Family</a>
      </li>
      <li class="accomodation__filters__toggler">
        <span style="white-space: nowrap" @click="filtersToggled = !filtersToggled">
          <span v-if="filtersToggled">Close&nbsp;</span>
          <span v-else>View&nbsp;</span>Filters
        </span>
        <AccomodationFilters :class="{ 'accomodation__filters--toggled': filtersToggled }">
          <div class="accomodation__selectcontent">
            <NLabel for="hotelOrdering">Order by</NLabel>
            <SelectMe
              class="accomodation__sortinginput"
              :options="options"
              :can-be-empty="false"
              v-model="option"
              :multi-select="false"
              name="hotelOrdering"
            ></SelectMe>
          </div>
          <div>
            <Radio v-model="order" label="Ascending" input-value="ascending"></Radio>
            <Radio
              class="accomodation__radio--second"
              v-model="order"
              label="Descending"
              input-value="descending"
            ></Radio>
          </div>
        </AccomodationFilters>
      </li>
    </ul>
    <SubSectionTitle id="accomodationNearCarnegie" class="accomodation__subtitle">
      Hotels near the Carnegie Center
    </SubSectionTitle>
    <div class="hotelcontainer">
      <Hotel
        class="hotel"
        v-for="(hotel, index) in sortedHotelsNearEvent"
        :key="`event-${index}`"
        :hotel="hotel"
        :show="currentlyToggled === index"
        @click="currentlyToggled = index"
      ></Hotel>
    </div>
    <SubSectionTitle id="accomodationNearPedro" class="accomodation__subtitle accomodation__subtitle--second">
      Hotels near Pedro's Family
    </SubSectionTitle>
    <div class="hotelcontainer">
      <Hotel
        class="hotel--pedro"
        v-for="(hotel, index) in sortedHotelsNearFamily"
        :key="`family-${index}`"
        :hotel="hotel"
      ></Hotel>
    </div>
  </div>
</template>

<script>
import { FlexColumn, FlexRow } from '@IntusFacultas/layout';
import Radio from '@IntusFacultas/radio';
import { SectionTitle, SubSectionTitle, NLabel } from '@IntusFacultas/typography';
import SelectMe from '@IntusFacultas/select-me';
import Hotel from './Hotel.vue';
import { AccomodationFilters } from './Accomodation/StyledAccomodation';
import { hotelsNearEvent, hotelsNearFamily } from './Accomodation/data';

export const Accomodation = {
  components: {
    FlexColumn,
    SelectMe,
    FlexRow,
    SectionTitle,
    NLabel,
    AccomodationFilters,
    SubSectionTitle,
    Hotel,
    Radio,
  },
  data() {
    return {
      filtersToggled: false,
      order: 'ascending',
      option: [
        {
          text: 'Sort by distance to event',
          value: 'distanceToEvent',
        },
      ],
      options: [
        {
          text: 'Sort by stars',
          value: 'stars',
        },
        {
          text: 'Sort by distance to event',
          value: 'distanceToEvent',
        },
        {
          text: 'Sort by distance to family',
          value: 'distanceToFamily',
        },
      ],
      hotelsNearEvent,
      hotelsNearFamily,
      currentlyToggled: null,
    };
  },
  computed: {
    sortedHotelsNearEvent() {
      let hotels = this.hotelsNearEvent.slice();
      const field = this.option[0].value;
      hotels = hotels.sort((a, b) => a[field] - b[field]);
      if (this.order === 'descending') {
        hotels = hotels.reverse();
      }
      return hotels;
    },
    sortedHotelsNearFamily() {
      let hotels = this.hotelsNearFamily.slice();
      const field = this.option[0].value;
      hotels = hotels.sort((a, b) => a[field] - b[field]);
      if (this.order === 'descending') {
        hotels = hotels.reverse();
      }
      return hotels;
    },
  },
};
export default Accomodation;
</script>

<style>
.accomodation__navigation {
  border-color: #dedede !important;
  padding-block-end: 1.5em !important;
}

.accomodation__filters__toggler {
  width: 102px;
  position: relative;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  transition: width 0.3s ease-in-out;
}
.accomodation__filters--toggled {
  pointer-events: all !important;
  opacity: 1 !important;
  clip-path: circle(100% at 160px 0px) !important;
}
.accomodation__selectcontainer {
  flex-direction: column;
  align-items: center;
}
.accomodation__selectcontent {
  text-align: left !important;
}
/* .accomodation__radio--second {
  margin-left: 1em;
} */
.accomodation__radios {
  align-items: center;
}
.accomodation__sortinginput {
  text-align: initial !important;
}
.accomodation__subtitle {
  font-size: 25px;
  padding-top: 1em;
  padding-bottom: 1em;
  border-bottom: 2px solid #dedede;
}
#accomodationNearPedro {
  border-top: 2px solid #dedede;
}
@media screen and (max-width: 450px) {
  #accomodation {
    font-size: 30px;
  }
}
.hotelcontainer {
  margin-bottom: 1.5em;
  margin-top: 1.5em;
}
.hotelcontainer:last-of-type {
  margin-bottom: 0em;
  margin-top: 1.5em;
}
</style>
