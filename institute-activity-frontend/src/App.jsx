import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/components/Home"; 
import ChooseUser from "../src/components/ChooseUser";
import AdminSignIn from "../src/components/AdminSignin";
import StudentSignIn from "../src/components/StudentSignin";
import TeacherSignIn from "../src/components/TeacherSignin";

//imports of all dashboards Section
import AdminDashboard from "./pages/Admin/Dashboard";
import StudentDashboard from './pages/Students/Dashboard';
import TeacherDashboard from "./pages/Teachers/Dashboard";

//imports of Admin Sections
import Classes from './pages/Admin/Classes';
import Exam from './pages/Admin/Exam';
import SettingsProfile from './pages/Admin/SettingsProfile';
import Teachers from './pages/Admin/Teachers';
import Students from './pages/Admin/Students';
import EventCalender from './pages/Admin/EventCalendar';
import Announcement from './pages/Admin/Announcement';
import Library from './pages/Admin/Library';
import Assignment from './pages/Admin/Assignment';
import Performance from './pages/Admin/Performance';
import Attendence from './pages/Admin/Attendence';



// imports of Student sections
import StudentAssignment from './pages/Students/Assignment';
import ExamSection from './pages/Students/Exam';
import PerformanceSection from './pages/Students/Performance';
import AttendenceSection from './pages/Students/Attendence';
import LibrarySection from './pages/Students/Library';
import AnnouncementSection from './pages/Students/Announcement';
import ProfileSection from './pages/Students/Profile';

//imports of Teacher Sections
import CheckClassSection from "./pages/Teachers/Classes";
import CheckAssignmentSection from "./pages/Teachers/Assignment";
import CheckAnnouncementSection from "./pages/Teachers/Announcement";
import CheckAttendenceSection from "./pages/Teachers/Attendence";
import CheckExamSection from "./pages/Teachers/Exam";
import CheckPerformanceSection from "./pages/Teachers/Performance";
import EventSection from "./pages/Teachers/Events"; 
import StudentSection from "./pages/Teachers/Students";
import TeacherSection from "./pages/Teachers/Teachers.jsx";
import TeacherProfileSection from "./pages/Teachers/Profile";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/choose-user' element={ <ChooseUser /> } />
        
         {/* All the sign-in pages routes */}
        <Route exact path='/admin-signIn' element={ <AdminSignIn /> } />
        <Route exact path='/student-signIn' element={ <StudentSignIn /> } />
        <Route exact path='/teacher-signIn' element={ <TeacherSignIn /> } />
        
        {/* All the dashboard routes*/}
        <Route exact path='/admin/dashboard' element={<AdminDashboard />} />
        <Route exact path='/student/dashboard' element={<StudentDashboard />} />
        <Route exact path="/teacher/dashboard"  element={<TeacherDashboard />} />



        {/* Admin section here */}
        <Route exact path='/admin/classes' element={<Classes /> } />
        <Route exact path="/admin/exams" element={<Exam />} />
        <Route exact path='/admin/attendence' element={ <Attendence /> } />
        <Route exact path='/admin/performance' element={ <Performance /> } />
        <Route exact path='/admin/teachers' element={ <Teachers /> } />
        <Route exact path='/admin/students' element={ <Students /> } />
        <Route exact path='/admin/assignments' element={ <Assignment /> } />
        <Route exact path='/admin/library' element={ <Library /> } />
        <Route exact path='/admin/communication' element={ <Announcement /> } />
        <Route exact path='/admin/events' element={ <EventCalender /> } />
        <Route exact path='/admin/settings' element={ <SettingsProfile /> } />


        {/* Student Section */}
        <Route exact path="/student/exams" element={<ExamSection />} />
        <Route exact path='/student/attendence' element={ <AttendenceSection /> } />
        <Route exact path='/student/performance' element={ <PerformanceSection /> } />
        <Route exact path='/student/assignments' element={ <StudentAssignment /> } />
        <Route exact path='/student/library' element={ <LibrarySection /> } />
        <Route exact path='/student/communication' element={ <AnnouncementSection /> } />
        <Route exact path='/student/settings' element={ <ProfileSection /> } />

        {/* Teacher Section */}
        <Route exact path='/teacher/classes' element={<CheckClassSection /> } />
        <Route exact path="/teacher/exams" element={<CheckExamSection />} />
        <Route exact path='/teacher/attendence' element={ <CheckAttendenceSection /> } />
        <Route exact path='/teacher/performance' element={ <CheckPerformanceSection /> } />
        <Route exact path='/teacher/teachers' element={ <TeacherSection /> } />
        <Route exact path='/teacher/students' element={ <StudentSection /> } />
        <Route exact path='/teacher/assignments' element={ <CheckAssignmentSection /> } />
        <Route exact path='/teacher/communication' element={ <CheckAnnouncementSection /> } />
        <Route exact path='/teacher/events' element={ <EventSection /> } />
        <Route exact path='/teacher/settings' element={ <TeacherProfileSection /> } />



      </Routes>
    </Router>
  )
}

export default App
