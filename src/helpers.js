/**
 * Utils/Helpers
 */

const dateConvert = date => {
  // date = new Date(date)
  date = new Date(date);
  return date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

const timeConvert = time => {
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [ time ];
    if( time.length > 1 ) {
      time = time.slice (1);
      time[ 5 ] = +time[ 0 ] < 12 ? '' : '';
      time[ 0 ] = +time[ 0 ] % 12 || 12;
    }
    return time.join('');
} 

export { dateConvert, timeConvert };
