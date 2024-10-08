import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Route, BrowserRouter, Routes, Outlet, useLocation, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Register from './pages/Register';
import NotPage from './pages/Notpage';
import About from './pages/About';
import { AuthProvider, useAuth } from './AuthProvider';
import Login from './pages/Logins';
import Account from './pages/Account';
import MyBlog from './pages/MyBlogs';
import AddBlog from './pages/AddBlog';
import EditBlog from './pages/EditBlog';
const ProtectedRoute = ({ children }) => {

  const { user } = useAuth();
 
  const location = useLocation();
 
 
 
  if (!user) {
 
   return <Navigate to="/login" state={{ from: location }} replace />;
 
  }
 
  return children;
 
 };

const LayoutAdmin = () => {
  
  return (
    <ProtectedRoute>
     <div className="flex">
     <Sidebar />
     <div className="flex-1">
      <Header />
      <div className="m-6 p-10 bg-gray-50 min-h-screen rounded-lg">
       <Outlet /> 
      </div>
     </div>
    </div>
    </ProtectedRoute>
   );
 }
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    
      <Routes>
        <Route element={<LayoutAdmin />} >
          <Route path='/' element={<Dashboard />} />
          <Route path='/user' element={<Users />} />
          <Route path='/account' element={<Account />} />
          <Route path='/about' element={<About />} />
          <Route path='/myblog' element={<MyBlog />} />
          <Route path='/new-post' element={<AddBlog />} />
          <Route path='/edit-post/:id' element={<EditBlog />} />
        </Route>
        <Route path='*' element={<NotPage/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
     </BrowserRouter>
     </AuthProvider>

     
  );
}
    
export default App;