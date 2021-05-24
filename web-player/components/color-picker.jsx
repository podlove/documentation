import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

export class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: props.color,
    };
  }

  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose() {
    this.setState({ displayColorPicker: false })
  };

  handleChange(color) {
    this.props.onChange(color.hex)
    this.setState({ color: color.hex })
  };

  render() {
    const styles = reactCSS({
      'default': {
        container: {
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          padding: '10px',
          background: 'rgb(250, 250, 250)',
          boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 0px 1px inset',
          borderRadius: '1em',
          margin: '0px',
          fontSize: '12px',
          fontWeight: '700',
          lineHeight: '1'
        },
        color: {
          width: '15px',
          height: '15px',
          borderRadius: '15px',
          background: this.state.color,
        },
        swatch: {
          background: '#fff',
          borderRadius: '15px',
          marginRight: '10px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',

        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
        text: {
          width: '100%',
          textAlign: 'center'
        }
      },
    });

    return (
      <div>
        <div style={ styles.container } onClick={ this.handleClick.bind(this) }>
          <div style={ styles.swatch }>
            <div style={ styles.color } />
          </div>
          <div style={ styles.text }>{ this.state.color.toUpperCase() }</div>
        </div>

        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose.bind(this) }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleChange.bind(this) } />
        </div> : null }

      </div>
    )
  }
}
