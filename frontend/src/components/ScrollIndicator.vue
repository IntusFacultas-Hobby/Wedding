<template>
  <div>
    <svg class="scrollindicator" xmlns="http://www.w3.org/2000/svg" width="47" height="104" viewBox="0 0 47 104">
      <g fill="none" stroke="#000" stroke-width="4">
        <rect
          x="2"
          y="2"
          width="43"
          height="100"
          rx="21.5"
          fill="none"
          :stroke="
            theme[flavor]
              ? theme[flavor].background.color
              : defaultTheme[flavor]
              ? defaultTheme[flavor].background.color
              : 'white'
          "
        />
      </g>
      <rect
        class="scrollindicator__scrollrect"
        width="19"
        height="30"
        rx="9.5"
        transform="translate(14 17)"
        :fill="
          theme[flavor]
            ? theme[flavor].background.color
            : defaultTheme[flavor]
            ? defaultTheme[flavor].background.color
            : 'white'
        "
      />
    </svg>
    <paragraph :flavor="textFlavor">Scroll</paragraph>
  </div>
</template>

<script>
import { Paragraph } from '@IntusFacultas/typography';
import { Theme, TextTheme } from '@IntusFacultas/design-system';

export const ScrollIndicator = {
  components: {
    Paragraph,
  },
  data() {
    return {
      defaultTheme: Theme,
      textTheme: TextTheme,
    };
  },
  mounted() {},
  props: {
    textFlavor: {
      type: String,
      default: 'Normal',
    },
    theme: {
      type: Object,
      default() {
        return {};
      },
    },
    flavor: {
      type: String,
      default: 'Dark',
    },
  },
};
export default ScrollIndicator;
</script>

<style>
@-o-keyframes ScrollIndicator {
  0% {
    transform: translate(14px, 17px);
  }
  40% {
    transform: translate(14px, 17px);
  }
  50% {
    transform: translate(14px, 56px);
  }
  90% {
    transform: translate(14px, 56px);
  }
  100% {
    transform: translate(14px, 17px);
  }
}
@-moz-keyframes ScrollIndicator {
  0% {
    transform: translate(14px, 17px);
  }
  40% {
    transform: translate(14px, 17px);
  }
  50% {
    transform: translate(14px, 56px);
  }
  90% {
    transform: translate(14px, 56px);
  }
  100% {
    transform: translate(14px, 17px);
  }
}
@-webkit-keyframes ScrollIndicator {
  0% {
    transform: translate(14px, 17px);
  }
  40% {
    transform: translate(14px, 17px);
  }
  50% {
    transform: translate(14px, 56px);
  }
  90% {
    transform: translate(14px, 56px);
  }
  100% {
    transform: translate(14px, 17px);
  }
}
@keyframes ScrollIndicator {
  0% {
    transform: translate(14px, 17px);
  }
  40% {
    transform: translate(14px, 17px);
  }
  50% {
    transform: translate(14px, 56px);
  }
  90% {
    transform: translate(14px, 56px);
  }
  100% {
    transform: translate(14px, 17px);
  }
}
.scrollindicator {
  height: 60px;
}
.scrollindicator__scrollrect {
  animation: ScrollIndicator 4s ease-in-out infinite;
}
</style>
