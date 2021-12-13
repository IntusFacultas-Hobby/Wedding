<template>
  <TimelineContainer :width="width">
    <TimelineSection
      v-for="(item, index) in items"
      :key="index"
      :backgroundColor="item.backgroundColor"
      :logoColor="item.logoColor"
      :circleCustomization="item.circleCustomization"
    >
      <TimelineContent>
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
    width: { type: String, default: '1200px' },
    items: Array,
  },
};
export default Timeline;
</script>
