import React, { Component } from 'react';

const IssueAssignee = ({ assignee }) => {
  return (
    <div className="IssueAssignee">
      <span>{assignee}</span>
    </div>
  );
};

export default IssueAssignee;
