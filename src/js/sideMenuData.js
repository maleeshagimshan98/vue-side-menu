/**
 * © Maleesha Gimshan - 2021 - github.com/maleeshagimshan98
 * Side menu data
 */

const sideMenuStyles = require("./sideMenuStyles.js");
const sideMenuItem = require("./sideMenuItem.js");

/**
 * manages the all side menu item's data, children, styles
 */
class sideMenuData {
    
    /**
     * constructor
     * 
     * @param {Array} items - items (side bar menu item names),
     * @param {sideMenuStyles} styles (global styling data) 
     */
    constructor(items,styles = null)
    {
        this.style = !styles ? new sideMenuStyles() : styles;
        this.items = this.initialize(items);
    }

    /**
     * initialize side menu items
     * 
     * @param {Array} items
     * @returns {Array} 
     */
    initialize(items)
    {
        let menuItems = [];
        items.forEach((item) => { 
            let menuItem = this._createMenuItem(item);
            if(item.children) {
                menuItem.setChildren(this.initialize(item.children));
            }
            menuItems.push(menuItem);
              
        });
        return menuItems;
    }

    /**
     * create a sideMenuItem object with provided parameters
     * 
     * @param {object} item 
     * @returns {sideMenuItem}
     */
    _createMenuItem (item)
    {
        let key = item.name.toLowerCase();
        //... if style is not specified for a single element,use global style
        //... else ,use provided style
        return !item.style ? new sideMenuItem(key, item.name, this.style) : new sideMenuItem(key, item.name, item.style); 
    }

    /**
     * get created sideMenuItem objects
     * 
     * @returns Array
     */
    getItems()
    {
        return this.items;
    }
  
}

module.exports = sideMenuData;
