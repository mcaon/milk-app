import { format } from 'date-fns'
import {Icon} from 'react-native-elements';
import React from 'react';

const getIconByCondition = (condition: string) => {
  switch (condition) {
    case 'cloud':
      return <Icon solid type={'font-awesome-5'} name='cloud' size={60} color={'black'}/>;
    case 'storm':
      return <Icon solid type={'font-awesome-5'} name='bolt' size={60} color={'black'}/>;
    case 'clear_day':
      return <Icon solid type={'font-awesome-5'} name='sun' size={60} color={'black'}/>;
    case 'cloudly_day':
      return <Icon solid type={'font-awesome-5'} name='cloud-sun' size={60} color={'black'}/>;
    case 'cloudly_night':
      return <Icon solid type={'font-awesome-5'} name='cloud-moon' size={60} color={'black'}/>;
    case 'rain':
      return <Icon solid type={'font-awesome-5'} name='cloud-showers-heavy' size={60} color={'black'}/>;
    default:
      return <Icon solid type={'font-awesome-5'} name='sun' size={60} color={'black'}/>;
  }
}

export default {
  getIconByCondition,
};
