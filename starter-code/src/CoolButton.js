import React from "react";

class CoolButton extends React.Component {
  render() {
    const classes = {
      isActive: "is-active",
      isBlack: "is-black",
      isCentered: "is-centered",
      isDanger: "is-danger",
      isDark: "is-dark",
      isFocused: "is-focused",
      isGrouped: "is-grouped",
      isHovered: "is-hovered",
      isInfo: "is-info",
      isInverted: "is-inverted",
      isLarge: "is-large",
      isLight: "is-light",
      isLink: "is-link",
      isLoading: "is-loading",
      isMedium: "is-medium",
      isOutlined: "is-outlined",
      isPrimary: "is-primary",
      isRight: "is-right",
      isRounded: "is-rounded",
      isSelected: "is-selected",
      isSmall: "is-small",
      isStatic: "is-static",
      isSuccess: "is-success",
      isText: "is-text",
      isWarning: "is-warning",
      isWhite: "is-white"
    };
    let buttonClasses = "button";
    Object.keys(this.props).forEach(prop => {
      if (prop in classes) {
        buttonClasses += " " + classes[prop];
      }
    });
    console.log(buttonClasses);
    return (
      <button className={buttonClasses + " " + this.props.className}>
        {this.props.children}
      </button>
    );
  }
}

export default CoolButton;
