import React from 'react'
import { Component } from 'react'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      TheDiagnosis: '',
      Category: '',
      Date: ''
    };
  }

  render() {
    return (
      <div>
        <section id="search" class="py-4 mb-4 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ml-auto">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search Diagnosis..." />
                  <div className="input-group-append">
                    <button className="btn-primary ">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



      </div>

    );
  }
}

export default Dashboard;

