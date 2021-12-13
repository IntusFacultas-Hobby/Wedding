<template>
  <div class="menusection">
    <SectionTitle id="menu" class="detailssection__title">Menu</SectionTitle>
    <FlexRow>
      <div :md="6" :sm="12" class="menusection__column">
        <SectionTitle>Passed Hors D'Oeuvres</SectionTitle>
        <div class="menusection__item">
          <div>
            <CategoryTitle>Edamame Pot Sticker</CategoryTitle>
            <paragraph :size="14" class="menusection__subtext">with Spicy Soy</paragraph>
          </div>
          <img :src="`${STATIC_URL}${potsticker}`" alt class="menusection__item__img" />
        </div>
        <div class="menusection__item">
          <img :src="`${STATIC_URL}${chickensatay}`" alt="image of chicken satay" class="menusection__item__img" />
          <div>
            <CategoryTitle>Chicken Satay</CategoryTitle>
            <paragraph :size="14" class="menusection__subtext">with Peanut Sauce</paragraph>
          </div>
        </div>
        <div class="menusection__item">
          <CategoryTitle class>Teque&ntilde;os</CategoryTitle>
          <img :src="`${STATIC_URL}${tequeno}`" alt="image of a tequeno" class="menusection__item__img" />
        </div>
        <div class="menusection__item">
          <img
            :src="`${STATIC_URL}${toast}`"
            alt="image of spicy tuna tartar on guacamole toast"
            class="menusection__item__img"
          />
          <div>
            <CategoryTitle>Spicy Tuna Tartar on Guacamole Toast</CategoryTitle>
            <paragraph class="menusection__subtext" :size="14">with Guasacaca</paragraph>
          </div>
        </div>
      </div>
      <div :md="6" :sm="12" class="menusection__column">
        <div class="menusection__station">
          <SectionTitle>Station I - Indonesian</SectionTitle>
          <div class="menusection__item menusection__itemsection">
            <img
              :src="`${STATIC_URL}${rijsttafel}`"
              alt="image of indonesian rijsttafel"
              class="menusection__item__img"
            />
            <div class="menusection__item__content--block">
              <CategoryTitle>Indonesian Rijsttafel</CategoryTitle>
              <List class="menusection__subtext">
                <ListItem>Steamed Rice</ListItem>
                <ListItem>Chili Paste</ListItem>
                <ListItem>Cucumber, Green Bean and Tomato Salad</ListItem>
                <ListItem>Sweet Indonesian Soy Sauce</ListItem>
                <ListItem>Cabbage in Peanut Sauce</ListItem>
                <ListItem>Curried Lentils</ListItem>
                <ListItem>Chicken Curry</ListItem>
                <ListItem>Toasted Coconut &amp; Ground Peanuts</ListItem>
                <ListItem>Warm Nan Bread</ListItem>
              </List>
            </div>
          </div>
        </div>
        <div class="menusection__station">
          <SectionTitle>Station II - Chinese</SectionTitle>
          <div class="menusection__item menusection__itemsection">
            <img
              :src="`${STATIC_URL}${seafood}`"
              alt="image of indonesian rijsttafel"
              class="menusection__item__img firefox-fix"
            />
            <div class="menusection__item__content--block">
              <CategoryTitle>
                Chinese Seafood Dish served with towers of Cantonese Spinach Salad
              </CategoryTitle>
              <List class="menusection__subtext">
                <ListItem>with Sprouts,</ListItem>
                <ListItem>Water Chestnuts,</ListItem>
                <ListItem>Hard Boiled Egg,</ListItem>
                <ListItem>and Bacon*</ListItem>
              </List>
              <paragraph class="menusection__subtext">* some without bacon for vegetarians</paragraph>
            </div>
          </div>
        </div>
        <div class="menusection__station">
          <SectionTitle>Station III - Latino</SectionTitle>
          <div class="menusection__item menusection__itemsection">
            <img
              :src="`${STATIC_URL}${empanadas}`"
              alt="image of indonesian rijsttafel"
              class="menusection__item__img"
            />
            <div class="menusection__item__content--block">
              <CategoryTitle>Carved Chimichurri Skirt Steak</CategoryTitle>
              <List class="menusection__subtext">
                <ListItem>with Ripe Plantains,</ListItem>
                <ListItem>Cheese Empanadas,</ListItem>
                <ListItem>and Cilantro Mojo Grilled Assorted Vegetables</ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    </FlexRow>
  </div>
</template>

<script>
import {
  Paragraph, SectionTitle, SubSectionTitle, CategoryTitle,
} from '@IntusFacultas/typography';
import { FlexRow, FlexColumn } from '@IntusFacultas/layout';
import { List, ListItem } from '@IntusFacultas/list';
// Images
import chickensatay from '../assets/chicken-satay.webp';
import tequeno from '../assets/tequenos.webp';
import potsticker from '../assets/edamame_potstickers.webp';
import toast from '../assets/spicy-tuna-tartare-avocado-toast.webp';
import rijsttafel from '../assets/rijsttafel.webp';
import seafood from '../assets/seafood-birds.webp';
import empanadas from '../assets/steak and empanadas.webp';

export const Menu = {
  data() {
    return {
      chickensatay,
      tequeno,
      toast,
      empanadas,
      seafood,
      potsticker,
      rijsttafel,
      STATIC_URL: process.env.VUE_APP_STATIC_URL,
    };
  },
  components: {
    Paragraph,
    SectionTitle,
    SubSectionTitle,
    CategoryTitle,
    FlexRow,
    FlexColumn,
    List,
    ListItem,
  },
};
export default Menu;
</script>

<style>
.menusection {
  text-align: center;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
}
.menusection__column {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 50%;
}
.menusection__column:nth-of-type(2) {
  justify-content: space-between;
}
.menusection__station {
  margin-top: 1em;
}
.menusection__station:first-of-type {
  margin-top: 0;
}
.menusection__item__img {
  height: 200px;
  width: 151px;
  clip-path: circle(42%);
}
.menusection__title {
  font-size: 1.8em;
}
.menusection__subtext {
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
}
ul.menusection__subtext {
  text-align: left;
}
ul.menusection__subtext li {
  padding-left: 0.5em;
}
.menusection__item {
  display: flex;
  justify-content: space-around;
  width: 500px;
  align-items: center;
}

@media screen and (max-width: 1066px) {
  .menusection__column {
    width: 100%;
  }
}
.menusection__item__content--block {
  text-align: left;
}
@media screen and (min-width: 451px) {
  .menusection__column:nth-of-type(2) {
    border-left: 2px solid #dedede;
  }
}
@media screen and (max-width: 450px) {
  .menusection__item__content--block {
    width: 100%;
    text-align: center;
  }
  .menusection__itemsection {
    flex-direction: column;
  }
  .menusection__itemsection li {
    text-align: left;
  }
  .menusection__column {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  .menusection__item {
    width: 300px;
  }
}
.menusection__station h2 {
  margin-bottom: 0.5em !important;
}
@-moz-document url-prefix() {
  .firefox-fix {
    height: 220px;
    clip-path: circle();
  }
}
</style>
