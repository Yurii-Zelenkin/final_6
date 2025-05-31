import { Swiper } from 'swiper'
import { Pagination, FreeMode } from 'swiper/modules'

let swiperPrice = null

export function initSwiperPrice() {
  swiperPrice = new Swiper('.price-repair__slider', {
    modules: [Pagination, FreeMode],
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: {
      enabled: true,
      sticky: true
    },
    pagination: {
      el: '.swiper-pagination-price',
      clickable: true
    }
  })
  return swiperPrice
}

export function destroySwiperPrice() {
  if (swiperPrice) {
    swiperPrice.destroy(true, true)
    swiperPrice = null
  }
}
