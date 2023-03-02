import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import './assets/css/style.css';
import ReactDOM from 'react-dom';
import React from 'react';

function App() {
    return (
        <div className='App'>
            <div>hello chrome extension</div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
