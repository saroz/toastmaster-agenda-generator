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



const trimHTML = value => {
    // Convert `&amp;` to `&`.
    value = value.replace(/&amp;/gi, '&');

    // Replace spaces.
    value = value.replace(/&nbsp;/gi, ' ');
    value = value.replace(/\s+/g, ' ');

    // Remove "<b>".
    value = value.replace(/<b>/gi, '');
    value = value.replace(/<\/b>/gi, '');

    // Remove "<strong>".
    value = value.replace(/<strong>/gi, '');
    value = value.replace(/<\/strong>/gi, '');

    // Remove "<i>".
    value = value.replace(/<i>/gi, '');
    value = value.replace(/<\/i>/gi, '');

    // Remove "<em>".
    value = value.replace(/<em>/gi, '');
    value = value.replace(/<\/em>/gi, '');

    // Remove "<u>".
    value = value.replace(/<u>/gi, '');
    value = value.replace(/<\/u>/gi, '');

    // Tighten up "<" and ">".
    value = value.replace(/>\s+/g, '>');
    value = value.replace(/\s+</g, '<');

    // Replace "<br>".
    value = value.replace(/<br>/gi, '\n');

    // Replace "<div>" (from Chrome).
    value = value.replace(/<div>/gi, '\n');
    value = value.replace(/<\/div>/gi, '');

    // Replace "<p>" (from IE).
    value = value.replace(/<p>/gi, '\n');
    value = value.replace(/<\/p>/gi, '');

    // No more than 2x newline, per "paragraph".
    value = value.replace(/\n\n+/g, '\n\n');

    // Whitespace before/after.
    value = value.trim(value);

    return value;
  };



export { dateConvert, timeConvert, trimHTML };
