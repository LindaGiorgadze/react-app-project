import React from 'react';

let interval;
class CounterClass extends React.Component {
    state = {
        count: this.props.start,
        title: 'Counter'
    }
    increase() {
        this.setState ( {
            count: this.state.count + 1
        })
    }
    decrease() {
        this.setState ( {
            count: this.state.count - 1
        })
    }
    componentDidMount() {
        interval = setInterval(() => {
            this.setState({
                count: this.state.count + 5
            })
            console.log(this.state.count);
        }, 2000);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.start !== this.props.start) {
            this.setState({
                count: this.props.start
            })
        }
    }
    componentWillUnmount() {
        clearInterval(interval)
    }

    render() {
        return (
            <div className='Counter'>
                <h3>{this.state.title}</h3>
                <p>{this.state.count}</p>
                <button onClick={ () => this.decrease() } > -1 </button>
                <button onClick={ () => this.increase() } > +1 </button>
            </div>
        )
    }
}
export default CounterClass;