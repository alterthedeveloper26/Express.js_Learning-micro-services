const CommentList = ({ comments }) => {
  const renderComments = comments.map((cm) => {
    if (cm.status === "pending") {
      return <li key={cm.id}>Comment is pending</li>;
    } else if (cm.status === "rejected") {
      return <li key={cm.id}>Comment is rejected</li>;
    } else {
      return <li key={cm.id}>{cm.content}</li>;
    }
  });

  return (
    <div>
      <h6>{comments.length} comments</h6>
      {comments ? <ul>{renderComments}</ul> : null}
    </div>
  );
};

export default CommentList;
