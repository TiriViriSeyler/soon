<script lang="ts" setup>

const email = ref()

async function checkMail() {
  const response = await GqlCheckEmail({
    mail: email.value,
  });
  if (response.comingSoonUsers.data.length > 0) {
    alert('Bu mail adresi zaten kayıtlı.')
  } else {
    await GqlCreateUser({
      mail: email.value,
    });
    alert('Kayıt başarılı.')
  }
}

</script>
<template>
  <div class="h-screen flex text-white w-full justify-center md:justify-start md:flex-row gap-2 flex-col bg-[#1d1d1d]">
    <video autoplay loop muted class="hidden video">
      <source src="/soon.mp4" type="video/mp4">
    </video>
    <div class="flex md:m-0 justify-center md:w-full items-center flex-col">
      <div
        class="max-w-screen-md flex mx-8 content flex-col items-center justify-center md:items-start md:text-left gap-2">
        <h1
          class="text-transparent text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-lime-400 to-lime-700 font-bold">
          TırıVırıŞeyler</h1>
        <p class="text-3xl text-gray-400">Akılcı ve yenilikçi içerik platformu ve dijital dergi olan TırıVırıŞeyler ile
          tanışın.
          Nuxt.js, TypeScript ve Strapi ile güçlendirildi.
        </p>
        <div class="mt-2 flex flex-col items-start gap-2">
          <h2 class="text-xl font-bold">Neden bekleme listesine katılmayasın ki?
          </h2>
          <div class="p-4 flex bg-zinc-900 rounded-md font-bold text-xl">
            <input autocomplete="off" class="bg-transparent focus:outline-none" type="email" placeholder="Email Adresi"
              v-model="email">
            <div @click="checkMail"
              class="cursor-pointer p-1 rounded-md hover:bg-lime-600 transition-all ease-in-out duration-300 ">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="currentColor" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z">
                </path>
              </svg>
            </div>
          </div>
        </div>
        <div class="mt-2 flex flex-wrap gap-2">
          <a title="GitHub" href="https://github.com/tiriviriseyler" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="currentColor" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M224,224a8,8,0,0,1-8,8,32.1,32.1,0,0,1-32-32v-8a16,16,0,0,0-16-16H156v40a16,16,0,0,0,16,16,8,8,0,0,1,0,16,32.1,32.1,0,0,1-32-32V176H116v40a32.1,32.1,0,0,1-32,32,8,8,0,0,1,0-16,16,16,0,0,0,16-16V176H88a16,16,0,0,0-16,16v8a32.1,32.1,0,0,1-32,32,8,8,0,0,1,0-16,16,16,0,0,0,16-16v-8a32.1,32.1,0,0,1,14.8-27A55.8,55.8,0,0,1,48,120v-8a58,58,0,0,1,7.7-28.3A59.9,59.9,0,0,1,61.1,36,7.8,7.8,0,0,1,68,32a59.7,59.7,0,0,1,48,24h24a59.7,59.7,0,0,1,48-24,7.8,7.8,0,0,1,6.9,4,59.9,59.9,0,0,1,5.4,47.7A58,58,0,0,1,208,112v8a55.8,55.8,0,0,1-22.8,45A32.1,32.1,0,0,1,200,192v8a16,16,0,0,0,16,16A8,8,0,0,1,224,224Z">
              </path>
            </svg>
          </a>
          <a title="Twitter" target="_blank" href="https://twitter.com/tviriseyler">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M245.7,77.7l-30.2,30.1C209.5,177.7,150.5,232,80,232c-14.5,0-26.5-2.3-35.6-6.8-7.3-3.7-10.3-7.6-11.1-8.8a8,8,0,0,1,3.9-11.9c.2-.1,23.8-9.1,39.1-26.4a108.6,108.6,0,0,1-24.7-24.4c-13.7-18.6-28.2-50.9-19.5-99.1a8.1,8.1,0,0,1,5.5-6.2,8,8,0,0,1,8.1,1.9c.3.4,33.6,33.2,74.3,43.8V88a48.3,48.3,0,0,1,48.6-48,48.2,48.2,0,0,1,41,24H240a8,8,0,0,1,7.4,4.9A8.4,8.4,0,0,1,245.7,77.7Z">
              </path>
            </svg>
          </a>
          <a title="Instagram" target="_blank" href="https://instagram.com/tiriviriseyler">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="currentColor" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <circle cx="128" cy="128" r="32"></circle>
              <path
                d="M172,28H84A56,56,0,0,0,28,84v88a56,56,0,0,0,56,56h88a56,56,0,0,0,56-56V84A56,56,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48,48,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z">
              </path>
            </svg>
          </a>
          <a class="flex items-center gap-1" title="Email" target="_blank" href="mailto:iletisim@tiriviriseyler.xyz">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="currentColor" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M227.7,48.3,175.3,234.2a15.9,15.9,0,0,1-14.1,11.6h-1.4a16,16,0,0,1-14.4-9.1l-35.7-75.4a4.1,4.1,0,0,1,.8-4.6l51.3-51.3a8,8,0,1,0-11.3-11.3L99.2,145.5a4.1,4.1,0,0,1-4.6.8l-75-35.5a16.6,16.6,0,0,1-9.5-15.6A15.9,15.9,0,0,1,21.8,80.7L208.1,28.2a16,16,0,0,1,17.7,6.5A16.7,16.7,0,0,1,227.7,48.3Z">
              </path>
            </svg>
            iletisim@tiriviriseyler.xyz
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap');

html {
  font-family: 'Manrope', sans-serif;
}

@media (min-width: 1000px) {
  .video {
    @apply block;
  }

  .content {
    @apply mx-0
  }
}
</style>