import React from 'react';
import { Slider } from '@mui/material';

export const WageRange = (props) => {
  const { wages, onWageChange } = props;
  const [value, setValue] = React.useState(wages == null ? [20, 2000] : wages);

  const marks = [
    { value: 0, label: '$ 0.00' },
    { value: 10000, label: '$ 10,000.00' },
  ];

  const handleChange = (event, newValue) => {
    onWageChange(newValue);
    setValue(newValue);
  };

  return (
    <Slider
      value={value}
      onChange={handleChange}
      marks={marks}
      min={0}
      max={10000}
      valueLabelDisplay="on"
    />
  );
};
