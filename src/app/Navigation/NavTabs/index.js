import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { goBack, navigateTo } from "../../Redux/actions";
import { bgHeader } from "../../global.styles";

import Tabs from 'react-native-tabs';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

class NavTabs extends React.Component {
  static propTypes = {
    activeRoute: PropTypes.shape({
      name: PropTypes.string.isRequired,
      screen: PropTypes.any.isRequired,
      icon: PropTypes.string.isRequired
    }).isRequired,
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    //showMenu: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    navigateTo: PropTypes.func.isRequired,
  };

  onActionSelected = position => {
    const { navigateTo } = this.props;
    navigateTo(position);
  };

  render() {
    const { goBack, activeRoute, routes } = this.props;

    return (
      <Tabs
        selected={activeRoute.name}
        style={styles.tabbar}
        selectedStyle={{color:'gray'}} 
        onSelect={el => this.onActionSelected(el.props.name)}
      >
          <FontAwesomeIcon name="Travel" icon={['fas', 'home']} />
          <FontAwesomeIcon name="About" icon={['fas', 'route']} />
          <FontAwesomeIcon name="Credits" icon={['fas', 'user']} />
          <FontAwesomeIcon name="Booking" icon={['fas', 'plane']} />
          <FontAwesomeIcon name="NativeTiles" icon={['fas', 'plane']} />
      </Tabs>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: bgHeader,
    height: 80, // 56dp AppBar height plus 24dp correction for the StatusBar translucent
    paddingTop: 24 // StatusBar's height
  },
  tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'beige',
    borderTopWidth: 2,
    zIndex: 2
  },
});

const mapStateToProps = (state, ownProps) => ({
  activeRoute: state.routes.activeRoute,
  routes: state.routes.routes,
  showMenu: ownProps.showMenu,
  goBack: ownProps.goBack
});

const mapDispatchToProps = dispatch => ({
  goBack: () => {
    dispatch(goBack());
  },
  navigateTo: routeName => {
    dispatch(navigateTo(routeName));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavTabs);
