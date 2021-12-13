/* eslint-disable max-len */

const IFRAME_WIDTH = 400;
const IFRAME_HEIGHT = 300;
const IFRAME_STYLING = `
  class="detailssection__map" 
  width="${IFRAME_WIDTH}" 
  height="${IFRAME_HEIGHT}" 
  frameborder="0" 
  style="border:0;" 
  allowfullscreen="" 
  aria-hidden="false" 
  tabindex="0"
`;

export const hotelsNearEvent = [
  {
    map: `<iframe 
      ${IFRAME_STYLING}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.245092403458!2d-84.51657278434621!3d39.10088984252801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b150f8c89be3%3A0x57adb6d0d0e8357e!2sHilton%20Cincinnati%20Netherland%20Plaza!5e0!3m2!1sen!2sus!4v1595516466244!5m2!1sen!2sus&key=AIzaSyAerRdyYd_e-rrqOrdBcEyUiZruQAvFHdQ">
    </iframe>`,
    title: 'Hilton Cincinnati Netherland Plaza',
    stars: 4,
    address: '35 W 5th St, Cincinnati, OH 45202',
    distanceToEvent: 2.6,
    distanceToFamily: 21.9,
  },
  {
    map: `<iframe 
      ${IFRAME_STYLING}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.3322225864995!2d-84.46184438434528!3d39.144424739949656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b25fd64611ff%3A0x3c9649b223a81b5!2sHilton%20Garden%20Inn%20Cincinnati%20Midtown!5e0!3m2!1sen!2sus!4v1595519879898!5m2!1sen!2sus&key=AIzaSyAerRdyYd_e-rrqOrdBcEyUiZruQAvFHdQ" >
    </iframe>`,
    title: 'Hilton Garden Inn Cincinnati Midtown',
    stars: 3,
    address: '2145 Dana Ave, Cincinnati, OH 45207',
    distanceToEvent: 2.6,
    distanceToFamily: 16.6,
  },
  {
    map: `<iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.1147664380314!2d-84.44632094877579!3d39.14937123955613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b280c578b331%3A0x6617f2e703984692!2sResidence%20Inn%20by%20Marriott%20Cincinnati%20Midtown%2FRookwood!5e0!3m2!1sen!2sus!4v1595520303570!5m2!1sen!2sus&key=AIzaSyAerRdyYd_e-rrqOrdBcEyUiZruQAvFHdQ" 
      ${IFRAME_STYLING}>
    </iframe>`,
    title: 'Residence Inn by Marriot Cincinnati Midtown/Rookwood',
    stars: 3,
    address: '3815 Edwards Rd, Cincinnati, OH 45209',
    distanceToEvent: 2.6,
    distanceToFamily: 15.9,
  },
  {
    map: `<iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.701738910202!2d-84.40527214874048!3d39.15876497943067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841ad1c80b333d1%3A0xa5c87991eaf6b77c!2sThe%20Summit%20Hotel!5e0!3m2!1sen!2sus!4v1595522343248!5m2!1sen!2sus&key=AIzaSyAerRdyYd_e-rrqOrdBcEyUiZruQAvFHdQ" 
      ${IFRAME_STYLING}>
      </iframe>`,
    title: 'The Summit Hotel',
    stars: 4,
    address: '5345 Medpace Way, Cincinnati, OH 45227',
    distanceToEvent: 3.7,
    distanceToFamily: 13.6,
  },
  {
    map: `
      <iframe 
        class="detailssection__map" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.7632691362114!2d-84.40564844874051!3d39.157365679430924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841ad1a873feb5d%3A0x94e32793c895cbbe!2sHoliday%20Inn%20Express%20%26%20Suites%20Cincinnati%20NE%20-%20Redbank%20Road!5e0!3m2!1sen!2sus!4v1595526643420!5m2!1sen!2sus&key=AIzaSyAerRdyYd_e-rrqOrdBcEyUiZruQAvFHdQ" 
        width="400" 
        height="300" 
        frameborder="0" 
        style="border:0;" 
        allowfullscreen="" 
        aria-hidden="false" 
        tabindex="0">
        </iframe>`,
    title: 'Holiday Inn Express & Suites Cincinnati NE Red Bank Rd',
    stars: 3,
    address: '5311 Hetzell St, Cincinnati, OH 45227',
    distanceToEvent: 3.6,
    distanceToFamily: 13.6,
  },
  {
    map: `<iframe 
        class="detailssection__map" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.4941881840673!2d-84.5008303487415!3d39.11798447943676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b3dd2f4c7cdf%3A0x42b5b5013730c84a!2sSpringHill%20Suites%20by%20Marriott%20Cincinnati%20Midtown!5e0!3m2!1sen!2sus!4v1595526851325!5m2!1sen!2sus&key=AIzaSyAerRdyYd_e-rrqOrdBcEyUiZruQAvFHdQ" 
        width="400" 
        height="300" 
        frameborder="0" 
        style="border:0;" 
        allowfullscreen="" 
        aria-hidden="false" 
        tabindex="0">
        </iframe>`,
    title: 'SpringHill Suites by Marriot Cincinnati Midtown',
    stars: 3,
    address: '610 Eden Park Dr, Cincinnati, OH 45202',
    distanceToEvent: 3.4,
    distanceToFamily: 20.5,
  },
  {
    map: `<iframe 
        class="detailssection__map" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.239271606873!2d-84.5143192487419!3d39.10102237943932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b15089ec0f35%3A0x92056bab1d9cd08e!2sThe%20Westin%20Cincinnati!5e0!3m2!1sen!2sus!4v1595527060233!5m2!1sen!2sus&key=AIzaSyAerRdyYd_e-rrqOrdBcEyUiZruQAvFHdQ" 
        width="400" 
        height="300" 
        frameborder="0" 
        style="border:0;" 
        allowfullscreen="" 
        aria-hidden="false" 
        tabindex="0">
        </iframe>`,
    title: 'The Westin Cincinnati',
    stars: 4,
    address: '21 E 5th St, Cincinnati, OH 45202',
    distanceToEvent: 4.2,
    distanceToFamily: 21.7,
  },
];

