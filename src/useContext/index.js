import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import ThemeProvider from './appContext'


let index = () => {
  return (
    <ThemeProvider>
      <div>
        <Sidebar />
        <Content />
      </div>
    </ThemeProvider>
  )
}

export default index
