import React, {Component} from 'react';

export default ({ id, name, initiative, onNameChange, onInitiativeChange }) => 
    <div className="card">
        <input type="text" value={name} onNameChange={e => onNameChange(id, e)} />
        <input type="number" value={initiative} onInitiativeChange={e => onInitiativeChange(id, e)} />
    </div>