import React from 'react'

class SearchHistory extends Component {


  render() {
    // const [counter, setCounter] = useState(0)

    return (
      <div>


        <section id="search" class="py-4 mb-4 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-6 ml-auto">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search Diagnosis...">
                    <div class="input-group-append">
                      <button class="btn btn-primary">Search</button>
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


export default SearchHistory;