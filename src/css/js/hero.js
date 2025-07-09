import Swiper from 'swiper';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // Optional parameters
//   direction: 'vertical',
modules: [Pagination, Autoplay],
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 2000,
  },

  speed: 800, 
});