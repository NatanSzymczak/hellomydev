const path = require(`path`);
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query queryCMSPage {
            allDatoCmsArticle {
                nodes {
                    id
                    image {
                        url
                    }
                    title
                }
            }
        }
    `);

    result.data.allDatoCmsArticle.nodes.forEach(post => {
        createPage({
            path: `articles/`,
            component: component,
            context: {},
        });
    });
};
