import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Board from '../containers/Board';
import Note from '../containers/note';

//require('../../scss/bootstrap.scss');
require('../../scss/style.scss');

const App = () => (
    <div>
        <Header />
        <Board />
        <Note />
        <Footer />
    </div>
);

export default App;