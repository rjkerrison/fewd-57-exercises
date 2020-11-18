const accordionDomNode = document.querySelector(".js-badger-accordion");

const accordion = new BadgerAccordion(accordionDomNode, {
  roles: {
    region: true,
  },
});

accordion.closeAll();
