import { useState } from 'react';
import {
	GridExperience,
	GridProjects,
	Header,
	ModalProject,
	Navigation,
} from './components';
import type { Project } from './types';

function App() {
	const [tabActiveIndex, setTabActiveIndex] = useState<number>(1);
	const [selectedProject, setSelectedProject] =
		useState<Project | null>(null);

	return (
		<div className='bg-slate-50 min-h-screen'>
			<main className='container py-10'>
				<Header />
				<Navigation
					tabActiveIndex={tabActiveIndex}
					setTabActiveIndex={setTabActiveIndex}
				/>

				{/* <GridProjects setSelectedProject={setSelectedProject} /> */}

				<GridExperience />

				{selectedProject && (
					<ModalProject
						selectedProject={selectedProject}
						setSelectedProject={setSelectedProject}
					/>
				)}
			</main>
		</div>
	);
}

export default App;
