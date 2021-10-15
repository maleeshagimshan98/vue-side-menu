<template>
  <div
  class="d-flex align-items-center justify-content-between"
  >    
    <a class="text-center" style="color: black" href v-if="name">{{ name }}</a>    
    <i class="material-icons mr-0" v-on:click="$emit('side_menu_header:close')"> close </i>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {};
  },
  props: {
    name : {
      type : [String,false],
      default : false,
    },
  },
  methods: {},
};
</script>