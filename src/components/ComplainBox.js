import React, { useState } from "react";
import axios from "axios";
import "../styles/ComplainBox.css";
import { useNavigate } from "react-router-dom"; // ✅ Use useNavigate

function ComplainBox() {
    const [quality, setQuality] = useState("");
    const [star, setStar] = useState("");
    const [suggestion, setSuggestion] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // ✅ Initialize useNavigate

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents page refresh
        try {
            const response = await axios.post("http://localhost:5000/complain_box", {
                quality,
                star,
                suggestion
            });

            if (response.data.message === "Feedback has been sent to registered email") {
                alert("Success");
            }
            setMessage(response.data.message);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2 className="form-title">Feedback Form</h2>

                <label>
                    Quality of service:
                    <select value={quality} onChange={(e) => setQuality(e.target.value)}>
                        <option value="">Select Quality</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="average">Average</option>
                        <option value="poor">Poor</option>
                    </select>
                </label>

                <label>
                    Number of stars:
                    <select value={star} onChange={(e) => setStar(e.target.value)}>
                        <option value="">Select Stars</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                </label>

                <label>
                    Suggestion:
                    <textarea
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                        placeholder="Enter your suggestion here..."
                    ></textarea>
                </label>

                <button type="submit" className="submit-button">
                    Submit
                </button>

                {message && <div className="success-message">{message}</div>}
                {error && <div className="error-message">{error}</div>}

                {/* ✅ Corrected Navigation Button */}
                <button type="button" className="submit-button" onClick={() => navigate('/dashboard')}>
                    Go to Dashboard
                </button>
            </form>
        </div>
    );
}

export default ComplainBox;
