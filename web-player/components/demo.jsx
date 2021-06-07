import React from 'react'
import reactCSS from 'reactcss'

export class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = reactCSS({
      'default': {
        video: {
            display: 'inline-block',
            width: '100%'
        }
      }
    })

    return (
        <video style={styles.video} src={this.props.src} muted autoPlay loop></video>
    )
  }
}

