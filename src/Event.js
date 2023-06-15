import React, { Component } from "react";

class Event extends Component {
  state = {
    detailsOpen: false,
  };

  toggleDetailsOpen = () => {
    this.setState((prevState) => ({ detailsOpen: !prevState.detailsOpen }));
  };
  render() {
    const { event } = this.props;
    const { detailsOpen } = this.state;
    return (
      <div className="event">
        <h4 className="event__summary">{event.summary}</h4>

        <div className="event__body">
          <p className="event__date">{`${event.start.dateTime} (${event.start.timeZone})`}</p>
          <p className="event__text">{`@${event.summary}|${event.location}`}</p>
        </div>

        {detailsOpen && (
          <div className="event__details">
            <h3>About event:</h3>

            <a href={event.htmlLink}>See details on Google Calendar</a>

            <p>{event.description}</p>
          </div>
        )}

        <button
          className="event__button"
          onClick={() => this.toggleDetailsOpen()}
        >
          {detailsOpen ? "hide details" : "show details"}
        </button>
      </div>
    );
  }
}
export default Event;
