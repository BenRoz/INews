import React from 'react'
import UserPreference from '../components/UserPreference/UserPreference'
import preferenceData from '../utils/preferenceData'
import Layout from '../components/layout'
import SEO from '../components/seo'

const UserPreferencePage = () => (
  <Layout>
    <SEO title="Page two" />
    <UserPreference preferenceData={preferenceData} />
  </Layout>
)

export default UserPreferencePage
