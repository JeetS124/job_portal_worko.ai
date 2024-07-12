import image from "../assets/laptop.jpg";

const JobCard = ({ company, desc }) => {
  return (
    <>
      <div className="mx-auto">
        <div
          className="mb-3 m-2 bg-light-blue p-2 rounded-2"
          style={{ maxWidth: "420px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={image}
                className="img-fluid rounded-start h-100 w-100"
                alt="..."
              />
            </div>
            <div className="col-md-8 bg-light-gray p-2 rounded-end">
              <div className="card-body">
                <h6 className="card-title">{company}</h6>
                <p className="card-text small">{desc}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
