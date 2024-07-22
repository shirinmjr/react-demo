import { resumeData } from "./resumeData";
const Resume = () => {
  return (
    <div id="resume" className="flex flex-col text-left h-97 py-20">
      <h1>Resume</h1>
      {resumeData.map((data, index) => {
        return (
          <div key={index}>
            <h2>{data.title}</h2> <h3>{data.company}</h3> | {data.type}{" "}
            {data.startDate} - {data.endDate}
            <ul className="">
              {data.responsibilities.map((res, index) => {
                return <li key={index}>{res}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default Resume;
