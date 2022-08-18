import React, { Component } from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Duan1  from '../component/Duan1';
import Contact from '../component/Contact';
// import Duan from '../component/Duan';
import Gioithieu from '../component/Gioithieu';
import Home from '../component/Home';


export default class Directional extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Gioithieu" element={<Gioithieu />} />
                    <Route exact path="/duan/:slug.:id" element={<Duan1 />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </div>
        )
    }
}
