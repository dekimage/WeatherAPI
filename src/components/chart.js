//If you find yourself copying markup with paste it is a sign that your
//need to create NEW function compoonent(depending on if it needs to talk to state)
//in this situation is functional small component that doesnt talk to state
//just imports some consts and we call it there
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function avarage(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div> {avarage(props.data)} {props.units}</div>
    </div>
  );
};
