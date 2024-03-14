<template>
  <div>
    <div class="md:grid-cols-5 md:grid py-10 h-fit">
      <div class="md:col-span-2">
        <div>
          <img src="../assets/img/logo/journal-logo.png" alt="usea_journal-logo" class="w-24 md:w-36 mx-auto">
        </div>
        <div class="text-2xl mx-auto font-hanuman mt-3">
          <div class="text-center">ទស្សនាវដ្ដីស្រាវជ្រាវសាកលវិទ្យាល័យ សៅស៍អុីសថ៍អេយសៀ</div>
          <div class="text-center">University of South-East Asia</div>
        </div>
      </div>

      <div class="font-hanuman mt-6 md:mt-4 md:col-span-1">
        <div class="font-bold text-black text-lg md:text-xl lg:text-2xl mx-auto w-fit mt-3 md:mt-0">ទំនាក់ទំនងសារអេឡិចត្រូនិច</div>
        <div class="flex text-lg md:text-xl w-fit mx-auto mt-2"><input type="email" placeholder="example@gmail.com" class="p-2 border rounded-md"> <button type="submit" class="py-1 px-4 bg-yellow-500 rounded-md"><i class="my-auto fa-solid fa-play"></i></button></div>
        <div class="font-bold text-black text-lg md:text-xl lg:text-2xl mx-auto w-fit mt-4 md:mt-20">ទំនាក់ទំនងបណ្ដាញសង្គម</div>
        <div class="flex text-lg md:text-xl w-fit mx-auto mt-2"><i class="ml-3 text-xl md:text-2xl hover:text-blue-800 fa-brands fa-facebook"></i> <i class="ml-3 text-xl hover:text-red-600 md:text-2xl fa-brands fa-instagram"></i><i class="ml-3 text-xl md:text-2xl hover:text-blue-900 fa-brands fa-telegram"></i><i class="ml-3 text-xl md:text-2xl hover:text-red-600 fa-brands fa-youtube"></i><i class="ml-3 text-xl md:text-2xl hover:text-green-600 fa-solid fa-globe"></i></div>
      </div>

      <div class="font-hanuman mt-6 md:mt-4 md:col-span-2">
        <div class="font-bold text-black text-lg md:text-xl lg:text-2xl mx-auto w-fit md:text-center mt-3 md:mt-0">តំណរភ្ជាប់រហ័ស</div>
          <ul class="w-fit mx-auto font-bold text-lg md:text-xl lg:text-2xl md:flex mt-3">
            <div class="md:mr-4">
              <li class="footer_link">
                <router-link :to="{name : 'home'}" class="w-100 flex items-center"><i class="fa-solid fa-house-chimney"></i> <div class="ml-2 md:ml-3">ទំព័រដើម</div></router-link>
              </li>
              <li class="mt-3 md:mt-8 footer_link">
                <router-link :to="{name : 'about'}" class="w-100 flex items-center"> <i class="fa-solid fa-bars"></i><div class="ml-2 md:ml-3 my-auto">អំពីទស្សនាវដ្ដីស្រាវជ្រាវ</div></router-link>
              </li>
              <li class="mt-3 md:mt-8 flex items-center footer_link">
                <i class="fa-solid fa-book-open"></i> <div class="ml-2 md:ml-3">ការបោះពុម្ភ</div>
              </li>
            </div>
            <div class="md:ml-4">
              <li class="flex items-center footer_link mt-3 md:mt-0" @click="toggleMenu('check')">
              <i class="fa-solid fa-spinner"></i> <div class="ml-2 md:ml-3">ដំណើរការ</div>
              </li>
              <li class="footer_link mt-3 md:mt-8">
                <router-link :to="{name : 'home'}" class="w-100 flex items-center"><i class="fa-solid fa-arrow-down-a-z"></i> <div class="ml-2 md:ml-3">សន្ទានុក្រមស្រាវជ្រាវ</div></router-link>
              </li>
              <li class="flex footer_link mt-3 md:mt-8" @click="toggleMenu('study')">
                <i class="fa-solid fa-book"></i> <div class="ml-2 md:ml-3">សេចក្ដីណែនាំ</div>
              </li>
            </div>
          </ul>      
      </div>

    </div>
    <!-- end footer content -->
    <div class="bg-usea_primary text-center text-sm sm:text-base md:text-md lg:text-lg p-2 md:p-3 text-white">
      <i class="fa-regular fa-copyright"></i> Research Journal All right reserved. By University of South-East Asia 
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>