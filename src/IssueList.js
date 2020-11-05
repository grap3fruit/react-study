import React, { Component } from 'react';
import Issue from './Issue.js';

const ISSUE = [
  {
    title: 'title1',
    author: 'author1',
    milestone: 'week1',
    labels: ['iOS', 'web'],
    assignees: ['author1', 'author2'],
  },
  {
    title: 'title2',
    author: 'author2',
    milestone: 'week1',
    labels: ['iOS'],
    assignees: ['author3', 'author4'],
  },
  {
    title: 'title3',
    author: 'author3',
    milestone: 'week2',
    labels: ['iOS', 'web', 'feat'],
    assignees: ['author2', 'author4'],
  },
];

const IssueList = (props) => {
  return (
    <div className="IssueList">
      <section className="IssueList__header">
        <div className="IssueList__header__filter">
          <div className="IssueList__header__filter__syntax">syntax</div>
          <div className="IssueList__header__filter__contents">contents</div>
        </div>
        <button className="IssueList__header__labels">labels</button>
        <button className="IssueList__header__milestones">milestones</button>
        <button className="IssueList__header__new-issue">new issue</button>
      </section>
      <section className="IssueList__list">
        <div className="IssueList__list__filter">
          <div className="IssueList__list__filter__checkbox">checkbox</div>
          <div className="IssueList__list__filter__author">author</div>
          <div className="IssueList__list__filter__label">label</div>
          <div className="IssueList__list__filter__milestone">milestone</div>
          <div className="IssueList__list__filter__assignee">assignee</div>
        </div>
        <ul className="IssueList__list__filter__list">
          <li className="IssueList__list__filter__list__issue">
            <div className="issue__checkbox"></div>
            <div className="issue__title"></div>
            <div className="issue__author"></div>
            <div className="issue__milestone"></div>
            <div className="issue__labels"></div>
            <div className="issue__assignees"></div>
          </li>
          <Issue issues={ISSUE} />
        </ul>
      </section>
    </div>
  );
};

export default IssueList;
