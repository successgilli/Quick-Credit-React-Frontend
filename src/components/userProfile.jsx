import React from 'react';
import { connect } from 'react-redux';
import { imageUpload } from '../redux/actions/user.jsx';

import '../css/userProfile.css';

class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           image: null
        }
    }
    render(){
        const { image } = this.state;
        const { user } = this.props;
        return(
            <section id="userProfile">
            <div id="updateUserDetails">      
                <div id="updateDetails1">
                    <div id="pictureCont">
                        <img src={ image || user.passporturl || "https://militaryfamilies.psu.edu/wp-content/uploads/2019/04/placeholder_profile_photo.png"} alt="" id="profilePicture" />
                        <div id="profileUploadDiv">
                            <input type="file" id="updatePix" name="image" onChange={this.handleUpload} />
                            <button id="updatePixBtn">UPDATE PICTURE</button>
                        </div>
                    </div>
                    <div id="profileInfo">
                        <div><span class="userInfo">{`${user.lastname} ${user.firstname}`}</span></div>
                        <div><span class="userInfo">{user.email}</span></div>
                        <div><span class="userInfo">{user.accountnumber}</span></div>
                        <div><span class="userInfo">{user.address}</span></div>
                    </div>
                </div>
                <div id="updateDetails2">
                </div>
            </div>
            <div id="userUploadInfo">
                <p id="updateHead">UPDATE YOUR DETAILS BELOW </p>
                <div id="updateContent">
                    <div id="update1" class="update">
                        <form action="" class="updateForm">
                            <input type="text" id="address" required />
                            <label for="address">Address</label>
                        </form>
                        <form action="" class="updateForm">
                            <input type="text" id="userEmail" required />
                            <label for="userEmail">Email</label>
                        </form>
                    </div>
                    <div id="update2" class="update">
                        <form action="" class="updateForm">
                            <input type="text" id="userCompany" required />
                            <label for="userCompany">company Name</label>
                        </form>
                        <form action="" class="updateForm">
                            <input type="text" id="monthlyIncome" required />
                            <label for="monthlyIncome">Monthly Income</label>
                        </form>
                    </div>
                    <div id="update3" class="update">
                        <form action="" class="updateForm">
                            <input type="text" id="companyAddress" required />
                            <label for="companyAddress">Company Address</label>
                        </form>
                        <form action="" class="updateForm">
                            <input type="text" id="bankName" required />
                            <label for="bankName">Bank Name</label> 
                        </form>
                    </div>
                    <div id="update4" class="update">
                        <form action="" class="updateForm">
                            <input type="text" id="bvn" required />
                            <label for="bvn">BVN</label>
                        </form> 
                        <form action="" class="updateForm">
                            <input type="text" id="accountNumber" required />
                            <label for="accountNumber">Account Number</label>
                        </form>
                    </div> 
                    <button class="updateBtn">update</button>      
                </div>
            </div>
        </section>
        )
    }

    handleUpload = (e) => {
        const { imageUpload } = this.props;
        imageUpload(e.target.files[0]);
    }
}

export default connect( state => state, { imageUpload } )(UserProfile);
