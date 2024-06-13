import { useParams, useLoaderData } from "react-router-dom";

// function JobPage() {
//   const { id } = useParams();
//   const job = useLoaderData();

//   return <h1>{job.title}</h1>;
// }



function JobPage() {
  const { id } = useParams();
  const job = useLoaderData();

  if (!job) {
    return <div>Job not found</div>;
  }

  return <h1>{job.title}</h1>;
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export { JobPage as default, jobLoader };
