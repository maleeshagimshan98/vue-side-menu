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
     * @returns {sideMenuItem} 
     */
    constructor (key,name)
    {
        this.key = key;
        this.name = name;        
        this.children = null;        
        this.styles = this.getDefaultStyle();        
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
     * get default stylings for the custom input
     * 
     * @returns {object}
     */
    getDefaultStyle ()
    {
       return {
            bgActive : "bg-dark",
            bgInactive : "bg-white",
            active : 'text-white',
            inactive : 'text-secondary',
            color : 'black',
            font : '',
          };
    }

    /**
     * set styles,
     * if any of property is not set, set it to default
     * 
     *  @param {string} bgActive active state's backgound color - class name
     *  @param {string} bgInactive inactive state's backgound color - class name
     * @param {string} active  active state's text color - class name
     * @param {string} inactive active state's text color - class name
     * @param {string} font  font name
     * @returns 
     */
    setStyles (bgActive=null,bgInactive=null,active=null,inactive=null,font=null)
    {
        if (!bgActive && !bgInactive&& !active && !inactive && !color && !font) {
            this.styles = this.getDefaultStyle();
        }
        else {
            this.styles = {
                bgActive : bgActive??'bg-dark',
                bgInactive : bgInactive??'bg-white',
                active : active??'text-white',
                inactive : inactive??'text-secondary',
                color : color??'black',
                font : font??'',
              };
        }
        return this;
    }
}

module.exports = sideMenuItem;