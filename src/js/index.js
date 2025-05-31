import '../scss/style.scss'
import menuBurger from './modules/menuBurger' 
import sliderMenu from './modules/sliderMenu' 
import { initShowAllButtons } from './modules/show-all' 
import { checkWindowSize, getSwipers } from './modules/windowSize'
import { initReadMore } from './modules/readMore' 
import { initCallModal } from '../modal/call-modal.js'
import { initModal } from './modal/modal.js'


import { Swiper } from 'swiper'
import { Pagination, FreeMode } from 'swiper/modules'
Swiper.use([Pagination, FreeMode])


document.addEventListener('DOMContentLoaded', () => {
  menuBurger.init()

  sliderMenu.init()

  initReadMore()

  initShowAllButtons()

  initCallModal()
  initModal()

  checkWindowSize()
  const { swiper1, swiper2, swiper3 } = getSwipers()

  if (swiper1)
    initToggleButton('.brands-repair__btn', '.brands-repair__slider', swiper1)
  if (swiper2)
    initToggleButton('.technic-repair__btn', '.technic-repair__slider', swiper2)

  window.addEventListener('resize', () => {
    checkWindowSize()
  })
})
