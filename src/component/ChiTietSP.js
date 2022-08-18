import React, { Component } from 'react'

export default class ChiTietSP extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 nd">
                    <div className="jumbotron">
                    {/* Prop la du lieu chuyen trong json */}
                        <p className="lead">{this.props.tieuDe}</p>
                        <hr className="my-2" />
                        <p className="mota">{this.props.moTa}</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Đặt tour</a>
                        </p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <img src={this.props.hinh} alt="" width="100%" />
                </div>
            </div>
        </div>
    )
  }
}


