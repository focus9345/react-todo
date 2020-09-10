import React from 'react'
import { DateTime } from 'luxon'


var now = new DateTime.local();
var options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    //timeZone: 'America/New_York',
    timeZoneName: 'short',
    };
   

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateshow: new Intl.DateTimeFormat('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                //timeZone: 'America/New_York',
                timeZoneName: 'short',
                }).format(new DateTime.local()),
        };
 
    }
    // Updates the time every second
    componentDidMount() {
        setInterval(() => {
            this.setState({
                curTime: new Intl.DateTimeFormat('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    //timeZone: 'America/New_York',
                    timeZoneName: 'short',
                    }).format(new DateTime.local())
            })
        }, 1000)
    }


    render () {
        if (this.state.dateshow) {
            return (
                <footer className="App-footer">
                    Date and Time: {this.state.curTime}
                </footer>
            );
        }
        return (
            <footer>
                Date and Time is not showing right now.
            </footer>
        );
    }

}
export default Footer;