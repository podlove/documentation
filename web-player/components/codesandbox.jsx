import React from 'react'
import reactCSS from 'reactcss'

export class CodeSandbox extends React.Component {
  render() {
    const styles = reactCSS({
      'default': {
        sandbox: {
          width: '100%', border: 'none', height: '600px', marginBottom: '15px'
        },
      }
    })

    return <iframe
      src={`https://codesandbox.io/embed/${this.props.sandbox}?autoresize=1&hidenavigation=1&codemirror=1&fontsize=14`}
      title={this.props.title}
      style={styles.sandbox}
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    ></iframe>
  }
}
