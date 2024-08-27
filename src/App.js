import { useState } from 'react';
import NewProject from './components/NewProject';
import SideBar from './components/SideBar';
import NoSelectedProject from './components/NoSelectedProject';

function App() {
   const [projectsState, setProjectsState] = useState({
      selectedProjectId: undefined,
      projects: [],
   });

   function handleStartNewProject() {
      setProjectsState((prevState) => {
         return { ...prevState, selectedProjectId: null };
      });
   }

   function handleAddProject(projectData, e) {
      setProjectsState((prevState) => {
         const newProject = { ...projectData, id: Math.random() };
         return { ...prevState, projects: [...prevState.projects, newProject] };
      });
   }

   console.log(projectsState);

   //  function handleCancelAddProject() {
   //     setProjectsState((prevState) => {
   //        return { ...prevState, selectedProjectId: null };
   //     });
   //  }

   let content;
   if (projectsState.selectedProjectId === undefined) {
      content = <NoSelectedProject handleAddProject={handleStartNewProject} />;
   } else if (projectsState.selectedProjectId === null) {
      content = (
         <NewProject
            handleStartNewProject={handleStartNewProject}
            handleAddProject={handleAddProject}
         />
      );
   }

   return (
      <main
         style={{
            height: '100vh',
            marginTop: '2rem',
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'row',
         }}
      >
         <SideBar
            handleAddProject={handleStartNewProject}
            projects={projectsState.projects}
         />
         {content}
      </main>
   );
}

export default App;
