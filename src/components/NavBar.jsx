import Logo from'./Logo'
// const NavBar = ({movies}) => {

//   return (
//     <nav className="nav-bar">
//         <Logo />
//         <Search />
//         <NumResult movies={movies} />
//       </nav>
//   )
// }

const NavBar = ({children}) => {
  return (
    <nav className='nav-bar'>
      <Logo />
      {children}
    </nav>
  )
}

export default NavBar
