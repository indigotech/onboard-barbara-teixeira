import * as React from "react"
import PropsTypes from "prop-types"

const TableHead: React.FunctionComponent = (props) => {
  return <thead>{props.children}</thead>
}

TableHead.propTypes = { children: PropsTypes.node.isRequired }

export { TableHead }
