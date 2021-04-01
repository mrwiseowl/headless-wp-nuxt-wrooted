<template>
  <div>
    <app-masthead></app-masthead>
    <div class="posts">
      <main>
        <div class="post" v-for="post in sortedPosts" :key="post.id">
          <h3>
            <a :href="`blog/${post.slug}`">{{ post.title.rendered }}</a>
          </h3>
          <small>{{ post.date | dateformat }}</small>
          <div v-html="post.excerpt.rendered"></div>
          <a :href="`blog/${post.slug}`" class="readmore slide">Read more ⟶</a>
        </div>
      </main>
      <aside>
        <h2 class="tags-title">Tags</h2>
        <div class="tags-list">
          <ul>
            <li
              @click="updateTag(tag)"
              v-for="tag in tags"
              :key="tag.id"
              :class="[tag.id === selectedTag ? activeClass : '']"
            >
              <a>{{ tag.name }}</a>
              <span v-if="tag.id === selectedTag">✕</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";

export default {
  components: {
    AppMasthead
  },
  data() {
    return {
      selectedTag: null,
      activeClass: "active"
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    tags() {
      return this.$store.state.tags;
    },
    sortedPosts() {
      if (!this.selectedTag) return this.posts;
      return this.posts.filter(el => el.tags.includes(this.selectedTag));
    }
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id;
      } else {
        this.selectedTag = null;
      }
    }
  }
};
</script>

<style lang="scss">
.posts {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 6vw;
  margin: 5em auto;
  max-width: 80vw;
}

main {
  grid-area: 1 / 1 / 2 / 2;
}

aside {
  grid-area: 1 / 2 / 2 / 3;
}

h2 {
  margin-bottom: 2em;
}

a,
a:active,
a:visited {
  text-decoration: none;
  color: black;
}

a.readmore {
  display: inline-block;
  font-size: 11px;
  text-transform: uppercase;
  padding: 5px 15px;
  letter-spacing: 2px;
  position: relative;
  color: #000;
  font-weight: 700;
  font-family: "Open Sans", serif;
  border: 1px solid #ccc;
  background: #fff;
}

.tags-title {
  background-color: #000;
  color: #fff;
  border: none;
  text-transform: capitalize;
  letter-spacing: 0;
  font-size: 1.2rem;
  padding: 15px;
  margin: 0 35px;
  position: relative;
  top: -25px;
}

.tags-list {
  background: #f5f5f5;
  padding: 70px 25px 25px;
  margin-top: -65px;
}

.post {
  border-bottom: 1px solid rgb(223, 222, 222);
  margin-bottom: 2em;
  padding-bottom: 2em;
  color: #444;

  h3 {
    margin-bottom: 0.5em;
    font-size: 26px;
  }
}

.tags-list ul {
  padding-left: 0;
}

.tags-list li {
  font-family: "Open Sans", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 6px 15px;
  margin: 0 0 10px 10px;
  display: inline-block;
  font-size: 0.7rem !important;
  border: 1px solid #000;
  transition: all 0.3s;
  outline: none;
  font-weight: normal;
  cursor: pointer;
  background: #fff;
  a {
    color: #000;
  }
}

.active {
  border: 1px solid #d44119;
  background-color: #fae091 !important;
}

.slide {
  position: relative;
  background: transparent;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  z-index: 1;
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0);
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:hover:before {
    right: -1px;
  }
}

.slide::before {
  content: "";
  display: block;
  position: absolute;
  background: #000;
  transition: right 0.3s ease;
  z-index: -1;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: 108%;
  backface-visibility: hidden;
}

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Fraunces:ital,wght@0,500;0,600;0,700;1,600&display=swap');

*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  font-family: "DM Sans", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  background-color: #f8f3eb;
  color: #484847;
  padding-bottom: 5rem;
}

img {
  display: block;
  max-width: 100%;
}

.responsive-wrapper {
  width: 95%;
  max-width: 1900px;
  margin-left: auto;
  margin-right: auto;
}

