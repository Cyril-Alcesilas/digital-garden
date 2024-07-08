import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

const ArticlesPage = ({data}) => {
    const posts = data.allMarkdownRemark.nodes;
    return (
        <Layout pageTitle = "Articles">
            <h1>N'hésitez pas à consulter tous les articles dans mon jardin !</h1>
            <div>
                {posts.map((post) => (
                    <Link
                        to={`/articles/${post.frontmatter.slug}`}
                        key={post.id}
                    >
                    <h3>{post.frontmatter.title}</h3>
                    <p>{post.frontmatter.description}</p>
                    </Link>
                ))}
            </div>
        </Layout>
 );
};

export default ArticlesPage;

export const query = graphql`
query BlogList {
    allMarkdownRemark{
        nodes{
            frontmatter{
            title
            slug
            description
            }
            id
        }
    }
}
`;