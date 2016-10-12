import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';


class HorizontalCard extends React.Component {
  constructor() {
    super();
  }

  render(){
    const cardTitle = this.props.title;
    const cardSubtitle = this.props.subtitle;
    const cardText = this.props.text;
    const cardRadius = '4px';

    const styleCard = {
        background: 'url(avatar.jpg) center no-repeat',
        backgroundSize: 'auto 100%',
        backgroundPosition: '-10% 0',
        marginBottom: '2px',
        borderRadius: cardRadius
    }

    const styleCardContent = {
      width: '70%',
      display: 'inline-block',
      background: '#fff',
      marginLeft: '30%',
      borderRadius: `0 ${cardRadius} ${cardRadius} 0`
    }

    return (
      <MuiThemeProvider>
        <Card style={styleCard}>
          <div style={styleCardContent}>
            <CardTitle title={cardTitle} subtitle={cardSubtitle}/>
            <CardText >
              {cardText}
            </CardText>
          </div>
        </Card>
      </MuiThemeProvider>
    )
  }
}

export default HorizontalCard;
