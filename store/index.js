const siteURL = "https://css-tricks.com"

export const state = () => ({
  posts: [],
  tags: []
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateTags: (state, tags) => {
    state.tags = tags
  }
}

export const actions = {
  async getPosts({ state, commit, dispatch }) {
    if (state.posts.length) return

    try {
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`
      ).then(res => res.json())

      posts = posts
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, excerpt, date, tags, content }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          tags,
          content
        }))

      commit("updatePosts", posts)
    } catch (err) {
      console.log(err)
    }
  },
  async getTags({ state, commit }) {
    if (state.tags.length) return

    let allTags = state.posts.reduce((acc, item) => {
      return acc.concat(item.tags)
    }, [])
    allTags = allTags.join()

    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then(res => res.json())

      tags = tags.map(({ id, name }) => ({
        id,
        name
      }))

      commit("updateTags", tags)
    } catch (err) {
      console.log(err)
    }
  }
}
function readConfig(t){function n(t){return String(t).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#x2F;/g,"/").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}var e=/^[\],:{}\s]*$/,i=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,o=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,a=/(?:^|:|,)(?:\s*\[)+/g,r=document.getElementById(t);if(!r)return null;var s=n((r.textContent||r.innerHTML).replace(/^\s+|\s+$/gm,""));return e.test(s.replace(i,"@").replace(o,"]").replace(a,""))?window.JSON&&window.JSON.parse?window.JSON.parse(s):new Function("return "+s)():void 0}function globalNavDropdowns(t){var n=this;this.container=document.querySelector(t),this.root=this.container.querySelector(".navRoot"),this.primaryNav=this.root.querySelector(".navSection.primary"),this.primaryNavItem=this.root.querySelector(".navSection.primary .rootLink:last-child"),this.secondaryNavItem=this.root.querySelector(".navSection.secondary .rootLink:first-child"),this.checkCollision(),window.addEventListener("load",this.checkCollision.bind(this)),window.addEventListener("resize",this.checkCollision.bind(this)),this.container.classList.add("noDropdownTransition"),this.dropdownBackground=this.container.querySelector(".dropdownBackground"),this.dropdownBackgroundAlt=this.container.querySelector(".alternateBackground"),this.dropdownContainer=this.container.querySelector(".dropdownContainer"),this.dropdownArrow=this.container.querySelector(".dropdownArrow"),this.dropdownRoots=Strut.queryArray(".hasDropdown",this.root),this.dropdownSections=Strut.queryArray(".dropdownSection",this.container).map(function(t){return{el:t,name:t.getAttribute("data-dropdown"),content:t.querySelector(".dropdownContent")}});var e=window.PointerEvent?{end:"pointerup",enter:"pointerenter",leave:"pointerleave"}:{end:"touchend",enter:"mouseenter",leave:"mouseleave"};this.dropdownRoots.forEach(function(t){t.addEventListener(e.end,function(e){e.preventDefault(),e.stopPropagation(),n.toggleDropdown(t)}),t.addEventListener(e.enter,function(e){"touch"!=e.pointerType&&(n.stopCloseTimeout(),n.openDropdown(t))}),t.addEventListener(e.leave,function(t){"touch"!=t.pointerType&&n.startCloseTimeout()})}),this.dropdownContainer.addEventListener(e.end,function(t){t.stopPropagation()}),this.dropdownContainer.addEventListener(e.enter,function(t){"touch"!=t.pointerType&&n.stopCloseTimeout()}),this.dropdownContainer.addEventListener(e.leave,function(t){"touch"!=t.pointerType&&n.startCloseTimeout()}),document.body.addEventListener(e.end,function(){Strut.touch.isDragging||n.closeDropdown()})}function globalNavPopup(t){var n=this,e=Strut.touch.isSupported?"touchend":"click";this.activeClass="globalPopupActive",this.root=document.querySelector(t),this.link=this.root.querySelector(".rootLink"),this.popup=this.root.querySelector(".popup"),this.closeButton=this.root.querySelector(".popupCloseButton"),this.link.addEventListener(e,function(t){t.stopPropagation(),n.togglePopup()}),this.popup.addEventListener(e,function(t){t.stopPropagation()}),this.popup.addEventListener("transitionend",function(){if(n.isOpening){n.isOpening=!1;var t=n.popup.getBoundingClientRect().top+window.scrollY;if(t<15){var e=15-t;n.popup.style.transform="translateY("+e+"px)"}}}),this.closeButton&&this.closeButton.addEventListener(e,function(){n.closeAllPopups()}),document.body.addEventListener(e,function(){Strut.touch.isDragging||n.closeAllPopups()},!1)}!function(){function t(){e(),n()}function n(){o.classList.add("dismissed")}function e(){var t=new Date,n=r+"=ack";t.setYear(t.getFullYear()+10),n+=";expires="+t.toGMTString(),n+=";domain="+document.domain,document.cookie=n}function i(){o=document.querySelector('[rel="cookie-notification"]'),(a=document.querySelector('[rel="dismiss-cookie-notification"]'))&&a.addEventListener("click",t)}var o,a,r="cookie_banner_ack";document.addEventListener("DOMContentLoaded",i)}(),function(){window.$&&window.$.ajaxPrefilter&&$(function(){return $.ajaxPrefilter(function(t,n,e){var i,o;return o=$("meta[name=csrf-token]"),i=o?o.attr("content"):"",e.setRequestHeader("x-stripe-csrf-token",i)})})}.call(this);var Strut={random:function(t,n){return Math.random()*(n-t)+t},arrayRandom:function(t){return t[Math.floor(Math.random()*t.length)]},interpolate:function(t,n,e){return t*(1-e)+n*e},rangePosition:function(t,n,e){return(e-t)/(n-t)},clamp:function(t,n,e){return Math.max(Math.min(t,e),n)},queryArray:function(t,n){return n||(n=document.body),Array.prototype.slice.call(n.querySelectorAll(t))},ready:function(t){"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)}};Strut.isRetina=window.devicePixelRatio>1.3,Strut.mobileViewportWidth=670,Strut.isMobileViewport=window.innerWidth<Strut.mobileViewportWidth,window.addEventListener("resize",function(){Strut.isMobileViewport=window.innerWidth<Strut.mobileViewportWidth}),Strut.touch={isSupported:"ontouchstart"in window||navigator.maxTouchPoints,isDragging:!1},document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("touchmove",function(){Strut.touch.isDragging=!0}),document.body.addEventListener("touchstart",function(){Strut.touch.isDragging=!1})}),Strut.load={images:function(t,n){"string"==typeof t&&(t=[t]);var e=-t.length;t.forEach(function(t){var i=new Image;i.src=t,i.onload=function(){0===++e&&n&&n()}})},css:function(t,n){var e=document.createElement("link"),i=window.readConfig("strut_files")||{},o=i[t];if(!o)throw new Error('CSS file "'+t+'" not found in strut_files config');e.href=o,e.rel="stylesheet",document.head.appendChild(e),n&&(e.onload=n)},js:function(t,n){var e=document.createElement("script"),i=window.readConfig("strut_files")||{},o=i[t];if(!o)throw new Error('Javascript file "'+t+'" not found in strut_files config');e.src=o,e.async=!1,document.head.appendChild(e),n&&(e.onload=n)}},Strut.supports={es6:function(){try{return new Function("(a = 0) => a"),!0}catch(t){return!1}}(),pointerEvents:function(){var t=document.createElement("a").style;return t.cssText="pointer-events:auto","auto"===t.pointerEvents}(),positionSticky:Boolean(window.CSS&&CSS.supports("(position: -webkit-sticky) or (position: sticky)")),masks:function(){return!/MSIE|Trident|Edge/i.test(navigator.userAgent)}()},globalNavDropdowns.prototype.checkCollision=function(){var t=this;if(!Strut.isMobileViewport)if(1==t.compact){var n=document.body.clientWidth,e=t.primaryNav.getBoundingClientRect();e.left+e.width/2>n/2&&(t.container.classList.remove("compact"),t.compact=!1)}else{var i=t.primaryNavItem.getBoundingClientRect(),o=t.secondaryNavItem.getBoundingClientRect();i.right>o.left&&(t.container.classList.add("compact"),t.compact=!0)}},globalNavDropdowns.prototype.openDropdown=function(t){var n=this;if(this.activeDropdown!==t){this.container.classList.add("overlayActive"),this.container.classList.add("dropdownActive"),this.activeDropdown=t,this.dropdownRoots.forEach(function(t){t.classList.remove("active")}),t.classList.add("active");var e,i,o,a=t.getAttribute("data-dropdown"),r="left";this.dropdownSections.forEach(function(t){t.el.classList.remove("active"),t.el.classList.remove("left"),t.el.classList.remove("right"),t.name==a?(t.el.classList.add("active"),r="right",e=t.content.offsetWidth,i=t.content.offsetHeight,t.content.getAttribute("data-fixed")?t.content.setAttribute("data-fixed",!0):(t.content.style.width=e+"px",t.content.style.height=i+"px"),o=t.content):t.el.classList.add(r)});var s=380,c=400,d=e/s,l=i/c,u=t.getBoundingClientRect(),p=u.left+u.width/2-e/2;p=Math.round(Math.max(p,10)),clearTimeout(this.disableTransitionTimeout),this.enableTransitionTimeout=setTimeout(function(){n.container.classList.remove("noDropdownTransition")},50),this.dropdownBackground.style.transform="translateX("+p+"px) scaleX("+d+") scaleY("+l+")",this.dropdownContainer.style.transform="translateX("+p+"px)",this.dropdownContainer.style.width=e+"px",this.dropdownContainer.style.height=i+"px";var w=Math.round(u.left+u.width/2);this.dropdownArrow.style.transform="translateX("+w+"px) rotate(45deg)";var f=o.children[0].offsetHeight/l;this.dropdownBackgroundAlt.style.transform="translateY("+f+"px)",window.siteAnalytics&&window.siteAnalytics.trackGlobalNavDropdownOpen&&window.siteAnalytics.trackGlobalNavDropdownOpen(a)}},globalNavDropdowns.prototype.closeDropdown=function(){var t=this;this.activeDropdown&&(this.dropdownRoots.forEach(function(t){t.classList.remove("active")}),clearTimeout(this.enableTransitionTimeout),this.disableTransitionTimeout=setTimeout(function(){t.container.classList.add("noDropdownTransition")},50),this.container.classList.remove("overlayActive"),this.container.classList.remove("dropdownActive"),this.activeDropdown=undefined)},globalNavDropdowns.prototype.toggleDropdown=function(t){this.activeDropdown===t?this.closeDropdown():this.openDropdown(t)},globalNavDropdowns.prototype.startCloseTimeout=function(){var t=this;t.closeDropdownTimeout=setTimeout(function(){t.closeDropdown()},50)},globalNavDropdowns.prototype.stopCloseTimeout=function(){var t=this;clearTimeout(t.closeDropdownTimeout)},globalNavPopup.prototype.togglePopup=function(){var t=this.root.classList.contains(this.activeClass);this.closeAllPopups(!0),t||(this.root.classList.add(this.activeClass),this.isOpening=!0)},globalNavPopup.prototype.closeAllPopups=function(){for(var t=document.getElementsByClassName(this.activeClass),n=0;n<t.length;n++)t[n].querySelector(".popup").style.transform=null,t[n].classList.remove(this.activeClass)},Strut.supports.pointerEvents||Strut.load.css("v3/shared/navigation_ie10.css"),Strut.ready(function(){new globalNavDropdowns(".globalNav"),new globalNavPopup(".globalNav .navSection.mobile"),new globalNavPopup(".globalFooterNav .select.country"),new globalNavPopup(".globalFooterNav .select.language")}),function(){"use strict";function t(){var t=[].slice.call(arguments);o()&&console.log.apply(console,t)}function n(){var t={},n=document.getElementById("site-analytics-config");return n&&(t=JSON.parse(n.textContent)),t}function e(){return n().generalAnalyticsConfig||{}}function i(){return n().siteSpecificAnalyticsConfig||{}}function o(){return!!window[b]}function a(t,n){d("action",t,n)}function r(t,n){d("actionOnce",t,n)}function s(t,n){d("modal",t,n)}function c(t,n){d("viewed",t,n)}function d(t,n,e){window.Analytics?l(t,n,e):p(t,n,e)}function l(n,e,i){u();var o=f(i);window.Analytics[n](e,o),t("emit",n,e,o)}function u(){A||(window.Analytics.configure(e()),A=!0,t("Sent config data"))}function p(n,e,i){S.push([n,e,i]),g(),t("enqueue",n,e,i)}function w(){t("Flushing event queue"),u(),S.forEach(function(t){l.apply(this,t)})}function f(t){var n=e();return Object.keys(t||{}).forEach(function(e){n[e]=t[e]}),n}function g(){v||(v=setTimeout(m,L),L*=k)}function m(){v=null,window.Analytics?(w(),L=E):(g(),t("Ready timer waiting "+L+"ms"))}function y(t){window.ga&&window.ga.apply(this,t)}function h(){window.siteAnalyticsUtil.analyticsConfigData||(g(),window.siteAnalyticsUtil.debugActive=o,window.siteAnalyticsUtil.emitAction=a,window.siteAnalyticsUtil.emitActionOnce=r,window.siteAnalyticsUtil.emitModal=s,window.siteAnalyticsUtil.emitViewed=c,window.siteAnalyticsUtil.siteAnalyticsConfig=i,window.siteAnalyticsUtil.sendToGoogleAnalytics=y,window.siteAnalyticsUtil.generalAnalyticsConfig=e)}window.siteAnalytics=window.siteAnalytics||{},window.siteAnalyticsUtil=window.siteAnalyticsUtil||{};var v,A=!1,b="SITE_ANALYTICS_DEBUG",S=[],E=250,L=E,k=1.3;h()}(),function(){function t(t){var e=n(t),i={};return e.getAttribute(a)&&(i.action=e.getAttribute(a)),e.getAttribute(s)&&(i.modal=e.getAttribute(s)),e.getAttribute(r)&&(i.params={source:e.getAttribute(r)}),e.getAttribute(c)&&(i.googleAnalyticsParams=JSON.parse(e.getAttribute(c))),i}function n(t){return t.getAttribute(a)||t.getAttribute(s)?t:t.parentNode&&"BODY"!==t.tagName?n(t.parentNode):null}function e(t){return!!n(t)}function i(n){var e=t(n);e.modal&&window.siteAnalyticsUtil.emitModal(e.modal,e.params),e.action&&window.siteAnalyticsUtil.emitAction(e.action,e.params),e.googleAnalyticsParams&&window.siteAnalyticsUtil.sendToGoogleAnalytics(e.googleAnalyticsParams)}function o(){window.siteAnalytics.hasAnalyticsAttributes=e,window.siteAnalytics.trackByAttributes=i}var a="data-analytics-action",r="data-analytics-source",s="data-analytics-modal",c="data-analytics-ga";o()}(),function(){function t(){!function(t,n,e,i,o,a,r){t.fbq||(o=t.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},t._fbq||(t._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],a=n.createElement(e),a.async=!0,a.src=i,r=n.getElementsByTagName(e)[0],r.parentNode.insertBefore(a,r))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js")}function n(){window.fbq&&window.fbq("init",o)}function e(t){window.fbq&&t&&(window.fbq("track",t),window.siteAnalyticsUtil.debugActive()&&console.log("FB track",t))}function i(){t(),n(),window.siteAnalytics.trackFacebookEvent=e,e("PageView")}var o="742650679237989";i()}(),function(){function t(t){return t.matches("form *")}function n(n){t(n.target)&&window.siteAnalyticsUtil.emitAction(o,{name:n.target.getAttribute("name"),value:n.target.value})}function e(t){"FORM"===t.target.tagName&&window.siteAnalyticsUtil.emitAction(a)}function i(){document.addEventListener("change",n),document.addEventListener("submit",e)}var o="form_input",a="form_submit";i()}(),function(){function t(t){i[t]||(i[t]=!0,window.siteAnalyticsUtil.emitAction(e,{dropdown:t}))}function n(){window.siteAnalytics.trackGlobalNavDropdownOpen=t}var e="nav_dropdown_open",i={};n()}(),function(t,n,e,i,o){t[i]=t[i]||[],t[i].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var a=n.getElementsByTagName(e)[0],r=n.createElement(e),s="dataLayer"!=i?"&l="+i:"";r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id="+o+s,a.parentNode.insertBefore(r,a)}(window,document,"script","dataLayer","GTM-K8JKCBR"),function(){function t(){window.siteAnalyticsUtil.emitActionOnce(c)}function n(){window.siteAnalyticsUtil.emitActionOnce(d)}function e(t){var n=t.innerText.trim().toLowerCase();f[n]||(f[n]=!0,window.siteAnalyticsUtil.emitAction(l,{text:n}))}function i(t){var n=t.innerText.trim().toLowerCase();g[n]||(f[n]=!0,window.siteAnalyticsUtil.emitAction(u,{text:n}))}function o(t){window.siteAnalyticsUtil.emitAction(p,{category:t})}function a(t){window.siteAnalyticsUtil.emitAction(p,{query:t})}function r(){window.siteAnalyticsUtil.emitActionOnce(w)}function s(){window.siteAnalytics.trackConnectRoutingDiagram=i,window.siteAnalytics.trackHomePageNotebook=e,window.siteAnalytics.trackRadarIcosahedron=t,window.siteAnalytics.trackRadarFraudChart=n,window.siteAnalytics.trackSigmaQueryCategory=o,window.siteAnalytics.trackSigmaQueryExample=a,window.siteAnalytics.trackSigmaPricingSlider=r}var c="radar_icosahedron",d="radar_fraud_chart",l="home_page_notebook",u="connect_routing_diagram",p="query_category",w="pricing_slider",f={},g={};s()}(),function(){function t(t){return!!t.getAttribute("href")}function n(t){return t.trim().replace(/\s+/g," ")}function e(t){var n=t.className.toLowerCase(),e=t.getAttribute("href");return/\.pdf$|\.pdf#|\.pdf\?/i.test(t.href)?d:-1!==n.indexOf("button")||"#"===e?c:s}function i(t){var i=e(t),o={text:n(t.innerText)};window.siteAnalyticsUtil.emitAction(i,o)}function o(t){return"A"===t.tagName?t:t.parentNode?o(t.parentNode):null}function a(n){if(window.siteAnalytics.hasAnalyticsAttributes(n.target))return void window.siteAnalytics.trackByAttributes(n.target);var e=o(n.target);e&&t(e)&&i(e)}function r(){document.addEventListener("click",a)}var s="inline_link",c="button",d="pdf_link";r()}(),function(){function t(){if(n()){var t=window.siteAnalyticsUtil.generalAnalyticsConfig(),e=document.documentElement.id;window.siteAnalyticsUtil.emitViewed(e,t)}}function n(){return!!document.documentElement.id&&!!window.siteAnalyticsUtil.siteAnalyticsConfig().trackPageViewed}function e(){window.siteAnalytics.pageLoadTracking||(window.siteAnalytics.pageLoadTracking={trackPageView:t},window.addEventListener("load",t))}e()}(),function(){function t(t){return i(d,t)}function n(t){return i(u,t)}function e(t){return i(l,t)}function i(t,n){var e=n;"string"!=typeof n&&(e=a(n)),window.siteAnalyticsUtil.emitAction(t,{video:e})}function o(t){return t.currentSrc||t.getAttribute("src")||t.querySelector("source").getAttribute("src")}function a(t){var n=o(t),e=n.slice(n.lastIndexOf("/")+1);return e.slice(0,e.lastIndexOf("."))}function r(t){"VIDEO"===t.target.tagName&&n(t.target)}function s(t){"VIDEO"===t.target.tagName&&e(t.target)}function c(){document.addEventListener("play",r,!0),document.addEventListener("ended",s,!0),window.siteAnalytics.trackVideoExpand=t,window.siteAnalytics.trackVideoPlay=n,window.siteAnalytics.trackVideoEnd=e}var d="video_expand",l="video_end",u="video_play";c()}();