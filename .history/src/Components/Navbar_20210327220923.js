import React from 'react'

const Navbar = (props) => {
  return (
    // <nav className="navbar navbar-expand-sm navbar-light bg-light">
    //   <div className="container">
    //     <a className="navbar-brand" href="#">Logo</a>
    //     <ul className="navbar-nav">
    //     <li className="nav-item">
    //       <a className="nav-link" href="#">Home</a>
    //     </li>

    //     </ul>
    //   </div>
    // </nav>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-0">
      <div class="container">
        <a href="index.html" class="navbar-brand">🈚Diagnostica</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto ">
            <li class="nav-item px-2">
              <a href="index.html" class="nav-link active">Dashboard</a>
            </li>

            <li class="nav-item dropdown mr-3 px-2">
              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                <i class="fas fa-user"></i> Welcome User
                        </a>
              <div class="dropdown-menu">
                <a href="profile.html" class="dropdown-item">
                  <i class="fas fa-user-circle"></i> Profile
                            </a>
                <a href="settings.html" class="dropdown-item">
                  <i class="fas fa-cog"></i> Settings
                            </a>

              </div>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );

}

export default Navbar;