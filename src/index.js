import React from 'react';
import ReactDOM from 'react-dom';
import { FilePicker } from '@furgonetka/ui';

/** here handle your callback */
const onChange = (event) => {
  console.log(event);
};

const groups = [
  {
    label: 'Faktura',
    key: 'invoice',
  },
  {
    label: 'Oświadczenie',
    key: 'statement',
  },
  {
    label: 'Inne dokumenty',
    key: 'others',
  },
];

const boxMessageWhenNoFile = (
  <>
    <span style={{color: '#046DB4'}}>WYBIERZ PLIK</span>
    <br />
    lub przeciągnij tutaj
  </>
);

const message = (
  <>
    Możesz przesłać <strong>maksymalnie 5 plików</strong> w formacie jpg, jpeg, png, gif, pdf, txt, doc, docx, zip lub
    rar o&nbsp;<strong>maksymalnym rozmiarze 5 MB</strong> każdy.
  </>
);

const rootNode = document.getElementById('root');
ReactDOM.render(
  <>
    <FilePicker
      onChange={onChange}
      fileUploadApiBaseUrl={'https://api-test.furgonetka.pl'}
      groupsOfFiles={groups}
      message={message}
      boxMessageWhenNoFile={boxMessageWhenNoFile}
      boxMessageWhenLoading={'Dodawanie...'}
      validation={{
        maxNumberOfFiles: 5,
        maxFileSizeInBytes: 5000000,
        accept: {
          'application/octet-stream': ['.jpeg', '.jpg', '.gif', '.png', '.zip', '.rar', '.txt', '.pdf', '.doc', '.docx'],
        },
      }}
      errorMessages={{
        'file-invalid-type': (filesCount) =>  'Nieobsługiwany format ' + (filesCount > 1 ? 'plików.' : 'pliku.'),
        'file-too-large': (filesCount) => 'Przekroczono dopuszczalny rozmiar ' + (filesCount > 1 ? 'plików.' : 'pliku.'),
        'file-too-small': (filesCount) => (filesCount > 1 ? 'Pliki nie zostały dodane' : 'Plik nie został dodany') + ', przekroczono maksymalną ilość plików.',
        'upload': (filesCount) =>   'Wystąpił problem podczas wgrywania ' + (filesCount > 1 ? 'plików.' : 'pliku.'),
      }}
    />
  </>, rootNode);


