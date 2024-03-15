<script>
import { ref } from 'vue';
import { gsap } from 'gsap';
export default{
  props: [],
  data() {
    return {
      slides: [
        {
          imageSrc: "./src/assets/img/slide/slide1.jpg",
          imageAlt: "Slide 1",
          title: "Hello World",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit illo provident numquam cum fuga cumque doloremque in facilis aliquid voluptatem quisquam error autem ullam qui, commodi fugiat voluptate ad!"
        },
        {
          imageSrc: "./src/assets/img/slide/slide2.jpg",
          imageAlt: "Slide 2",
          title: "Hello Vue",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit illo provident numquam cum fuga cumque doloremque in facilis aliquid voluptatem quisquam error autem ullam qui, commodi fugiat voluptate ad!"
        },
        {
          imageSrc: "./src/assets/img/slide/slide3.jpg",
          imageAlt: "Slide 2",
          title: "Hello Vue",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit illo provident numquam cum fuga cumque doloremque in facilis aliquid voluptatem quisquam error autem ullam qui, commodi fugiat voluptate ad!"
        }
      ],
      currentIndex: 0,
      intervalId: null,
      isFirstSlide: true // Flag to track if it's the first slide
    };
  },
  mounted() {
    this.startSlideShow();
  },
  methods: {
    startSlideShow() {
      this.intervalId = setInterval(this.nextSlide, 5000);
    },
    nextSlide() {
      const prevIndex = this.currentIndex;
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      const prevIndex = this.currentIndex;
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    animateSlides(prevIndex, nextIndex) {
      const prevSlide = this.$refs.slides[prevIndex];
      const nextSlide = this.$refs.slides[nextIndex];
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  }
};
</script>

<template>
<div class="wrapper">

  <div class="bg-container_color text-nowrap text-sm sm:text-base h-14 sm:h-16 lg:h-20">
    <div class="lg:container flex justify-center sm:justify-between text-nowrap items-center mx-auto h-full sm:px-3">
      <div class="text-usea_primary flex items-center">
        <i class="fa-solid fa-phone-volume"></i>
        <div class="ml-1 md:ml-2">(+855) 12 345 678</div>
        <i class="fa-solid fa-envelope ml-2"></i>
        <div class="ml-1 md:ml-2">usea.rj@usea.edu.kh</div>
      </div>
      <div class="sm:flex hidden">
        <div class="btn">Register</div><div class="btn ml-1 md:ml-3">Login</div>
      </div>
    </div>
  </div>

  <div class="md:container justify-center items-center mx-auto">
    <div class="sm:h-40 overflow-hidden items-center">
      <div class="w-10/12 lg:w-10/12 xl:w-7/12 2xl:w-5/12 h-full mx-auto">
        <img class="h-full w-full" src="../assets/img/logo/journal-title.png" alt="journal-title">
      </div>
    </div>
  </div>

  <div class="slider border bg-container_color">
    <div class="w-full h-64 md:h-screen relative flex items-center">
      <div v-for="(slide, index) in slides" :key="index" :class="{ 'active-slide': currentIndex === index }" class="h-full w-full relative"
        ref="slides"
        v-show="currentIndex === index"
      >
        <img class="h-full w-full" :src="slide.imageSrc" :alt="slide.imageAlt" />

        <div class="absolute w-full h-full top-0 flex items-center">
          <div class="px-3 md:container text-white mx-auto">
            <div class="w-8/12 md:w-6/12 opacity-90">
              <div class="text-lg sm:text-xl md:text-2xl font-semibold mb-1 md:mb-3 lg:mb-4 text-center">
                {{ slide.title }}
              </div>
              <p class="text-sm md:text-base">{{ slide.text }}</p>
              <div class="btn w-28 text-sm sm:text-base sm:w-32 mt-2 sm:mt-3 md:mt-4 text-center hover:text-white">Read more</div>
            </div>
          </div>
          </div>
        </div>
      <div
        class="absolute items-center cursor-pointer sm:text-white text-2xl left-10 text-transparent hover:text-usea_primary"
        @click="prevSlide"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div
        class="absolute items-center cursor-pointer sm:text-white text-2xl right-10 text-transparent hover:text-usea_primary"
        @click="nextSlide"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>
  
</div>

</template>

<style scoped>

</style>