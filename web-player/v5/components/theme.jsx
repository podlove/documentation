import React from 'react'
import { setTheme } from '@podlove/player-actions/theme'
import { PodloveWebPlayer } from '@podlove/player-react'

import { Control } from '../../components/control'
import { ControlBox } from '../../components/control-box'
import { ColorPicker } from '../../components/color-picker'
export class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.store = null
    this.state = {
      brand: "#E64415",
      brandDark: "#235973",
      brandDarkest: "#1A3A4A",
      brandLightest: "#E9F1F5",
      shadeDark: "#807E7C",
      shadeBase: "#807E7C",
      contrast: "#000",
      alt: "#fff"
    };
  }

  updateColor(token) {
    return color => {
      this.setState({ [token]: color });
      this.store.dispatch(setTheme({
        version: 5,
        theme: {
          tokens: this.state
        }
      }))
    }
  }

  loadStore(store) {
    this.store = store
  }

  render() {
    return (
      <div>
       <PodloveWebPlayer episode="/assets/web-player/v5/episode.json" config="/assets/web-player/v5/config.json" onLoaded={ this.loadStore.bind(this) } />

        <ControlBox>
          <Control label="brand" description="Podcast Show Name, Subscribe Button">
            <ColorPicker color={this.state.brand} onChange={this.updateColor('brand')}/>
          </Control>
          <Control label="brandDark" description="Player Controls, Background Tabs, Social Icons">
            <ColorPicker color={this.state.brandDark} onChange={this.updateColor('brandDark')}/>
          </Control>
          <Control label="brandDarkest" description="Hover Play Button">
            <ColorPicker color={this.state.brandDarkest} onChange={this.updateColor('brandDarkest')}/>
          </Control>
          <Control label="brandLightest" description="Background Player">
            <ColorPicker color={this.state.brandLightest} onChange={this.updateColor('brandLightest')}/>
          </Control>
          <Control label="shadeDark" description="Dotted Lines">
            <ColorPicker color={this.state.shadeDark} onChange={this.updateColor('shadeDark')}/>
          </Control>
          <Control label="contrast" description="Text Player">
            <ColorPicker color={this.state.contrast} onChange={this.updateColor('contrast')}/>
          </Control>
          <Control label="alt" description="Text Tabs" last={ true }>
            <ColorPicker color={this.state.alt} onChange={this.updateColor('alt')}/>
          </Control>
        </ControlBox>
      </div>
    );
  }
}
