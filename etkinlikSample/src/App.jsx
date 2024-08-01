import { Route, Routes } from 'react-router-dom'
import ActivityDetail from './pages/ActivityDetail'
import CategoriesPage from './pages/CategoriesPage'
import HomePage from './pages/HomePage'
import DashboardLayout from './Layout/DashboardLayout'
import KonserPage from './pages/KonserPage'


function App() {
  return <>
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<CategoriesPage />} />
        <Route path="/activity/:etkinlikId" element={<ActivityDetail />} />
        <Route path="/muzık" element={<KonserPage />} />
      </Routes>
    </DashboardLayout>
  </>

}

export default App