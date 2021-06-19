import React from 'react'
import reactCSS from 'reactcss'
import { PodloveWebPlayer } from '@podlove/player-react'

import { Control } from '../../components/control'
import { ControlBox } from '../../components/control-box'
import { Select } from '../../components/select'

export class Variants extends React.Component {
  constructor(props) {
    super(props);
    this.store = null
    this.state = {
      variant: 'xl'
    };

    this.variants = [{
      value: 'xl',
      name: 'XL'
    }, {
      value: 'l',
      name: 'L'
    }, {
      value: 'm',
      name: 'M'
    }]
  }

  updateVariant(variant) {
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
      <div style={ styles.container }>
        <PodloveWebPlayer style={{ marginBottom: '15px' }} episode="/assets/web-player/v5/episode.json" config="/assets/web-player/v5/config.json" variant={this.state.variant} />
        <ControlBox>
          <Control label="variant" description="Player layout variant" last={ true }>
            <Select options={this.variants} onChange={this.updateVariant.bind(this)} value={this.state.variant}></Select>
          </Control>
        </ControlBox>
      </div>
    )
  }
}
