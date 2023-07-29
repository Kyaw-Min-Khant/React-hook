import React from 'react'

const Secondesection = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col">
          <h1 className="fw-bold display-3 title mb-4 text-center">
            Kripset
            <div className="border-bottom border-5 pt-2 border-secondary mx-auto w-25"></div>
          </h1>
          <h4 className="text-center">
            SEATING IS ON A FIRST COME, FIRST SERVED BASIS. RESERVATIONS{" "}
            <span className="text-primary fw-bold">ARE NOT ACCEPTED.</span>
          </h4>
          <p className="py-3 text-center fw-bold">
            Monday - Wednesday: <span className="text-primary">6pm - 1am</span>
          </p>
          <p className="pb-3 text-center  fw-bold">
            Thursday - Sunday:{" "}
            <span className="text-primary"> 5:30pm - 1am</span>
          </p>
          <p className="pb-3 text-center text-black-50">
            We can accommodate parties of up to{" "}
            <span className="text-primary"> 8 people</span>.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Secondesection
