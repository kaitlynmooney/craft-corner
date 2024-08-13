import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";
import { QUERY_SINGLE_PROJECT } from "../utils/queries";
import { ADD_PROJECT } from "../utils/mutations";

const AddButton = ({ projectId }) => {
  const { userId } = useParams();
  const [addProject] = useMutation(ADD_PROJECT);
  console.log("projectIdButton", projectId);

  const {
    loading,
    error,
    data: userData,
  } = useQuery(QUERY_ME, {
    variables: { userId },
  });

  const { data: projectData } = useQuery(QUERY_SINGLE_PROJECT, {
    variables: {
      _id: projectId,
    },
  });

  const user = userData?.me || {};
  console.log("projectData", projectData);
  const project = projectData?.project || {};
  console.log("project", project);

  console.log(user);

  //   let ongoingProj = user?.ongoingProjects.map((ongoingProjects) => ({
  //     ...ongoingProjects,
  //     selected: false,
  //   }));
  //   const projectLength = ongoingProj.length

  const handleAddClick = async (event) => {
    try {
      const { data } = await addProject({
        variables: { projectId, userId: user._id },
      });
      console.log("ongoingProjects", data.addProject.ongoingProjects);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user);

  if (loading) {
    return <div className="loading-spinner"></div>;
  }

  if (error) return <div className="error-message">Error: {error.message}</div>;

  return (
    <div>
      <button
        onClick={handleAddClick}
        type="button"
        className="btn btn-primary position-relative"
      >
        Add To Ongoing Projects!
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {/* {projectLength} */}
          <span className="visually-hidden">number of ongoingprojects</span>
        </span>
      </button>
    </div>
  );
};

export default AddButton;
