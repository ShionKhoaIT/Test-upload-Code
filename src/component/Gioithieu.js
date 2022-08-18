import React, { Component } from 'react'
import SanPham from './SanPham'
import dl from './dulieu.json'
export default class Gioithieu extends Component {
    render() {
        return (
            <div>
                <div>
                    <header className="masthead du_an">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mt-5">Trang Danh sách dự án</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* thông tin giới thiệu  */}
                    <div className="container">
                        <div className="card-deck">
                            <div className="card">
                                <a href="du-an.html"><img className="card-img-top" src="https://placehold.it/700x300" alt="" /></a>
                                <div className="card-body">
                                    <h4 className="card-title">Dự án 1</h4>
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex omnis nemo assumenda vel dolor. Cumque eum commodi dicta reiciendis tempore maiores itaque consequuntur vel, eius ab laudantium minus debitis saepe!</p>
                                </div>
                            </div>
                            <div className="card">
                                <a href="du-an.html"><img className="card-img-top" src="https://placehold.it/700x300" alt="" /></a>
                                <div className="card-body">
                                    <h4 className="card-title">Dự án 2</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit, corrupti necessitatibus cumque soluta, illo odit ad nulla nihil quo iure, maxime sed beatae nostrum non possimus tempore? Quos, laboriosam!</p>
                                </div>
                            </div>
                            <div className="card">
                                <a href="du-an.html"><img className="card-img-top" src="https://placehold.it/700x300" alt="" /></a>
                                <div className="card-body">
                                    <h4 className="card-title">Dự án 3</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, repellendus rerum porro aliquid odio aliquam officiis molestiae quis labore consequatur veritatis magni debitis molestias quas et impedit. Nihil, aut soluta.</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="card-deck">
                          
                          {
                            dl.map((item, index) => {
                                return (
                                    <SanPham
                                        key = {item.id}
                                        id = {item.id} 
                                        hinh ={item.hinh}
                                        tieuDe = {item.tieuDe}
                                        moTa = {item.moTa}
                                    />
                                )
                            })
                          }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
