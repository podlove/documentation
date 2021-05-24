import React from 'react'
import { setTheme } from '@podlove/player-actions/theme'
import { Control } from '../../components/control'
import { ControlBox } from '../../components/control-box'
import { ColorPicker } from '../../components/color-picker'

import { Player } from './player'

export class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.store = null
    this.state = {
      main: "#2B8AC6",
      highlight: "#ffffff"
    };
  }

  updateColor(token) {
    return color => {
      this.setState({ [token]: color });
      this.store.dispatch({
        type: 'SET_THEME',
        payload: this.state
      })
    }
  }

  loadStore(store) {
    this.store = store
  }

  render() {
    return (
      <div>
        <Player config="/assets/web-player/v4/config.json" onLoaded={ this.loadStore.bind(this) } />

        <ControlBox>
          <Control label="main" description="Primary color">
            <ColorPicker color={this.state.main} onChange={this.updateColor('main')}/>
          </Control>
          <Control label="highlight" description="Alternative color" last={ true }>
            <ColorPicker color={this.state.highlight} onChange={this.updateColor('highlight')}/>
          </Control>
        </ControlBox>
      </div>
    );
  }
}
