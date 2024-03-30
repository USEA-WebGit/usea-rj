
<template>
  <div class="">
    <div class="w-full">
      <div class="w-fit mx-auto border-b-2 text-active_color text-center font-hanuman font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        អំពីទស្សនាវដ្ដីស្រាវជ្រាវ
      </div>
      <div class="w-14 lg:w-20 border-b-2 lg:border-b-4 border-b-active_color mx-auto"></div>
      <div class="flex xs:mx-2 bg-white rounded-lg justify-center items-center mt-10 py-5 xl:flex-row flex-col">
        <div class="text-center mb-10  border-solid border-[1px] border-black-50 mx-10 p-5 rounded-xl">
          <img src="../assets/img/logo/journal-logo.png" alt="journal logo" class="2xl:max-h-[18.75rem] 2xl:max-w-[rem] lg:max-h-[15.625rem] lg:max-w-[18.75rem] md:max-h-[12.5rem] md:max-w-[15.625rem] sm:max-h-[12.5rem] sm:max-w-[15.625rem] xs:max-h-[12.5rem] xs:max-w-[15.625rem]">
          <p class="text-usea_primary font-hanuman text-2xl font-bold">និមិត្តសញ្ញា</p>
        </div>
        <div class="">
          <p class="2xl:text-lg xl:text-lg md:text-lg sm:text-[1rem] font-hanuman px-10 text-justify text-black ">ទស្សនាវដ្ដីស្រាវជ្រាវសាកលវិទ្យាល័យសៅស៍អ៊ីសថ៍អេយសៀមានអក្សរកាត់ជាខេមរភាសា “ទ.ស.ស.ស.អ.” និង មានឈ្មោះជាភាសាអង់គ្លេស <span class="font-extrabold">USEA Research Journal</span>ដែលមាន អក្សរកាត់“USEARJ”ទស្សនាវដ្តីស្រាវជ្រាវនេះគឺជា ទស្សនាវដ្តីស្រាវជ្រាវបោះពុម្ពផ្សាយតាមអនឡាញពីរដង ក្នុងមួយឆ្នាំជាខេមរភាសា និង/ឬភាសាអង់គ្លេស។ រាល់អត្ថបទ ស្រាវជ្រាវដែលបានបោះពុម្ពផ្សាយតាមទស្សនាវដ្ដីស្រាវជ្រាវសាកលវិទ្យាល័យ សៅស៍អ៊ីសថ៍អេយសៀ គឺមិនត្រូវបានគិតថ្លៃសេវាឡើយ ។</p>
        </div>
      </div>
    </div>
    <div class="mt-5"></div>
    <!-- start journal vision mission -->
    <div>
      <!-- First Accordion -->
      <div class="py-2 xs:mx-2 bg-white rounded-lg">
        <button class="flex p-3 justify-between w-full" @click="toggleAnswer(1)">
          <span class="text-usea_primary 2xl:text-2xl md:text-xl sm:text-xl xs:text-xl font-extrabold font-hanuman">គោលបំណង</span>
          <span class="text-2xl" v-if="showAnswer === 1">-</span>
          <span class="text-2xl" v-else>+</span>
        </button>
        <div class="" v-if="showAnswer === 1">
          <div class="p-3 font-hanuman 2xl:text-lg xl:text-lg md:text-lg sm:text-[1rem]">ដើម្បីចូលរួមចំណែកលើកកម្ពស់ការស្រាវជ្រាវនៅសាកលវិទ្យាល័យសៅស៍អ៊ីសថ៍អេយសៀនិងនៅក្នុងព្រះរាជាណាចក្រកម្ពុជាតាមរយៈការបោះពុម្ពផ្សាយអត្ថបទស្រាវជ្រាវសម្រាប់បង្កើនធនធានសិក្សាដែលគាំទ្រដល់ការសិក្សា និងការស្រាវជ្រាវ បែបវិទ្យាសាស្រ្ត ។</div>
        </div>
      </div>
    
    <!-- Second Accordion -->
      <div class="py-2 xs:mx-2 bg-white rounded-lg mt-3">
        <button class="flex p-3 justify-between w-full" @click="toggleAnswer(2)">
          <span class="text-usea_primary 2xl:text-2xl md:text-xl sm:text-xl xs:text-xl font-extrabold font-hanuman">វិសាលភាព</span>
          <span class="text-2xl" v-if="showAnswer === 2">-</span>
          <span class="text-2xl" v-else>+</span>
        </button>
        <div v-if="showAnswer === 2">
          <div class="p-3 font-hanuman 2xl:text-lg xl:text-lg md:text-lg sm:text-[1rem]">ទស្សនាវដ្ដីស្រាវជ្រាវសាកលវិទ្យាល័យ សៅស៍អ៊ីសថ៍អេយសៀ ជាទស្សនាវដ្តីស្រាវជ្រាវកម្រិតជាតិ ដែលបោះពុម្ពផ្សាយអត្ថបទស្រាវជ្រាវក្នុងវិស័យ៖ <ul><li>‐	សេដ្ឋកិច្ច </li><li>‐	ធុរកិច្ច</li><li>‐	ទេសចរណ៍ </li><li>‐	ច្បាប់ </li><li>‐	សិល្បៈ និងអប់រំ</li><li>‐	វិទ្យាសាស្រ្ត និងបច្ចេកវិទ្យាឌីជីថល និង</li><li>‐	បរិស្ថាន ។</li></ul> ទស្សនាវដ្តីនេះ ទទួលបោះពុម្ពផ្សាយអត្ថបទថ្មីៗ ដែលមិនទាន់បានបោះពុម្ពនៅកន្លែងណាផ្សេង ទោះជាក្នុងភាសាអ្វីក៏ដោយ រួមមានអត្ថបទស្រាវជ្រាវ (original articles) វិវេចនាអត្ថបទ (review articles) និងអត្ថបទសង្ខេបគោលនយោបាយ (policy briefs) ។ </div>
        </div>
      </div>
    
    <!-- Third Accordion -->
      <div class="py-2 xs:mx-2 bg-white rounded-lg mt-3">
        <button class="flex p-3 justify-between w-full" @click="toggleAnswer(3)">
          <span class="text-usea_primary 2xl:text-2xl md:text-xl sm:text-xl xs:text-xl font-extrabold font-hanuman">អង្គភាពចេញផ្សាយ</span>
          <span class="text-2xl" v-if="showAnswer === 3">-</span>
          <span class="text-2xl" v-else>+</span>
        </button>
        <div v-if="showAnswer === 3">
          <div class="p-3 font-hanuman 2xl:text-lg xl:text-lg md:text-lg sm:text-[1rem]">ចេញផ្សាយដោយ៖ សាលាក្រោយបរិញ្ញាបត្រនៃសាកលវិទ្យាល័យសៅស៍អ៊ីសថ៍អេយសៀ។</div>
        </div>
      </div>
  </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAnswer: null
    };
  },
  methods: {
    toggleAnswer(index) {
      if (this.showAnswer === index) {
        // If the clicked accordion is already open, close it
        this.showAnswer = null;
      } else {
        // Close the previously opened accordion (if any)
        this.showAnswer = index;
      }
    }
  }
};
</script>