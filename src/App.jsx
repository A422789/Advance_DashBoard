import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bar from './Components/Bar.jsx'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { getDesignTokens } from './Components/Theme.jsx'
import useLocalStorage from './Components/useLocalStorage.jsx'
import { Route, Routes } from 'react-router-dom'
import  Dashboard  from './Components/Pages/Dashboard.jsx'
import  ManageTeam  from './Components/Pages/ManageTeam.jsx'
import  BarChart  from './Components/Pages/BarChart.jsx'
import  Calendar  from './Components/Pages/Calendar.jsx'
import  ContactsInformation  from './Components/Pages/ContactsInformation.jsx'
import  FAQ  from './Components/Pages/FAQ.jsx'
import  GeographyChart  from './Components/Pages/GeographyChart.jsx'
import  InvoicesBalances  from './Components/Pages/InvoicesBalances.jsx'
import  LineChart  from './Components/Pages/LineChart.jsx'
import  PieChart  from './Components/Pages/PieChart.jsx'
import  ProfileForm  from './Components/Pages/ProfileForm.jsx'
function App() {
  const[mode,setMode]=useLocalStorage('light');
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <>
    <ThemeProvider theme={theme}>
    <Bar setMode={setMode}/>
   
    

  <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route index element={<Dashboard/>}/>
      <Route path='/team' element={<ManageTeam theme={theme}/>}/>
       <Route path='/contacts' element={<ContactsInformation theme={theme}/>}/>
       <Route path='/invoices' element={<InvoicesBalances theme={theme}/>}/>
       <Route path='/form' element={<ProfileForm theme={theme} />}/>
       <Route path='/calendar' element={<Calendar/>}/>
       <Route path='/faq' element={<FAQ/>}/>
       <Route path='/bar' element={<BarChart/>}/>
       <Route path='/pie' element={<PieChart/>}/>
       <Route path='/line' element={<LineChart/>}/>
       <Route path='/geography' element={<GeographyChart/>}/>
      
 </Routes>
  </ThemeProvider>
    </>
  )
}

export default App
