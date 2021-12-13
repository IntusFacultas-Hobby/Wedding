<template>
  <TimelineContainer :timeline-flavor="timelineFlavor" :timeline-color="timelineColor" :width="width">
    <TimelineSection
      v-for="(item, index) in items"
      :key="index"
      :item-color="item.color ? item.color : defaultItemColor"
      :item-flavor="item.flavor ? item.flavor : defaultItemFlavor"
      :circle-color="item.circleColor ? item.circleColor : defaultCircleColor"
      :circle-flavor="item.circleFlavor ? item.circleFlavor : defaultCircleFlavor"
      :circle-customization="item.circleCustomization"
      :left="index % 2 == 0"
    >
      <TimelineContent
        :item-color="item.color ? item.color : defaultItemColor"
        :item-flavor="item.flavor ? item.flavor : defaultItemFlavor"
      >
        <div v-html="item.content" />
      </TimelineContent>
    </TimelineSection>
  </TimelineContainer>
</template>

<script>
import { TimelineContainer, TimelineSection, TimelineContent } from './Timeline/StyledTimeline';

export const Timeline = {
  components: {
    TimelineContainer,
    TimelineSection,
    TimelineContent,
  },
  props: {
    defaultItemColor: String,
    defaultItemFlavor: { type: String, default: 'Light' },
    defaultCircleFlavor: { type: String, default: 'Secondary' },
    defaultCircleColor: String,
    timelineFlavor: { type: String, default: 'Secondary' },
    timelineColor: String,
    width: { type: String, default: '1200px' },
    items: Array,
  },
};
export default Timeline;
</script>
