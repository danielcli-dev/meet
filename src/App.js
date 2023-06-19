import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { extractLocations, getEvents } from "./api";
import "./nprogress.css";
import { ErrorAlert } from "./Alert";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all",
    infoText: "",
  };

  componentDidMount() {
    this.mounted = true;

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      if (location) {
        this.setState({ currentLocation: location });
      }

      const locationEvents =
        this.state.currentLocation === "all" || null
          ? events
          : events.filter(
              (event) => event.location === this.state.currentLocation
            );

      if (eventCount >= 0) {
        this.setState({
          events: locationEvents.slice(0, eventCount),
          numberOfEvents: eventCount,
        });
      } else {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
        });
      }
    });

    if (!navigator.onLine) {
      this.setState({ infoText: "wow" });
    } else {
      this.setState({ infoText: "" });
    }
  };

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          // numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <ErrorAlert text={this.state.infoText} />

        <EventList events={this.state.events} />
      </div>
    );
  }
}
export default App;
