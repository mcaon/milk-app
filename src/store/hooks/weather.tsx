import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../reducers/weather';

export const useWeatherSetForecast = () => {
  const dispatch = useDispatch();
  return useCallback(
      () => {
        dispatch(
            Creators.forecastRequest(),
        );
      },
      [dispatch],
  );
};

export const useWeatherSetLatitude = () => {
    const dispatch = useDispatch();
    return useCallback(
        (latitude) => {
            dispatch(
                Creators.setLatitude(latitude),
            );
        },
        [dispatch],
    );
};

export const useWeatherSetLongitude = () => {
    const dispatch = useDispatch();
    return useCallback(
        (longitude) => {
            dispatch(
                Creators.setLongitude(longitude),
            );
        },
        [dispatch],
    );
};

export const useWeatherSetLastUpdate = () => {
    const dispatch = useDispatch();
    return useCallback(
        (lastUpdate) => {
            dispatch(
                Creators.setLastUpdate(lastUpdate),
            );
        },
        [dispatch],
    );
};

export const useWeatherForecast = () => {
  return useSelector((state: any) => state.weather.forecast);
};

export const useWeatherLatitude = () => {
    return useSelector((state: any) => state.weather.latitude);
};

export const useWeatherLongitude = () => {
    return useSelector((state: any) => state.weather.longitude);
};

export const useWeatherLastUpdate = () => {
    return useSelector((state: any) => state.weather.lastUpdate);
};
