import React from 'react'
import { Routes, Route, useParams, Link } from 'react-router-dom';
import dl from './dulieu.json'
import ChiTietSP from './ChiTietSP';
import TinLienQuan from './TinLienQuan';
export default function Duan1() {
    let params = useParams()
        return (
            <div>
                <header className="masthead du_an">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mt-5">Chi tiết dự án</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {
                dl.map((item, index) => {
                    if(item.id === params.id) {
                        return <ChiTietSP
                                key={index}
                                tieuDe={item.tieuDe}
                                mota={item.mota}
                                hinh = {item.hinh}
                                />

                    }
                })
               }
             
               
                <div className="container">
                    <h4>Tin liên quan</h4>
                    <div className="card-deck">
                       
                        {
                            dl.map((item, index) => {
                                if(index !== item.id) {
                                return (
                                    <TinLienQuan hinh={item.hinh}
                                        key = {index}
                                        tieuDe = {item.tieuDe}
                                        id = {item.id}
                                    />)
                                }
                            })
                        }
                    </div>
                </div>
            </div>

        )
}
