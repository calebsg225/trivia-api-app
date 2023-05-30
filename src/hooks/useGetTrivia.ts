import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

const useGetTrivia = (url: string) => {
  const { data: triviaData, isLoading: isTriviaLoading, refetch } = useQuery(['trivia'], async () => {
    await Axios.get(url).then((res) => res.data);
  });

  const refetchTrivia = () => {
    refetch();
  }

  return { triviaData, isTriviaLoading, refetchTrivia };
}

export default useGetTrivia;