import React from 'react'
import reactCSS from 'reactcss'
import { Control } from '../../components/control'
import { ControlBox } from '../../components/control-box'
import { Select } from '../../components/select'

import { Player } from './player'

export class PlayButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      variant: 'simple'
    }

    this.variantOptions = [{
      value: 'simple'
    }, {
      value: 'details'
    }]
  }

  selectVariant(variant) {
    this.setState({ variant })
  }


  render() {
    const styles = reactCSS({
      'default': {
        container: {
          marginBottom: '15px'
        }
      }
    })

    return (
      <div style={styles.container}>
        <Player episode="/assets/web-player/v5/episode.json" config="/assets/web-player/v5/config.json">
          <root class="p-4 flex justify-center">
            <play-button variant={this.state.variant}></play-button>
          </root>
        </Player>
        <ControlBox>
          <Control label="variant" description="Play button variants" last={ true }>
            <Select options={this.variantOptions} onChange={this.selectVariant.bind(this)} />
          </Control>
        </ControlBox>
      </div>
    )
  }
}
