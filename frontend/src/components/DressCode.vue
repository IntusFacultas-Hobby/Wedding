<template>
  <div class="detailssection">
    <SectionTitle id="dresscode" class="detailssection__title">Dress Code</SectionTitle>
    <Paragraph>
      We can’t wait to see you on the dance floor (dancing is mandatory). Keep this in mind when choosing your outfit!
    </Paragraph>
    <Paragraph>
      The venue has air conditioning, but June weather in Cincinnati can be unforgivingly hot and humid.
    </Paragraph>
    <Paragraph> The general rule of thumb is <strong>semi-formal/formal.</strong></Paragraph>
    <FlexRow class="dresscode__columns">
      <FlexColumn :md="6" :sm="12" class="dresscodecolumn">
        <img class="dress__img" :src="`${STATIC_URL}${dress}`" alt="Women's dress" />
        <SectionTitle>Ladies</SectionTitle>
        <Paragraph
          >Ladies, wear what you feel most comfortable in. If that means a dress, suit or skirt, then great!</Paragraph
        >
        <Paragraph> <strong>Note:</strong> The bride will be wearing red. </Paragraph>
      </FlexColumn>
      <FlexColumn :md="6" :sm="12" class="dresscodecolumn">
        <img :src="`${STATIC_URL}${suit}`" alt="Men's suit" class="dress__img" />
        <SectionTitle>Gentlemen</SectionTitle>
        <Paragraph
          >Gentlemen, two-piece suits, sports jackets, or just a vest and tie are all great options for the
          event!</Paragraph
        >
        <Paragraph
          >We only ask that you avoid a three-piece suit, as the bridal party will be wearing three-piece
          suits.</Paragraph
        >
      </FlexColumn>
    </FlexRow>
  </div>
</template>

<script>
import { SectionTitle, SubSectionTitle, Paragraph } from '@IntusFacultas/typography';
import { FlexRow, FlexColumn } from '@IntusFacultas/layout';
import dress from '../assets/dress.svg';
import suit from '../assets/suit.svg';

export const DressCode = {
  data() {
    return {
      dress,
      suit,
      STATIC_URL: process.env.VUE_APP_STATIC_URL,
    };
  },
  components: {
    SectionTitle,
    SubSectionTitle,
    FlexRow,
    FlexColumn,
    Paragraph,
  },
};
export default DressCode;
</script>

<style>
.dress__img {
  height: 130px;
}
.dresscodecolumn {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
