<script>
import { ref } from 'vue';

export default {
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
          imageAlt: "Slide 3",
          title: "Hello Vue",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit illo provident numquam cum fuga cumque doloremque in facilis aliquid voluptatem quisquam error autem ullam qui, commodi fugiat voluptate ad!"
        }
      ],
      currentIndex: 0,
      intervalId: null,
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
    }

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
      <div class="hidden sm:flex">
        <div class="btn_login">Register</div><div class="btn_login ml-1 md:ml-3">Login</div>
      </div>
    </div>
  </div>

  <div class="md:container justify-center items-center mx-auto bg-white">
    <div class="sm:h-40 overflow-hidden items-center">
      <div class="w-10/12 lg:w-10/12 xl:w-7/12 2xl:w-5/12 h-full mx-auto">
        <img class="h-full w-full" src="../assets/img/logo/journal-title.png" alt="journal-title">
      </div>
    </div>
  </div>
  <!-- slide show -->
  <div>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(slide, index) in slides" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
          <img :src="slide.imageSrc" class="d-block w-100 aspect-video" :alt="slide.imageAlt">
          <div class="carousel-caption d-none d-md-block text-center position-absolute top-48 start-20 w-6/12">
            <h1 class="text-2xl">{{ slide.title }}</h1>
            <p>{{ slide.text }}</p>
            <div class="mt-3">
              <router-link :to="{name : 'home'}" class="card_button">Read More</router-link>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

</div>
</template>

<style scoped>

</style>