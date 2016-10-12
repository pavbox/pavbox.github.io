import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class HistoryCardLine extends React.Component {
  constructor() {
    super();
  }

  state = {
    stepIndex: 0
  };
/*
  handleNext = () => {
    const stepIndex = this.props.stepIndex;
    if (stepIndex < 2) {
      //this.setState({stepIndex: stepIndex + 1});
      stepIndex++;
    }
  };

  handlePrev = () => {
    const stepIndex = this.props.stepIndex;
    if (stepIndex > 0) {
      //this.setState({stepIndex: stepIndex - 1});
      stepIndex++;
    }
  };
!!!
  renderStepActions(step) {
    this.setState({stepIndex: step + 1});
    return (
      <div style={{margin: '12px 0'}}>
          <RaisedButton
            label="Вперед"
            primary={true}
            onTouchTap={this.handleNext}
            style={{marginRight: 12}}/>
          {step > 0 && (
            <FlatButton
              label="Назад"
              onTouchTap={this.handlePrev}/>
          )}
      </div>
    );
  }

/*
  generateSteps(){
    let indexCouter = 0;
    return (
      <Step>
        <StepButton onTouchTap={() => this.setState({stepIndex: 0})}>
          {title}
        </StepButton>
        <StepContent>
          <p>{desctiption}</p>
          {this.renderStepActions(0)}
        </StepContent>
      </Step>
    )
  }
*/

  render() {
    //const {stepIndex} = this.state;
    //const steps = this.props.steps.map(this.generateSteps);
    const stepIndex = this.props.stepIndex;
    const title = this.props.title;
    const desctiption = this.props.desctiption;
    const hundle = this.props.setHundle;

    return (
      <MuiThemeProvider>
        <Stepper
         activeStep={stepIndex}
         linear={false}
         orientation="vertical">
           <Step>
             <StepButton onTouchTap={this.props.setHundle(0)}>
               {title}
             </StepButton>
             <StepContent>
               <p>{desctiption}</p>
               {/*this.renderStepActions(stepIndex)*/}
             </StepContent>
           </Step>
       </Stepper>
     </MuiThemeProvider>
    );
  }
}

export default HistoryCardLine;
