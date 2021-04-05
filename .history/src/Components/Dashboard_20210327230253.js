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
                    <button className="btn btn-primary">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="searchHistory" className="pt-0 mt-3 ">
          <div className="container ">
            <div className="row">
              <div className="col">
                <div className="card  ">
                  <div className="card-header">
                    <h4>Diagnosis History</h4>
                  </div>
                  <table className="table table-striped">
                    <thead className="thead-dark ">
                      <tr>
                        <th>#</th>
                        <th>The Diagnosis </th>
                        <th>Category</th>
                        <th>Date</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Heart Attack</td>
                        <td>Heart diseases</td>
                        <td>May 10 2018</td>
                        <td>
                          <a href="details.html" className="btn btn-secondary">
                            <i className="fas fa-angle-double-right"></i> Details
                                        </a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Heart Attack</td>
                        <td>Heart diseases</td>
                        <td>May 11 2018</td>
                        <td>
                          <a href="details.html" className="btn btn-secondary">
                            <i className="fas fa-angle-double-right"></i> Details
                                        </a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Heart Attack</td>
                        <td>Heart diseases</td>
                        <td>May 13 2018</td>
                        <td>
                          <a href="details.html" className="btn btn-secondary">
                            <i className="fas fa-angle-double-right"></i> Details
                                        </a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Heart Attack</td>
                        <td>Heart diseases</td>
                        <td>May 15 2018</td>
                        <td>
                          <a href="details.html" className="btn btn-secondary">
                            <i className="fas fa-angle-double-right"></i> Details
                                        </a>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Heart Attack</td>
                        <td>Heart diseases</td>
                        <td>May 17 2018</td>
                        <td>
                          <a href="details.html" className="btn btn-secondary">
                            <i className="fas fa-angle-double-right"></i> Details
                                        </a>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Heart Attack</td>
                        <td>Heart diseases</td>
                        <td>May 20 2018</td>
                        <td>
                          <a href="details.html" className="btn btn-secondary">
                            <i className="fas fa-angle-double-right"></i> Details
                                        </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav className="ml-4">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <a href="#" className="page-link">Previous</a>
                      </li>
                      <li className="page-item active">
                        <a href="#" className="page-link">1</a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">2</a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">3</a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">Next</a>
                      </li>
                    </ul>
                  </nav>
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

