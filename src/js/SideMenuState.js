/**
 * © Maleesha Gimshan - 2023 - github.com/maleeshagimshan98
 * Side menu data
 */

import SideMenuItem from "./SideMenuItem.js"

/**
 * manages the all side menu item's data, children, styles
 */
class SideMenuState {
  /**
   * constructor
   *
   * @param {Object} items - items (side menu item names),
   * @param {SideMenuStyles} styles (global styling data)
   */
  constructor(items, styles = null) {
    this.items = {}
    this._initialize(this.items, items)
    this.activeItem
  }

  /**
   * initialize side menu items
   *
   * @param {Object} items
   * @returns {Array}
   */
  _initialize(ctx, items) {
    for (let item in items) {
      let menuItem = new SideMenuItem({
        key: items[item].key,
        title: items[item].title ?? item,
        path: items[item].path,
        routeName: items[item].routeName,
        params: items[item].params,
        isActive: items[item].isActive,
        children: items[item].children,
        styles: items[item].styles,
      })
      if (items[item].children) {
        menuItem.setChildren(
          this._initialize(menuItem.getChildren(), items[item].children)
        )
      }
      ctx[items[item].key ?? item] = menuItem
    }
    return ctx
  }

  /**
   * get created sideMenuItem objects
   *
   * @returns Array
   */
  getMenuItems() {
    return this.items
  }

  /**
   * set active menu item
   *
   * @param {SideMenuItem} item
   * @returns {void}
   */
  setActiveItem(item) {
    this.activeItem = item
  }
}

export default SideMenuState
