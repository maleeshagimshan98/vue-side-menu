/**
 * © Maleesha Gimshan - 2021 - github.com/maleeshagimshan98
 * Side menu styles
 */

class sideMenuStyles {
    
    /**
     * constructor
     * 
     * @param {string} bgActive
     * @param {string} bgInactive
     * @param {string} active 
     * @param {string} inactive 
     * @param {string} font 
     * @returns {sideMenuStyles} 
     */
    constructor (bgActive=null, bgInactive=null,active=null ,inactive=null ,font=null)
    {
        
        if (!bgActive && !bgInactive&& !active && !inactive && !font) {
            this.setDefaultStyles();
        }
        else {
            this.setStyles(bgActive,bgInactive,active,inactive,font);
        }
    }

    /**
     * get the style object
     * 
     * @returns {object} styles
     */
    getStyles ()
    {
        return {
            bgActive : this.bgActive,
            bgInactive : this.bgInactive,
            active : this.active,
            inactive : this.inactive,
            font : this.font,
          }
    }

    /**
     * get default stylings for the custom input
     * 
     * @returns {object}
     */
    getDefaultStyle ()
    {
       return this.defaultStyles;
    }

    /**
     * set default styles
     * 
     * @returns void
     */
    setDefaultStyles ()
    {        
        this.bgActive = "bg-dark";
        this.bgInactive = "bg-white";
        this.active = 'text-white';
        this.inactive = 'text-secondary';
        this.font = '';        
    }

    /**
     * set styles,
     * if any of property is not set, set it to default
     * 
     * @param {string} bgActive
     * @param {string} bgInactive
     * @param {string} active 
     * @param {string} inactive 
     * @param {string} font 
     * @returns {object} 
     */
    setStyles (bgActive,bgInactive,active,inactive,font)
    {
        let previous = this.getStyles();        
        this.bgActive = bgActive??previous.bgActive;
        this.bgInactive = bgInactive??previousbgInactive;
        this.active = active??previous.active;
        this.inactive = inactive??previous.inactive;
        this.font = font??previous.font;
    }
}

module.exports = sideMenuStyles;