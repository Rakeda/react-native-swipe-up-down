import React, { Component } from 'react';
import { Image, View, Animated } from 'react-native';
import images from '../../assets/images';

export default class SwipeIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: images.minus,
      showIcon: true
    };
  }
  componentDidMount() {
    this.props.hasRef && this.props.hasRef(this);
  }

  toggleShowHide(val) {
    this.setState({ showIcon: val });
  }

  render() {
    const { icon, showIcon } = this.state;
    return (
      <View style={{ alignItems: 'center', height: 10, marginBottom: 5 }}>
        {showIcon && (
          <Image
            source={icon}
            style={{ width: 35, height: icon === images.minus ? 5 : 10, tintColor: '#56a5ff' }}
          />
        )}
      </View>
    );
  }
}