export const hotelsNearFamily = [
  {
    map: `<iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.573954665027!2d-84.38979264873805!3d39.252542079416976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884053698cb61143%3A0x2a9afdfd37196fb!2sWingate%20by%20Wyndham%20Cincinnati-Blue%20Ash!5e0!3m2!1sen!2sus!4v1595529939350!5m2!1sen!2sus&key=AIzaSyAerRdyYd_e-rrqOrdBcEyUiZruQAvFHdQ" 
      ${IFRAME_STYLING}>
    </iframe>`,
    title: 'Wingate by Wyndham Cincinnati-Blue Ash',
    stars: 3,
    address: '4320 Glendale Milford Rd, Cincinnati, OH 45242',
    distanceToEvent: 13.5,
    distanceToFamily: 5.2,
  },
  {
    map: `<iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24712.070839453827!2d-84.35373558861691!3d39.265365682547944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840515ef3b523af%3A0x4f4d6865a119bbe0!2sHome2%20Suites%20by%20Hilton%20Blue%20Ash%20Cincinnati!5e0!3m2!1sen!2sus!4v1595530128014!5m2!1sen!2sus&key=AIzaSyAerRdyYd_e-rrqOrdBcEyUiZruQAvFHdQ" 
  ${IFRAME_STYLING}>
    </iframe>`,
    title: 'Home2 Suites by Hilton Blue Ash',
    stars: 2,
    address: '11235 Cornell Park Dr, Blue Ash, OH 45242',
    distanceToEvent: 14.3,
    distanceToFamily: 7.1,
  },
  {
    map: `<iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.7673307935042!2d-84.28443524873879!3d39.22544967942085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840559cef0fe0f7%3A0x855d74e468f2491b!2sHilton%20Garden%20Inn%20Cincinnati%20Northeast!5e0!3m2!1sen!2sus!4v1595530330744!5m2!1sen!2sus&key=AIzaSyAerRdyYd_e-rrqOrdBcEyUiZruQAvFHdQ" 
      ${IFRAME_STYLING}>
    </iframe>`,
    title: 'Hilton Garden Inn Cincinnati Northeast',
    stars: 3,
    address: '6288 Tri Ridge Blvd, Loveland, OH 45140',
    distanceToEvent: 19.1,
    distanceToFamily: 3.3,
  },
  {
    map: `<iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.420953367509!2d-84.3204814487369!3d39.301380579409845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884056fb920a4e45%3A0xc13baea7c1494137!2sHilton%20Garden%20Inn%20Cincinnati%2FMason!5e0!3m2!1sen!2sus!4v1595530635014!5m2!1sen!2sus&key=AIzaSyAerRdyYd_e-rrqOrdBcEyUiZruQAvFHdQ" 
      ${IFRAME_STYLING}>
    </iframe>`,
    title: 'Hilton Garden Inn Cincinnati/Mason',
    stars: 3,
    address: '5200 Natorp Blvd, Mason, OH 45040',
    distanceToEvent: 17.3,
    distanceToFamily: 7.5,
  },
  {
    map: `<iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49381.17129376075!2d-84.3234744614368!3d39.326262223046065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884056f847c3d8bb%3A0xd283e2352bb4e7e9!2sMarriott%20Cincinnati%20Northeast!5e0!3m2!1sen!2sus!4v1595530902317!5m2!1sen!2sus&key=AIzaSyAerRdyYd_e-rrqOrdBcEyUiZruQAvFHdQ" 
      ${IFRAME_STYLING}>
    </iframe>`,
    title: 'Marriott Cincinnati Northeast',
    stars: 3,
    address: '9664 S Mason Montgomery Rd, Mason, OH 45040',
    distanceToEvent: 17,
    distanceToFamily: 7.2,
  },
  {
    map: `<iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.4662905337723!2d-84.38369404877356!3d39.254985533290544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884053c46167a379%3A0x58716f5592987eb2!2sEmbassy%20Suites%20by%20Hilton%20Cincinnati%20Northeast%20Blue%20Ash!5e0!3m2!1sen!2sus!4v1595531050322!5m2!1sen!2sus&key=AIzaSyAerRdyYd_e-rrqOrdBcEyUiZruQAvFHdQ" 
      ${IFRAME_STYLING}>
    </iframe>`,
    title: 'Embassy Suites by Hilton Cincinnati Northeast Blue Ash',
    stars: 3,
    address: '4554 Lake Forest Dr, Blue Ash, OH 45242',
    distanceToEvent: 13.3,
    distanceToFamily: 5.1,
  },
];
