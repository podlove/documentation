import React from 'react'
import reactCSS from 'reactcss'

export class ControlBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = reactCSS({
      'default': {
        container: {
          boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 0px 1px inset',
          alignItems: 'center',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '15px'
        },
        header: {
          color: 'rgb(102, 102, 102)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          display: 'flex',
          padding: '5px 10px',
          marginBottom: '5px',
          fontSize: '0.8rem'
        },
        label: {
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
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      },
    });

    return (
      <div style={ styles.container }>
        <div style={ styles.header }>
          <div style={ styles.label }>Name</div>
          <div style={ styles.control }>Control</div>
          <div style={ styles.description }>Description</div>
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}
