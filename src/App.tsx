import { useState } from 'react';
import { Header, Navigation } from './components';

function App() {
	const [tabActiveIndex, setTabActiveIndex] = useState<number>(1);

	return (
		<div className='bg-slate-50 min-h-screen'>
			<main className='container py-10'>
				<Header />
				<Navigation
					tabActiveIndex={tabActiveIndex}
					setTabActiveIndex={setTabActiveIndex}
				/>
			</main>
		</div>
	);
}

export default App;
