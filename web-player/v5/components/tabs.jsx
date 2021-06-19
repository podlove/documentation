import React from 'react'
import { PodloveWebPlayer } from '@podlove/player-react'
import { toggleTab } from '@podlove/player-actions/tabs'

import { Control } from '../../components/control'
import { ControlBox } from '../../components/control-box'
import { Select } from '../../components/select'


export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.store = null
    this.state = {
      tab: 'chapters'
    };
    this.tabs = [{
      name: 'Chapters',
      value: 'chapters',
    }, {
      name: 'Share',
      value: 'share'
    }, {
      name: 'Files',
      value: 'files'
    }, {
      value: 'Shownotes',
      value: 'shownotes',
    }, {
      value: 'Playlist',
      value: 'playlist',
    }, {
      value: 'Transcripts',
      value: 'transcripts',
    }];
  }

  updateTab(tab) {
    this.store.dispatch(toggleTab(tab))
  }

  loadStore(store) {
    this.store = store
    this.store.dispatch(toggleTab('chapters'))
  }

  render() {
    return (
      <div>
        <PodloveWebPlayer style={{ marginBottom: '15px' }} episode="/assets/web-player/v5/episode.json" config="/assets/web-player/v5/config.json" onLoaded={ this.loadStore.bind(this) }>
          <root class="p-4 flex justify-center">
            <tab name="chapters">Chapters</tab>
            <tab name="share">Share</tab>
            <tab name="files">Files</tab>
            <tab name="shownotes">Shownotes</tab>
            <tab name="playlist">Playlist</tab>
            <tab name="transcripts">Transcripts</tab>
          </root>
        </PodloveWebPlayer>

        <ControlBox>
        <Control label="tab" description="Active tab" last={ true }>
            <Select options={this.tabs} onChange={this.updateTab.bind(this)}></Select>
          </Control>
        </ControlBox>
      </div>
    );
  }
}
