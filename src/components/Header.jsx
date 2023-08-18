import React from "react";

const courseStatus = ["All","Completed","Upcoming","Active"]

function Header() {
    return (
      <>
        <h1>My Items(3)</h1>
        <div className="course-status">
            {courseStatus.map((s) => (
                <div key={s} className="active">{s}</div>
            ))}
        </div>
      </>
    );
  }
  
  export default Header;
  