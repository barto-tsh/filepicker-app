import React from 'react';
import ReactDOM from 'react-dom';
import { FilePicker } from '@furgonetka/ui';

/** here handle your callback */
const ourCallback = (event) => {
  console.log(event);
};

const rootNode = document.getElementById('root');
ReactDOM.render(
  <>
    <FilePicker fileUploadApiBaseUrl={'https://api-test.furgonetka.pl'} onChange={ourCallback} />
  </>, rootNode);


