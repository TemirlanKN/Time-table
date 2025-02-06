import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8am</td>
            <Event event="Sleep" color="green" />
            <Event event="Breakfast" color="blue" />
            <Event event="Breakfast" color="blue" />
            <Event event="Breakfast" color="blue" />
            <Event event="Breakfast" color="blue" />
            <Event event="Breakfast" color="blue" />
            <Event event="Sleep" color="green" />
          </tr>
          <tr>
            <td className="time">9am</td>
            <Event event="Sleep" color="green" />
            <Event event="Meeting with PM" color="red" />
            <Event event="Coding start" color="red" />
            <Event event="Coding start" color="red" />
            <Event event="Coding start" color="red" />
            <Event event="Meeting with PM" color="pink" />
            <Event event="Sleep" color="green" />
          </tr>
          <tr>
            <td className="time">10am</td>
            <Event event="Sleep" color="green" />
            <Event event="Coding start" color="red" />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Coding start" color="red" />
            <Event event="Sleep" color="green" />
          </tr>
          <tr>
            <td className="time">11am</td>
            <Event event="Sleep" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Sleep" color="green" />
          </tr>
          <tr>
            <td className="time">12pm</td>
            <Event event="Sleep" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Sleep" color="green" />
          </tr>
          <tr>
            <td className="time">1pm</td>
            <Event event="Late Breakfast" color="blue" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Late Breakfast" color="blue" />
          </tr>
          <tr>
            <td className="time">2pm</td>
            <Event event="Friends gathering" color="yellow" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Family time" color="green" />
          </tr>
          <tr>
            <td className="time">3pm</td>
            <Event event="Walking outside" color="yellow" />
            <Event event="Coding end" color="pink" />
            <Event event="Coding end" color="pink" />
            <Event event="Coding end" color="pink" />
            <Event event="Coding end" color="pink" />
            <Event event="Coding end" color="pink" />
            <Event event="Watching TV" color="yellow" />
          </tr>
          <tr>
            <td className="time">4pm</td>
            <Event event="Lunch" color="yellow" />
            <Event
              event="Walking outside"
              location="Maple & Ash"
              color="yellow"
            />
            <Event event="Gym" color="green" />
            <td></td>
            <Event
              event="Walking outside"
              location="Maple & Ash"
              color="yellow"
            />
            <Event event="Gym" color="green" />
            <Event event="Lunch" color="yellow" />
          </tr>
          <tr>
            <td className="time">5pm</td>
            <Event event="Gaming until 2am" color="pink" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Gaming until 2am" color="pink" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
