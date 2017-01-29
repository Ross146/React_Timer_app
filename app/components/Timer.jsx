var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            timerStatus: 'stopped'
        }
    },

    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started' :
                    this.startTimer();
                    break;

                case 'stopped' :
                    this.setState({count: 0});

                case 'paused' :
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },

    handleStatusChange: function (newStatus) {
        this.setState({
            timerStatus: newStatus
        })
    },

    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },

    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });

            if (newCount === 600) {
                this.setState({
                    timerStatus: 'stopped'
                });
            }
        }, 1000);
    },

    render: function () {
        var {timerStatus, count} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
});

module.exports = Timer;

