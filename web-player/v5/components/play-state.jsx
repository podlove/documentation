import React from 'react'
import reactCSS from 'reactcss'
import { constructed, ready } from '@podlove/player-actions/lifecycle'
import { backendEnd, backendLoadingEnd } from '@podlove/player-actions/play'
import { Control } from '../../components/control'
import { ControlBox } from '../../components/control-box'
import { Select } from '../../components/select'

import { PodloveWebPlayer } from '@podlove/player-react'

export class PlayState extends React.Component {
  constructor(props) {
    super(props);
    this.store = null
    this.state = {
      playState: 'initialize'
    };

    this.playStates = [{
      value: 'initialize'
    }, {
      value: 'active'
    }, {
      value: 'ended'
    }]
  }

  updatePlayState(playState) {
    switch (playState) {
      case 'initialize':
        this.store.dispatch(constructed());
        break;
      case 'active':
        this.store.dispatch(backendLoadingEnd());
        break;
      case 'ended':
        this.store.dispatch(backendEnd())
    }
  }

  loadStore(store) {
    this.store = store
    this.store.dispatch(constructed());
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
        <PodloveWebPlayer style={{ marginBottom: '15px' }} episode="/assets/web-player/v5/episode.json" config="/assets/web-player/v5/config.json" onLoaded={ this.loadStore.bind(this) }>
          {`
          <root class="p-4 flex justify-center">
            <play-state on="initialized"><span>On Initialized</span></play-state>
            <play-state on="active"><span>On Active</span></play-state>
            <play-state on="ended"><span>On Ended</span></play-state>
          </root>
          `}
        </PodloveWebPlayer>
        <ControlBox>
          <Control label="on" description="Player states" last={ true }>
            <Select options={this.playStates} onChange={this.updatePlayState.bind(this)}></Select>
          </Control>
        </ControlBox>
      </div>
    )
  }
}
