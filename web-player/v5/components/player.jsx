import { toggleTab } from '@podlove/player-actions/tabs'
import { requestPlaytime } from '@podlove/player-actions/timepiece';
import loadScripts from 'load-scripts';
import React from "react";
import reactCSS from 'reactcss'
import { isEqual, debounce, omit } from 'lodash'
import { renderToString } from 'react-dom/server'

const embedScript = 'https://cdn.podlove.org/web-player/5.x/embed.js'
export class Player extends React.Component {
    constructor(props) {
      super(props)
      this.playerRef = React.createRef();
      this.mountIframe = debounce(() => {
        const node = this.playerRef.current
        if (!node) {
          return
        }

        if (this.props.variant) {
          node.setAttribute('data-variant', this.props.variant)
        }

        node.innerHTML = this.props.children ? renderToString(this.props.children) : '';

        window.podlovePlayer(node, this.props.episode, this.props.config).then(store => {
          this.props.onLoaded && this.props.onLoaded(store)

          if (this.props.playtime) {
            store.dispatch(requestPlaytime(this.props.playtime));
          }

          if (this.props.tab) {
            store.dispatch(toggleTab(this.props.tab))
          }
        })
      }, 600)
    }

    async componentDidMount() {
      window.podlovePlayer = undefined;
      await loadScripts(embedScript).then(this.mountIframe.bind(this))
    }

    componentWillReceiveProps(props) {
      if (isEqual(omit(props, 'onLoaded'), omit(this.props, 'onLoaded'))) {
        return
      }

      this.props = props
      this.mountIframe()
    }

    render() {
      const styles = reactCSS({
        'default': {
          player: {
            marginBottom: '15px'
          }
        }
      })

      return (
        <div style={styles.player} ref={this.playerRef}></div>
      )
    }
}
