import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../reducers/user';

export const useUserSetConnected = () => {
  const dispatch = useDispatch();
  return useCallback(
      (connected) => {
        dispatch(
            Creators.setConnected(connected),
        );
      },
      [dispatch],
  );
};

export const useUserConnected = () => {
  return useSelector((state: any) => state.user.connected);
};


