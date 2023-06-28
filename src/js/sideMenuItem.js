/**
 * © Maleesha Gimshan - 2023 - github.com/maleeshagimshan98
 * Side menu item
 */

import SideMenuStyles from "./SideMenuStyles"

class SideMenuItem {
  /**
   * constructor
   *
   * @param {Object}
   */
  constructor({
    key,
    title,
    path,
    routeName,
    params,
    isActive,
    children,
    styles,
  }) {
    if (!path && !routeName) {
      console.error(`path or routeName is required. At ${title} || ${key}`)
      throw new Error(`path or routeName is required.`)
    }
    this.key = key
    this.title = title ?? ""
    this.path = path
    this.routeName = routeName
    this.params = params
    this.isActive = isActive ?? false
    this.children = children ?? {}
    this.styles = new SideMenuStyles(
      styles ??
        {
          //... pass default class names
        }
    )
  }

  /**
   * get the children of this item
   *
   * @returns {array|boolean} children
   */
  getChildren() {
    return this.children
  }

  /**
   * set childrens of this item
   *
   * @param {Object} children
   * @returns
   */
  setChildren(children) {
    this.children = children
    return this
  }

  /**
   * get the style object
   *
   * @returns {object} styles
   */
  getStyles() {
    return this.styles
  }

  /**
   * set styles,
   * if any of property is not set, set it to default
   *
   *  @param {object} styles - style object
   * @returns
   */
  setStyles(styles) {
    this.styles = styles
    return this
  }

  setActive(status) {
    this.isActive = status
  }
}

export default SideMenuItem
