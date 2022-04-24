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
          <input autocomplete="off" class="p-4 bg-zinc-900 rounded-md font-bold text-xl focus:outline-none" type="email"
            name="E-mail Adresiniz" v-model="email">
          <button class="bg-lime-600 rounded-md text-lg font-bold px-4 py-2" @click="checkMail">Katıl!</button>
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