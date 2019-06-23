import React from 'react'
import ArticlesIndex from '../components/ArticlesIndex/ArticlesIndex'
import Layout from '../components/layout'
import SEO from '../components/seo'

const UserPreferencePage = ({ location }) => (
  <Layout>
    <SEO title="Articles" />
    <ArticlesIndex preferences={location.state.preferences} />
  </Layout>
)

export default UserPreferencePage
