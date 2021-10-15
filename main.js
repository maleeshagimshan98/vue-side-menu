import Vue from "vue/dist/vue.js";
import sideMenu from "./src/side_menu.vue";
import sideMenuData from "./src/js/sideMenuData.js";
import sideMenuStyles from "./src/js/sideMenuStyles.js";

let styles =  new sideMenuStyles();
//let testStyle = new sideMenuStyles("bg-primary","bg-warning");
let data = new sideMenuData(
    [
        {
            name :"Profile",
            //style : testStyle
        },
        {
            name : "Requests",
            children : [
                {
                    name : "Hire",
                    //style : testStyle
                },
                {
                    name : "Rental"
                }
            ]
        }
    ],
    styles
);

const test = new Vue({
    el : "#test",
    data : {
        items : data.getItems()
    },
    methods : {},
    components : {
        sideMenu : sideMenu
    },
    template : '<side-menu :items="items"></side-menu>',
});