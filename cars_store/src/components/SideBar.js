import React from 'react'
import '../App.css'

function SideBar({ Data, onSelectBrand }) {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {/* Default "All" option */}
        <li className="row" onClick={() => onSelectBrand("all")}>
          <div className="title">All</div>
        </li>

        {/* List the rest of the brands from props */}
        {Data.map((item, index) => (
          <li
            key={index}
            className="row"
            onClick={() => onSelectBrand(item.name)}
          >
            <div className="title">{item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}




export default SideBar
