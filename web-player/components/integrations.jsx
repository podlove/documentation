import React from 'react'
import reactCSS from 'reactcss'

export class Integrations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = reactCSS({
      'default': {
        container: {
            display: 'flex',
        },
 
        image: {
            display: 'block',
            margin: '1em',
            width: '150px'
        }
      }
    })

    const imageStyle = data => reactCSS({
      default: {
        image: {
          display: 'block',
          margin: '1em',
          width: data.width || '150px'
        }
      }
    })

    const intergation = (data) => <a style={imageStyle(data).image} href={data.link} key={data.image}><img src={data.image} title={data.title} /></a>

    return (
        <div style={styles.container}>
            { this.props.integrations.map(intergation) }
        </div>
    )
  }
}

