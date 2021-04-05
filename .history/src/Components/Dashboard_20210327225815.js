import React from 'react'
import { Component } from 'react'
import SearchHistory from './Components/SearchHistory';

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
        <SearchHistory />
        <section id="searchHistory" className="pt-0 mt-3 ">
          <div class="container ">
            <div class="row">
              <div class="col">
                <div class="card  ">
                  <div class="card-header">
                    <h4>Diagnosis History</h4>
                  </div>
                  <table class="table table-striped">
                    <thead class="thead-dark ">
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
                          <a href="details.html" class="btn btn-secondary">
                            <i class="fas fa-angle-double-right"></i> Details
                                        </a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Heart Attack</td>
                        <td>Heart diseases</td>
                        <td>May 11 2018</td>
                        <td>
                          <a href="details.html" class="btn btn-secondary">
                            <i class="fas fa-angle-double-right"></i> Details
                                        </a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Heart Attack</td>
                        <td>Heart diseases</td>
                        <td>May 13 2018</td>
                        <td>
                          <a href="details.html" class="btn btn-secondary">
                            <i class="fas fa-angle-double-right"></i> Details
                                        </a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Heart Attack</td>
                        <td>Heart diseases</td>
                        <td>May 15 2018</td>
                        <td>
                          <a href="details.html" class="btn btn-secondary">
                            <i class="fas fa-angle-double-right"></i> Details
                                        </a>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Heart Attack</td>
                        <td>Heart diseases</td>
                        <td>May 17 2018</td>
                        <td>
                          <a href="details.html" class="btn btn-secondary">
                            <i class="fas fa-angle-double-right"></i> Details
                                        </a>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Heart Attack</td>
                        <td>Heart diseases</td>
                        <td>May 20 2018</td>
                        <td>
                          <a href="details.html" class="btn btn-secondary">
                            <i class="fas fa-angle-double-right"></i> Details
                                        </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav class="ml-4">
                    <ul class="pagination justify-content-center">
                      <li class="page-item disabled">
                        <a href="#" class="page-link">Previous</a>
                      </li>
                      <li class="page-item active">
                        <a href="#" class="page-link">1</a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">2</a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">3</a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">Next</a>
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

