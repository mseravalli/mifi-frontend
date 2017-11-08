export class Utils {
  static baseUrl: String = "http://127.0.0.1:8080/api/v0.1";
  
  static formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  static assignColors(categories:any, colorTable:any) {
    var colors = [];
    for (var i = 0; i < categories.length; ++i) {
      if (categories[i] !== "date") {
        colors.push(colorTable[categories[i]]);
      }
    }
    return colors;
  }
}
