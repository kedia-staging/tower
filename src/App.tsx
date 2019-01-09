import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter basename="/tower">
                <AppRouter />
            </BrowserRouter>
        );
    }
}

export default App;
