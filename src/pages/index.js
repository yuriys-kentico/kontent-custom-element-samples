import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FilterList from "../components/filterList"
import CustomElementCardList from "../components/customElementCardList"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        categories: allElementsJson {
          distinct(field: categories)
        }
        elements: allElementsJson(sort: { fields: title }) {
          edges {
            node {
              id
              title
              description
              readmeUrl
              thumbnailUrl {
                publicURL
              }
              categories
            }
          }
        }
      }
    `
  )
  const initialCategories = data.categories.distinct
    .map(category => ({
      title: category,
      selected: false,
    }))
    .sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))

  const [categories, setCategories] = useState(initialCategories)

  const toggleCategory = category => {
    const index = categories.findIndex(
      stateCategory => stateCategory.title === category.title
    )
    const newCategories = [...categories]
    newCategories[index] = { ...category, selected: !category.selected }
    setCategories(newCategories)
  }

  const [searchText, setSearchText] = useState("")

  const activeCategories = categories.filter(c => c.selected).map(c => c.title)

  const allElements = data.elements.edges.map(e => e.node)

  const visibleElements = allElements.filter(element => {
    const matchesCategoryFilter = satisfiesCategoryFilters(
      element,
      activeCategories
    )
    const matchesSearchTextFilter = satisfiesSearchTextFilter(
      element,
      searchText
    )

    return matchesCategoryFilter && matchesSearchTextFilter
  })

  return (
    <Layout>
      <SEO title="Home" />
      <section className="section grid">
        <div className="grid__row">
          <div className="grid__col grid__col--12">
            <div className="js-pagination-list">
              <div className="heading heading--h2 heading--center heading--indent-content">
                <h2>
                  Custom element sample gallery
                  <strong className="highlight">.</strong>
                </h2>
              </div>
              <div className="grid__row">
                <div className="grid__col grid__col--12 grid__col--md-3 grid__col--lg-span-2 grid__col--lg-2 js-integrations-filter-wrapper">
                  <div className="js-integrations-filter">
                    <FilterList
                      title="Category"
                      categories={categories}
                      onToggleCategory={c => toggleCategory(c)}
                      onChangeSearchText={t => setSearchText(t)}
                    />
                  </div>
                </div>
                <div className="grid__col grid__col--12 grid__col--md-9 grid__col--lg-7">
                  <CustomElementCardList customElements={visibleElements} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function satisfiesCategoryFilters(element, activeCategories) {
  if (activeCategories.length < 1) {
    return true
  } else if (!element.categories) {
    return false
  }
  return element.categories.some(c => activeCategories.includes(c))
}

function satisfiesSearchTextFilter(element, searchText) {
  const minLength = 3

  if (searchText && searchText.length >= minLength) {
    const titleHasMatch = textHasMatch(element.title, searchText)
    const descriptionHasMatch = textHasMatch(element.description, searchText)
    const categories = element.categories.join(" ")
    const categoriesHasMatch = textHasMatch(categories, searchText)
    return titleHasMatch || descriptionHasMatch || categoriesHasMatch
  }
  return true
}

function cleanText(text) {
  const ignoredCharsRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g
  return text.toLowerCase().replace(ignoredCharsRegex, "")
}

function textHasMatch(text, searchText) {
  const searchTextCleanStartsWith = cleanText(searchText)
  const searchTextCleanIncludes = ` ${searchTextCleanStartsWith}`

  const textCleaned = cleanText(text)
  return (
    textCleaned.startsWith(searchTextCleanStartsWith) ||
    textCleaned.includes(searchTextCleanIncludes)
  )
}

export default IndexPage
