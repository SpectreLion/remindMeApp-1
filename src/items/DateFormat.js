import constants from './../staticData/Constants';

export default class Helper{

  formatMonth(date){
    const targetDate = new Date(date),
          month = constants.months[targetDate.getMonth()];
    return month;
  }

  formatDay(date){
    const targetDate = new Date(date),
          day = targetDate.getDate();
    return day;
  }


}
