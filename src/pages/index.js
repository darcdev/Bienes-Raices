import React from "react"
import Layout from "../components/Layout"
import useInicio from "../hooks/useInicio"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import heroCss from "../css/hero.module.css"

const BackImage = styled(BackgroundImage)`
  height: 600px;
`
const Index = () => {
  const dataInicio = useInicio()

  const { nombre, contenido, imagen } = dataInicio[0]

  return (
    <Layout>
      <BackImage tag="section" fluid={imagen.sharp.fluid} fadeIn="soft">
        <div className={heroCss.imagenbg}>
          <h1 className={heroCss.titulo}>
            Venta de casas y departamentos exclusivos
          </h1>
        </div>
      </BackImage>
      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1>{nombre}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >
            {contenido}
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default Index
