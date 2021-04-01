Vue.component('figma-logo', {
  template: `
    <svg width="40px" height="40px" viewBox="0 0 256 384" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
        <g>
            <path d="M64,384 C99.328,384 128,355.328 128,320 L128,256 L64,256 C28.672,256 0,284.672 0,320 C0,355.328 28.672,384 64,384 Z" fill="#0ACF83"></path>
            <path d="M0,192 C0,156.672 28.672,128 64,128 L128,128 L128,256 L64,256 C28.672,256 0,227.328 0,192 Z" fill="#A259FF"></path>
            <path d="M0,64 C0,28.672 28.672,0 64,0 L128,0 L128,128 L64,128 C28.672,128 0,99.328 0,64 Z" fill="#F24E1E"></path>
            <path d="M128,0 L192,0 C227.328,0 256,28.672 256,64 C256,99.328 227.328,128 192,128 L128,128 L128,0 Z" fill="#FF7262"></path>
            <path d="M256,192 C256,227.328 227.328,256 192,256 C156.672,256 128,227.328 128,192 C128,156.672 156.672,128 192,128 C227.328,128 256,156.672 256,192 Z" fill="#1ABCFE"></path>
        </g>
    </svg>
  `
})

Vue.component('dollar-svg', {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.5-6H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z"/></svg>
  `
})

Vue.component('slideshow-svg', {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M8.17 3A3.001 3.001 0 0 1 11 1h2c1.306 0 2.417.835 2.83 2H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5.17zM4 5v14h16V5h-4.17A3.001 3.001 0 0 1 13 7h-2a3.001 3.001 0 0 1-2.83-2H4zm7-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-1 6l5 3-5 3V9z"/></svg>
  `
})

Vue.component('file-svg', {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/></svg>
  `
})

Vue.component('featuresDropdown', {
  template: `
    <div class="feature-dropdown">
      <div class="dropdown--section_title">Design</div>
      <div class="dropdown-wrap">
        <a href="#" class="dropdown-wrap__content type1">
          <slideshow-svg />
          <span>Design1</span>
        </a>
        <a href="#" class="dropdown-wrap__content type1">
          <slideshow-svg />
          <span>Design2</span>
        </a>
      </div>
      <div class="dropdown--section_title">Prototyping</div>
      <div class="dropdown-wrap">
        <a href="#" class="dropdown-wrap__content type1">
          <file-svg />
          <span>Prototype1</span>
        </a>
        <a href="#" class="dropdown-wrap__content type1">
          <file-svg />
          <span>Prototype2</span>
        </a>
      </div>
    </div>
  `
})

Vue.component('enterpriseDropdownTop', {
  template: `
    <div class="enterprise-dropdown">
      <div class="dropdown-wrap">
        <a href="#" class="dropdown-wrap__content type2">
          <dollar-svg style="min-width: 24px" />
          <div>
            <div class="content--top">Enterprise</div>
            <div class="content--bottom">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          </div>
        </a>
      </div>
    </div>
  `
})

Vue.component('enterpriseDropdownBottom', {
  template: `
    <div class="enterprise-dropdown">
      <div class="dropdown-wrap">
        <a href="#" class="dropdown-wrap__content type1">
          <dollar-svg />
          <span>Price1</span>
        </a>
        <a href="#" class="dropdown-wrap__content type1">
          <dollar-svg />
          <span>Price2</span>
        </a>
      </div>
    </div>
  `
})

Vue.component('mobile-content', {
  template: `
    <div class="mobile-content">
      Mobile Content
    </div>
  `
})

Vue.component('app', {
  template: `
    <vsm-menu :menu="menu">
      <template #default="data">
        <component
          :is="data.item.content"
          class="content"
        />
        <component
          :is="data.item.secondaryContent"
          class="content--secondary"
        />
      </template>
      <li
        slot="before-nav"
        class="logo vsm-section vsm-mob-full"
      >
        <a href="#">
          <figma-logo />
        </a>
      </li>
      <template slot="after-nav">
        <li class="vsm-section vsm-mob-hide">
          <!--router-link, etc-->
          <a href="#" class="vsm-link signup">
            Sign In
          </a>
        </li>
        <!--Display mobile menu-->
        <vsm-mob>
          <mobile-content />
        </vsm-mob>
      </template>
    </vsm-menu>
  `,
  data() {
    return {
      menu: [
        { title: 'Features', dropdown: 'features', content: 'featuresDropdown' },
        { title: 'Enterprise', dropdown: 'enterprise', content: 'enterpriseDropdownTop', secondaryContent: 'enterpriseDropdownBottom' },
        { title: 'Customers', attributes: { href: '#' } },
        { title: 'Github', attributes: { href: 'https://github.com/Alexeykhr/vue-stripe-menu', target: '_blank' } },
        { title: 'Login', attributes: { href: '#' } }
      ]
    }
  }
})

new Vue({
  el: '#app'
})

<template>
  <div id="app">
  <app />
</div>

</template>

<script>
import AppIcon from "@/components/AppIcon.vue";

export default {
  components: {
    AppIcon
  }
};
</script>

<style lang="scss" scoped>
.nav {
  background: #000;
  color: #fff;
  padding: 1em 100px;

  a {
    color: #fff;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}

div {
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
}

ul {
  padding-left: 0;

  li {
    display: inline-block;
    margin-right: 30px;
  }
}
:root {
  --primary: #333;
  --secondary: #777;
  --link: #000;
}

// For override styles uses .scss (see documentation)

body {
  overflow-y: scroll;
  margin: 0;
}

.vsm-menu {
  margin: 10px;
  ul {
    max-width: 1024px;
    margin: 0 auto;
  }
}

.vsm-root {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  flex: 1 1 auto;
}

.vsm-section_menu {
  > * {
    padding: 0 25px;
    font-weight: 500;
    font-family: inherit;
  }
}

.vsm-link {
  position: relative;
  color: var(--link);
  text-decoration: none;
  &:hover {
    color: var(--link);
  }
}

.signup {
  color: #fff;
  background: #333;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  transition: transform .1s;
  &:hover {
    color: #fff;
    transform: translateY(-3px);
  }
}

.content,
.content--secondary,
.mobile-content {
  padding: 30px;
}

.content--secondary {
  padding-top: 10px;
  padding-bottom: 10px;
}

.dropdown--section_title {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 20px;
  &:not(:first-child) {
    margin-top: 20px;
  }
}

.dropdown-wrap__content {
  display: flex;
  align-items: center;
  color: var(--primary);
  text-decoration: none;
  padding: 10px 5px 10px 0;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  &.type1 {
    span {
      margin-left: 10px;
    }
  }
  &.type2 {
    align-items: flex-start;
    > div {
      margin-left: 10px;
    }
    .content--bottom {
      color: var(--secondary);
    }
  }
}

.feature-dropdown {
  min-width: 250px;
}

.enterprise-dropdown {
  width: 400px;
}

</style>
