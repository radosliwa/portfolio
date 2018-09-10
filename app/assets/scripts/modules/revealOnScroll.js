import $ from 'jquery';
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints.js";
import smoothScroll from 'jquery-smooth-scroll';

const $navLinks = $('.main-nav__menu a');

export default class RevealOnScroll{
  constructor(el, offset){
    this.itemsToReveal = el;
    this.hide();
    this.wayPoints(offset);
    this.lineThrough();
    this.smoothScroll();
  }

  hide(){
  this.itemsToReveal.addClass('revealItem');
  }

  wayPoints(offset){
    this.itemsToReveal.each(function(){
      let current = this;
      let allSectionTitles = $('.section__title');
      let sectionTitle = $(current).find('.section__title');
      new Waypoint({
        element: current,
        handler: function() {
          // $(allSectionTitles).removeClass('section__title--lineThrough');
          $(current).addClass('revealItem--is-visible');
          // $(sectionTitle).addClass('section__title--lineThrough');
        },
        offset: offset
      });
    });}

    lineThrough(){
      this.itemsToReveal.each(function(direction){
        let current = this;
        let allSectionTitles = $('.section__title');
        let sectionTitle = $(current).find('.section__title');
        // if(direction === "down"){
          new Waypoint({
            element: current,
            handler: function() {
              $(allSectionTitles).removeClass('section__title--lineThrough');
              $(sectionTitle).addClass('section__title--lineThrough');
              // alert('top');
            },
            offset: "5%"
          });
        // }else{
        //   new Waypoint({
        //     element: current,
        //     handler: function() {
        //       $(allSectionTitles).removeClass('section__title--lineThrough');
        //       $(sectionTitle).addClass('section__title--lineThrough');
        //       alert('bottom');
        //     },
        //     offset: "0%"
        //   });
        // }
      });
    }

    smoothScroll(){
      $navLinks.smoothScroll();
    }

}