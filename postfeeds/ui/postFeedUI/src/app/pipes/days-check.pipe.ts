import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysCheck'
})
export class DaysCheckPipe implements PipeTransform {

  /**
   * Calculate the the difference with today's date and given date returns
   * @param dateStr 
   * @returns string
   */
  transform(dateStr: string | undefined): string | undefined {
    if (dateStr != undefined) {
      const createdDate = new Date(dateStr);
      const todaysDate = new Date();
      const differenceInTime = todaysDate.getTime() - createdDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      return Math.floor(differenceInDays).toString();
    } else {
      return dateStr;
    }
  }

}