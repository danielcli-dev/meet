

Serverless Functions
In this app, serverless functions will be used for authentication and to retrieve tokens so that requests can be made to the Google Calendar API. 








User Stories & Scenarios

Feature 2: Show/Hide An Event’s Details

As a [User], I should be able to [expand an event] so that [I can see an event’s details].

Given the list of events has been loaded
When a user clicks on “Show details” button for an event
Then the event element will be expanded to show the even details.



Feature 3: Specify Number of Events

As a [User], I should be able to [input a number] so that [I can control the number of events displayed].

Given the main view is loaded
When a user inputs a number into the field
Then the number of events displayed matches the the number inputted by the user



Feature 4: Use the App When Offline

As a [User], I should be able to [open the app] so that [I can see events while offline]

Given there is no internet connection
When a user opens the website
Then the events and data are still displayed



Feature 5: Data Visualization

As a [User], I should be able to [view a chart] so that [I can see the number of events in each city]

Given the chart is loaded
When a user views the chart
Then they should see a visual display showing the number of events in each city.

