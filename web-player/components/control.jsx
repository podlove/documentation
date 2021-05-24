import React from 'react'
import reactCSS from 'reactcss'

export class Control extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = reactCSS({
      'default': {
        container: {
          display: 'flex',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          alignItems: 'center',
          padding: '10px'
        },
        label: {
          fontWeight: '700',
          width: '20%',
          marginRight: '20px',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        control: {
          width: '30%',
          marginRight: '20px'
        },
        description: {
          width: '45%',
          fontStyle: 'italic',
          fontWeight: 300,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      },
      'last': {
        container: {
          borderBottom: 'none'
        },
      }
    }, {
      last: this.props.last
    });

    return (
      <div style={ styles.container }>
        <div style={ styles.label }>{ this.props.label }</div>
        <div style={ styles.control }>
          { this.props.children }
        </div>
        <div style={ styles.description }>
          { this.props.description }
        </div>
      </div>
    )
  }
}
