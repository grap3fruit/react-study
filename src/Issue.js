import React, { Component } from 'react';
import IssueTitle from './IssueTitle.js';
import IssueAuthor from './IssueAuthor.js';
import IssueMilestone from './IssueMilestone.js';
import IssueLabels from './IssueLabels.js';
import IssueAssignees from './IssueAssignees.js';
import IssueCheckbox from './IssueCheckbox.js';

const Issue = ({ issues }) => {
  const issueItems = issues.map((issue, index) => (
    <li key={'Issue' + index} className="Issue">
      <IssueCheckbox key={'IssueCheckbox' + index} />
      <IssueTitle key={'IssueTitle' + index} title={issue.title} />
      <IssueAuthor key={'IssueAuthor' + index} author={issue.author} />
      <IssueMilestone key={'IssueMilestone' + index} milestone={issue.milestone} />
      <IssueLabels key={'IssueLabels' + index} labels={issue.labels} />
      <IssueAssignees key={'IssueAssignees' + index} assignees={issue.assignees} />
    </li>
  ));

  return issueItems;
};

export default Issue;
