import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';

// Hook to use the selector and dispatch with types
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()