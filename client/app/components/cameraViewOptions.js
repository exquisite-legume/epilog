
import React, {
  Component,
  StyleSheet,
  Text,
  Image, 
  View,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewControlActions from '../actions/viewControlActions';

class CameraViewOptions extends Component {
  render() {
    const { currentView, viewActions } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.test} onPress={()=> {viewActions.setView("CAPTURE")}} underlayStyle ={{backgroundColor: 'orange'}}>
          <Text style={styles.navOption}>
          Gallery
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.test} onPress={()=> viewActions.setView("LIBRARY")} underlayStyle={{backgroundColor: 'orange'}}>
          <Text style={styles.navOption}>
          Photo
          </Text>
        </TouchableHighlight> 
        <TouchableHighlight style={styles.test} onPress={()=> viewActions.setView("HOME")} underlayStyle ={{backgroundColor: 'orange'}}>
          <Text style={styles.navOption}>
          Video
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  test: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  navOption: {
    textAlign: 'center',
    fontWeight:'bold',
    flex: 1,
    fontSize: 20,
    color: ' grey',
    width: 135,
  },
  icon: {
    width: 50,
    height: 50,
  }
});

export default connect(state => ({
  currentView: state.viewControl.currentView
}),
(dispatch) => ({
  viewActions: bindActionCreators(viewControlActions, dispatch )
}))(CameraViewOptions);