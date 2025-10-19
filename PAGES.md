# Pages Structure of the App

## Header

- Logo and catchphrase
- Wallet Connect

## Pages

### Index

|       property   |  value |
| ---------------- | ------------ |
| page             | src/app/page.tsx |
| description      | Entry page |
| subscribed_only  | no         |

#### Content

- Buttons to:
    - [Try the app](#dashboard)
    - [Subscribe to get the full experience](#subscribe)
    - [Support a filmmaker](#supportfilmmaker)
- Information:
    - Text about the project


### Dashboard

|       property   |  value |
| ---------------- | ------------ |
| page             | src/app/dashboard/page.tsx |
| description      |  |
| subscribed_only  | no         |

#### Content

- Buttons to:
    - [Film tokens comparison](#filmtokens)


### FilmTokens

|       property   |  value |
| ---------------- | ------------ |
| page             | src/app/tokens/page.tsx |
| description      | Film Tokens |
| subscribed_only  | no         |

### FilmToken Details

|       property   |  value |
| ---------------- | ------------ |
| page             | src/app/tokens/[[...tokens]].tsx |
| description      | Film Token Details |
| subscribed_only  | no         |

### Subscribe

|       property   |  value |
| ---------------- | ------------ |
| page             | src/app/subscribe/page.tsx |
| description      | Subscribe to the app |
| subscribed_only  | no         |

### SupportFilmMaker

|       property   |  value |
| ---------------- | ------------ |
| page             | src/app/support-film-maker/page.tsx |
| description      | Support a film maker by subscribing to the app |
| subscribed_only  | no         |

### WhatToWatchAgent

|       property   |  value |
| ---------------- | ------------ |
| page             | src/app/what-to-watch/page.tsx |
| description      | What to watch agent |
| subscribed_only  | yes         |