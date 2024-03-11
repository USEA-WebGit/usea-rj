<template>
    <div>
        <div v-for="(slide, index) in slides" :key="index" :class="{ 'active-slide': currentIndex === index }" class="h-full w-full relative" ref="slides" v-show="currentIndex === index" >
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
    </div>
</template>

<script>
export default {
    data(){
        return {
            slides : []
        }
    }
}
</script>

<style>

</style>