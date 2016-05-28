/** @flow */
import React from 'react'
import SortIndicator from './SortIndicator'
import type { HeaderRendererParams } from './types'

/**
 * Default table header renderer.
 */
export default function defaultHeaderRenderer ({
  columnData,
  dataKey,
  disableSort,
  label,
  sortBy,
  sortDirection
}: HeaderRendererParams) {
  const showSortIndicator = sortBy === dataKey
  const children = [
    <div
      className='FlexTable__headerTruncatedText'
      key='label'
      title={label}
    >
      {label}
    </div>
  ]

  if (showSortIndicator) {
    children.push(
      <SortIndicator
        key='SortIndicator'
        sortDirection={sortDirection}
      />
    )
  }

  return children
}
