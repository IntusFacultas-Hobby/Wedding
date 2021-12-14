<template>
  <div class="detailssection">
    <SectionTitle id="weddingparty" class="detailssection__title">Wedding Party</SectionTitle>
    <FlexRow>
      <FlexColumn class="weddingparty__container" :sm="12">
        <SectionTitle class="weddingparty__container__title">Officiant</SectionTitle>
        <div class="weddingparty__container__item">
          <img
            class="weddingparty__container__item__image"
            :src="`${STATIC_URL}${dpg}`"
            alt="Picture of Adithya, the man of honor"
          />
          <div class="weddingparty__container__item__text">
            <Paragraph bold>Patrick Giblin</Paragraph>
            <Paragraph>
              Patrick Giblin is a close friend of Pedro's. He was Pedro's DARE officer in Junior High School, and shared
              a special relationship both with Pedro, and Pedro's Sensei.
            </Paragraph>
          </div>
        </div>
      </FlexColumn>
    </FlexRow>
    <FlexRow>
      <FlexColumn :md="6" :sm="12" class="weddingparty__container">
        <SectionTitle class="weddingparty__container__title">
          Bridesmaids
          <span class="fancyampersand fancyampersand--big">&amp;</span>
          Bridesguards
        </SectionTitle>
        <div class="weddingparty__container__item">
          <img
            class="weddingparty__container__item__image"
            :src="`${STATIC_URL}${adithya}`"
            alt="Picture of Adithya, the man of honor"
          />
          <div class="weddingparty__container__item__text">
            <SubSectionTitle>Man of Honor</SubSectionTitle>
            <Paragraph bold>Adithya Bhattachar</Paragraph>
            <Paragraph>
              April and Adithya met in a Purdue calculus class and bonded over their mutual love of food, similar senses
              of humor, and dreams of surviving their engineering degrees. A decade and a few engineering degrees later,
              he is still a valued expert on food, bread baking, traveling, and celebrating life.
            </Paragraph>
          </div>
        </div>
        <div class="weddingparty__container__item">
          <img
            class="weddingparty__container__item__image"
            :src="`${STATIC_URL}${katie}`"
            alt="Picture of Katie, the bridesmaid"
          />
          <div class="weddingparty__container__item__text">
            <SubSectionTitle>Bridesmaid</SubSectionTitle>
            <Paragraph bold>Katie Thompson</Paragraph>
            <Paragraph
              >April and Katie are mutually each others cheerleaders and have been since meeting on the Purdue
              collegiate ballroom team. She is an amazing artist (on and off the dance floor) that brings so much color
              and joy to their friendship.
            </Paragraph>
          </div>
        </div>
      </FlexColumn>
      <FlexColumn :md="6" :sm="12" class="weddingparty__container">
        <SectionTitle class="weddingparty__container__title">
          Groomsmen
          <span class="fancyampersand fancyampersand--big">&amp;</span>
          Groomsmaids
        </SectionTitle>
        <div class="weddingparty__container__item">
          <img
            class="weddingparty__container__item__image"
            :src="`${STATIC_URL}${nathan}`"
            alt="Picture of Nathan, the best man"
          />
          <div class="weddingparty__container__item__text">
            <SubSectionTitle>Best Man</SubSectionTitle>
            <Paragraph bold>Nathan Whitney</Paragraph>
            <Paragraph>
              Pedro and Nathan have been best friends since the 5th grade, and find common ground in the
              <a href="https://pbs.twimg.com/media/EWrLpSvXgAA9uk5.png" target="_blank">
                gentle art of involuntary yoga
              </a>
              , as well as coffee, video games, and poodles.
            </Paragraph>
          </div>
        </div>
        <div class="weddingparty__container__item">
          <img
            class="weddingparty__container__item__image"
            :src="`${STATIC_URL}${luis}`"
            alt="Picture of Luis, the best man"
          />
          <div class="weddingparty__container__item__text">
            <SubSectionTitle>Best Man</SubSectionTitle>
            <Paragraph bold>Luis Del Moral Lopez</Paragraph>
            <Paragraph>
              Luis is Pedro's younger brother. He's Pedro's resident meme supplier, as well as gaming buddy. He's
              Pedro's guide into what the kids these days are doing.
            </Paragraph>
          </div>
        </div>
        <div class="weddingparty__container__item">
          <img
            class="weddingparty__container__item__image"
            :src="`${STATIC_URL}${dasha}`"
            alt="Picture of Dasha, the groomsmaid"
          />
          <div class="weddingparty__container__item__text">
            <SubSectionTitle>Groomsmaid</SubSectionTitle>
            <Paragraph bold>Dasha Beniash</Paragraph>
            <Paragraph>
              Dasha and Pedro have been fast friends ever since Dasha's first day at karate. Since then, they have been
              each other's trusted confidants. Dasha was the person who inspired Pedro to join ballroom, where he would
              eventually meet April.
            </Paragraph>
          </div>
        </div>
      </FlexColumn>
    </FlexRow>
  </div>
</template>

<script>
import { SectionTitle, SubSectionTitle, Paragraph } from '@IntusFacultas/typography';
import { FlexRow, FlexColumn } from '@IntusFacultas/layout';
import adithya from '../assets/adithya.webp';
import katie from '../assets/katie.webp';
import nathan from '../assets/nathan.webp';
import dasha from '../assets/dasha.webp';
import luis from '../assets/luis.jpg';
import dpg from '../assets/dpg.jpg';

export const WeddingParty = {
  data() {
    return {
      STATIC_URL: process.env.VUE_APP_STATIC_URL,
      adithya,
      katie,
      nathan,
      dasha,
      luis,
      dpg,
    };
  },
  components: {
    SectionTitle,
    SubSectionTitle,
    Paragraph,
    FlexRow,
    FlexColumn,
  },
};
export default WeddingParty;
</script>

<style>
.fancyampersand--big {
  font-size: 40px;
}
.weddingparty__container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.weddingparty__container__item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0.5em 0;
}
.weddingparty__container__item__image {
  height: 300px;
}
.weddingparty__container__item__text {
  display: flex;
  flex-direction: column;
  padding: 1em;
  text-align: left;
  width: 300px;
}
@media screen and (max-width: 400px) {
  .weddingparty__container__item__text {
    text-align: center;
    width: initial;
  }
  .weddingparty__container__item__image {
    /* height: initial; */
    /* max-height: 100%; */
    max-width: 300px;
    max-height: 300px;
    height: auto;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    /* height: 300px; */
  }
}
</style>
