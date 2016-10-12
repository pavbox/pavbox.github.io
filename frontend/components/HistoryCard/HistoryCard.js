import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import HistoryCardItem from './HistoryCardItem';
import HorizontalCard from '../HorizontalCard';

class HistoryCard extends React.Component {
  constructor() {
    super();
  }

  render(){
    const title = this.props.title;
    const subtitle = this.props.subtitle;
    const text = this.props.text;

    const styleHistoryCard = {
      width: '600px',
      margin: '0 auto',
    }

    return (
      <div style={styleHistoryCard}>
        <HorizontalCard
          title={title}
          subtitle={subtitle}
          text={text} />
          <div className='check'>
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default HistoryCard;
