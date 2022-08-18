import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import dl from "./dulieu.json"
import SanPham from './SanPham';
import TinLienQuan from './TinLienQuan';
export default class Duan extends Component {
     // Hàm chuyển đổi URL
     chuyenDoiUrl= (str) =>{
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
     
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
     
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
     
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
     
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
     
        // return
        return str;
   }
    render() {
        return (
            <div>
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
                    {/* end header  */}
                    {/* nọi dung  */}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="jumbotron">
                                    <h3 className="display-4">Jumbo heading</h3>
                                    <p className="lead">Jumbo helper text</p>
                                    <hr className="my-2" />
                                    <p>More info</p>
                                    <p className="lead">
                                        <a className="btn btn-primary btn-lg" href={this.chuyenDoiUrl("Jumbo action link")} role="button">Jumbo action name</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <img src="https://placehold.it/600x370" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* tin liên quan  */}
                    <div className="container">
                        <h4>Tin liên quan</h4>
                        <div className="card-deck">
                            <div className="card">
                                <Link to="/du"><img className="card-img-top" src="https://placehold.it/300x200/" alt="" /></Link>
                            </div>
                            <div className="card">
                                <Link to="/du"><img className="card-img-top" src="https://placehold.it/300x200/" alt="" /></Link>
                            </div>
                            <div className="card">
                                <Link to="/du"><img className="card-img-top" src="https://placehold.it/300x200/" alt="" /></Link>
                            </div>
                            <div className="card">
                                <Link to="/du"><img className="card-img-top" src="https://placehold.it/300x200/" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
