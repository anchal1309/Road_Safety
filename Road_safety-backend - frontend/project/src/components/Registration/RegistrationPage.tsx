import React, { useState } from "react";
import { FaUser, FaChalkboardTeacher, FaRoad, FaCarCrash } from "react-icons/fa";
import "./styles.css";

type UserRole = "learner" | "educator";

const RegistrationPage: React.FC = () => {
    const [role, setRole] = useState<UserRole | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        password: "",
        learnerField1: "",
        learnerField2: "",
        learnerField3: "",
        educatorField1: "",
        educatorField2: "",
        educatorField3: "",
    });

    const handleRoleChange = (selectedRole: UserRole) => {
        setRole(selectedRole);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Registered Successfully!");
    };

    return (
        <div className="container">
            <h1 className="header"><FaRoad /> Road Safety Learning Courses</h1>
            <form onSubmit={handleSubmit} className="form">
                <label>Name:</label>
                <div className="inputGroup">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <label>Email:</label>
                <div className="inputGroup">                  
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>



                <label>Phone Number:</label>
                <div className="inputGroup">                   
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                    />
                </div>

                <label>Date of Birth:</label>
                <div className="inputGroup">
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                    />
                </div>


                <label>Password:</label>
                <div className="inputGroup">   
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <div className="buttonGroup">
                    <button
                        type="button"
                        onClick={() => handleRoleChange("learner")}
                        className={role === "learner" ? "activeButton" : "button"}
                    >
                        <FaUser /> Learner
                    </button>
                    <button
                        type="button"
                        onClick={() => handleRoleChange("educator")}
                        className={role === "educator" ? "activeButton" : "button"}
                    >
                        <FaChalkboardTeacher /> Educator
                    </button>
                </div>

                {role === "learner" && (
                    <>  
                        <label>Preferred Learning Module:</label>
                        <div className="inputGroup">                          
                            <input
                                type="text"
                                name="learnerField1"
                                value={formData.learnerField1}
                                onChange={handleInputChange}
                                placeholder="e.g., Basic Road Signs"
                            />
                        </div>
                        <label>Hours Available for Study per Week:</label>
                        <div className="inputGroup">                          
                            <input
                                type="number"
                                name="learnerField2"
                                value={formData.learnerField2}
                                onChange={handleInputChange}
                                placeholder="e.g., 5 hours"
                            />
                        </div>
                        <label>Learning Goal:</label>
                        <div className="inputGroup">                           
                            <input
                                type="text"
                                name="learnerField3"
                                value={formData.learnerField3}
                                onChange={handleInputChange}
                                placeholder="e.g., Become familiar with road signs"
                            />
                        </div>
                    </>
                )}

                {role === "educator" && (
                    <>

                        <label>Teaching Experience:</label>
                        <div className="inputGroup">                        
                            <input
                                type="text"
                                name="educatorField1"
                                value={formData.educatorField1}
                                onChange={handleInputChange}
                                placeholder="e.g., 5 years in Traffic Safety"
                            />
                        </div>
                        <label>Specialized Subjects:</label>
                        <div className="inputGroup">
                            
                            <input
                                type="text"
                                name="educatorField2"
                                value={formData.educatorField2}
                                onChange={handleInputChange}
                                placeholder="e.g., Road Safety Signs, Traffic Laws"
                            />
                        </div>
                        <label>Certifications:</label>
                        <div className="inputGroup">
                            
                            <input
                                type="text"
                                name="educatorField3"
                                value={formData.educatorField3}
                                onChange={handleInputChange}
                                placeholder="e.g., Certified Road Safety Instructor"
                            />
                        </div>
                    </>
                )}

                <button type="submit" className="submitButton">
                    <FaCarCrash /> Register
                </button>
            </form>
        </div>
    );
};

export default RegistrationPage;