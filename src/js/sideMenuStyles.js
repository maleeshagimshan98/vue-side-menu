/**
 * © Maleesha Gimshan - 2021 - github.com/maleeshagimshan98
 * Side menu styles
 */

class sideMenuStyles {
    /**
     * constructor
     * 
     * @param {string} active 
     * @param {string} inactive 
     * @param {string} color 
     * @param {string} font 
     * @returns {sideMenuStyles} 
     */
    constructor (bgActive=null, bgInactive=null,active=null ,inactive=null ,color = null ,font= null)
    {
        this.styles = {};
        if (!bgActive && !bgInactive&& !active && !inactive && !color && !font) {
            this.styles = this.getDefaultStyle();
        }
        else {
            this.styles = this.setStyles(bgActive,bgInactive,active,inactive,color,font);
        }
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
     * @param {string} active 
     * @param {string} inactive 
     * @param {string} color 
     * @param {string} font 
     * @returns {object} 
     */
    setStyles (bgActive,bgInactive,active,inactive,color,font)
    {
        return {
            bgActive : bgActive??'bg-dark',
            bgInactive : bgInactive??'bg-white',
            active : active??'text-white',
            inactive : inactive??'text-secondary',
            color : color??'black',
            font : font??'',
          };
    }
}