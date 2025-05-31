import { Swiper } from 'swiper'
import { Pagination, FreeMode } from 'swiper/modules'

let swiperTechnic = null

export function initSwiperTechnic() {
  swiperTechnic = new Swiper('.technic-repair__slider', {
    modules: [Pagination, FreeMode],
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: {
      enabled: true,
      sticky: true
    },
    pagination: {
      el: '.swiper-pagination-technic',
      clickable: true
    }
  })
  return swiperTechnic
}

export function destroySwiperTechnic() {
  if (swiperTechnic) {
    swiperTechnic.destroy(true, true)
    swiperTechnic = null
  }
}
