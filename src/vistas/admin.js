

export const admin = {
    template:`
    <div class="col-12 background-radial-gradient vh-100 d-flex justify-content-center align-items-center">
    <table class="table align-middle mb-0 bg-light ">
    <thead class="bg-light  ">
      <tr>
        <th>Name</th>
        <th>Title</th>
        <th>Status</th>
        <th>Position</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody class="">
      <tr>
        <td>
          <div class="d-flex align-items-center ">
            <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style="width: 45px; height: 45px"
                class="rounded-circle"
                />
            <div class="ms-3">
              <p class="fw-bold mb-1">John Doe</p>
              <p class=" mb-0">john.doe@gmail.com</p>
            </div>
          </div>
        </td>
        <td>
          <p class="fw-normal mb-1">Software engineer</p>
          <p class=" mb-0">IT department</p>
        </td>
        <td>
          <span class="badge badge-success rounded-pill d-inline text-dark">Active</span>
        </td>
        <td>Senior</td>
        <td>
          <button type="button" class="btn fw-bold btn-sm btn-rounded botones">
            Edit
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <img
                src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                class="rounded-circle"
                alt=""
                style="width: 45px; height: 45px"
                />
            <div class="ms-3">
              <p class="fw-bold mb-1">Alex Ray</p>
              <p class=" mb-0">alex.ray@gmail.com</p>
            </div>
          </div>
        </td>
        <td>
          <p class="fw-normal mb-1">Consultant</p>
          <p class=" mb-0">Finance</p>
        </td>
        <td>
          <span class="badge badge-primary rounded-pill d-inline text-dark"
                >Onboarding</span
            >
        </td>
        <td>Junior</td>
        <td>
          <button
                  type="button"
                  class="btn btn-rounded btn-sm fw-bold botones"
                  data-mdb-ripple-color="dark"
                  >
            Edit
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <img
                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                class="rounded-circle"
                alt=""
                style="width: 45px; height: 45px"
                />
            <div class="ms-3">
              <p class="fw-bold mb-1">Kate Hunington</p>
              <p class=" mb-0">kate.hunington@gmail.com</p>
            </div>
          </div>
        </td>
        <td>
          <p class="fw-normal mb-1">Designer</p>
          <p class=" mb-0">UI/UX</p>
        </td>
        <td>
          <span class="badge badge-warning rounded-pill d-inline text-dark">Awaiting</span>
        </td>
        <td>Senior</td>
        <td>
          <button
                  type="button"
                  class="btn btn-rounded btn-sm fw-bold botones"
                  data-mdb-ripple-color="grey"
                  >
            Edit
          </button>
        </td>
      </tr>
    </tbody>
  </table>
    </div>
`
}