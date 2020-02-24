import React from "react"
import PropTypes from "prop-types"

import FilterListItem from "./filterListItem"

function FilterList({ title, categories, onToggleCategory }) {
  return (
    <div className="filter accordion">
      <div className="filter__heading accordion__heading">{title}</div>
      <div className="filter__checkboxes list list--no-bullets accordion__list">
        <ul>
          {categories.map((category,i)=>(
          <FilterListItem category={category} id={i} key={i} onToggleCategory={c=>onToggleCategory(c)} />
          ))}
        </ul>
      </div>
    </div>
  )
}

FilterList.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    selected: PropTypes.bool
  })),
  onToggleCategory: PropTypes.func
}

export default FilterList
