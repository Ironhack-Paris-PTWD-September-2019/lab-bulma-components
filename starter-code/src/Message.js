import React from "react";
import Container from "./Container.js";

class Message extends React.Component {
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

    let messageClasses = "message";
    Object.keys(this.props).forEach(prop => {
      if (prop in classes) {
        messageClasses += " " + classes[prop];
      }
    });

    return (
      <Container>
        <article className={messageClasses + " " + this.props.className}>
          <div className="message-header">
            <p>{this.props.title}</p>
            <button className="delete" aria-label="delete"></button>
          </div>
          <div className="message-body">{this.props.children}</div>
        </article>
      </Container>
    );
  }
}

export default Message;
