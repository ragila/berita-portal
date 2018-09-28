import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div style={styles.Cardstyle}>
        <Menu secondary>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/SubBerita"
            name="Startup"
            active={activeItem === "subberita"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/teknologi"
            name="teknologi"
            active={activeItem === "teknologi"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search" />
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const styles = {
  Cardstyle: {
    marginTop: "4px",
    marginRight: "0%",
    marginLeft: "30%"
  }
};
