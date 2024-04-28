<script setup lang="ts">
import NavBar from "@/components/Navigarion/NavBar.vue";
import Header from "@/components/Header/Header.vue";
import NavItem from "@/components/Navigarion/NavItem.vue";
import ContentBlock from "@/components/Common/ContentBlock.vue";
import SpaceFooter from "@/components/Footer/SpaceFooter.vue";
import ProjectsView from "@/components/Projects/ProjectsView.vue";
import ArtsView from "@/components/Arts/ArtsView.vue";
import ContactsView from "@/components/Contacts/ContactsView.vue";
import ContactsCard from "@/components/Contacts/ContactsCard.vue";
import IconPaperplane from "@/components/icons/IconPaperplane.vue";
import IconMain from "@/components/icons/IconMain.vue";
import SkillView from "@/components/Skills/SkillView.vue";
import SkillSection from "@/components/Skills/SkillSection.vue";
import SkillCard from "@/components/Skills/SkillCard.vue";
// Skill Icons
import AiIcon from "@/components/icons/Skills/AI.vue";
import AsepriteIcon from "@/components/icons/Skills/Aseprite.vue";
import CppIcon from "@/components/icons/Skills/Cpp.vue";
import CSharpIcon from "@/components/icons/Skills/CSharp.vue";
import GodotIcon from "@/components/icons/Skills/Godot.vue";
import SupabaseIcon from "@/components/icons/Skills/Supabase.vue";
import TailWindIcon from "@/components/icons/Skills/TailWind.vue";
import VueIcon from "@/components/icons/Skills/Vue.vue";
import WebIcon from "@/components/icons/Skills/Web.vue";
import Win32Icon from "@/components/icons/Skills/Win32.vue";
import WPFIcon from "@/components/icons/Skills/WPF.vue";
import XDIcon from "@/components/icons/Skills/XD.vue";
</script>

<template>
  <Header />
  <NavBar>
    <NavItem
      link-to="#projects"
      class="bg-space-red-default hover:bg-space-red-bright"
      first-item
      >Проекты</NavItem
    >
    <NavItem
      link-to="#arts"
      class="bg-space-green-default hover:bg-space-green-bright"
      >Арты</NavItem
    >
    <NavItem
      link-to="#skills"
      class="bg-space-blue-default hover:bg-space-blue-bright"
      >Навыки</NavItem
    >
    <NavItem
      link-to="#contact"
      class="bg-space-yellow-default hover:bg-space-yellow-bright"
      last-item
      >Контакты</NavItem
    >
  </NavBar>

  <ContentBlock title="Проекты" id="projects">
    <ProjectsView />
  </ContentBlock>
  <ContentBlock title="Арты" id="arts">
    <ArtsView />
  </ContentBlock>
  <ContentBlock title="Навыки" id="skills">
    <SkillView>
      <SkillSection color="Green" title="Frontend">
        <SkillCard title="Web Base" description="HTML, CSS, JS">
          <WebIcon />
        </SkillCard>
        <SkillCard title="Vue.js" description="JS Framework">
          <VueIcon />
        </SkillCard>
        <SkillCard title="TailWind CSS" description="Framework">
          <TailWindIcon />
        </SkillCard>
        <SkillCard title="Supabase" description="Облачная база данных">
          <SupabaseIcon />
        </SkillCard>
      </SkillSection>
      <SkillSection color="Blue" title="Desktop">
        <SkillCard title="C# & .NET" description="Платформа разработки">
          <CSharpIcon />
        </SkillCard>
        <SkillCard title="WPF" description="UI платформа">
          <WPFIcon />
        </SkillCard>
        <SkillCard title="С++17" description="Я.Программирования">
          <CppIcon />
        </SkillCard>
        <SkillCard title="Win32" description="API"> <Win32Icon /> </SkillCard>
      </SkillSection>
      <SkillSection color="Yellow" title="GameDev & Art">
        <SkillCard title="Godot Engine" description="Игровой Движок">
          <GodotIcon />
        </SkillCard>
        <SkillCard title="Aseprite" description="Пиксель-Арт">
          <AsepriteIcon />
        </SkillCard>
        <SkillCard title="Adobe XD" description="Прототипирование UI">
          <XDIcon />
        </SkillCard>
        <SkillCard title="Adobe Illustrator " description="Графический дизайн">
          <AiIcon />
        </SkillCard>
      </SkillSection>
    </SkillView>
  </ContentBlock>
  <ContentBlock title="Контакты" id="contact">
    <ContactsView>
      <ContactsCard
        window-name="Телега"
        title="Telegram"
        url-value="https://t.me/Dorotos_Space"
        clipboard-value="@Dorotos_Space"
        display-value="@Dorotos_Space"
        color="blue"
        have-link
        have-clipboard
        is-priority
      >
        <IconPaperplane />
      </ContactsCard>
      <ContactsCard
        window-name="Мыло"
        title="Почта"
        url-value="mailto:business@dorotos.ru"
        clipboard-value="business@dorotos.ru"
        display-value="business@dorotos.ru"
        color="yellow"
        have-link
        have-clipboard
      >
        <IconMain />
      </ContactsCard>
    </ContactsView>
  </ContentBlock>

  <SpaceFooter />
</template>

<style scoped>
@font-face {
  font-family: "Play";
  font-style: normal;
  font-weight: 400;
  src: url("./assets/fonts/Play-Regular.ttf");
}

@font-face {
  font-family: "Play";
  font-style: normal;
  font-weight: 600;
  src: url("./assets/fonts/Play-Bold.ttf");
}

@font-face {
  font-family: "Sofia Sans";
  font-style: normal;
  src: url("./assets/fonts/SofiaSans.ttf");
}
</style>
