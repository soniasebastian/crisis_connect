import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './IneedHelp.css'

function IneedHelp() {
    // State to store selected options
    const [selectedOptions, setSelectedOptions] = useState([]);
    const navigate = useNavigate();

    // Options for the checkboxes
    const foodHelp = [
        'I need fruit',
        'I need meat',
        'I need water',
        'I need vegetables'
    ];

    const medsHelp = [
        'I need Synthroid',
        'I need Methadose',
        'I need D-tabs',
        'I need PMS-Rosuvastatin',
        'I need Eliquis'
    ];

    const clothesHelp = [
        'I need Menswear',
        'I need Womenswear  ',
        'I need Baby clothes',
        'I need Childrens wear',
    ];

    const toolsHelp = [
        'I need Hammers',
        'I need Screwdrivers',
        'I need Pliers',
        'I need Wrenches',
        'I need Cordless Drill and Drill Bits'
    ];

    // Function to handle checkbox selection
    const handleOptionChange = (event) => {
        const helpRequest = event.target.value;
        setSelectedOptions((prevSelectedOptions) => {
            if (prevSelectedOptions.includes(helpRequest)) {
                // If the option is already selected, remove it
                return prevSelectedOptions.filter((option) => option !== helpRequest);
            } else {
                // If the option is not selected, add it
                return [...prevSelectedOptions, helpRequest];
            }
        });
    };
    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected Options:', selectedOptions);
        navigate('/userinforeg',{
            state: selectedOptions,
        })
        // You can now submit the selected options to a server or perform any other action.
    };

    // State to keep track of the active tab
    const [activeTab, setActiveTab] = useState('Food'); // Set the default active tab

    // Function to handle tab click
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <h2>I need Help</h2>
            <form onSubmit={handleSubmit}>
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
                        {foodHelp.map((option) => (
                            <label className={"checkbox-label"} key={option}>
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
                </div>}
                {activeTab === 'Medications' && <div><div className="checkbox-column">
                    {medsHelp.map((option) => (
                        <label className={"checkbox-label"} key={option}>
                            <input
                                type="checkbox"
                                value={option}
                                checked={selectedOptions.includes(option)}
                                onChange={handleOptionChange}
                            />
                            {option}
                        </label>
                    ))}
                </div></div>}
                {activeTab === 'Clothes' && <div><div className="checkbox-column">
                    {clothesHelp.map((option) => (
                        <label className={"checkbox-label"} key={option}>
                            <input
                                type="checkbox"
                                value={option}
                                checked={selectedOptions.includes(option)}
                                onChange={handleOptionChange}
                            />
                            {option}
                        </label>
                    ))}
                </div></div>}
                {activeTab === 'Tools' && <div><div className="checkbox-column">
                    {toolsHelp.map((option) => (
                        <label className={"checkbox-label"} key={option}>
                            <input
                                type="checkbox"
                                value={option}
                                checked={selectedOptions.includes(option)}
                                onChange={handleOptionChange}
                            />
                            {option}
                        </label>
                    ))}
                </div></div>}
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    );
}

export default IneedHelp;
