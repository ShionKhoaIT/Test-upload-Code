import React, { Component } from 'react'
import { Navigate } from "react-router-dom";


export default class Contact extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      redirect:false,
      ten:"",
      email:"",
      ghichu:"",
      ngay:"Thyws 2"
    }
  }
  
  sumitForm=(event) =>{
    event.preventDefault();
    // console.log(this.state.ten);
    this.setState({redirect:true})
  }
  //hamlaygiatriinput
  getGiatri=() =>{
    var thongtin="";
    thongtin +="/ ten la:"+this.state.ten;
    thongtin +="/ mail la:"+this.state.email;
    thongtin +="/ noi dung la:"+this.state.ghichu;
    thongtin +="/ ngay la:"+this.state.ngay;
    thongtin +="/ anh la:"+this.state.tenAnh;

return thongtin
  }
  noiDung=(event) =>{
    // console.log(event.target.value);
    const tenControl=event.target.name;
    const giatri=event.target.value;
    // console.log(tenControl);
    // console.log(giatri);
this.setState({[tenControl]:giatri})
  }
  layHinh=(event) =>{
    // const anh=event.target.files;
    const anh=event.target.files.name;
    console.log(anh);
    this.setState({tenAnh:anh});
  }
  render() {
    if(this.state.redirect){
      console.log(this.getGiatri());
      return <Navigate to="/"></Navigate> 
    }
    return (
      <div><div>
      <header className="masthead du_an">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12 my-auto">
              <div className="header-content mx-auto">
                <h1 className="mt-5">Trang Liên hệ</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <hr />
      {/* thông tin giới thiệu  */}
      <div className="container">
        <form action="mail.php" method="post">
          <div className="card border-primary rounded-0">
            <div className="card-header p-0">
              <div className="bg-info text-white text-center py-2">
                <h3><i className="fa fa-envelope" /> Contactanos</h3>
                <p className="m-0">Con gusto te ayudaremos</p>
              </div>
            </div>
            <div className="card-body p-3">
              {/*Body*/}
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="fa fa-user text-info" /></div>
                  </div>
                  <input onChange={(event) =>{this.noiDung(event)}} type="text" className="form-control" id="nombre" name="ten" placeholder="Nombre y Apellido" required />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="fa fa-envelope text-info" /></div>
                  </div>
                  <input onChange={(event) =>{this.noiDung(event)}} type="email" className="form-control" id="nombre" name="email" placeholder="ejemplo@gmail.com" required />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="fa fa-comment text-info" /></div>
                  </div>
                  <textarea onChange={(event) => { this.noiDung(event) }} type="text" name="ghichu" className="form-control" placeholder="Envianos tu Mensaje" required defaultValue={""} />
                </div>
              </div>
              <div className="form-group">                   
                     <label for="">chọn ngày</label>
                     <select value={this.state.ngay} onChange={(event) =>{this.noiDung(event)}} className="form-control" name="ngay" id="">
                       <option value="thu2">Thứ hai</option>
                       <option value="thu3">Thứ ba</option>
                       <option value="thu5">Thứ năm</option>
                       <option value="cn">Chủ nhật</option>                      
                     </select>                   
                  </div>
          
                  <div className="form-group">                   
                    < input value={this.state.layHinh} onChange={(event) =>{this.layHinh(event)}} type="file" className="form-control-file" name="hinhanh" />                   
                  </div>
                  <div className="text-center">
                <input onClick={(event) =>{this.sumitForm(event)}}type="submit" defaultValue="Enviar" className="btn btn-info btn-block rounded-0 py-2" />
                
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    )
  }
}
