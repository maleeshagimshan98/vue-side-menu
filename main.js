import Vue from "vue/dist/vue.js";
import sideMenu from "./src/side_menu.vue";
import sideMenuItem from "./src/js/sideMenuItem.js";

let profile = new sideMenuItem("profile","Profile");
let requests = new sideMenuItem("request","Requests").setChildren([
    new sideMenuItem("hire","Hire"),
    new sideMenuItem("rent","Rent")
]);

const test = new Vue({
    el : "#test",
    data : {
        items : [
            profile, 
            requests,
        ]
    },
    methods : {},
    components : {
        sideMenu : sideMenu
    },
    template : '<side-menu :items="items"></side-menu>',
});