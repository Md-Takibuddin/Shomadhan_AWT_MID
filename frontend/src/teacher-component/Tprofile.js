import "./prof.css"
import Tsidebar from "./Tsidebar";

const Tprofile = () => {
    return ( 
<div className="parent">
<div className="div1"> Somadhan</div>
<div className="div2"> <Tsidebar/></div>
<div className="div3"> </div>
<div className="div4"> </div>
<div className="div5"> 
<form action="tprofile" method="POST" enctype="multipart/form-data">
<div className="">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="storage\images\GetUserImage.jpeg"/><span className="font-weight-bold"/> <input type="file" name="photo" accept="image/*"/></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Name</label><input type="text" name="name" className="form-control" value=""/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">E-mail</label><input type="text" name="email" className="form-control" value=""/></div>
                    <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" name="phn" className="form-control" value=""/></div>
                    <div className="col-md-12"><label className="labels">Current Job</label><input type="text" name="cj" className="form-control" value=""/></div>
                    <div className="col-md-12"><label className="labels">Curriculum Vitae</label><input type="file" name="cv" accept=".pdf" className="form-control" value=""/></div>
                    <div className="col-md-12"><label className="labels">Date of Birth</label><input type="date" name="dob" className="form-control" value=""/></div>
                    <div className="col-md-12"><label className="labels">Password</label><input type="text" name="pass" className="form-control" value=""/></div>
                </div>
                <div className="mt-5 text-center"><input className="btn btn-primary profile-button" type="submit" value="Save Profile"/></div>
            </div>
        </div>
       
        </div>
    </div>
    
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"></link>
</form>
</div>
<div className="div6"> </div>
<div className="div7"> </div>
</div>
        

     );
}
 
export default Tprofile;