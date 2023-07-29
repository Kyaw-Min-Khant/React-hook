import React from 'react'

function Footer() {
  return (
    <footer className=" container-fluid  bg-primary">
      <div className=" container text-white">
        <h3 className="pt-2">Menu</h3>
        <div className="row border-bottom pb-3">
          <div className="col-md-4 col-8">
            <div className="row justify-content-between">
              <div className="col-md-6 col-10">
                <h6 className="text-white">Address</h6>
                <p className="text-white-50 small">
                  271 Bagaya St, Yangon 11111, <br />
                  Myanmar (Burma)
                </p>
              </div>
            </div>
          </div>
          <div className="col-8 col-sm-4">
            <h6 className="text-white">Contact</h6>
            <p className="text-white-50 small">
              +987654321 <br />
              Menu@email.com
            </p>
          </div>
          <div className="col-8 col-sm-4">
            <h6 className="text-white">Office</h6>
            <p className="text-white-50 small">
              Monday - Saturday <br />
              9AM - 10PM
            </p>
          </div>
        </div>
        <div className="row py-5 justify-content-between">
          <div className="col-8 col-sm-6">
            <div className="d-flex">
              <i className="ri-facebook-circle-fill text-light fs-4 me-4"></i>
              <i className="ri-instagram-line text-light fs-4 me-4"></i>
              <i className="ri-twitter-line text-light fs-4 me-4"></i>
            </div>
          </div>
          <div className="col-8 col-sm-6 text-light">
            &#169;Kyaw Min Khant. All rigths reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
