import React from 'react'

import { UniversalMenu } from 'universal-menu'
// import 'universal-menu/dist/index.css'

const App = ({
  LIBRARY_URL,
  CURRENT_ORG,
  handleCreateShowroom,
  handleCreateCoverPages,
  toggleLight,
  toggleDark,
  mode,
  switchAccount,
  accountNames,
  logout
}) => {
  const testAccountsNames = [
    'Blacksquad',
    'Masterwizr',
    'Sales and Marketing',
    'Accounting'
  ]
  return <UniversalMenu 
            handleCreateShowroom={handleCreateShowroom}
            handleCreateCoverPages={handleCreateCoverPages} 
            LIBRARY_URL={LIBRARY_URL} 
            CURRENT_ORG={CURRENT_ORG}
            toggleLight={toggleLight}
            toggleDark={toggleDark}
            mode={mode}
            accounts={accountNames || testAccountsNames}
            switchAccount={switchAccount}
            logout={logout}
          />
}

export default App
