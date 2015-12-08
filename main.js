var INTERVAL = 50;
var content = document.querySelector('#content');

Rx.Observable.interval(INTERVAL)
  .map(() => attendees[Math.floor(Math.random() * attendees.length)])
  .takeUntil(Rx.Observable.fromEvent(document, 'keypress'))
  .subscribe(attendee => {
    content.textContent = attendee.Name;
    console.log(attendee);
  });

