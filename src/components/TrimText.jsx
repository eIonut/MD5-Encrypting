/* eslint-disable react/prop-types */
const TrimText = ({ children, maxChars = 30 }) => {
  const trimmed =
    children.length > maxChars
      ? children.substring(0, maxChars) + "..."
      : children;

  return <span>{trimmed}</span>;
};

export default TrimText;
