import React, { Component } from 'react'
import DateTime from './DateTime';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
            isDateVisible: true
        }
    }
    componentDidMount() {
        this.startTime();
    }
    startTime = () => {
        this.timer = setInterval(() => {
            this.setState(() => ({ date: new Date() }));
        }, 1000);
    }
    toggleDate = () => {
        this.setState((prevState) => ({ isDateVisible: !prevState.isDateVisible }));
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-2 col-md-8">
                            <div className="card">
                                <div className="card-header ">

                                    <h1 className="text-center"> <i className="fa fa-clock-o"></i>  React Clock</h1>
                                </div>
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="switch float-right">
                                                <input type="checkbox" checked={this.state.isDateVisible} onChange={this.toggleDate} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <i className="fa fa-calendar float-left calender" aria-hidden="true"></i>
                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="d-flex flex-row">
                                            <div className="col-md-4 mx-auto">
                                                <div className="display">
                                                    <div className="display-time">{DateTime.toTimeString(this.state.date)}</div>
                                                    {this.state.isDateVisible && <div className="display-date">{DateTime.toDateString(this.state.date)}</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




