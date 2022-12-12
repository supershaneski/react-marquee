import React from 'react';
import './Marquee.css'

class Marquee extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            left: 0,
        }

    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(state => {
                let { left } = state;
                left--;
                if (left < -this.marquee.clientWidth) {
                    left = this.container.clientWidth;
                }
                return { left };
            });
        }, 30);
    }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

    render() {
        return (
            <div
                ref={node => (this.container = node)}
                className="marquee-container"
            >
                <div
                ref={node => (this.marquee = node)}
                className="marquee"
                style={{ 
                    left: `${this.state.left}px`,
                }}
                >
                {this.props.children}
                </div>
            </div>
        );
    }
}

export default Marquee