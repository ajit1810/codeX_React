import React, { useContext, useState } from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import './DashboardTab.css'; 
import myContext from '../../../components/context/MyContext';

function DashboardTab() {
    const context = useContext(myContext);
    const { mode } = context;
    const [activeTab, setActiveTab] = useState('product');

    const renderContent = () => {
        switch (activeTab) {
            case 'product':
                return (
                    <div className="panel-content">
                        <h1 className="panel-title" 
                        style={{
                            color: mode === 'dark' ? 'white' : '' 
                        }}
                        >Product Details</h1>
                        <div className="add-button-container">
                            <button className="add-button">
                                <FaCartPlus size={20} />
                                Add Product
                            </button>
                        </div>
                        <div className="table-container">
                            <table className="data-table">
                                <thead className="table-header" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                    <tr>
                                        <th>S.No</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Category</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-row" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                        <td>1.</td>
                                        <td><img className="image" src="https://dummyimage.com/720x400" alt="Product" /></td>
                                        <td>Title</td>
                                        <td>₹100</td>
                                        <td>pots</td>
                                        <td>12 Aug 2019</td>
                                        <td>
                                            <div className="action-buttons">
                                                <button className="action-button edit" style={{color: mode=== 'dark' ? 'white' :'',
                                                    border: mode=== 'dark' ? "1px solid white" :''
                                                }}>Edit</button>
                                                <button className="action-button delete" style={{color: mode=== 'dark' ? 'white' :'',
                                                     border: mode=== 'dark' ? "1px solid white" :''
                                                }}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'order':
                return (
                    <div className="panel-content">
                        <h1 className="panel-title"
                         style={{
                            color: mode === 'dark' ? 'white' : '' 
                        }}
                        >Order Details</h1>
                        <table className="data-table">
                            <thead className="table-header" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                <tr>
                                    <th>Payment Id</th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Pincode</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-row" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                    <td>3393939</td>
                                    <td><img className="image" src="https://dummyimage.com/720x400" alt="Order" /></td>
                                    <td>Title</td>
                                    <td>₹100</td>
                                    <td>pots</td>
                                    <td>name</td>
                                    <td>india</td>
                                    <td>82828</td>
                                    <td>929929929929</td>
                                    <td>kkakka@gmail.com</td>
                                    <td>12 Aug 2019</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            case 'user':
                return (
                    <div className="panel-content">
                        <h1 className="panel-title"
                         style={{
                            color: mode === 'dark' ? 'white' : '' 
                        }}
                        >User Details</h1>
                        <table className="data-table">
                            <thead className="table-header" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Pincode</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-row" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                    <td>1.</td>
                                    <td>Name</td>
                                    <td>Address</td>
                                    <td>181919</td>
                                    <td>1991818818</td>
                                    <td>kkk@gmail.com</td>
                                    <td>12 Aug 2019</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            default:
                return <div>Select a tab</div>;
        }
    };

    return (
        <div className="container">
            <div className="button-container" >
                <button 
                    className={`nav-button ${activeTab === 'product' ? 'active' : ''}`}
                    onClick={() => setActiveTab('product')}
                    style={{
                        background: mode==='dark' ? 'rgb(46, 49, 55)' : '',
                        color: mode === 'dark' ? 'white' : ''    
                    }}
                >
                    <MdOutlineProductionQuantityLimits />
                    Products
                </button>
                <button 
                    className={`nav-button ${activeTab === 'order' ? 'active' : ''}`}
                    onClick={() => setActiveTab('order')}
                    style={{
                        background: mode==='dark' ? 'rgb(46, 49, 55)' : '',
                        color: mode === 'dark' ? 'white' : ''    
                    }}
                >
                    <AiFillShopping />
                    Orders
                </button>
                <button 
                    className={`nav-button ${activeTab === 'user' ? 'active' : ''}`}
                    onClick={() => setActiveTab('user')}
                    style={{
                        background: mode==='dark' ? 'rgb(46, 49, 55)' : '',
                        color: mode === 'dark' ? 'white' : ''    
                    }}
                >
                    <FaUser />
                    Users
                </button>
            </div>
            {renderContent()}
        </div>
    );
}

export default DashboardTab;
