<template>
  <div class="detailssection">
    <section-title id="travel" class="detailssection__title">Travel</section-title>
    <FlexRow>
      <FlexColumn :col="1" :md="12" class="detailssection__column detailssection__mapcontainer">
        <Paragraph>The Carnegie Center is a short drive east of downtown Cincinnati.</Paragraph>
        <iframe
          title="Google Maps Iframe showing Carnegie Center Location"
          class="detailssection__map"
          width="600"
          height="450"
          frameborder="0"
          style="border:0"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJRSo_PitQYgRo1LkxJEkHAU&key=AIzaSyAerRdyYd_e-rrqOrdBcEyUiZruQAvFHdQ"
          allowfullscreen
        ></iframe>
      </FlexColumn>
      <FlexColumn :col="1" :md="12" class="detailssection__column">
        <Paragraph>
          If you're flying into town, there are a number of nearby international airports you can fly in from:
          <ul>
            <li>
              <WebLink
                href="https://www.google.com/maps/dir/Terminal,+3087+Terminal+Dr,+Hebron,+KY+41048/The+Carnegie+Center+of+Columbia+Tusculum,+3738+Eastern+Ave,+Cincinnati,+OH+45226/"
                target="_blank"
              >
                (CVG) Cincinnati/Northern Kentucky Airport
              </WebLink>
              &bull; 30 min drive
            </li>
            <li>
              <WebLink
                href="https://www.google.com/maps/dir/international+airports+in+ohio/The+Carnegie+Center+of+Columbia+Tusculum,+Eastern+Avenue,+Cincinnati,+OH/"
                target="_blank"
              >
                (DAY) Dayton International Airport
              </WebLink>
              &bull; 1 hour 5 min drive
            </li>
            <li>
              <WebLink
                href="https://www.google.com/maps/dir/Rickenbacker+International+Airport,+John+Circle+Drive,+Columbus,+OH/The+Carnegie+Center+of+Columbia+Tusculum,+3738+Eastern+Ave,+Cincinnati,+OH+45226/"
                target="_blank"
              >
                (LCK) Rickenbacker International Airport
              </WebLink>
              &bull; 1 hour 44 min drive
            </li>
            <li>
              <WebLink
                href="https://www.google.com/maps/dir/lexington+airport/The+Carnegie+Center+of+Columbia+Tusculum,+Eastern+Avenue,+Cincinnati,+OH/"
                target="_blank"
              >
                (LEX) Blue Grass Airport
              </WebLink>
              &bull; 1 hour 27 min drive
            </li>
          </ul>
        </Paragraph>
      </FlexColumn>
    </FlexRow>
  </div>
</template>

<script>
import { WebLink, Paragraph, SectionTitle } from '@IntusFacultas/typography';
import { FlexColumn, FlexRow } from '@IntusFacultas/layout';

export const Travel = {
  components: {
    WebLink,
    Paragraph,
    SectionTitle,
    FlexColumn,
    FlexRow,
  },
};
export default Travel;
</script>

<style></style>
