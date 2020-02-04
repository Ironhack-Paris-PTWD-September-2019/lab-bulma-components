import React from 'react'

const mappingTable = {
  isActive: 'is-active',
  isBlack: 'is-black',
  isCentered: 'is-centered',
  isDanger: 'is-danger',
  isDark: 'is-dark',
  isFocused: 'is-focused',
  isGrouped: 'is-grouped',
  isHovered: 'is-hovered',
  isInfo: 'is-info',
  isInverted: 'is-inverted',
  isLarge: 'is-large',
  isLight: 'is-light',
  isLink: 'is-link',
  isLoading: 'is-loading',
  isMedium: 'is-medium',
  isOutlined: 'is-outlined',
  isPrimary: 'is-primary',
  isRight: 'is-right',
  isRounded: 'is-rounded',
  isSelected: 'is-selected',
  isSmall: 'is-small',
  isStatic: 'is-static',
  isSuccess: 'is-success',
  isText: 'is-text',
  isWarning: 'is-warning',
  isWhite: 'is-white',
};

class CoolButton extends React.Component {
  render() {
    let classes = "button";
    classes += " "+this.props.className;

    //
    // 1. For each propname (key) in mappingTable:
    //   -> 2. check a such propname was passed into props
    //      -> 3. If yes, add the corresponding mappingTable value to `classes`
    //
    
    // 1.
    Object.keys(mappingTable).forEach(propname => {
      const classname = mappingTable[propname];

      // 2.
      if (propname in this.props) {
        classes += " "+classname; // 3.
      }
    })

    return <button class={classes}>{this.props.children}</button>;
  }
}

export default CoolButton