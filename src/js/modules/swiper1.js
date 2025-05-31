import { Swiper } from 'swiper'
import { Pagination, FreeMode } from 'swiper/modules'

let swiper = null

export function initSwiper() {
  if (window.innerWidth < 768) {
    swiper = new Swiper('.brands-repair__slider', {
      modules: [Pagination, FreeMode],
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: {
        enabled: true,
        sticky: true
      },
      pagination: {
        el: '.swiper-pagination-brands',
        clickable: true
      }
    })
  }
  return swiper
}

export function destroySwiper() {
  if (swiper && swiper.destroy) {
    swiper.destroy(true, true)
    swiper = null
  }
}


window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    destroySwiper()
  } else if (!swiper) {
    initSwiper()
  }
})
