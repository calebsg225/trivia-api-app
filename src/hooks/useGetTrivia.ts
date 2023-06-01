import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

const useGetTrivia = (triviaUrl: string) => {
  const { data: triviaData, isLoading: isTriviaLoading, refetch } = useQuery(['triviaQuestions'], async () => {
    console.log(triviaUrl);
    console.log('fetching...')
    return Axios.get(triviaUrl).then((res) => res.data);
  });

  const refetchTrivia = () => {
    refetch();
  }

  return { triviaData, isTriviaLoading, refetchTrivia };
}

export default useGetTrivia;