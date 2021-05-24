import React from 'react'
import reactCSS from 'reactcss'

export class Select extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(event) {
    this.props.onChange && this.props.onChange(event.target.value)
  }

  render() {
    const styles = reactCSS({
      'default': {
        select: {
          width: '100%',
          border: '0px none',
          boxSizing: 'inherit',
          display: 'block',
          margin: 0,
          background: 'rgb(255, 255, 255)',
          padding: '6px 20px 6px 10px',
          fontSize: '13px',
          position: 'relative',
          transition: 'box-shadow 200ms ease-out 0s, opacity 200ms ease-out 0s',
          color: 'rgb(51, 51, 51)',
          boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 0px 1px inset',
          borderRadius: '4px',
          lineHeight: '20px',
          flex: '1 1 0%',
          height: '32px',
          userSelect: 'none',
          appearance: 'menulist'
        }
      }})

    return (
      <select style={styles.select} onChange={this.handleChange.bind(this)} value={this.props.value}>
        { this.props.options.map(option => <option value={option.value} key={option.value}>{option.name || option.value}</option>) }
      </select>
    )
  }
}

