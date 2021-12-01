# universal-menu

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/universal-menu.svg)](https://www.npmjs.com/package/universal-menu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save universal-menu
```

## Usage

```jsx
import React, { Component } from 'react'

import UniversalMenu from 'universal-menu'
import 'universal-menu/dist/index.css'

class Example extends Component {
  render() {
    return <UniversalMenu
        handleCreateShowroom={handleCreateShowroom}
        handleCreateCoverPages={handleCreateCoverPages} 
        LIBRARY_URL={LIBRARY_URL} 
        CURRENT_ORG={CURRENT_ORG}
        toggleLight={toggleLight}
        toggleDark={toggleDark}
        mode={mode}
        accounts={accountNames}
        switchAccount={switchAccount}
        logout={logout}
    />
  }
}
```

## License

MIT © [judeinno](https://github.com/judeinno)
