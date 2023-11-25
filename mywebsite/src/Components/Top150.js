import { interviewQuestions } from "../utility/Data_TopInterview";

const Top150 = () => {
  // Group questions by type
  const groupedQuestions = interviewQuestions.reduce((groups, question) => {
    const { type } = question;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(question);
    return groups;
  }, {});
  return (
    <div>
      {Object.entries(groupedQuestions).map(([type, questions]) => (
        <div key={type}>
          <h2>{type}</h2>
          {questions.map((question, index) => (
            <div key={index}>
              <p>Question: {question.question}</p>
              <p>Level: {question.level}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Top150;
