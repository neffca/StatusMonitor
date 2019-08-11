import React from 'react';
import { Link } from 'react-router-dom'
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';
import Page from '../../common/Page';

import {style, classes} from './StatusGraphPage.st.css';

class StatusGraphPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Page className={style(classes.root,{})}>
        <div
          className={classes.chart}
          >
          <VictoryChart
            height={200}
            >
            <VictoryAxis dependentAxis
              style={{
                axis: {stroke: "#756f6a"},
                ticks: {stroke: "grey", size: 5},
                tickLabels: {fontSize: 5, padding: 5}
              }}
              />
              <VictoryAxis
                style={{
                  axis: {stroke: "#756f6a"},
                  ticks: {stroke: "grey", size: 5},
                  tickLabels: {fontSize: 5, padding: 5}
                }}
                />
            <VictoryLine
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
              categories={{ y: ["aweful", "bad", "good", "great"] }}
              data={[
                {x: '1-01', y:"good"},
                {x: '1-02', y:"bad"},
                {x: '1-03', y:"great"},
                {x: '1-04', y:"good"},
                {x: '1-05', y:"bad"},
                {x: '1-06', y:"good"}
              ]}
              style={{
                data: {
                  stroke: "teal", strokeWidth: 1
                },
                categories: {
                  fontSize: 12
                }
              }}
              >
            </ VictoryLine>
          </ VictoryChart>
        </div>
        <div
          className={classes.survey}
          >
          <Link to="/survey" >
            Take the survey
          </Link>
        </div>
      </Page>
    );
  }
}

export default StatusGraphPage;
