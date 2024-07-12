import React, { useState } from "react";
import heroImg from "../../assets/h1_hero.jpg";
import JobCard from "../../components/JobCard";
import companies_data from "../../data/data.js";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [industryType, setIndustryType] = useState("");

  const handleSearch = () => {
    const filteredJobs = companies_data.filter((job) => {
      const companyName = job.company ? job.company.toLowerCase() : "";
      const searchLowerCase = searchQuery.toLowerCase();

      return companyName.includes(searchLowerCase);
    });
    console.log(filteredJobs);
  };

  return (
    <>
      <div>
        <img className="position-relative h-auto w-100" src={heroImg} alt="" />
        <div className="container">
          <div className="position-absolute col-lg-6 top-40 z-3 px-3 px-20">
            <h1 className="fs-20 fw-bold">Welcome to Worko.ai</h1>
            <p className="lead">
              A platform to connect job seekers with employers, offering a
              seamless experience.
            </p>
            <div className="input-group input-group-lg mb-3 py-5">
              <input
                type="text"
                className="form-control"
                aria-label="Search by company name"
                placeholder="Search by company name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                className="form-select"
                aria-label="Select Industry Type"
                value={industryType}
                onChange={(e) => setIndustryType(e.target.value)}
              >
                <option value="">Select Industry Type</option>
                <option value="Software developer">Software developer</option>
                <option value="Python Developer">Python Developer</option>
                <option value="Java Developer">Java Developer</option>
                <option value="QA Testing">QA Testing</option>
                <option value="ROR Developer">ROR Developer</option>
                <option value="DB Administrator">DB Administrator</option>
                <option value="Data Analyst">Data Analyst</option>
              </select>
              <button
                className="btn btn-danger"
                type="button"
                onClick={handleSearch}
              >
                Get Referral
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render Job Cards */}
      <div className="container">
        <div className="row">
          {companies_data.map((job, index) => (
            <div key={index} className="col-md-4">
              <JobCard company={job.company_name} desc={job.desc} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
