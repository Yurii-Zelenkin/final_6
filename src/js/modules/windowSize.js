import { initSwiper, destroySwiper } from './swiper1'
import { initSwiperTechnic, destroySwiperTechnic } from './swiper2'
import { initSwiperPrice, destroySwiperPrice } from './swiper3'

let swiper1 = null
let swiper2 = null
let swiper3 = null

export function checkWindowSize() {
  const isMobile = window.innerWidth <= 768

  if (isMobile) {
    if (!swiper1) swiper1 = initSwiper()
    if (!swiper2) swiper2 = initSwiperTechnic()
    if (!swiper3) swiper3 = initSwiperPrice()
  } else {
    if (swiper1) {
      destroySwiper()
      swiper1 = null
    }
    if (swiper2) {
      destroySwiperTechnic()
      swiper2 = null
    }
    if (swiper3) {
      destroySwiperPrice()
      swiper3 = null
    }
  }

  return { swiper1, swiper2, swiper3 }
}


export function getSwipers() {
  return { swiper1, swiper2, swiper3 }
}
