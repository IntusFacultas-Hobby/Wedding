<template>
  <ImageContainer @click="$emit('click')">
    <StyledImage
      :src="`${STATIC_URL}${src}`"
      :alt="`Image of ${alt} iFrame. Press enter to load iframe`"
      @click="$emit('click')"
      role="button"
      tabindex="0"
      @keypress.enter="$emit('click')"
    />
  </ImageContainer>
</template>

<script>
import { StyledImage, ImageContainer } from './StyledIFrameImage';

export default {
  name: 'IFrameImage',
  data() {
    return {
      STATIC_URL: process.env.VUE_APP_STATIC_URL,
    };
  },
  components: {
    StyledImage,
    ImageContainer,
  },
  props: {
    src: String,
    alt: String,
  },
};
</script>
