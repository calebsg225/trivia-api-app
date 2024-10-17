import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import { TriviaAPIData } from '../data/types';

const useGetTrivia = (triviaUrl: string): { 
  triviaData: TriviaAPIData, 
  isTriviaLoading: boolean,
  refetchTrivia: () => void
} => {
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