import React from 'react';

const Grid = ({ config, data }) => {
  return (
    <table>
      <thead>
      <tr>
        {config.map((item, index) => <th key={index + item.field}>{item.title}</th>)}
      </tr>
      </thead>
      <tbody>
      {data.map((dataItem, index) => {
        return <tr key={index}>
          
            {config.map((configItem, index) => {
              if(dataItem[configItem.field] || configItem['component']) {
               
                if(configItem['component']){
                  const component = configItem['component'];
                  return typeof component === 'function' ? <td key={index}>{component({data: dataItem})}</td> : null;
                }
                
                return <td key={index}>{dataItem[configItem.field]}</td>
              }
            })}

        </tr>
      })}  
      </tbody>
    </table>
  );
}

export default Grid;
