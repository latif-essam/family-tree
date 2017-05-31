import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import Name from './Name'

const ListItem = ({ name }) =>
  <li>
    <Link to={`/${name}`}>
      <Name>{name}</Name>
    </Link>
  </li>


ListItem.propTypes = {
  name: PropTypes.string.isRequired
}


export default ListItem