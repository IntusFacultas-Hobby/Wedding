<template>
  <FooterContainer>
    <FooterLine>
      <TextContent>Website&nbsp;&nbsp;&copy; Copyright&nbsp;</TextContent>
      <TextContent>Pedro Del Moral Lopez</TextContent>
    </FooterLine>
    <FooterLine>
      <TextContent>Photography &copy; Copyright &nbsp;</TextContent>
      <TextContent>Larrison Photography</TextContent>
    </FooterLine>
    <FooterLine>
      <TextContent>Photography &copy; Copyright &nbsp;</TextContent>
      <TextContent>Ace Clyne</TextContent>
    </FooterLine>
  </FooterContainer>
</template>

<script>
import { TextContent } from '@IntusFacultas/typography';
import { FooterContainer, FooterLine, FooterText } from './CopyrightFooter/StyledCopyrightFooter';

export const CopyrightFooter = {
  components: {
    FooterContainer,
    TextContent,
    FooterLine,
    FooterText,
  },
};
export default CopyrightFooter;
</script>
