import React from "react"
import styled from "@emotion/styled"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import ListadoPropiedades from "../components/ListadoPropiedades"

const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`

export const query = graphql`
  query($id: String!) {
    allStrapiPaginas(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        contenido
        imagen {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
const Paginas = ({
  data: {
    allStrapiPaginas: { nodes },
  },
}) => {
  const { nombre, contenido, imagen } = nodes[0]
  console.log(contenido)
  return (
    <Layout>
      <h1>{nombre}</h1>
      <main className="contenedor">
        <Contenido>
          <Image fluid={imagen.sharp.fluid} />
          <p>{contenido}</p>
        </Contenido>
      </main>

      {nombre === "Propiedades" && <ListadoPropiedades />}
    </Layout>
  )
}

export default Paginas
