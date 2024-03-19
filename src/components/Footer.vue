<template>
  <div>
    <div class="lg:grid-cols-5 lg:grid gap-2 lg:gap-y-2 xl:gap-y-0 py-10 h-fit">
      <div class="lg:col-span-5 xl:col-span-2">
        <div>
          <img src="../assets/img/logo/journal-logo.png" alt="usea_journal-logo" class="w-24 md:w-36 mx-auto">
        </div>
        <div class="xl:text-xl lg:text-lg md:text-md text-sm sm:text-base mx-auto font-Khmer_OS_Muol_Light mt-3 text-usea_primary px-1">
          <div class="text-center leading-6 md:leading-10">ទស្សនាវដ្ដីស្រាវជ្រាវសាកលវិទ្យាល័យ សៅស៍អុីសថ៍អេយសៀ</div>
          <div class="text-center uppercase mt-1 md:mt-1 xl:mt-3 leading-5 md:leading-9">University of South-East Asia Research Journal</div>
        </div>
      </div>

      <div class="font-hanuman mt-6 md:mt-4 lg:col-span-2 xl:col-span-1">
        <div class="font-bold text-black text-lg md:text-xl lg:text-2xl mx-auto w-fit mt-3 md:mt-0">ទំនាក់ទំនងសារអេឡិចត្រូនិច</div>
        <div class="flex text-lg md:text-xl w-fit mx-auto mt-2 justify-center"><input type="email" placeholder="example@gmail.com" class="p-2 border rounded-md w-4/5"> <button type="submit" class="py-1 px-4 bg-yellow-500 rounded-md"><i class="my-auto fa-solid fa-play"></i></button></div>
        <div class="font-bold text-black text-lg md:text-xl lg:text-2xl mx-auto w-fit mt-4 md:mt-20">ទំនាក់ទំនងបណ្ដាញសង្គម</div>
        <div class="flex text-lg md:text-xl w-fit mx-auto mt-2">
          <div class="w-7 h-7 lg:w-10 lg:h-10">
            <a href="https://www.facebook.com/usea.edu.kh" target="_blank" rel="noopener noreferrer">
              <img src="../assets/icon/facebook.png" alt="usea facebook page">
            </a>
          </div>
          <div class="ml-3 w-7 h-7 lg:w-10 lg:h-10">
            <a href="https://www.instagram.com/university_of_south_east_asia/" target="_blank" rel="noopener noreferrer">
              <img src="../assets/icon/instagram.png" alt="usea instagram account">
            </a>
          </div>
          <div class="ml-3 w-7 h-7 lg:w-10 lg:h-10">
            <a href="https://t.me/university_of_south_east_asia" target="_blank" rel="noopener noreferrer">
              <img src="../assets/icon/telegram.png" alt="usea telegram channel">
            </a>
          </div>
          <div class="ml-3 w-7 h-7 lg:w-10 lg:h-10">
            <a href="https://www.youtube.com/channel/UCj_1fYGP6NXxYWcRkqbvN6A" target="_blank" rel="noopener noreferrer">
              <img src="../assets/icon/youtube.png" alt="usea facebook channel">
            </a>
          </div>
          <div class="ml-3 w-7 h-7 lg:w-10 lg:h-10">
            <a href="https://www.tiktok.com/@usea_siemreap" target="_blank" rel="noopener noreferrer">
              <img src="../assets/icon/tik-tok.png" alt="usea tiktok account">
            </a>
          </div>
          <div class="ml-3 w-7 h-7 lg:w-10 lg:h-10">
            <a href="https://www.usea.edu.kh" target="_blank" rel="noopener noreferrer">
              <img src="../assets/icon/www.png" alt="usea website address">
            </a>
          </div>
        </div>
      </div>

      <div class="font-hanuman mt-6 md:mt-4 lg:col-span-3 xl:col-span-2">
        <div class="font-bold text-black text-lg md:text-xl lg:text-2xl mx-auto w-fit md:text-center mt-3 md:mt-0">តំណរភ្ជាប់រហ័ស</div>
          <ul class="w-fit mx-auto font-bold text-lg md:text-xl lg:text-2xl md:flex mt-3">
            <div class="md:mr-4">
              <li class="footer_link">
                <router-link :to="{name : 'home'}" class="w-100 flex items-center"><div class="ml-2 md:ml-3">ទំព័រដើម</div></router-link>
              </li>
              <li class="mt-3 md:mt-8 footer_link">
                <router-link :to="{name : 'about'}" class="w-100 items-center"><div class="ml-2 md:ml-3 my-auto">អំពីទស្សនាវដ្ដីស្រាវជ្រាវ</div></router-link>
              </li>
              <li class="mt-3 md:mt-8 flex items-center footer_link">
                <div class="ml-2 md:ml-3">ការបោះពុម្ភ</div>
              </li>
            </div>
            <div class="md:ml-4">
              <li class="flex items-center footer_link mt-3 md:mt-0" @click="toggleMenu('check')">
              <div class="ml-2 md:ml-3">ដំណើរការ</div>
              </li>
              <li class="footer_link mt-3 md:mt-8">
                <router-link :to="{name : 'home'}" class="w-100 flex items-center"><div class="ml-2 md:ml-3">សន្ទានុក្រមស្រាវជ្រាវ</div></router-link>
              </li>
              <li class="footer_link mt-3 md:mt-8" @click="toggleMenu('study')">
                <div class="ml-2 md:ml-3">សេចក្ដីណែនាំ</div>
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