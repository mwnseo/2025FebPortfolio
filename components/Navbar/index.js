import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            href="/"
            onClick={handleClick}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#FAFAD2",
              cursor: "pointer",
              fontWeight: "bold",
              textShadow: "0 0 10px rgba(229, 231, 150, 0.5)",
            }}
          >
            <Span style={{ fontSize: "1.8rem" }}>ML</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink
            href="skills"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </NavLink>
          <NavLink
            href="experience"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("experience")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Experience
          </NavLink>
          <NavLink
            href="projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </NavLink>
          <NavLink
            href="education"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("education")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Education
          </NavLink>
          <NavLink
            href="contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            {["About", "Skills", "Experience", "Projects", "Education"].map(
              (item, index) => (
                <MobileLink
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(!isOpen)}
                  index={index}
                >
                  {item}
                </MobileLink>
              )
            )}
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
