import React from 'react'
import { DateTime } from 'luxon'
   

// Questions ?
// am I creating a memory issue
// should the interval be closed before updating

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            dateshow: 'Updating...',
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
        if (this.state.curTime) {
            return (
                <footer className="App-footer">
                    Current Date and Time: {this.state.curTime}
                </footer>
            );
        } else if (this.state.dateshow) {
            return (
                <footer className="App-footer">
                    Date and Time will display shortly. {this.state.dateshow}
                </footer>
            );
        } else {
        return (
            <footer>
                Date and Time is not showing right now.
            </footer>
        );
    }
    }

}
export default Footer;