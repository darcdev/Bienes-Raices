import React from "react"
import { Link } from "gatsby"
import Navegacion from "./Navegacion"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: lighter;
  span {
    font-weight: bold;
  }
`
const Header = () => {
  return (
    <header
      css={css`
        background-color: #0d283b;
        padding: 2rem;
      `}
    >
      <div
        css={css`
          max-width: 120rem;
          margin: 0 auto;
          text-align: center;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <LogoLink to="/">
          Bienes<span>Raices</span>
        </LogoLink>
        <div>
          <Navegacion />
        </div>
      </div>
    </header>
  )
}

export default Header
