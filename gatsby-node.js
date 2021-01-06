const urlSlug = require("url-slug")
//dinamic pages

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allStrapiPaginas {
        nodes {
          nombre
          id
        }
      }
      allStrapiPropiedades {
        nodes {
          nombre
          id
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("No hubo resultados", resultado.errors)
  }

  // static files results
  const paginas = result.data.allStrapiPaginas.nodes
  const propiedades = result.data.allStrapiPropiedades.nodes

  console.log(propiedades)

  // create template for pages
  paginas.forEach(pagina => {
    actions.createPage({
      path: urlSlug(pagina.nombre),
      component: require.resolve("./src/templates/Paginas.js"),
      context: {
        id: pagina.id,
      },
    })
  })

  // create template of properties

  propiedades.forEach(propiedad => {
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve("./src/templates/Propiedades"),
      context: {
        id: propiedad.id,
      },
    })
  })
}
