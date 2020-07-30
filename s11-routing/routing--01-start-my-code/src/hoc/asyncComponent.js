import React, {Component} from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        //This state here, this component property will be set to the dynamically loaded component and the code for this will get implemented in componentDidMount.
        state = {
            component: null,
        }

        componentDidMount () {
            importComponent ()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }
        render () {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;