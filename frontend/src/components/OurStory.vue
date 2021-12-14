<template>
  <FlexRow class="ourstory">
    <FlexColumn :md="12" :col="1" class="ourstory__titlearea">
      <SectionTitle>Our Story</SectionTitle>
    </FlexColumn>
    <FlexColumn :md="12" :col="1" class="ourstory__paragraphs">
      <Paragraph>
        We met each other for the first time on the Purdue Latin &amp; Ballroom Dance Team.
      </Paragraph>
      <Paragraph>
        We both were bright-eyed bushy-tailed newcomers, just desperately trying to stay on time to quickstep, when we
        ran into each other (not literally) during practice, the day before Valentine's day.
      </Paragraph>
      <Paragraph>
        Since we were both single at the time, we figured "Hey, no one will be using the practice space, let's practice
        together!" Pedro suggested turning the practice into practice and a dinner, and to this day, April maintains she
        didn't realize that it was meant to be a date.
      </Paragraph>
      <Paragraph>
        That night, we went to 9 Irish Brothers in West Lafayette, and talked until closing time (quite a feat for a bar
        known for late closing hours). We bonded over our shared love of dancing, books, gaming, and food, and not too
        long after that, we made our relationship official, and soon after began to compete together.
      </Paragraph>

      <div class="ourstory__paragraphs__image">
        <img class="ourstory__paragraphs__image" :src="`${STATIC_URL}${picture3}`" alt="Pedro proposing to April" />
      </div>
      <Paragraph>
        3 years later, Pedro hatched a scheme to propose to April at the Purdue Ballroom Classic annual competition. He
        conspired with Daniel and Yuehwern, the event coordinators and Latin coaches for both him and April, along with
        all of their mutual friends, to surprise her at the event, even flying her mother out in secret to have her
        there for the moment.
      </Paragraph>
      <Paragraph>
        Now April and Pedro are ready to take the next big step in their life, and hope to spend the day celebrating
        with you!
      </Paragraph>
    </FlexColumn>
  </FlexRow>
</template>

<script>
import { FlexColumn, FlexRow } from '@IntusFacultas/layout';
import { Paragraph, SectionTitle } from '@IntusFacultas/typography';
import picture3 from '../assets/picture3.webp';

export const OurStory = {
  components: {
    FlexColumn,
    FlexRow,
    Paragraph,
    SectionTitle,
    picture3,
  },
  data() {
    return {
      picture3,
      STATIC_URL: process.env.VUE_APP_STATIC_URL,
    };
  },
};
export default OurStory;
</script>

<style>
.ourstory__titlearea {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ourstory__titlearea h2 {
  font-size: 35px;
}
.ourstory__paragraphs {
  border-left: 2px solid #444;
}
.ourstory__paragraphs p {
  margin: 0.5em 0;
  padding-left: 1em;
}
.ourstory__paragraphs__image {
  margin: 0.5em auto;
}
.ourstory__paragraphs__image img {
  width: 300px;
}
@media screen and (max-width: 330px) {
  .ourstory__paragraphs__image img {
    width: 220px;
  }
}
.ourstory__paragraphs__image::after {
  content: 'Photo Credit: Ace Clyne & Devan Williams';
  display: block;
  font-size: 12px;
  color: #444;
}

@media screen and (max-width: 990px) {
  .ourstory__paragraphs {
    border-left: 0px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.ourstory {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
}
</style>
