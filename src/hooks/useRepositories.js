import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES);

    if(loading) return "Loading..."
       if(error) return(error)
       return (data)
};

export default useRepositories;

//   const fetchRepositories = async () => {
//     setLoading(true);

//     // Replace the IP address part with your own IP address!
//     const response = await fetch('http://192.168.43.172:5000/api/repositories');
//     const json = await response.json();
//     setLoading(false);
//     setRepositories(json);
//   };
//   console.log('this is the data from the server',data)