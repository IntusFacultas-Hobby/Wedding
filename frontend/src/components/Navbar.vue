<template>
  <RawNavbar class="navbar" flavor="Navbar" :title="title" :fixed="true">
    <NavbarContent />
    <NavbarContent>
      <NavbarItem>
        <a href="#details">Details</a>
      </NavbarItem>
      <NavbarItem>
        <a href="https://www.zola.com/registry/pedroandapril2022" target="_blank">Registry</a>
      </NavbarItem>
    </NavbarContent>
  </RawNavbar>
</template>

<script>
import RawNavbar from '@IntusFacultas/raw-navbar/src/RawNavbar.vue';
import { NavbarContent, NavbarItem } from '@IntusFacultas/navbar/src/Navbar.vue';
import { NButton } from '@IntusFacultas/button';
import Logo from '../assets/Wedding Logo.svg';

export const Navbar = {
  components: {
    RawNavbar,
    NavbarContent,
    NavbarItem,
    NButton,
  },
  data() {
    return {
      title: {
        html: `<img 
          class="navbar__brandicon" 
          src="${process.env.VUE_APP_STATIC_URL}${Logo}" 
          alt="April and Pedro's initials">
        </img>`,
        url: '#',
        text: '',
      },
    };
  },
};
export default Navbar;
</script>

<style>
.navbar {
  border-bottom: 1px solid #444;
  opacity: 0.9;
}
.navbar__rsvpbuttoncontainer:hover {
  background-color: initial;
}
.navbar__rsvpbutton {
  color: initial !important;
  height: 40px;
  text-align: center;
}
@media screen and (max-width: 460px) {
  .navbar__rsvpbutton {
    line-height: 1.5;
    display: block;
  }
}
.navbar__rsvpbutton:hover {
  color: white !important;
  height: 40px;
}
.navbar-brand {
  display: flex;
  height: 50px;
  align-items: center;
}
.nav-button {
  background-color: white !important;
}
.nav-button:hover {
  background-color: #f0f0f0 !important;
}
.navbar__brandicon {
  height: 35px;
}
</style>
