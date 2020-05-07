import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urls = [
  '1st api',
  '2nd api',
  '3rd api',
  '4th api',
  '5th api',
  ];
  // promisified setTimeout to use as an api call.
  apicall = (milliseconds, value) => new Promise (resolve =>
    setTimeout(() => resolve(`response from ${value}`), milliseconds)
  );
}
