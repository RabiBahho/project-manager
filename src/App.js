import { useState } from 'react';
import NewProject from './components/NewProject';
import SideBar from './components/SideBar';
import NoSelectedProject from './components/NoSelectedProject';
import SelectedProject from './components/SelectedProject';
import { useMediaQuery } from '@mui/material';

function App() {
   const [projectsState, setProjectsState] = useState({
      selectedProjectId: undefined,
      projects: [],
      tasks: [],
   });

   function handleStartNewProject() {
      setProjectsState((prevState) => {
         return { ...prevState, selectedProjectId: null };
      });
   }

   function handleAddProject(projectData, e) {
      setProjectsState((prevState) => {
         const newProject = { ...projectData, id: Math.random() };
         return {
            ...prevState,
            selectedProjectId: undefined,
            projects: [...prevState.projects, newProject],
         };
      });
   }

   function handleCancel() {
      setProjectsState((prevState) => {
         return { ...prevState, selectedProjectId: undefined };
      });
   }

   function handleSelectProject(id) {
      setProjectsState((prevState) => {
         return { ...prevState, selectedProjectId: id };
      });
   }
   const selectedProject = projectsState.projects.find(
      (project) => project.id === projectsState.selectedProjectId
   );
   const tasks = projectsState.tasks.filter(
      (task) => task.projectId === projectsState.selectedProjectId
   );
   function handleDeleteProject(id) {
      setProjectsState((prevState) => {
         return {
            ...prevState,
            projects: prevState.projects.filter((project) => project.id !== id),
            selectedProjectId: undefined,
         };
      });
   }

   function handleAddTask(text) {
      setProjectsState((prevState) => {
         const taskId = Math.random();
         const newTask = {
            text: text,
            projectId: prevState.selectedProjectId,
            id: taskId,
         };
         return {
            ...prevState,

            tasks: [newTask, ...prevState.tasks],
         };
      });
   }
   function handleClearTask(id) {
      setProjectsState((prevState) => {
         const oldTasks = prevState.tasks.filter((task) => task.id !== id);
         return {
            ...prevState,

            tasks: [...oldTasks],
         };
      });
   }
   let content = (
      <SelectedProject
         selectedProject={selectedProject}
         handleDeleteProject={handleDeleteProject}
         handleAddTask={handleAddTask}
         tasks={tasks}
         handleClearTask={handleClearTask}
      />
   );
   if (projectsState.selectedProjectId === undefined) {
      content = <NoSelectedProject handleAddProject={handleStartNewProject} />;
   } else if (projectsState.selectedProjectId === null) {
      content = (
         <NewProject
            handleStartNewProject={handleStartNewProject}
            handleAddProject={handleAddProject}
            handleCancel={handleCancel}
         />
      );
   }
   const md = useMediaQuery('(min-width: 768px)');

   return (
      // Define the variable 'md' with a boolean value
      <main
         style={{
            height: '100vh',
            marginTop: '2rem',
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: md ? 'row' : 'column', // Use the defined 'md' variable in the ternary operator
         }}
      >
         <SideBar
            handleAddProject={handleStartNewProject}
            projects={projectsState.projects}
            handleSelectProject={handleSelectProject}
            selectedProjectId={projectsState.selectedProjectId}
         />
         {content}
      </main>
   );
}

export default App;
