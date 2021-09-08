import React, { FC, useMemo } from "react";
import styled from "styled-components";

const StyledIssue = styled.div`
  padding: 10px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
`;

const Issue: FC<{ issue: { title: string } }> = ({ issue }) => {
  return <StyledIssue>{issue.title}</StyledIssue>;
};

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  min-height: 400px;
  width: 25%;
  border-radius: 3px;
  background: #e4e7ec;
`;

const List: FC<{ status: string; issues: any[] }> = ({ status, issues }) => {
  const filteredIssues = useMemo(
    () => issues.filter((i) => i.status === status),
    [status, issues]
  );
  return (
    <StyledList>
      <div>{status}</div>
      <div
        style={{
          padding: "0 .5rem",
        }}
      >
        {filteredIssues.map((issue) => {
          return <Issue issue={issue} />;
        })}
      </div>
    </StyledList>
  );
};

const StyledLists = styled.div`
  display: flex;
`;

const Lists = () => {
  const status = useMemo(() => ["ToDo", "In Progress", "Test", "Done"], []);
  const issues = useMemo(
    () => [
      { title: "Some todo", status: "ToDo" },
      { title: "Some in progress", status: "In Progress" },
      { title: "Some test", status: "Test" },
      { title: "Some done", status: "Done" },
    ],
    []
  );

  return (
    <StyledLists>
      {status.map((status) => {
        return <List key={status} status={status} issues={issues} />;
      })}
    </StyledLists>
  );
};

const Board = () => {
  return (
    <div>
      <Lists />
    </div>
  );
};
export default Board;
