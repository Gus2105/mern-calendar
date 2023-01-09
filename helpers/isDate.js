const moment = require("moment/moment");

const isDate = ( value ) => {

    if ( !value ) {
        return false;
    }

    const fecha = moment( value );
    if ( fecha.isValid ) {
        return true;
    } else {
        return false
    }
    // console.log("Value "+ value);
    // console.log("req "+ req);
    // console.log("location "+ location );
    // console.log("path "+ path);
}

module.exports= { isDate };