import React, { useState } from 'react';
import './IneedHelp.css'

function IneedHelp() {
    // State to store selected options
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Options for the checkboxes
    const help = [
        'I need fruit',
        'I need meat',
        'I need water',
        'I need vegetables',
        // Add more options as needed
    ];

    // Function to handle checkbox selection
    const handleOptionChange = (event) => {
        const optionValue = event.target.value;
        setSelectedOptions((prevSelectedOptions) => {
            if (prevSelectedOptions.includes(optionValue)) {
                // If the option is already selected, remove it
                return prevSelectedOptions.filter((option) => option !== optionValue);
            } else {
                // If the option is not selected, add it
                return [...prevSelectedOptions, optionValue];
            }
        });
    };

    // State to keep track of the active tab
    const [activeTab, setActiveTab] = useState('Tab1'); // Set the default active tab

    // Function to handle tab click
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <h2>I need Help</h2>
            <div className="navbar-container">
            <ul className="nav">
                <li
                    className={activeTab === 'Food' ? 'active' : ''}
                    onClick={() => handleTabClick('Food')}
                >
                    Food
                </li>
                <li
                    className={activeTab === 'Medications' ? 'active' : ''}
                    onClick={() => handleTabClick('Medications')}
                >
                    Medications
                </li>
                <li
                    className={activeTab === 'Clothes' ? 'active' : ''}
                    onClick={() => handleTabClick('Clothes')}
                >
                    Clothes
                </li>
                <li
                    className={activeTab === 'Tools' ? 'active' : ''}
                    onClick={() => handleTabClick('Tools')}
                >
                    Tools
                </li>
            </ul>
            </div>
            {/* Render content based on the active tab */}
            <div className="tab-content">
                {activeTab === 'Food' && <div>
                    <div className="checkbox-column">
                        {help.map((option) => (
                            <label key={option}>
                                <input
                                    type="checkbox"
                                    value={option}
                                    checked={selectedOptions.includes(option)}
                                    onChange={handleOptionChange}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                    <div>
                        <p>Selected Options:</p>
                        <ul>
                            {selectedOptions.map((option) => (
                                <li key={option}>{option}</li>
                            ))}
                        </ul>
                    </div>
                </div>}
                {activeTab === 'Medications' && <div>Content for Medications</div>}
                {activeTab === 'Clothes' && <div>Content for Clothes</div>}
                {activeTab === 'Tools' && <div>Content for Tools</div>}
            </div>


        </div>
    );
}

export default IneedHelp;
