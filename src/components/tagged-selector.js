import React, { useState } from 'react';
import '../App.css';



export function TaggedSelector() {
    const [selectedItems, setSelectedItems] = useState([]);
  
    const LANGUAGES = [
        "Java",
        "JavaScript",
        "Python",
        "C++",
        "Ruby",
        "Go",
        "Swift",
        "Kotlin",
        "PHP",
        "Rust",
        "TypeScript",
        "C#",
    ]

    return (
        <div className="container-tags-and-dropdown">
            <div className="container-flag-and-dropdown">
            <label className="input-flag">Languages:</label>
            <select
                className="dropdown"
                onChange={(e) => {
                const value = e.target.value;
                if (value && !selectedItems.includes(value)) {
                    setSelectedItems([...selectedItems, value]);
                }
                }}
            >
                <option value="">Select items...</option>
                {LANGUAGES.map(language => (
                <option key={language} value={language}>{language}</option>
                ))}
            </select>
            </div>
            
            {/* language tags */}
            <div className="container-tags">
            {selectedItems.map((language, idx) => (
                <span key={idx} className="tag">
                {language}
                <button onClick={() => setSelectedItems(selectedItems.filter(i => i !== language))}>
                    &times;
                </button>
                </span>
            ))}
            </div>
        </div>
    )
}
