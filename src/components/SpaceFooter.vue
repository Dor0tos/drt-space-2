<script setup lang="ts">
import BulletList from "./BulletList.vue";
import IconSmallArrow from "./icons/IconSmallArrow.vue";
import IconSmallHash from "./icons/IconSmallHash.vue";
import IconSmallLink from "./icons/IconSmallLink.vue";
</script>

<template>
  <footer class="bg-space-dark mt-5 py-5">
    <div class="w-3/5 mx-auto flex flex-row justify-between">
      <section class="flex flex-col gap-2">
        <p class="font-bold font-play text-xl text-slate-200">DRT-Space</p>
        <p>Made by Dorotos, 2024</p>
      </section>
      <section>
        <div class="flex flex-row gap-8">
          <BulletList
            title="Ссылки"
            :items="[
              { text: 'Верх', link: '#' },
              { text: 'Проекты', link: '#projects' },
              { text: 'Арты', link: '#arts' },
              { text: 'Навыки', link: '#skills' },
              { text: 'Контакты', link: '#contacts' },
            ]"
            ><IconSmallHash />
          </BulletList>
          <BulletList
            title="Страницы"
            :items="[
              { text: 'Проекты', link: '/projects' },
              { text: 'Арты', link: '/arts' },
              { text: 'Навыки', link: '/skills' },
              { text: 'Контакты', link: '/contacts' },
            ]"
            ><IconSmallArrow />
          </BulletList>
          <BulletList
            title="Контакты"
            :items="[
              { text: 'Vk', link: 'https://vk.com/dor0tos' },
              { text: 'Telegram', link: 'https://telegram.com' },
              { text: 'YouTube', link: 'https://youtube.com' },
              { text: 'Twitch', link: 'https://twitch.tv' },
            ]"
            ><IconSmallLink />
          </BulletList>
        </div>
      </section>
    </div>
  </footer>
</template>
