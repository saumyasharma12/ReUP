
import React from 'react';
import './Mininav.css';

const categories = [
    { name: 'Cars', items: ['Properties', 'For Sale: Houses & Apartments', 'For Rent: Houses & Apartments', 'Lands & Plots', 'For Rent: Shops & Offices', 'For Sale: Shops & Offices', 'PG & Guest Houses'] },
    { name: 'Mobiles', items: ['Mobile Phones', 'Accessories', 'Tablets'] },
    { name: 'Jobs', items: ['Data entry & Back office', 'Sales & Marketing', 'BPO & Telecaller', 'Driver', 'Office Assistant', 'Delivery & Collection', 'Teacher', 'Cook', 'Receptionist & Front office', 'Operator & Technician', 'IT Engineer & Developer', 'Hotel & Travel Executive', 'Accountant', 'Designer', 'Other Jobs'] },
    { name: 'Bikes', items: ['Motorcycles', 'Scooters', 'Spare Parts', 'Bicycles'] },
    { name: 'Electronics & Appliances', items: ['TVs, Video - Audio', 'Kitchen & Other Appliances', 'Computers & Laptops', 'Cameras & Lenses', 'Games & Entertainment', 'Fridges', 'Computer Accessories', 'Hard Disks, Printers & Monitors', 'ACs', 'Washing Machines', 'Commercial Vehicles & Spares', 'Commercial & Other Vehicles', 'Spare Parts'] },
    { name: 'Furniture', items: ['Sofa & Dining', 'Beds & Wardrobes', 'Home Decor & Garden', 'Kids Furniture', 'Other Household Items'] },
    { name: 'Fashion', items: ['Men', 'Women', 'Kids'] },
    { name: 'Books, Sports & Hobbies', items: ['Books', 'Gym & Fitness', 'Musical Instruments', 'Sports Equipment', 'Other Hobbies'] },
    { name: 'Pets', items: ['Fishes & Aquarium', 'Pet Food & Accessories', 'Dogs', 'Other Pets'] },
    { name: 'Services', items: ['Education & Classes', 'Tours & Travel', 'Electronics Repair & Services', 'Health & Beauty', 'Home Renovation & Repair', 'Cleaning & Pest Control', 'Legal & Documentation Services', 'Packers & Movers', 'Other Services'] }
];

function Mininav() {
    return (
        <>
        <nav className="mini-nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <span>All CATEGORIES</span>
                    <ul className="dropdown">
                        {categories.map((category, index) => (
                            <li key={index} className="category">
                                <div className="category-heading">{category.name}</div>
                                <ul className="category-items">
                                    {category.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </nav>
        
        </>
    );
}

export default Mininav;
