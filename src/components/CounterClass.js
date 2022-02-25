import React from 'react';

class CounterClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    render() {
        return (
            <div className='Counter'>
                <h3>Counter</h3>
                <p>{this.state.count}</p>
                <button >+1</button>
            </div>
        )
    }
}
export default CounterClass;