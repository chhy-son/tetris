import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store.tsx";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
