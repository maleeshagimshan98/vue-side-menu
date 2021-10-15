/**
 * © Maleesha Gimshan - 2021 - github.com/maleeshagimshan98
 * Side menu item data
 */

class sideMenuItem {

    /**
     * constructor
     * 
     * @param {string} key
     * @param {string} name
     * @param {object} styles
     * @returns {self} 
     */
    constructor (key,name,styles)
    {
        this.key = key;
        this.name = name;        
        this.children = null;        
        this.styles = styles;        
    }

    /**
     * get the children of this item
     * 
     * @returns {array|boolean} children
     */
    getChildren ()
    {
        return this.children;
    }

    /**
     * set childrens of this item
     * 
     * @param {array} children 
     * @returns 
     */
    setChildren (children)
    {
        this.children = children;
        return this;
    }

    /**
     * get the style object
     * 
     * @returns {object} styles
     */
    getStyles ()
    {
        return this.styles;
    }    

    /**
     * set styles,
     * if any of property is not set, set it to default
     * 
     *  @param {object} styles - style object
     * @returns 
     */
    setStyles (styles)
    {
        this.styles = styles;
        return this;
    }
}

module.exports = sideMenuItem;