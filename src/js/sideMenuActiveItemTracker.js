/**
 * © Maleesha Gimshan - 2021 - github.com/maleeshagimshan98
 * Side menu active item tracker
 */

class sideMenuActiveItemTracker {

    /**
     * constructor
     * 
     * @param {array} items 
     * @returns self
     */
    constructor(items) {
        this.items = {};
        this.initItems(items);
    }

    /**
     * get a items value
     * 
     * @param {string} name item name
     * @returns {boolean} boolean value of the item
     */
    get (name)
    {
        return this.items[name] ?? null;
    }

    /**
     * initialise side menu items
     * 
     * @param {array} items
     * @returns {void} void
     */
    initItems (items)
    {
        items.forEach(el => {
            this.items[el] = false;
        });
    }

    /**
     * sets the active item
     * 
     * @param {string} itemName
     * @returns {void} void
     */
    setActiveItem (itemName)
    {
        if (itemName == '' || itemName == null) {
            return;
        }
        for(let item in this.items) {
            if (item !== itemName) {
                this.items[item] = false;
            }
            else {
                this.items[item] = true;
            }
        }
    }
}

module.exports = sideMenuActiveItemTracker;
