import React from 'react'

const Footer = (props) => {
  return (
    <footer id="main-footer" class="bg-dark text-white mt-5 p-0">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="lead text-center">
              Copyright &copy;
                        <span id="year"></span> Diagnostica
                    </p>
          </div>
        </div>
      </div>
    </footer>
  );

}

export default Footer;