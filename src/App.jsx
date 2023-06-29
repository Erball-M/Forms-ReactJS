import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout, FinalModal } from './components/components'
import { MainPage, StepPage } from './pages/Pages'

function App() {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path='/step/:id' element={<StepPage />} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
      <FinalModal />
    </>
  )
}

export default App
