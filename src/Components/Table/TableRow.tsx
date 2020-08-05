import * as React from "react"
import PropsTypes from "prop-types"

const TableRow: React.FunctionComponent = (props) => {
  return <tr>{props.children}</tr>
}

TableRow.propTypes = { children: PropsTypes.node.isRequired }

export { TableRow }
