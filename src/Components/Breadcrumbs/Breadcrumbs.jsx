import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ links }) => {
  return (
    <div style={breadcrumbStyle}>
      <Link to="/" style={breadcrumbLink}>
        Home
      </Link>
      {/* Humne 'links &&' add kiya hai taake undefined hone par error na aaye */}
      {links &&
        links.map((link, index) => (
          <React.Fragment key={index}>
            <span style={separator}>/</span>
            {link.path ? (
              <Link to={link.path} style={breadcrumbLink}>
                {link.name}
              </Link>
            ) : (
              <span style={{ color: "#999" }}>{link.name}</span>
            )}
          </React.Fragment>
        ))}
    </div>
  );
};

const breadcrumbStyle = {
  width: "100%",
  padding: "15px 20px",
  backgroundColor: "#f5f5f5",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid #eee",
};
const breadcrumbLink = {
  color: "#1a237e",
  textDecoration: "none",
  fontWeight: "500",
};
const separator = { margin: "0 10px", color: "#666" };

export default Breadcrumbs;
