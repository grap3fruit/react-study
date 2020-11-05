import React, { Component } from 'react';

const IssueMilestone = (props) => {
  return (
    <div className="IssueMilestone">
      <span>{props.milestone}</span>
    </div>
  );
};

export default IssueMilestone;
