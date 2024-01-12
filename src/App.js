import React from "react";
import Preloader from "./components/Preloader/Preloader";
import TreeContainer from "./components/Tree/TreeContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import AssessmentContainer from "./components/Assessment/AssessmentContainer";

class App extends React.Component {

  componentDidMount() {
    const searchParams = new URLSearchParams(document.location.search)
    const appr_id = searchParams.get('assessment_appraise_id');
    this.props.initializeApp(appr_id);
  }

  render() {
    console.log('app');
    console.log(this.props);
      if(!this.props.initialized) {
          console.log('preload');
          return <Preloader/>
      }
      return (
          <div className='app-wrapper'>
              {this.props.current_pa === 'tree' && <TreeContainer/>}
              {this.props.current_pa !== null && this.props.current_pa !== 'tree' && <AssessmentContainer/>}
          </div>
      )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  current_pa: state.app.current_pa
})

export default connect(mapStateToProps, {initializeApp})(App);
