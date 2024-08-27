import { useState } from 'react';
import NewProject from './components/NewProject';
import SideBar from './components/SideBar';
import NoSelectedProject from './components/NoSelectedProject';

function App() {
   const [addProject, setAddProject] = useState(false);

   function handleAddProject() {
      setAddProject(!addProject);
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
         <SideBar handleAddProject={handleAddProject} />
         {addProject && <NewProject handleAddProject={handleAddProject} />}
         {!addProject && (
            <NoSelectedProject handleAddProject={handleAddProject} />
         )}
      </main>
   );
}

export default App;
