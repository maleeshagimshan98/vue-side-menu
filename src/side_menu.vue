/** 
  * © Maleesha Gimshan - 2023 - github.com/maleeshagimshan98
  * Side menu component 
  */

<template>
  <div class="sidemenu" v-bind:class="[isOpen ? 'open' : 'closed-left']">
    <!-- header content -->
    <slot :name="'header'"> </slot>

    <!-- main content -->
    <slot name="content">
      <div class="content">
        <!-- make scrollable, hide scroll bar -->
        <SideMenuItem
          v-for="(item, name, index) in state.getMenuItems()"          
          :routeName="item.routeName"
          :path="item.path"
          :params="item.params"
          :title="item.title"
          :key="item.key"
          :isActive="item.isActive"
          :children="item.children"
          :bgActive="item.styles.bgActive"
          :bgHover="item.styles.bgHover"
          :bgInactive="item.styles.bgInactive"
          :textActive="item.styles.textActive"
          :textHover="item.styles.textHover"
          :textInactive="item.styles.textInactive"
          :font="item.styles.font"
          @sidemenu:navigate="close()"
          >
        </SideMenuItem>
      </div>
    </slot>

    <!-- footer content -->
    <slot :name="'footer'"> </slot>
  </div>
</template>

<script>
import SideMenuItem from "./side_menu_item.vue"
import SideMenuState from "./js/SideMenuState.js"

export default {
  data: function () {
    return {
      state: new SideMenuState(this.items),
    }
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    closeWhenNavigating : {
      type : Boolean,
      default : true
    },
    items: {
      type: Object,
    },
    styles: {
      type: Object,
    },
  },
  methods: {
    itemClicked(activeItem) {
      
    },
    close () {

    },
    view: function (path, activeItem = null, params) {      
      this.$emit("sidemenu:close")
      params = params || {}
      this.$router.push({ name: path, params: params })
    },
  },
  computed: {    
  },
  components: {
    SideMenuItem,
  },
}
</script>

<style>
.sidemenu {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 110;
  /** this side menu sits above the app bar */
}

.sidemenu.closed-left {
  left: -20vw;
}

.sidemenu.closed-right {
  right: -20vw;
}

.sidemenu.open {
  left: 20vw;
}

.sidemenu .content {
  overflow-y: scroll;
  overflow-x: scroll;
}
</style>
