import React, { useState } from 'react';
import LineForm from './LineForm';
import Line from './Line';

function App() {
  const testLines = [{
    deviceName: 'Ryan',
    edit: false,
    isByod: true,
    cost: 26.67
  },
  {
    deviceName: 'jim',
    edit: false,
    isByod: true,
    cost: 26.67
  },
  {
    deviceName: 'Tony',
    edit: false,
    isByod: true,
    cost: 26.67
  }
  ]

  //STORE LINE STATE IN ARRAY OF OBJECTS
  const [lines, setLines] = useState(testLines);

  const updateInfo = (line) => {
    setLines()
  }
  const toggleEdit = (line) => {
    if (line.edit === true) {
      const prev = lines.filter((item) => lines.indexOf(item) !== lines.indexOf(line));
      console.log(prev);
      setLines((prev) => [...prev, {
        deviceName: line.deviceName,
        edit: false,
        isByod: line.isByod,
        cost: line.cost
      }
      ]);
      console.log(lines)
    } else if (line.edit === false) {
      line.edit = true;

    }
  }
  return (
    <div className="App">
      {lines.map((line) => <Line line={line} toggleEdit={toggleEdit} key={`lineKey_${lines.indexOf(line)}`}/>)}
    </div>
  );
}

export default App;
