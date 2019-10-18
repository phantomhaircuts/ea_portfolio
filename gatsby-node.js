exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const projectData = [
    {
      name: "Website",
      description: "A short commisioned web sits",
    },
    {
      name: "Video",
      description: "1 minute product video.",
    },
  ]
  projectData.forEach(project => {
    createPage({
      path: `/${project.name}`,
      component: require.resolve(`./src/templates/project-template.js`),
      context: { project },
    })
  })
}
