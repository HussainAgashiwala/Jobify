import React from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppContext } from "../../context/appContext";
import { FormRow, Alert, FormRowSelect } from "../../components";

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    handleChange,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    status,
    statusOptions,
    clearValues,
    createJob,
    editJob
  } = useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob()
      return;
    }
    createJob();
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* Position */}
          <FormRow
            type="text"
            value={position}
            name="position"
            handleChange={handleJobInput}
          />
          {/* Company */}
          <FormRow
            type="text"
            value={company}
            name="company"
            handleChange={handleJobInput}
          />
          {/* Location */}
          <FormRow
            type="text"
            value={jobLocation}
            name="jobLocation"
            labelText="job location"
            handleChange={handleJobInput}
          />
          {/* Status */}
          <FormRowSelect
            handleChange={handleJobInput}
            name="status"
            value={status}
            list={statusOptions}
          />
          {/* Job Type */}
          <FormRowSelect
            handleChange={handleJobInput}
            name="jobType"
            labelText="job type"
            value={jobType}
            list={jobTypeOptions}
          />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
