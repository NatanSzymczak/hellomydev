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
    createPage({
        path: '/using-dsg',
        component: require.resolve('./src/templates/using-dsg.js'),
        context: {},
        defer: true,
    });
};
