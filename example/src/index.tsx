import * as React from 'react';
import ReactDOM from 'react-dom';
import { getAll as unifonts, fraktur } from '../../src';

const Demo = () => {
  const [value, setValue] = React.useState(
    'The quick brown fox jumps over the lazy dog'
  );
  return (
    <div
      style={{
        padding: 20,
        width: 600,
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          color: '#007fff',
        }}
      >
        {fraktur('uniFonts Demo')}
      </h1>
      <input
        type='text'
        placeholder='Type here...'
        style={{
          width: 500,
          height: 50,
          fontSize: 16,
          padding: '0 20px',
          boxShadow: '0px 1px 8px #20212447',
          borderRadius: '8px',
          outline: 'none',
          border: 'none',
        }}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <ul style={{ fontSize: 20, textAlign: 'left' }}>
        {unifonts(value).map((font, index) => {
          return (
            <>
              <li style={{ padding: 10 }} key={index}>
                {font.name}: {font.value}
              </li>
              <hr />
            </>
          );
        })}
      </ul>
    </div>
  );
};

ReactDOM.render(
  <div>
    <Demo />
  </div>,
  document.getElementById('app')
);
