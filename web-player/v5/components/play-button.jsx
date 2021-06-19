import React from 'react'
import reactCSS from 'reactcss'
import { PodloveWebPlayer } from '@podlove/player-react'

import { Control } from '../../components/control'
import { ControlBox } from '../../components/control-box'
import { Select } from '../../components/select'

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
        <PodloveWebPlayer style={{ marginBottom: '15px' }} episode="/assets/web-player/v5/episode.json" config="/assets/web-player/v5/config.json">
          <root class="p-4 flex justify-center">
            <play-button variant={this.state.variant}></play-button>
          </root>
        </PodloveWebPlayer>
        <ControlBox>
          <Control label="variant" description="Play button variants" last={ true }>
            <Select options={this.variantOptions} onChange={this.selectVariant.bind(this)} />
          </Control>
        </ControlBox>
      </div>
    )
  }
}
