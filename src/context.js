import React from 'react';

const RenderContext = React.createContext();

export  class RenderContextProvider extends React.Component {

    state = {
        test: 'testowy tekst '
    }

    render() {
        return (
            <RenderContext.Provider value={this.state.test}>
                {this.props.children}
            </RenderContext.Provider>
        )
    }
}

export const RenderContextConsumer = RenderContext.Consumer; 