.header {
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {

  svg {
    max-height: 40px;
    width: auto;
  }
}

.header-middle {
  display: none;
  @media (min-width: 1200px) {
      display: block;
  }
}

.header-right {
  display: flex;
  align-items: center;
}

.header-nav {
  display: none;
  @media (min-width: 1200px) {
      display: block;
  }
}

.header-link {
  color: #000;
  text-decoration: none;
  margin-left: .75rem;
  margin-right: .75rem;
  display: none;
  font-weight: 500;
  display: inline-block;
  &--button {
    background-color: #000;
    color: #fff;
    padding: .5rem 1.25rem;
  }
  
  @media (min-width: 1200px) {
  }
}

.header-menu-button {
  margin-left: .75rem;
  border: 0;
  padding: 0;
  background-color: transparent;
  font: inherit;
  position: relative;
  padding-right: 30px;
  font-weight: 500;
  
  &:after, &:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: currentcolor;
    right: 0;
    top: 8px;
  }
  
  &:after {
    top: 16px;
    width: 12px;
    right: 8px;
  }
}

.page-title {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #000;
    text-align: center;
    position: relative;
    
    
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      bottom: -3px;
      height: 2px;
      background-color: currentcolor;
    }
  }
}

.magazine-layout {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 2rem;
}

.magazine-column {
  padding: 0 1.5rem;
  grid-column: span 5;
  
  @media (min-width: 1200px) {
    grid-column: span 1;
    border-right: 1px solid #CCC;
    &:last-child {
      border-right: none;
    }
  }
  
  &:nth-child(2) {
    @media (min-width: 1200px) {
      grid-column: span 2;
    }
  }
}

.article {
  & + .article {
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: 1px solid #ccc;
  }
}

.article-img {
  & + * {
    margin-top: 1rem;
  }
}

.article-link {
  color: inherit;
  text-decoration: none;
}

.article-title {
  font-family: "Fraunces", serif;
  font-weight: 900;
  line-height: 1.25;
  color: #000;

  &--large {
    font-size: 2rem;
    & + * {
      margin-top: 1.5rem;
    }
  }

  &--medium {
    font-size: 1.5rem;
    & + * {
      margin-top: 0.75rem;
    }
  }

  &--small {
    font-size: 1.25rem;
    & + * {
      margin-top: 0.75rem;
    }
  }
}

.article-link {
  color: inherit;
}

.mark {
  background-color: #fabea1;
  &--secondary {
    background-color: #c2dddf;
  }
  
  &--tertiary {
    background-color: #F8E177;
  }
}

.article-excerpt,
.article-creditation {
  font-size: 1.125rem;
  line-height: 1.4;
  p + p {
    margin-top: 1.5rem;
  }
}

.article-author {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.article-author-img {
  width: 3rem;
  height: 3rem;
  border-radius: 12px;
  background-color: #323232;
  overflow: hidden;
  background-blend-mode: multiply;
  img {
  }

  & + .article-author-info {
    margin-left: 0.5rem;
  }
}

.article-author-info {
  line-height: 1.375;
  dl {
    margin-top: 0.25em;
  }

  dt {
    font-weight: 600;
  }

  dd {
    font-size: 0.875em;
  }
}

.article-category {
  font-weight: 500;
  margin-bottom: 1rem;
  display: block;
  svg {
    max-width: 1.5rem;
    margin-right: .5rem;
    vertical-align: middle;
  }
  
}

.article-podcast-player {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1.25rem;
}

.podcast-play-button {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 12px;
  border: 0;
  background-color: #000;
  margin-right: .5rem;
  svg {
    max-width: 1rem;
    max-height: 1rem;
    fill: #FFF;
  }
}

.podcast-progression {
  flex: 1;
  height: 8px;
  border-radius: 99em;
  background-color: #D9D4CD;
  background-image: linear-gradient(to right, #F99970 30%, #D9D4CD 30%, #D9D4CD 100%)
}

.podcast-time {
  font-weight: 500;
  font-size: 1.125rem;
  margin-left: .5rem;
}

:focus {
  outline: 0;
}
</style>
