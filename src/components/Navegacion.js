import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0;
  }
`
const NavLink = styled(Link)`
  color: #fff;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  text-decoration: none;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }
  &.pagina-actual {
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #fff;
  }
`

const Navegacion = () => {
  return (
    <Nav>
      <NavLink to={"/"} activeClassName="pagina-actual">
        Inicio
      </NavLink>
      <NavLink to={"/nosotros"} activeClassName="pagina-actual">
        Nosotros
      </NavLink>
      <NavLink to={"/propiedades"} activeClassName="pagina-actual">
        Propiedades
      </NavLink>
    </Nav>
  )
}

export default Navegacion
