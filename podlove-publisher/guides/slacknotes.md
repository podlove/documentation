---
layout: page
title: "Slacknotes"
---

A module to extract link lists from a Slack channel to be used in show notes. 

## Demo

<video src="{{ site.url }}/assets/slacknotes/slacknotes-demo.mp4" muted controls width="600"></video>

## How to get a Slack OAuth Access Token

Go to [api.slack.com/apps](https://api.slack.com/apps).

<img src="{{ site.url }}/assets/slacknotes/10-your-apps.png" class="img-responsive img-slackguide">

Click “Create New App”

<img src="{{ site.url }}/assets/slacknotes/20-create-app.png" class="img-responsive img-slackguide">

Give it a name like “Podlove Slacknotes” and select your Slack Workspace.

Click “Create App”

<img src="{{ site.url }}/assets/slacknotes/30-scopes.png" class="img-responsive img-slackguide">

In the menu, go to “OAuth & Permissions” and scroll down to the “Scopes” section. Use the “Select Permission Scopes” field to add the following scopes:

- `channels:history`
- `channels:read`

Click “Save Changes”

<img src="{{ site.url }}/assets/slacknotes/40-permissions.png" class="img-responsive img-slackguide">

Scroll back to the top of the page and click “Install App to Workspace”.

<img src="{{ site.url }}/assets/slacknotes/50-authorize.png" class="img-responsive img-slackguide">

Click “Authorize”

<img src="{{ site.url }}/assets/slacknotes/60-token.png" class="img-responsive img-slackguide">

You are redirected back to the “OAuth & Permissions” page which now shows an “OAuth Access Token”. Copy this token.

<img src="{{ site.url }}/assets/slacknotes/70-publisher.png" class="img-responsive img-slackguide">

Open the Podlove Publisher “Modules” page and find the “Slacknotes” section. Paste the OAuth Access Token into the field. Click “Save Changes” at the bottom of the page.

Now go to the “Slacknotes” entry in the Podlove menu, select a channel and generate show notes.

Have fun!

<style>
#content .img-slackguide {
  margin-top: 4em;
}

#content img {
  box-shadow: 1px 1px 2px rgba(0,0,0, 0.1), 0px 0px 4px rgba(0,0,0, 0.1);
}
</style>
