import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HorizontalCard from '../../components/HorizontalCard';
import HistoryCard from '../../components/HistoryCard';
//import HistoryCardItem from '../../components/HistoryCard/HistoryCardItem';
//import HistoryCardLine from '../../components/HistoryCard/HistoryCardLine';

import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


class Mainpage extends React.Component {
  constructor() {
    super();
    //this.setHistoryItem = this.setHistoryItem.bind(this);
    //this.setHundle = this.setHundle.bind(this);
  }

  state = {
    stepIndex: 0,
  };

  /*
  setHistoryItem(title, desctiption) {
    const {stepIndex} = this.state;
    this.setState({stepIndex: stepIndex+1});
    return (
      <HistoryCardLine stepIndex={stepIndex} title={title} desctiption={desctiption} />
    )
  }

  setHundle = (param) => this.setState({stepIndex: param});

// TODO: Need create good architecture for HorizontalCard History
  {array.map((array) => (
    <HistoryCardLine
      key={array.stepIndex}
      stepIndex={array.stepIndex}
      title={array.title}
      desctiption={array.desctiption}
      hundle={this.setHundle} />
  ))}
  */

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label="Вперед"
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}} />
        {step > 0 && (
          <FlatButton
            label="Назад"
            onTouchTap={this.handlePrev} />
        )}
      </div>
    );
  }

  render(){
    const title='Pavel Marinchenko'
    const subtitle='Front-end Developer'
    const text = `Живу в Воронеже. Люблю печеньки и бигмаки. И еще пиццу... Ну и конфеты.
                  Привет.`;

    const {stepIndex} = this.state;
    const historyData = [
      {
        stepIndex: 0,
        title: 'start it',
        desctiption: '2011 Start Learn IT Sphere'
      },
      {
        stepIndex: 1,
        title: 'First Serious Project',
        desctiption: '2013 Android Web Application. QuestRoom Finder'
      }
    ]

    return (
      <div className='mainpage'>
      <section className='AboutMe'>
        <HistoryCard
          title={title}
          subtitle={subtitle}
          text={text}>
          <MuiThemeProvider>
            <Stepper
              activeStep={stepIndex}
              linear={false}
              orientation="vertical">

              {historyData.map((historyData) => (
                <Step key={historyData.stepIndex}>
                  <StepButton onTouchTap={() => this.setState({stepIndex: historyData.stepIndex})}>
                    {historyData.title}
                  </StepButton>
                  <StepContent>
                    <p>{historyData.desctiption}</p>
                    {this.renderStepActions(historyData.stepIndex)}
                  </StepContent>
                </Step>
              ))}

            </Stepper>
          </MuiThemeProvider>
        </HistoryCard>
      </section>
      <section className='TodaySkills'></section>
      <section className='FutureSkills'></section>
      </div>
    );
  }
}

export default Mainpage;
