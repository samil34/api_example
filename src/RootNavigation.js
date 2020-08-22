// RootNavigation.js

import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
    console.log('Gelen: ', navigationRef.current);
  navigationRef.current?.navigate(name, params);
}

export function reset(name, params) {
    navigationRef.current?.reset(name, params);
  }

// add other navigation functions that you need and export them