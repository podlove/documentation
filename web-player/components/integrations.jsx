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

    const intergation = (data) => <a style={styles.image} href={data.link}><img src={data.image} title={data.title} /></a>

    return (
        <div style={styles.container}>
            { this.props.integrations.map(intergation) }
        </div>
    )
  }
}

