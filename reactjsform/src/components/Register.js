import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import signpic from "./register.jpg"



function Register() {
    const history = useHistory();
    const [user, setUser] = useState({
        date:"", fullname:"", reason:"", phonenumber:"", address:"", emailid:""});
       
        let name , value;
       
        const handleInputs = (e) => {
            console.log(e); 
            name = e.target.name;
            value = e.target.value;

            setUser({...user,[name]:value});
        }

        const PostData = async(e) => {
            e.preventDefault();

            const{date, fullname, reason, phonenumber, address, emailid} = user;

            const res = await fetch("/register", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    date, fullname, reason, phonenumber, address, emailid
                })
            })

            const data = await res.json();

            if(res.status === 422 || !data){
                window.alert("Invalid Registration");
                console.log("Invalid Registeration");
            }
            else {
                window.alert("Successful Registration");
                console.log("Successful Registeration");

                // history.push("/register");
            }
        }


    return (
        <>
            <section className="register">
                <div className="container mt-5">
                    <div className="register-content row">
                        <div className="register-form col-sm">
                            <h2 className="form-title">Register</h2>
                            <form method="POST" className="register-form-form" id="register-form-form">

                                <div className="form-group">
                                    <label htmlFor="date">
                                        <i className="zmdi zmdi-calendar"></i>
                                    </label>
                                    <input type="date " name="date" id="date" autoComplete="off"
                                    value={user.date}
                                    onChange={handleInputs}
                                    placeholder="Date" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text " name="fullname" id="fullname" autoComplete="off"
                                    value={user.fullname}
                                    onChange={handleInputs}
                                    placeholder="Full Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="reason">
                                        <i className="zmdi zmdi-comments"></i>
                                    </label>
                                    <input type="text " name="reason" id="reason" autoComplete="off"
                                    value={user.reason}
                                    onChange={handleInputs}
                                    placeholder="Reason" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phonenumber">
                                        <i className="zmdi zmdi-phone material-icons-name"></i>
                                    </label>
                                    <input type="text " name="phonenumber" id="phonenumber" autoComplete="off"
                                    value={user.phonenumber}
                                    onChange={handleInputs}
                                    placeholder="Phone Number" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address">
                                        <i className="zmdi zmdi-pin animated infinite wobble zmdi-hc-fw"></i>
                                    </label>
                                    <input type="text " name="address" id="address" autoComplete="off"
                                    value={user.address}
                                    onChange={handleInputs}
                                    placeholder="Address" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email " name="emailid" id="emailid" autoComplete="off"
                                    value={user.emailid}
                                    onChange={handleInputs}
                                    placeholder="Email" />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="register" className="form-submit" value="register" onClick={PostData} />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image col-sm">
                            <figure>
                                <img src={signpic} alt="registration pic" />
                            </figure>
                        </div>
                        {/* <Navlink to="/" cla */}
                    </div>
                </div>

            </section>
        </>
    )
}

export default Register

