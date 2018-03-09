import React, { Component } from 'react';

export default ({ 
    lable,
    type,
    value,
    onChange, 
}) => 
    <label> 
      <input type="type" value={value} onChange={onChange} /> 
    </label>