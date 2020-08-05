import * as React from "react"
import PropsTypes from "prop-types"

const TableBody: React.FunctionComponent = (props) => {
  return <tbody>{props.children}</tbody>
}

TableBody.propTypes = { children: PropsTypes.node.isRequired }

export { TableBody }
