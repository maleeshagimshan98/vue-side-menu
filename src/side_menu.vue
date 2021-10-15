/**
 * © Maleesha Gimshan - 2021 - github.com/maleeshagimshan98
 * Side menu component
 */

<template>
  <div
    class="container-fluid d-flex flex-column justify-content-between p-0"
  >
    <side-menu-header
    class="my-3"
      :name="name"
      v-on:side_menu_header:close="$emit('sidemenu:close')"
    ></side-menu-header>
    
    <!-- header content -->
    <slot v-if="!items" :name="'header'"/>

    <div class="d-flex flex-column my-3 p-0">
      <!-- main content -->
      <side-menu-item-expandable class="my-2"
      v-for="(item,name,index) in items"
      :key="index"
      :name="item.name"
      :keyName="item.key"
      :children="item.children"
      :styles="item.styles"
      :isActive="activeItem.items[item.key]"
      v-on:sideMenuExpandable:click="val => itemClicked(val)"/>
      <slot v-if="!items" :name="'content'"/>
    </div>

    <div class="my-3 p-0">
      <!-- footer content -->
      <slot :name="'footer'"/>
    </div>    
  </div>
</template>

<script>
const sideMenuHeader = require("./side_menu_header.vue").default;
const sideMenuItem = require("./side_menu_item.vue").default;
const sideMenuItemExpandable = require("./side_menu_item_expandable.vue").default;
const sideMenuActiveItemTracker = require("./js/sideMenuActiveItemTracker.js");

module.exports = {
  data: function() {
    names = [];
    this.items.forEach(item => {
        names.push(item.key);
    });
    return {
      left: "-100%",
      logo: "",
      activeItem: new sideMenuActiveItemTracker(names),
    };
  },
  props: {
    bg : {
      type :String,
      default : "bg-white"
    },
    items : {
      type : Array
    },
    logos: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },    
  },
  methods: {
    itemClicked (activeItem) {
      this.activeItem.setActiveItem(activeItem);      
    },
    view: function(path, activeItem = null, params) {
      this.activeItem.setActiveItem(activeItem);
      this.$emit("sidemenu:close");
      params = params || {};
      this.$router.push({ name: path, params: params });
    },
    facebook: function() {
      //... this.contact.facebook
      //... open facebook link
    },
    mail: function() {
      //... this.contact.email
      //... open mail link
    },
    logOut: function() {
      //... logout function
    },
  },
  computed: {
    sideMenuItemNames () {
      names = [];
      this.items.forEach(item => {
        names.push(item.key);
      });
      return names;
    },    
  },
  components: {
    sideMenuHeader: sideMenuHeader,
    sideMenuItemExpandable: sideMenuItemExpandable,
  },
};
</script>
