import React from "react";
import "./Info.css";

const Info = () => {
    return (
        <div className="info">
            <div className="image"></div>
            <div>
                <h2 className="name">Raj Sahu</h2>
                <p className="role">Full Stack Developer</p>
                <p className="email-text">raj.sahu@gmail.com</p>
            </div>
            <div className="btns">
                <form action="/" target="_blank">
                    <input type="submit" value="Email" className="email" />
                </form>
                <form
                    action="https://www.linkedin.com/in/raj-sahu/"
                    target="_blank"
                >
                    <input
                        type="submit"
                        value="LinkedIn"
                        className="linkedin"
                    />
                </form>
            </div>
        </div>
    );
};

export default Info;
