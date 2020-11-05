import React, { Component } from 'react';

const IssueAuthor = (props) => {
  return (
    <div className="IssueAuthor">
      <span>{props.author}</span>
    </div>
  );
};

export default IssueAuthor;
