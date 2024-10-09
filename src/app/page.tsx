
import Login from "./components/Login/page";
import Sidebar from "./components/Sidebar";


import SignupPage from "./components/SignUp/page";


import QuizPage from "./components/Assessment/page";
import Module from "./module/page";
import SubmissionSuccess from "./components/Submission/page";
import AssessmentResults from "./components/AssessmentResults/page";
import QuizQuestion from "./components/QuizQuestions/page";

 
export default function Home() {
  return (
    <main >
    <Sidebar/>

  <SignupPage/>
  <Login/>
  <QuizPage/>
  <Module/>
  <SubmissionSuccess/>
  <AssessmentResults/>
 
 
      
    </main>
  );
}


