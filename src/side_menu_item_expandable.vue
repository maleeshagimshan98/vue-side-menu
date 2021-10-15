/**
 * © Maleesha Gimshan - 2021 - github.com/maleeshagimshan98
 * Side menu expandable component
 */

<template>
  <div class="" v-on:click="parentClicked()">    
    <side-menu-item
    :bgActive="styles.bgActive"
    :bgInactive="styles.bgInactive"
    :active="styles.active"
    :inactive="styles.inactive"
    :font="styles.font"
    :itemName="name"
    :keyName="keyName"
    :isActive="isActive" />
    
    <!-- child items -->
    <div v-if="!isCollapsed && children">
      <div class="py-2 pl-2" >
        <side-menu-item class="my-2" v-for="(child, name, index) in children" :key="index" 
        :bgActive="child.styles.bgActive"
        :bgInactive="child.styles.bgInactive"
        :active="child.styles.active"
        :inactive="child.styles.inactive"
        :font="child.styles.font"
        :itemName="child.name"
        :keyName="child.key"
        :isActive="sideMenuItems.items[child.key]"
        v-on:sideMenuItem:click="val => childClicked(val)"/>
      </div>
    </div>
  </div>
</template>

<script>
const sideMenuItem = require("./side_menu_item.vue").default;
const sideMenuActiveItemTracker = require("./js/sideMenuActiveItemTracker.js");
module.exports = {
  data: function () {
    let names = [];
    if (this.children) {
      this.children.forEach(child => {
      names.push(child.key);
    });
    }
    
    return {
      isCollapsed : false,
      sideMenuItems : this.children ? new sideMenuActiveItemTracker(names) : null,
    };
  },
  props: {    
    name: {
      type: String,
      default: "",
    },
    keyName : {
      type : String
    },
    children : {
      type : Array
    },
    styles : {
      type : Object
    },
    isActive: {
      type :Boolean,
      default : false,
    },
  },
  computed : {
    childrenNames () {
      let names = [];
      this.children.forEach(child => {
        names.push(child.item.key);
      });
      return names;
    },
  },
  methods: {
    parentClicked () {
      this.isCollapsed = !this.isCollapsed;
      this.$emit("sideMenuExpandable:click",this.keyName);
    },
    childClicked (activeChild) {
      this.sideMenuItems.setActiveItem(activeChild);
      this.$emit("sideMenuExpandable_child:click",activeChild);
    },
  },
  components: {
    sideMenuItem: sideMenuItem,
  },
};
</script>
