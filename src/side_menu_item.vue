/**
 * © Maleesha Gimshan - 2023 - github.com/maleeshagimshan98
 * Side menu item
 */

<template>
  <div class="" v-bind:class="[isActive ? [bgActive] : [bgInactive]]" :key="key" v-on:click="selected()">
    <h4 class="" v-bind:class="[isActive ? [textActive] : [textInactive]]" v-bind:style="{ 'font-family': font }">
      {{ title }}
    </h4>

    <!-- children -->
    <div v-if="isActive && children">
      <vue-side-menu v-for="(child, name, index) in children" :routeName="child.routeName" :path="child.path"
        :params="child.params" :title="child.title" :key="child.key" :isActive="child.isActive" :children="child.children"
        :bgActive="child.styles.bgActive" :bgHover="child.styles.bgHover" :bgInactive="child.styles.bgInactive"
        :textActive="child.styles.textActive" :textHover="child.styles.textHover" :textInactive="child.styles.textInactive"
        :font="child.styles.font">
      </vue-side-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-side-menu',
  data: function () {
    return {};
  },
  props: {
    routeName: {
      type: String
    },
    path: {
      type: [String, null],
      default: null
    },
    params: {
      type: [Object, null],
      default: null
    },
    title: {
      type: String,
      default: "",
    },
    key: {
      type: String
    },
    isActive: {
      type: Boolean,
      default: false
    },
    children: {
      type: Object
    },
    bgActive: {
      type: String,
      default: "bg-dark"
    },
    bgHover: {
      type: String,
      default: "bg-secondary"
    },
    bgInactive: {
      type: String,
      default: "bg-white"
    },
    textActive: {
      type: String,
      default: "text-white"
    },
    textHover: {
      type: String,
      default: "bg-dark"
    },
    textInactive: {
      type: String,
      default: "text-secondary"
    },
    font: {
      type: String,
      default: ""
    },
  },
  methods: {
    route({ path, routeName, params }) {
      if (!this.$router) {
        console.error(`Trying to navigate to ${this.link} but a router instance is not defined`)
        throw new Error(`Trying to navigate to ${this.link} but a router instance is not defined`)
      }
      if (path) {
        this.$router.push({
          path: path,
          params: params ?? null
        })
      }
      else if (routeName) {
        this.$router.push({
          name: routeName,
          params: params ?? null
        })
      }
    },
    selected(child) {
      // if (child) {
      //   //... set the child isActive state
      //   child.setActive(true)
      //   this.route({path : child.path, routeName : child.routeName, params : child.params})
      // }
      // else {
      //... set the active state
      this.$emit('isActive')
      this.route({ path: this.path, routeName: this.routeName, params: this.params })
      this.$emit('sidemenu:navigate')
      //}
    }
  },
};
</script>