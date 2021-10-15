/**
 * © Maleesha Gimshan - 2021 - github.com/maleeshagimshan98
 * Side menu item
 */

<template>
  <div class="d-flex justify-content-start text-center px-2" v-bind:class="[isActive ? [bgActive, active] : [bgInactive, inactive]]" v-on:click="clicked()">    
      <h4 class="my-2" v-bind:style="{'font-family' : font}">{{ itemName }}</h4>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {};
  },
  props: {
    link : {
      type : String
    },
    bgActive : {
      type : String,
      default : "bg-dark"
    },
    bgInactive : {
      type :String,
      default : "bg-white"
    },
    active : {
      type : String,
      default : "text-white"
    },
    inactive : {
      type : String,
      default : "text-dark"
    },
    font : {
      type : String,
      default : ""
    },    
    itemName: {
      type: String,
      default: "",
    },
    keyName : {
      type : String
    },    
    isActive :{
      type :Boolean,
      default : false
    }
  },
  methods: {
    clicked () {
      this.$emit('sideMenuItem:click',this.keyName);
      if (this.link) {
        this.$router.push();
      }
    },
  },  
};
</script>