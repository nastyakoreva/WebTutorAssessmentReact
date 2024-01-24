import React from "react";
import Preloader from "./components/Preloader/Preloader";
import TreeContainer from "./components/Tree/TreeContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import AssessmentContainer from "./components/Assessment/AssessmentContainer";
import Header from "./components/Header/Header";
import PreviewContainer from "./components/Preview/PreviewContainer";
//import './common/styles/index.module.css'

class App extends React.Component {

  componentDidMount() {
    const searchParams = new URLSearchParams(document.location.search)
    const appr_id = searchParams.get('assessment_appraise_id');
    this.props.initializeApp(appr_id);
  }

  render() {

      if(!this.props.initialized) {
          console.log('preload');
          return <Preloader/>
      }
      return (
          <div className='app-wrapper'>
              <Header assessment_name={this.props.assessment_name}
                      assessment_date_start={this.props.assessment_date_start}
                      assessment_date_end={this.props.assessment_date_end}
                      assessment_user={this.props.assessment_user}/>
              {this.props.current_pa === 'tree' && <TreeContainer/>}
              {this.props.current_pa !== null && this.props.current_pa !== 'tree' && this.props.current_pa !== 'preview' && <AssessmentContainer {...this.props}/>}
              {this.props.current_pa === 'preview' && <PreviewContainer {...this.props}/>}
          </div>
      )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  current_pa: state.app.current_pa,
  prew_pa:state.app.prew_pa,
  assessment_name: state.tree.assessment_name,
  assessment_date_start: state.tree.assessment_date_start,
  assessment_date_end: state.tree.assessment_date_end,
  assessment_user: state.tree.assessment_user
})

export default connect(mapStateToProps, {initializeApp})(App);
